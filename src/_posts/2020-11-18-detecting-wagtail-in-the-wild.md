---
layout: post
title: "Detecting Wagtail in the wild"
date: 2020-11-18 16:15:22 +0100
comments: true
categories: [Automation, Wagtail, Experiments]
---

How can you tell if a site is made with Wagtail or not? There are more ways than people might think at first sight, and after a few years of toying with the idea I finally put together a way to detect Wagtail sites, that strikes a good balance between reliability and convenience. Let’s go birdwatching.

<!-- more -->

## Ways to detect Wagtail

I could think of a few [when I first started thinking of this problem](https://github.com/springload/madewithwagtail/issues/62):

- Determine if the site is [built with Django](https://stackoverflow.com/questions/721934/how-can-you-tell-if-a-site-has-been-made-with-django). That’s a start
- Check if the site uses a [Wagtail badge](https://wagtail.org/wagtail-badges/). Cute, but not used much in practice.
- Load `/admin/login` and check for "wagtail" in the response – that would surely be an almost certain match.

The problem with a lot of those approaches is their relance on crawling the site, which is quite invasive, not very reliable, and can be time-consuming across a lot of sites. It’s also unclear how common those cues would be across the breadth of Wagtail sites out there.

The ideal approach would be HTTP response headers – which could be obtained from any page with a lightweight HEAD request. Wagtail unfortunately doesn’t have any custom header, so the next best thing is to inspect the pages’ markup:

- Wagtail’s (legacy) rich text uses the `rich-text` class to wrap the HTML of rich text fields
- Rich text images use hard-coded classes like [`richtext-image full-width`](https://github.com/wagtail/wagtail/blob/bb2e460c0b92fba802fc3f369730004d6b648e64/wagtail/images/formats.py#L91-L94)
- Wagtail’s documents are served from a [`/documents/`](https://github.com/wagtail/wagtail/blob/bb2e460c0b92fba802fc3f369730004d6b648e64/wagtail/documents/urls.py#L6) sub-path.
- And last but not least, [image renditions](https://docs.wagtail.org/en/stable/topics/images.html?highlight=renditions#generating-image-renditions-in-python).

Image renditions are very common on Wagtail sites. The detection would only work for pages that have user-uploaded images, but lucky for us a site’s homepage tends to be the type of high-value page where there are CMS-managed images. Here are a few examples of URLs from renditions:

```txt
https://www.jazzfestival.nz/media/images/video-fallback-image_1.width-1920.png

/media/images/bevi_3_mob.original.format-png.png

/media/original_images/Social_Distancing_Dashboard_-_image_1_TU_DelftAMS_Institute.png

https://buckup-ff-stories.s3.amazonaws.com/original_images/Lockup_Logo_-_JPEG-1.png

/media/images/UE4LowPolyVehicleTh.2e16d0ba.fill-960x540-c0.jpg
```

The distinctive features are the folders – always either `images` or `original_images`, and frequently either placed directly at the root of a site, or from a `/media` subfolder at the root, or a single level up. And then the fact that all of the site’s images are placed in those two folders without any additional sub-folders, with file name suffixes following a set format for all files under `images/` like `.width-1920` or `.fill-960x450-c0` above. I came up with the particular regex used here after trying out different variations on 800'000 homepages from the [Majestic Million](https://majestic.com/reports/majestic-million) list of domains.

## The regex

Here is a simplified diagram of the logic (created with [regexper](https://regexper.com/#%5C%2F%28original_images%5C%2F%5B%5Cw-%5D%2B%5C.%7Cimages%5C%2F%5B%5Cw-.%5D%2B%5C.%28%28fill%7Cmax%7Cmin%7Cwidth%7Cheight%7Cscale%29-%5Cd%7Coriginal%29%29)):

![regexper train diagram of Wagtail regular expressions](/images/blog/detecting-wagtail-in-the-wild/regexper-diagram.svg)

## Real-world usage

The regex could be more complex and precise but this wouldn’t actually change much to its real-world usefulness, so I gradually simplified it to the above. With this in place, we can then create different ways to run this detection on arbitrary websites:

- An online website, [detect-wagtail.netlify.app](https://detect-wagtail.netlify.app/).
- A bookmarket, also available from [detect-wagtail.netlify.app](https://detect-wagtail.netlify.app/).
- A browser extension thanks to [Wappalyzer](https://github.com/httparchive/wappalyzer).
- A Node CLI, also thanks to [Wappalyzer](https://github.com/httparchive/wappalyzer).
- As an npm package for more custom needs, [detect-wagtail](https://www.npmjs.com/package/detect-wagtail)

With Wappalyzer in particular, they also offer additional services based on anonymous data reporting from their detection tools. Here is their page that aggregates Wagtail usage data: [Websites using Wagtail](https://www.wappalyzer.com/technologies/cms/wagtail/).

If you’re unsure which of these to use – the Wappalyzer checks are the strictest, so best used if you don’t want to manually confirm the results by inspecting the pages’ HTML.

## Real-world data

With this regex in place, I tried it out on a few lists of websites. See [detect-wagtail/docs/analysis](https://github.com/thibaudcolas/detect-wagtail/tree/main/docs/analysis) for the full details.

### EU public sector websites

Dataset from [We4authors](https://www.funka.com/en/projekt/we4authors/). Based on this analysis, I could find 3 national EU public sector websites built with Wagtail:

```txt
www.danepubliczne.gov.pl
www.nhs.uk
www.nesta.org.uk
```

There are many more public sector websites built with Wagtail at the national and regional / local level, but this type of analysis already shows the value in having the ability to detect Wagtail – the CMS could be part of [market analysis](https://www.funka.com/en/projekt/we4authors/we4authors-main-activities-and-results/market-analysis-and-benchmarking-process-of-existing-cms/) for research projects like We4authors, from which we can learn a lot.

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

The remaining third are largely made up of sites that… actually aren’t made with Wagtail, either because Wagtail is only used for a specific section of a site (and not the homepage), or because the site got rebuilt with another technology since being listed there.

### Majestic Million

The [Majestic Million](https://majestic.com/reports/majestic-million) is a dataset of 1M domain names ordered by popularity. We can also use the above methodology to assess how many websites are made with Wagtail on this list (about 0.05%).

```sh
ag '\/media\/(original_images\/[\w-]+\.|images\/[\w-.]+\.((fill|max|min)-\d+x\d+(-c\d+)?|(width|height|scale)-\d+|original)\.)' million --stats-only
# 296 files contained matches
ag '\/(original_images\/[\w-]+\.|images\/[\w-.]+\.((fill|max|min|width|height|scale)-\d|original))' ../detect-wagtail-data/million --stats-only
# 528 files contained matches
```

Those numbers neatly match those of [WhatCMS](https://whatcms.org/c/Wagtail).

## Security implications

Telling whether a given site is built with Wagtail or not really doesn’t take that much effort. The image renditions methodology also shows it’s very easy to do at scale. There is nothing here that can prevent bad actors from scanning the web for vulnerable Wagtail sites, as is commonplace for other platforms. For all intents and purposes, you should assume this is happening already.

What should we do then? For a start, don’t rely on [security through obscurity](https://en.wikipedia.org/wiki/Security_through_obscurity). Take the time to establish a threat model for your site, and protect it accordingly by restricting access to anything exploitable, and implementing brute force protections where relevant. Take a multi-layered approach to security – with defenses at the network level (e.g. a WAF), application level (e.g. rate limiting, defensive programming, handling of untrusted input, etc.), and also monitoring (logs analysis).

An old but still relevant example of this in the Wagtail world is [WagtailEnforcer](https://github.com/springload/wagtailenforcer).

And of course, keep your site up-to-date with security fixes for all its dependencies. While the approach described here doesn’t make it possible to determine which version of Wagtail is used – there are other very viable approaches that make this equally as easy (see [detect-django-version](https://github.com/caioariede/detect-django-version) for inspiration).

## Applications

There are a lot more applications to being able to detect Wagtail websites than just knowing how many there are out there. [WhatCMS.org](WhatCMS.org) has had some amount of Wagtail data for years and is a good example of the potential for market analysis. For me, I’m more interested in seeing how Wagtail is used in the wild. Here are interesting questions this can help answer:

- Wagtail headless usage – which static site generators are the most common with Wagtail, that would be worth documenting the usage of better. In my analysis, I found a lot of Next and Gatsby websites in particular.
- Security best practices – how many websites have the Wagtail admin accessible from any IP vs being restricted.
- Accessibility – how accessible Wagtail sites are.

This last point is the one I’m the most interested in – in particular, comparing Wagtail’s results to those of other technologies in the [WebAIM Million](https://webaim.org/projects/million/). We’ll see how that goes!
