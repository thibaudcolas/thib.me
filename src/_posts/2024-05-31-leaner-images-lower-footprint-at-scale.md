---
layout: post
title: "Leaner images, lower footprint, at scale"
date: 2024-05-31 10:47:03 +0100
comments: true
categories: [GSoC, Wagtail, Django, Sustainability]
canonical: https://wagtail.org/blog/leaner-images-lower-footprint-at-scale/
---

Tangible carbon emissions reductions for Wagtail websites, thanks to our Google Summer of Code 2023 projects.

<!-- more -->

Remember our [2023 Google Summer of Code internships](https://wagtail.org/blog/going-green-with-google-summer-of-code/), in partnership [with the Green Web Foundation](https://www.thegreenwebfoundation.org/news/working-with-the-wagtail-community-on-the-summer-of-code/)? Our interns Aman and Paarth worked on image weight reductions, introducing AVIF support to Wagtail and revamped template tags for multi-format images. Well – we now have data confirming this work has paid off and results in very tangible emissions reductions for Wagtail websites.

## Tangible image weight reductions

**30%**, that’s how big the image weight savings are on the demo site we used to benchmark those improvements. For a change of one line of code per image, this is tremendous.

Longer-term, **we’re hoping for a 1858 tCO2e/year reduction in carbon emissions**, if all existing Wagtail websites were to upgrade to the needed version and implement those improvements. This is based on extrapolating those improvements to the Wagtail ecosystem’s carbon footprint of [8240 tons of CO2 emissions per year](/estimating-wagtail-websites-emissions/) (60% of which is images).

![Image weight savings - GSoC Wagtail projects](/images//blog/leaner-images-lower-footprint-at-scale/Image_weight_savings_-_GSoC_Wagtail_projects.png)

## Improvements across existing websites

Reviewing existing websites thanks to [HTTP Archive](https://httparchive.org/) data, it’s clear that existing websites are improving at scale. Though we can’t assume a direct correlation, we observe year-over-year improvements in **all** quality indicators related to image weight. For the three relevant Lighthouse performance indicators, reviewing how many Wagtail sites out there are passing each check:

- **Modern image formats** success rate goes from 31% to 38%
- **Optimized images** goes up from 87% to 92%
- **Responsive images** increases from 48% to 65%

![Success rate of image checks on Wagtail sites](/images//blog/leaner-images-lower-footprint-at-scale/Success_rate_of_image_checks_on_Wagtail_sites.png)

## Improvements for real-world users

Back to our demo websites, we also noticed clear improvements to user experience! We measured Google’s Web Vitals indicators, and both First Contentful Paint and Largest Contentful Paint have improved thanks to images being smaller. On a mobile connection, FCP goes from 2.5 to 2.4 seconds, and LCP from 3.6 to 3.4s.

Those are tremendous improvements when considering the very low amount of work needed to achieve them!

![Web Vitals scores - GSoC Wagtail projects](/images//blog/leaner-images-lower-footprint-at-scale/Web_Vitals_scores_-_GSoC_Wagtail_projects.png)

## Improvements for *your* site

All of those improvements are ready to use for all Wagtail sites, starting in version 5.1 for [AVIF support](https://docs.wagtail.org/en/stable/releases/5.1.html#avif-image-support), and version 5.2 for the [responsive picture tag](https://docs.wagtail.org/en/stable/releases/5.2.html#responsive-multi-format-images-with-the-picture-tag). Give it a go! It really is a one-liner:

```html
{% raw %}{% picture my_img format-{avif,jpeg} width-{400,800} sizes="80vw" %}{%
endraw %}
```
