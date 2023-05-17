---
layout: post
title: "Estimating Wagtail websites’ emissions"
date: 2023-05-18 19:39:03 +0100
comments: true
categories: [Accessibility, Report, Wagtail]
canonical: https://wagtail.org/blog/wagtail-accessibility-statistics-for-gaad-2023/
---

As part of \#GAAD, this week we’re sharing accessibility stats & tips from Wagtail sites.

<!-- more -->

## Accessibility checks on Wagtail sites

Here are 4 common issues detectable with our built-in checker:

![Accessibility checks on Wagtail sites - HTTP Archive Wagtail sites in 2023 - GAAD 2023](/images/blog/wagtail-accessibility-statistics-for-gaad-2023/accessibility_checks_on_wagtail_sites.png)

- **button-name**: A button element on the page is lacking a label. This is entirely detectable with automated tests such as those featured in our [built-in accessibility checker](https://wagtail.org/blog/introducing-wagtails-new-accessibility-checker/), built on Axe.
- **frame-title**: A frame (such as an embedded video) is missing its title. Again entirely detectable with automated tests -- and very simple to fix once identified!
- **heading-order**: Some heading levels are getting skipped on the page -- always have a main heading (h1) followed by subheadings (h2, h3, etc.).
- **link-name**: Just like button-name, one of the page's links is missing its title.

All of those issues are [common on the web](https://almanac.httparchive.org/en/2022/accessibility#heading-hierarchy), but with the right tests in place, there is no reason for that to remain the case.

---

*Here is the data for this graph: [Lighthouse checks, 2023-04](https://docs.google.com/spreadsheets/d/1k29atSkzGsQDg8ljpJ4tI-ZGxAg-TNQofvrxjibf_Yc/edit#gid=316824519)*.

## Mean accessibility scores of Wagtail sites

We see clear improvements over time on accessibility scores of Wagtail sites, but they're too slow-moving:

![Mean accessibility scores of Wagtail sites - HTTP Archive sites in 2023 - GAAD 2023](/images/blog/wagtail-accessibility-statistics-for-gaad-2023/mean_accessibility_scores_of_wagtail_sites.png)

This shows the mean accessibility score of Wagtail sites over time, compared to [industry-average figures](https://almanac.httparchive.org/en/2022/accessibility#introduction). Wagtail sites are consistently doing better -- but only just.

With appropriate targets and ongoing testing, there is no reason all sites couldn't score a perfect "100" (no issues detected) on those tests.

---

*Data for this chart is from the [Core Web Vitals Technology Report](https://discuss.httparchive.org/t/new-dashboard-the-core-web-vitals-technology-report/2178)*.

## High contrast mode support in Wagtail sites

\#GAAD tip \#3: Support High contrast mode on your websites! Also known as Contrast themes, it allows users to adjust the color palette of the site to better suit their vision. Very few websites make adjustments to support it:

![High contrast mode support in Wagtail sites - HTTP Archive Wagtail sites in 2022-07 - GAAD 2023](/images/blog/wagtail-accessibility-statistics-for-gaad-2023/high_contrast_mode_support_in_Wagtail_sites.png)

- "forced-colors" indicates a website making adjustments for users with custom color palettes -- for example adding extra borders
- "prefers-contrast" indicates a website adjusting its styles based on whether users request more or *less* contrast, which is an option in iOS and Android

We've made a lot of adjustments in recent versions of Wagtail to better support Contrast Themes / High contrast mode. Here's an example in the default dark theme:

![Wagtail's page editing UI in high contrast mode, with completely custom colors](/images/blog/wagtail-accessibility-statistics-for-gaad-2023/whcm-wagtail-5.png)

---

*The data for this graph is from July 2022 -- to access it, have a look at [Wagtail CSS media queries 2022-07](https://docs.google.com/spreadsheets/d/1k29atSkzGsQDg8ljpJ4tI-ZGxAg-TNQofvrxjibf_Yc/edit#gid=1613420195)*.

## Wagtail sites with no detected issues

Aim higher with all things accessibility. Wagtail sites are doing better year over year, but there's still lots to do:

![Wagtail sites with no detected issues - HTTP Archive Wagtail sites in 2023 vs 2022 - GAAD 2023](/images/blog/wagtail-accessibility-statistics-for-gaad-2023/wagtail_sites_with_no_detected_issues.png)

We found 4.44% of Wagtail sites had no issues detected in 2023, compared to 3.83% in 2022. Those numbers are [above industry averages](https://webaim.org/projects/million/) but nowhere near our ambitions. All sites can score a perfect "0 errors" detected - and then further spend time on manual tests which can also uncover fundamental issues.

We hope our commitment to the [ATAG 2.0 standard](https://www.w3.org/TR/ATAG20/) will help all Wagtail sites get there, with tools like our accessibility checker paving the way.

---

*Here is the data for this graph: [Lighthouse scores, 2023-04](https://docs.google.com/spreadsheets/d/1k29atSkzGsQDg8ljpJ4tI-ZGxAg-TNQofvrxjibf_Yc/edit#gid=684166254)*.

## Data and methodology

The data we use comes from a dataset of the world's top 8M website homepages: [HTTP Archive](https://httparchive.org/). 4,000+ websites in this dataset are identified as using Wagtail, thanks to [Wappalyzer](https://www.wappalyzer.com/).

From this dataset, we then extract specific statistics following the methodology of the [2022 HTTP Archive Web Almanac's accessibility chapter](https://almanac.httparchive.org/en/2022/accessibility) -- but filtering to only assess Wagtail projects.
