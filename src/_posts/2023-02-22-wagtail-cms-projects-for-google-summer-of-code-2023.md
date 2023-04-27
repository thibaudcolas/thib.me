---
layout: post
title: "Wagtail CMS projects for Google Summer of Code 2023"
date: 2023-02-22 19:50:00 +0100
comments: true
categories: [Wagtail, Outreach, Community]
canonical: https://wagtail.org/blog/wagtail-cms-projects-for-google-summer-of-code-2023/
---

For the third time, Wagtail is joining Google’s open source internships program.

<!-- more -->

![](/images/blog/wagtail-cms-projects-for-google-summer-of-code-2023/wagtail-gsoc-social-preview.png)

It's official! Following our [participation to Outreachy](https://wagtail.org/blog/outreachy-welcoming-new-contributors-to-open-source/) in the December 2022 cohort, Wagtail is taking part in [Google Summer of Code](https://summerofcode.withgoogle.com/).

## What is Google Summer of Code

Also known as GSoC, Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors.

## Project ideas

We've earmarked three project ideas this year.

### Dark theme for Wagtail admin

*🚧 Update: we have discontinued this idea, as the work involved isn't substantial enough to represent a GSoC project.*

This is a continuation of past projects to make Wagtail's color theme configurable, and accessibility improvements for Windows High Contrast mode users.

Here is the latest prototype of our dark theme, in a high contrast variant:

![Wagtail dark theme prototype, in high contrast mode](/images/blog/wagtail-cms-projects-for-google-summer-of-code-2023/dark-high-contrast.png)

For more information, see [Dark theme for the admin interface #10056](https://github.com/wagtail/wagtail/issues/10056).

### RFC 72: Background workers

Wagtail currently doesn't have a first-party solution for long-running tasks. Other CMSs in the ecosystem such as WordPress and Drupal have background workers, allowing them to push tasks into the background to be processed at a later date, without requiring the end user to wait for them to occur.

One of the key goals for this project is removing the requirement for the user to wait for tasks they don't need to.

For more information, see [RFC 72: Background workers](https://github.com/wagtail/rfcs/pull/72).

### Greener coding: Wagtail's climate impact

We're starting to have a better understanding of the[climate impact of Wagtail](https://github.com/wagtail/wagtail/discussions/8843) as a CMS, and how we can reduce it. We want to integrate our findings into Wagtail's direction, and make concrete improvements to the project to reduce related carbon emissions.

This project is part of a partnership with the [Green Web Foundation](https://www.thegreenwebfoundation.org/), with mentors from both organisations.

## How to participate

Head over to our [GSoC documentation](https://wagtail.org/gsoc) and [GSoC Discussions](https://github.com/wagtail/gsoc/discussions). Review our contributor guide, and come say hi!

## What's next

We hope to hear from a lot of newcomers through the [application period](https://developers.google.com/open-source/gsoc/timeline), where candidates get to know different communities and apply to projects. We'll make sure to share more information about projects that are going ahead and their respective contributors once details are confirmed, closer to the summer.
