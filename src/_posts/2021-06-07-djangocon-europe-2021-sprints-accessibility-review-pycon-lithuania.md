---
layout: post
title: "DjangoCon Europe 2021 sprints – Accessibility review of PyCon Lithuania"
date: 2021-06-07 19:21:03 +0100
comments: true
categories: [Accessibility, Audits, Community, Test]
---

Here are the results of an accessibility audit I did for the [PyCon Lithuania website](https://github.com/PyConLT/pyconlt.github.io/pull/12), as part of the DjangoCon Europe 2021 sprints. I recorded myself going through this and put it up on YouTube, so we have a demo for each of the issues: [DjangoCon Europe 2021 sprints – Accessibility review of PyCon Lithuania’s website](https://www.youtube.com/watch?v=NH4VWUguxUw).

<!-- more -->

<iframe title="DjangoCon Europe 2021 sprints – Accessibility review of PyCon Lithuania’s website" width="560" height="315" src="https://www.youtube-nocookie.com/embed/NH4VWUguxUw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I think the most problematic issue was with the animating banner on Safari, which made it completely impossible to navigate the page with a screen reader. Other than this, most issues were relatively minor.

The main issues I didn’t get to are the ones with buttons / links – the fact having disabled buttons is confusing, and that there are lots of contrast issues with those disabled styles. The focus styles also have poor contrast for the buttons that are focusable.

My recommended fix for these would be to completely remove any button that’s currently disabled from the page, so there is no confusion.

Sections:

- [00:00](https://www.youtube.com/watch?v=NH4VWUguxUw&t=0s) Intro
- [00:40](https://www.youtube.com/watch?v=NH4VWUguxUw&t=40s) Audit methodology
- [01:49](https://www.youtube.com/watch?v=NH4VWUguxUw&t=109s) HTML5 validation
- [04:20](https://www.youtube.com/watch?v=NH4VWUguxUw&t=260s) Reviewing HTML templates
- [13:00](https://www.youtube.com/watch?v=NH4VWUguxUw&t=780s) Alt text for photos
- [19:50](https://www.youtube.com/watch?v=NH4VWUguxUw&t=1190s) Accessibility Insights automated checks
- [21:30](https://www.youtube.com/watch?v=NH4VWUguxUw&t=1290s) Checking landmarks
- [23:00](https://www.youtube.com/watch?v=NH4VWUguxUw&t=1380s) Color contrast checks
- [25:15](https://www.youtube.com/watch?v=NH4VWUguxUw&t=1515s) Checking headings
- [26:45](https://www.youtube.com/watch?v=NH4VWUguxUw&t=1605s) Using h123 for the document outline
- [27:45](https://www.youtube.com/watch?v=NH4VWUguxUw&t=1665s) Tab stops
- [29:38](https://www.youtube.com/watch?v=NH4VWUguxUw&t=1778s) Mobile support
- [31:40](https://www.youtube.com/watch?v=NH4VWUguxUw&t=1900s) Looping animations
- [32:40](https://www.youtube.com/watch?v=NH4VWUguxUw&t=1960s) Testing with VoiceOver in Safari
- [36:00](https://www.youtube.com/watch?v=NH4VWUguxUw&t=2160s) Performance issues with banner animation
