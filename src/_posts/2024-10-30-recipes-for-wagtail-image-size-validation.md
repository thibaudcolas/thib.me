---
layout: post
title: "Wagtail recipes for image size validation"
date: 2024-10-30 21:18:03 +0000
comments: true
categories: [Wagtail, Images, Django]
---

Looking for good examples of validating images in Wagtail are of a requisite size. Min/max dimensions, pixel density for example.

<!-- more -->

_This is a copy of a [GitHub Discussions thread](https://github.com/wagtail/wagtail/discussions/12504) for future reference._

## A common workflow

Here’s my way of illustrating a common image size management workflow in Wagtail – but it has the flaw that there’s no guarantee the uploaded images are _big enough_:

1. Content editors upload source images, sometimes intended for reuse across multiple formats.
2. Content editors define the image’s focal area, which must be preserved as part of any image manipulation.
3. Developers pick the appropriate [image resizing method](https://docs.wagtail.org/en/stable/topics/images.html#available-resizing-methods) per instance where an image is used in content, including target image dimensions (reflecting desired aspect ratio and pixel density).
4. Upon the first request for an image at specific dimensions, Wagtail generates a new image rendition of the expected size. In subsequent requests, the same rendition is reused.

## What’s missing

The resizing methods guarantee the displayed image will be the right aspect ratio, and can help with pixel density – but they’re still dependent on having a large enough uploaded image. The `WAGTAILIMAGES_MAX_UPLOAD_SIZE` guarantees a maximum image size project-wide, but in Wagtail we’d also need usage-specific validation of the sizes.

See for example Wagtail’s own [WagtailImageField](https://github.com/wagtail/wagtail/blob/main/wagtail/images/fields.py#L31) implementation, and this [ImageValidator gist from 6 years ago](https://gist.github.com/ag-castro/88bd803a43ed80f978453d76b4e7b890)

## Recipes

### Custom ImageField

Would allow specifying more fine-grained details about the allowed images and what we plan to do with them:

- minimum dimensions
- maybe limiting to certain collections
- maybe specifying the rendition sizes that are going to be created from it

### StreamField size validation

From this [gist StructBlock enforcing minimum size for images](https://gist.github.com/cnk/d85104c348f727b6b4f9927c7614a844). With the [StreamField validation APIs](https://docs.wagtail.org/en/stable/advanced_topics/streamfield_validation.html#streamfield-validation), this is looking very neat in the StructBlock’s `clean` method. Snippet:

```python
# If we have size restrictions, check if this image (if it exists) is big enough
if self.min_width and self.min_width and name == 'image' and val:
    if val.width < self.min_width or val.height < self.min_height:
        errors['image'] = ErrorList([
            f"Images must be at least {self.min_width} x {self.min_height}; " +
            f"this image is {val.width} x {val.height}"
        ])
```

### Field validator

> This is a field validator I've used previously. Skips svg's since those are scalable and doesn't make a lot of sense to have a minimum. In practice, the min/max thresholds are puled in from elsewhere:

```py
def check_min_pixels(value):
    min_width = 350
    min_height = 250

    image = get_image_model().objects.filter(id=value).first()

    if image and not image.is_svg() and (image.width < min_width or image.height < min_height):
        raise ValidationError(
            _(f"Image too small ({image.width} x {image.height}px). Required: {min_width} x {min_height}px.")
        )

class Something(models.Model):
    image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        related_name="+",
        on_delete=models.SET_NULL,
        validators = [check_min_pixels]
    )
```

### Alternative: filter image chooser options by size

> Doesn't stop people uploading a small image, but it does stop invalid choices being offered. I'm not a fan of offering an option then saying it's not a valid option after the fact.

```python
@hooks.register('construct_image_chooser_queryset')
def show_min_size_images_only(images, request):
    min_width = 350
    min_height = 250
    http_referrer = request.META.get('HTTP_REFERER', None) or '/'
    match = resolve(urlparse(http_referrer)[2])
    if (match.app_name == 'wagtailsnippets_yourapp_yourmodel') and (match.url_name == 'edit'):
        return images.filter(width__gte=min_width, height__gte=min_height)
    return images
```
