---
layout: post
title: "Detecting Wagtail in the wild"
date: 2020-11-18 16:15:22 +0100
comments: true
draft: true
categories: [Automation, Wagtail, Experiments]
---

How can you tell if a site is made with Wagtail or not? There are more ways than people might think at first sight, and after a few years of toying with the idea I finally put together a way to detect Wagtail sites that strikes a good balance between reliability and convenience. Let’s go birdwatching.

<!-- more -->

## Ways to detect Wagtail

I could think of a few [when I first started thinking of this problem](https://github.com/springload/madewithwagtail/issues/62):

- Determine if the site is built with Django. See https://stackoverflow.com/questions/721934/how-can-you-tell-if-a-site-has-been-made-with-django (that's a start)
- Check if the site uses a Wagtail badge (https://wagtail.io/wagtail-badges/) (not too frequently used)
- Load `/admin/login` and check for "wagtail" in the response (either in the page title, or wagtailadmin JS file – that's a 100% tell I think).

The problem with a lot of those approaches is that they rely on crawling the site, which isn’t very reliable, and can be complicated to do in batches across a lot of sites. It’s also unclear how common the signs above would be across the breadth of Wagtail sites.

The ideal approach would be HTTP response headers – which could be obtained from any pages with a lightweight HEAD request. Wagtail unfortunately doesn’t have any, so the next best thing is to inspect the pages’ markup:

- Wagtail’s (legacy) rich text uses the `rich-text` class to wrap the HTML of rich text fields
- Rich text images use hard-coded classes like [`richtext-image full-width`](https://github.com/wagtail/wagtail/blob/bb2e460c0b92fba802fc3f369730004d6b648e64/wagtail/images/formats.py#L91-L94)
- Wagtail’s documents are served from a [`/documents/`](https://github.com/wagtail/wagtail/blob/bb2e460c0b92fba802fc3f369730004d6b648e64/wagtail/documents/urls.py#L6) sub-path.
- And many more of these

The Wagtail markup that’s the most common is [image renditions](https://docs.wagtail.io/en/stable/topics/images.html?highlight=renditions#generating-image-renditions-in-python) URLs. This does mean that this detection only works on pages that contain user-uploaded images (as opposed to static images). Here are a few examples of URLs from renditions:

```txt
https://www.jazzfestival.nz/media/images/video-fallback-image_1.width-1920.png
/media/images/bevi_3_mob.original.format-png.png
/media/original_images/Social_Distancing_Dashboard_-_image_1_TU_DelftAMS_Institute.png
https://buckup-ff-stories.s3.amazonaws.com/original_images/Lockup_Logo_-_JPEG-1.png
/media/images/UE4LowPolyVehicleTh.2e16d0ba.fill-960x540-c0.jpg
```

The distinctive features are the folders – always either `images` or `original_images`, either placed directly at the root of a site, or from a `/media` subfolder at the root, or a single level up. And then the fact that all of the site’s images are placed in those two folders without any additional sub-folders, with file name suffixes following a set format for all files under `images/` like `.width-1920` or `.fill-960x450-c0` above. I came up with the particular regex used here after trying out different variations on 800'000 homepages from the [Majestic Million](https://majestic.com/reports/majestic-million) list of domains.

## The regex

Here is a simplified diagram of the logic (created with [regexper](https://regexper.com/#%5C%2F%28original_images%5C%2F%5B%5Cw-%5D%2B%5C.%7Cimages%5C%2F%5B%5Cw-.%5D%2B%5C.%28%28fill%7Cmax%7Cmin%7Cwidth%7Cheight%7Cscale%29-%5Cd%7Coriginal%29%29)):

![regexper train diagram of Wagtail regular expressions](/images/blog/detecting-wagtail-in-the-wild/regexper-diagram.svg)

## Real-world usage

It could be more complex and precise but this wouldn’t actually change much to its real-world usefulness, so I gradually simplified it to the above. With this in place, we can then create different ways to run this detection on arbitrary websites:

- The online website, [detect-wagtail.netlify.app](https://detect-wagtail.netlify.app/).
- A bookmarket, also available from [detect-wagtail.netlify.app](https://detect-wagtail.netlify.app/).
- A browser extension thanks to [Wappalyzer](https://github.com/AliasIO/wappalyzer).
- A Node CLI, also thanks to [Wappalyzer](https://github.com/AliasIO/wappalyzer).
- As an npm package for more custom needs, [detect-wagtail](https://www.npmjs.com/package/detect-wagtail)

## Real-world data

With this regex in place, I tried it out on a few lists of websites. See [detect-wagtail/docs/analysis](https://github.com/thibaudcolas/detect-wagtail/tree/main/docs/analysis) for the full details.

### EU public sector websites

From [We4authors](https://www.funka.com/en/projekt/we4authors/). Based on this analysis, 3 national-level public sector websites are built with Wagtail:

```txt
www.danepubliczne.gov.pl
www.nhs.uk
www.nesta.org.uk
```

### US federal websites

Analysis of the US federal websites from the [digital.gov list](https://github.com/GSA/digitalgov.gov/blob/main/content/resources/content-management-systems-used-by-government-agencies.md).

```txt
fec.gov
www.peacecorps.gov
www.consumerfinance.gov
```

### Made with Wagtail

[Made with Wagtail](https://madewithwagtail.org/) is a showcase of a lot of Wagtail sites and apps. About two thirds of sites listed are detected with the following regular expressions.

```sh
ag '\/(original_images\/[\w-]+\.|images\/[\w-.]+\.((fill|max|min|width|height|scale)-\d|original))' mww --stats-only
# 382 files contained matches
ag '\/media\/(original_images\/[\w-]+\.|images\/[\w-.]+\.((fill|max|min)-\d+x\d+(-c\d+)?|(width|height|scale)-\d+|original)\.)' mww --stats-only
# 292 files contained matches
```

### Majestic Million

The [Majestic Million](https://majestic.com/reports/majestic-million) is a dataset of 1M domain names ordered by popularity. We can also use the above methodology to assess how many websites are made with Wagtail on this list (about 0.05%).

```sh
ag '\/media\/(original_images\/[\w-]+\.|images\/[\w-.]+\.((fill|max|min)-\d+x\d+(-c\d+)?|(width|height|scale)-\d+|original)\.)' million --stats-only
# 296 files contained matches
ag '\/(original_images\/[\w-]+\.|images\/[\w-.]+\.((fill|max|min|width|height|scale)-\d|original))' ../detect-wagtail-data/million --stats-only
# 528 files contained matches
```

## Security implications

Based on this research, it’s now obvious telling whether a site is built with Wagtail or not really doesn’t take that much effort. It’s also clear that this is completely doable at a large scale, scanning the web for vulnerable Wagtail sites, as is commonplace for other platforms. The common wisdom is to avoid relying on [security through obscurity](https://en.wikipedia.org/wiki/Security_through_obscurity). Some people do argue that some obscurity doesn’t hurt. Don’t count on it. Take the time to establish a threat model for your site, and protect it accordingly by restricting its access, and implementing brute force protections where relevant.

Also keep your site up-to-date with security fixes for all its dependencies. While the approach described here doesn’t make it possible to determine which version of Wagtail is used – there are other very viable approach that make this equally as easy (see [detect-django-version](https://github.com/caioariede/detect-django-version) for inspiration).

## Applications

There are a lot more applications to being able to detect Wagtail websites than just knowing how many there are out there. [WhatCMS.org](WhatCMS.org) has had some amount of Wagtail data for years and is a good example of the potential for market analysis. For me, I’m more interested in seeing how Wagtail is used in the wild. Here are interesting questions this could help with:

- Wagtail headless usage – which static site generators are the most common with Wagtail, that would be worth documenting the usage of better.
- Security best practices – how many websites have the Wagtail admin accessible from any IP vs being restricted.
- Accessibility – how accessible Wagtail sites are.

This last point is the one I’m the most interested in – in particular, comparing Wagtail’s results to those of other technologies in the [WebAIM Million](https://webaim.org/projects/million/). We’ll see how that goes!
