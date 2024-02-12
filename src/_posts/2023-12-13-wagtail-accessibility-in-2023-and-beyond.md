---
layout: post
title: "Wagtail accessibility in 2023 and beyond"
date: 2023-12-13 22:29:58 +0100
comments: true
categories: [Wagtail, Accessibility, Community]
canonical: https://wagtail.org/blog/wagtail-accessibility-in-2023-and-beyond/
---

We achieved a lot in 2023, and have clear plans for the next few years.

<!-- more -->

Wagtail’s accessibility team has been up and running for three years now – one of our longest-running contributor teams. With a lot happening in this space, we thought we were overdue for an update on what we’re up to!

## **Wagtail accessibility in 2023**

In rough chronological order, here are our highlights.

- In **Wagtail 4.2** in February 2023, we shipped our first ever[ accessibility checker](https://wagtail.org/blog/introducing-wagtails-new-accessibility-checker/), thanks to Albina, one of [our very first Outreachy Interns](https://wagtail.org/blog/our-very-first-outreachy-interns/).
- In **Wagtail 5.0** in May 2023, we shipped [updates on Wagtail's accessibility checker](https://wagtail.org/blog/making-the-web-more-accessible-an-update-on-wagtails-accessibility-checker/) – more checks, easier to use and manage.
- Also in **Wagtail 5.0**, we also shipped Wagtail’s first ever [dark theme](https://wagtail.org/blog/come-over-to-the-dark-side-with-wagtail-50/).
- In May 2023, we took part in Global Accessibility Awareness Day (GAAD) for the first time, and published our first ever official [Wagtail accessibility statistics](https://wagtail.org/blog/wagtail-accessibility-statistics-for-gaad-2023/).

We’re proud of reporting on our work as part of GAAD, and of validating that our efforts are paying off, as demonstrated in the accessibility scores of Wagtail sites:

![Mean accessibility scores of Wagtail sites - HTTP Archive sites in 2023 - GAAD 2023 - Newsletter](/images/blog/wagtail-accessibility-in-2023-and-beyond/mean_accessibility_scores_of_wagtail_sites.png)

And over the second half of the year,

- [Wagtail 5.1](https://wagtail.org/blog/wagtail-greener-and-leaner/) in August saw small but crucial improvements for users of voice recognition software, in particular making our "More" dropdown menu pattern usable for those users. We also shipped refinements to the dark theme.
- In Wagtail 5.2, we shipped further improvements to support for voice recognition software, resolving all long-standing blockers for those users.
- In October, Scott Cranfill gave an excellent talk at DjangoCon US: [Best Practices for Making a Wagtail Website as Accessible as Possible](https://www.youtube.com/watch?v=qqQBbVIHkCA).
- In November, we shared the results of our [first-ever ATAG 2.0 audit in RFC 89](https://wagtail.org/accessibility/atag-audit/). This has been a long-running projects behind the scenes over the summer of 2023.
- In December, we have [Two Outreachy Interns Join to Help Make the Wagtail Project More Accessible](https://wagtail.org/blog/outreachy-2023/).

And finally today’s event, the first ever [Wagtail accessibility webinar](https://wagtail.org/blog/wagtail-cms-accessibility-webinar/)! Watch the recording on YouTube: [Prioritize Accessibility with Wagtail CMS | Actionable Insights, Practical Tips and Best Practices](https://www.youtube.com/watch?v=GS7xHki_W7I).

### **Wagtail 6.0 in February 2024**

For the upcoming February 2024 release of Wagtail, we have no less than _four_ accessibility items on the [Wagtail roadmap](https://wagtail.org/roadmap/)!

- A [manual WCAG 2.2 audit](https://github.com/wagtail/roadmap/issues/63) we want to complete by February – we’ve already shared [some preliminary results](https://github.com/wagtail/wagtail/discussions/11180#discussioncomment-7842896).
- Bring the [accessibility checker within the page editor](https://github.com/wagtail/roadmap/issues/66).
- Our [accessibility features documentation Outreachy project](https://github.com/wagtail/roadmap/issues/69).
- The [Wagtail.org website accessibility Outreachy project](https://github.com/wagtail/roadmap/issues/68).

## **Beyond Wagtail 6.0 🌈**

We have big plans. We want to make Wagtail itself, and all sites built with it, as accessible as possible. We’re currently actively looking for sponsorships to create better [accessibility checks for site administrators](https://wagtail.org/blog/looking-for-sponsorship-accessibility-checks-for-site-administrators/), bringing accessibility checks directly in the CMS:

![screenshot of content checkers with accessibility score over time, as a sparkline](/images/blog/wagtail-accessibility-in-2023-and-beyond/content_checkers_with_accessibility_over_time.png)

This will represent a clear step change for accessibility in Wagtail.

### **Accessibility team**

Our accessibility team is also looking for help – here are their top areas of interest for the year to come:

Supporting the Outreachy projects to completion

Working directly with people using assistive technology to discover areas of improvement

Figuring out alt text in Wagtail – having an accessible image model by default

Supporting Django’s accessibility team with their direction

Improving how we automatically test Wagtail’s accessibility

Auditing Wagtail design system for accessible contrast as measured by the new APCA contrast model

Triaging “design needed” accessibility contributions

Organizing meetups/conference talks related to accessibility work across wagtail

High-contrast light and dark themes for Wagtail

👉 If any or all of those ideas sound interesting to you, please do consider joining our accessibility team – come say hi [on the Wagtail Slack](https://github.com/wagtail/wagtail/wiki/slack), in #accessibility.

### **Wagtail sites with no detected issues**

A specific metric we’ll want to monitor is how many Wagtail sites ship without any issues detected, in line with industry reports like the [WebAIM Million](https://webaim.org/projects/million/):

![Wagtail sites with no detected issues - HTTP Archive Wagtail sites in 2023 vs 2022 - GAAD 2023-Newsletter](/images/blog/wagtail-accessibility-statistics-for-gaad-2023/wagtail_sites_with_no_detected_issues.png)

We hope to see clear year-over-year improvements thanks to the program of work we have in place.

## **Our team**

Thank you to the Wagtail accessibility team for a wonderful 2023! Thank you Scott Cranfill, Thibaud Colas, Jesse Menn, Kyle Bayliss, Storm Heg, Saptak Sengupta, Jane Hughes, Albina Starykova, Sage Abdullah, Joshua Munn, Victoria Ottah, Shakhrizoda Yusupova, Damilola Oladele, Ahmed Olaitan, Ben Morse.

Also thank you to Outreachy and Syracuse University, who helped fund part of this work in 2023.
