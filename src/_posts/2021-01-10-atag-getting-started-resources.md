---
layout: post
title: "ATAG 2.0 getting started resources"
date: 2021-01-06 21:42:03 +0000
comments: true
draft: true
categories: [Accessibility, Resources, List]
---

There aren’t many resources out there about [ATAG](https://www.w3.org/TR/ATAG20/). Here are the ones I have found and occasionally come back to.

<!-- more -->

## Why do we need this?

I often hear people question whether ATAG really is applicable to `<insert name of tool>`. In my experience the answer has so far always been "yes". Here’s a quick step by step:

1. Does the tool allow creating content for the web? (any editing of content visible on a website)
2. That content needs to be accessible.
3. So the tool needs to make it possible to create accessible content.

It’s as simple as that, regardless of whether the "tool" is a CMS, a text editor, an admin panel, or just a form with a few plain-text fields.

Mitchell Evan also summarizes the need for ATAG in his excellent talk [If it’s true it ain’t bragging! Choosing a CMS for accessibility](https://wpaccessibilityday.org/talks/if-its-true-it-aint-bragging-choosing-a-cms-for-accessibility/):

> Authoring Tool Accessibility Guidelines (ATAG): Who needs them?
>
> - Nobody — because no law or regulation directly requires ATAG.
> - **Everybody — because ATAG reduces your risk of an inaccessible website.**

So – yes, there is no compliance requirement. But it’s no less relevant of a standard, and it is the de-facto goalpost for all authoring tools who care about accessibility out there. Oh and it will likely [be part of WCAG 3.0](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/), which will likely be a compliance requirement in the future.

## Official resources

There are very few unfortunately.

- [ATAG report tool](https://www.w3.org/WAI/atag/report-tool/) is the official ATAG report generator.
- [WAI Authoring Tools](https://github.com/w3c/wai-authoring-tools) is a very promising way to explore how different tools comply with ATAG, unfortunately the project seems to have stalled halfway through.
  - In particular, this project has a list of [accessibility features in authoring tools](https://wai-authoring-tools.netlify.app/authoring-tools/selecting#features) which makes for a very good introduction to ATAG.
- [WAI Guide](https://www.w3.org/WAI/about/projects/wai-guide/) is a W3C project co-funded by the EU’s Horizon 2020 program, that might produce more resources in the future.

## Research

There are a few research teams working on authoring tools’ accessibility. Here is the work that stood out the most for me.

- [Accessibility Cluster](https://accessibilitycluster.com/) is another EU research project currently under way to look at accessibility in CMSes. There are interesting resources available from the project pilot, unfortunately doesn’t go very far beyond what ATAG already states:
  - [Workshops results](https://www.funka.com/en/projekt/we4authors/we4authors-main-activities-and-results/workshops-on-accessible-content-management-systems/workshops/)
  - [Guidelines for stakeholders](https://www.funka.com/en/projekt/we4authors/we4authors-main-activities-and-results/accessibility-guidelines-for-the-cms-community-suppliers-and-public-governments/)
  - Report for CMS tools in particular (but could apply to any kind of web publishing): [Guidelines for authoring tools producers](https://www.funka.com/contentassets/c43f6521e7354c9a8f82e62402f10aad/guidelines_for_authoring_tools_producers.pdf)
- [Method for accessibility assessment of online content editors (preprint)](https://www.researchgate.net/profile/Tania_Acosta4/publication/322250312_Method_for_Accessibility_Assessment_of_Online_Content_Editors/links/5d6600faa6fdccc32cd67dbd/Method-for-Accessibility-Assessment-of-Online-Content-Editors.pdf) covers which WCAG guidelines should likely be considered when evaluating ATAG for a CMS.

## Drupal and WordPress

In the CMS world, Drupal and WordPress have the most established resources when it comes to accessibility, and ATAG in particular.

Drupal:

- [Accessibility in Drupal](https://www.drupal.org/docs/accessibility)
- [Drupal - Track progress in ATAG 2.0 conformance](https://www.drupal.org/node/2034909)
  - Out of date but still interesting: [Drupal compliance overview of ATAG 2.0](https://groups.drupal.org/node/164389)
- [Web Accessibility, ATAG & Drupal 8](https://medium.com/@mgifford/web-accessibility-atag-drupal-8-4132bf3724ea)
- Talk: [Why We Should Get Excited About ATAG 2.0](https://drupal.tv/index.php/external-video/2017-08-26/why-we-should-get-excited-about-atag-20)

WordPress:

- [WP Accessibility Day](https://wpaccessibilityday.org/)
  - [Your CMS is an Accessibility Assistant](https://wpaccessibilityday.org/talks/your-cms-is-an-accessibility-assistant/), [video](https://youtu.be/V0yJ_qJBvoc?t=7775)
- [WPCampus releases results of the Gutenberg accessibility audit](https://www.wpcampus.org/blog/2019/05/gutenberg-audit-results/)

## Other platforms

There are a few other authoring tools that have some accessibility / ATAG-relevant resources:

- [Wix accessibility tools & guides](https://www.wix.com/accessibility)
- [Accessibility at SurveyMonkey](https://help.surveymonkey.com/articles/en_US/kb/Accessibility-at-SurveyMonkey)
- One I put together for Wagtail: [Wagtail accessibility considerations](https://docs.wagtail.org/en/latest/advanced_topics/accessibility_considerations.html)

## ATAG examples

To round off this list, here are practical examples of checkers that can help meet ATAG’s Principle B.3: Authors are supported in improving the accessibility of existing content.

- [TinyMCE’s accessibility checker](https://www.tiny.cloud/docs/plugins/premium/a11ychecker/)
- [Tota11y](https://khan.github.io/tota11y/), particularly relevant for content management systems.
  - [And its Wagtail implementation, wagtail-accessibility](https://github.com/neon-jungle/wagtail-accessibility)
- [Microsoft Office 365 accessibility checker](https://support.microsoft.com/en-us/office/make-your-content-accessible-to-everyone-with-the-accessibility-checker-38059c2d-45ef-4830-9797-618f0e96f3ab)
