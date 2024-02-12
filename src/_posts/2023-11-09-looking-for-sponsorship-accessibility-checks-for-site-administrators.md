---
layout: post
title: "Looking for sponsorship – Accessibility checks for site administrators"
date: 2023-11-09 18:29:58 +0100
comments: true
categories: [Wagtail, Accessibility, Automation]
canonical: https://wagtail.org/blog/looking-for-sponsorship-accessibility-checks-for-site-administrators/
---

We’re building state-of-the-art accessibility checks within the CMS, replacing expensive monitoring tools. Help us make this happen faster!

<!-- more -->

![wagtail dashboard accessibility promo, with accessibility score site-wide and pages with issues](/images/blog/looking-for-sponsorship-accessibility-checks-for-site-administrators/wagtail_dashboard_accessibility_promo.png)

Ever wondered how accessible your website is as a whole? There are a lot of free tools available to automatically test individual pages: [Axe](https://github.com/dequelabs/axe-core), [WAVE](https://wave.webaim.org/), [Alfa](https://github.com/Siteimprove/alfa) to name a few. However options are more scarce when it comes to testing multiple pages of a site, or the whole site, or testing pages over time. Rather than having to procure a new tool, what if we instead added accessibility checking to the site's administration features?

Turns out this isn't a new idea, and is one of the many things the [ATAG standard](https://www.w3.org/TR/ATAG20/) mandates. We recently did an [ATAG audit of Wagtail](https://wagtail.org/accessibility/atag-audit/), and now realize there is plenty to do for us to bring our accessibility checker to its full potential.

## **What ATAG says**

ATAG covers a lot of things! At the highest level, it requires content administration tools (like a CMS, a document editor, or the Django admin) to be accessible, and to promote the production of accessible content. This is why we created [Wagtail's accessibility checker](https://wagtail.org/blog/introducing-wagtails-new-accessibility-checker/), which ships with 8 checks all related to possible content issues, as per ATAG guidelines. The checker is currently supported as part of Wagtail's toolbar on draft and live pages, and in the next release will become available within Wagtail's live preview. This will allow faster checks of page content as part of editing, and checks for non-page content (arbitrary Django models, really) via Wagtail's PreviewMixin and snippets features.

Here's an early iteration of the checker within the page editor, validating a Django model's content:

![accessibility checker design iteration screenshot on a django model editing form](/images/blog/looking-for-sponsorship-accessibility-checks-for-site-administrators/accessibility_checker_django_model.png)

## Our direction

It's clear enough – we can use our checker to its fullest potential by:

1. Having more checks.
2. Checking over time, storing the reports so users can track the relevant metrics.
3. Providing suggestions for possible fixes.

### Check all the things

Even though our checker has very few rules turned on, it's actually a full-blown copy of [Axe](https://github.com/dequelabs/axe-core). There is nothing preventing us from running all of the checks! Though all the results might not be relevant to all, we can then deliver different results to users based on their roles. For example, admin users could see the full results, while editors could get more focused and actionable feedback.

### Check over time

Since we're running our checks whenever editors work on a page, we might as well store the results! Though historical data isn't necessarily always helpful, it helps in encouraging possible improvements. Our latest designs showcase this data as a sparkline displaying an accessibility score, based on summarizing the result of the individual checks:

![screenshot of content checkers with accessibility score over time, as a sparkline](/images/blog/looking-for-sponsorship-accessibility-checks-for-site-administrators/content_checkers_with_accessibility_over_time.png)

In this scenario, a perfect "100" score would only mean _no issues detected_, which [isn't the same](https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/) as there being no issues for real-world users – but still a valuable baseline to aim for.

View our [Content quality checkers](https://github.com/wagtail/wagtail/discussions/11063) for the latest design iterations and to provide your feedback.

### Providing suggestions

Having issues flagged is nice, but from there ATAG standard also says we should provide "**Repair Assistance**": suggestions to help repair any issues. We agree! This feels like a natural improvement over the checks, and also a great occasion to leverage modern approaches such as generative AI. For example, with computer vision and large language models, we can:

1. **Generate alternative text where it's missing**. Taking the surrounding content into account, to generate the best possible alt text in context.
2. **Suggest rewordings for copy with jargon or overly-long sentences detected**. Similar to [OpenAI's GPTs](https://openai.com/blog/introducing-gpts) and their Creative Writing Coach.

We hope to have a go-to generative AI integration as an optional add-on, with clear support for Wagtail package maintainers to create their own integrations.

### Report on results

From there, we can report on scores in other areas of the administrative interface, such as the dashboard.

![dashboard accessibility reporting, with site-wide accessibility score](/images/blog/looking-for-sponsorship-accessibility-checks-for-site-administrators/dashboard_accessibility_reporting.png)

In this scenario, the "52" site-level accessibility score would be derived from the scores of individual pages, possibly with weighting.

View our [Dashboard enhancements discussion](https://github.com/wagtail/wagtail/discussions/8325#discussioncomment-7302746) for the latest design iterations and to provide your feedback.

## The impact

Back in May, we blogged about [how accessible Wagtail sites are](https://wagtail.org/blog/wagtail-accessibility-statistics-for-gaad-2023/). Within the next two to three years, we expect the improvements discussed here will take us from an above-average score of 85 to:

1. Leading the industry in the number of "perfect", "no-issues-detected" sites
2. Overtaking WordPress and Drupal websites in aggregated accessibility scores

## Making this happen

Even though the types of checks showcased here are a fundamental requirement of meeting accessibility standards, very few content management systems consider them as a built-in feature, well-integrated with different aspects of the CMS.

We're [looking for sponsorships](https://wagtail.org/sponsor/) to accelerate this work. The checks are already on the [Wagtail roadmap](https://wagtail.org/roadmap/), along with 6 other areas of accessibility improvements in the Wagtail universe. With the right support, we can make all of this happen in 2024. View our [guidance for feature sponsors](https://wagtail.org/sponsor/), and reach out to our [accessibility team](https://github.com/wagtail/wagtail/wiki/Accessibility-team) to talk feasibility.
