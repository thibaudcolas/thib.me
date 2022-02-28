---
layout: post
title: "State of Wagtail’s accessibility"
date: 2022-02-28 07:42:03 +0000
comments: true
categories: [Accessibility, Wagtail, Community]
canonical: https://wagtail.org/blog/state-of-wagtail-accessibility/
---

After [6 months of operations](https://wagtail.org/blog/announcing-wagtail-sub-teams/), we reflect on the progress our [accessibility team](https://github.com/wagtail/wagtail/wiki/Wagtail-sub-teams#accessibility) has made, and go on the lookout for new contributors.

<!-- more -->

Accessibility has been on Wagtail’s roadmap for quite some time, and we’ve [reflected on our progress](https://wagtail.org/blog/accessibility-team-reloaded/) in the past. Now’s a good time for us to do this again, and share our plans for the next few years.

### What we achieved in 2021

2021 has been a busy year for Wagtail’s [accessibility team](https://github.com/wagtail/wagtail/wiki/Accessibility-team). With 5 members on board last February, and [Saptak Sengupta](https://github.com/SaptakS) joining us in July, we went through a lot of long-awaited changes.

- We now have an [official accessibility statement](https://wagtail.org/accessibility/). This was the first time we publicly stated ATAG 2.0 as a conformance goal.
- We also published our [(work in progress) accessibility audit](https://docs.google.com/spreadsheets/d/1l7tnpEyJiC5BWE_JX0XCkknyrjxYA5T2aee5JgPnmi4/edit#gid=1433484179). It’s far from complete, but has already helped us prioritise specific improvements to the CMS.
- We made a big push to improve support for Windows high contrast mode as part of [Wagtail 2.15](https://docs.wagtail.org/en/stable/releases/2.15.html#windows-high-contrast-support).
- We were also involved with the development of large features, earlier than might have been the case in the past.

### Windows high-contrast mode

This significant effort is worth highlighting for a few reasons:

- The whole backlog of improvement came from a [large audit](https://trello.com/b/MnlPSvkD/wagtail-high-contrast) by [Kyle Bayliss](https://github.com/kbayliss), which allowed us to understand the bigger picture of which practices in our development might be causing issues.
- In contrast, we were able to split the fixes [over multiple tickets](https://github.com/wagtail/wagtail/issues?q=is%3Aissue+sort%3Aupdated-desc+label%3A%22good+first+issue%22+label%3AAccessibility+is%3Aclosed+High-contrast+mode) to make those potential contributions more accessible to newcomers (in total, 12 people participated in those changes!).
- We got a sponsorship from [Assistiv Labs](https://assistivlabs.com/) to simplify testing of Wagtail with different assistive technologies. Windows high contrast mode in particular was very hard for us to test until then.

There is still a long way to go for us to achieve full support, but we feel better able to deliver this than ever. Here is what Windows high contrast mode looks like in Wagtail currently, tested via Assistiv Labs:

[![Screenshot of Windows high contrast mode in Assistiv Labs, with the main navigation opened over page listings](/images/blog/state-of-wagtail-accessibility/whcm-wagtail.png)](/images/blog/state-of-wagtail-accessibility/whcm-wagtail.png)

### What we didn’t achieve

- We were hoping to have accessibility team [office hours](https://simonwillison.net/2021/Feb/19/office-hours/), and never got round to starting this. If you would be interested, please [let us know on Slack in #accessibility](https://github.com/wagtail/wagtail/wiki/Slack)!
- One of the key features we wanted to scope was accessibility testing built into the CMS -- we made plans internally, but didn’t draft a formal proposal as we had hoped. More on that soon!

## The year ahead

The elephant in the room for Wagtail’s accessibility improvements is the [Page editor 2022](https://github.com/wagtail/wagtail/discussions/7739) project, which accessibility team members are heavily involved with. This marks a clear transition for us: from frequently fixing issues piecemeal after the fact; to being involved in every feature’s planning, making sure accessibility is considered.

We also get to direct the scope of the project -- for example, recommending a wholesale replacement of the current datepicker, rather than a restyling.

A practical example of our involvement is the production of annotations for UI semantics and behavior, following the [Accessibility Bluelines](https://dribbble.com/shots/6269661-Accessibility-Bluelines) methodology:

[![Accessibility bluelines example for Wagtail, annotating the sidebar and top of the page editor](/images/blog/state-of-wagtail-accessibility/accessibility-bluelines.png)](/images/blog/state-of-wagtail-accessibility/accessibility-bluelines.png)

### Accessibility of the CMS

We are and will be going through a lot of improvements:

- Liaising with the Page editor 2022 project, and other features development, so accessibility requirements are included.
- [Automated accessibility testing](https://github.com/wagtail/wagtail/pull/7751) of all pull requests, so ongoing QA isn’t as reliant on manual testing.
- Rolling out the most important accessibility-related changes from the page editor project, to the rest of the CMS.

We will also keep up with [WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)’s publication, and drafts of [WCAG 3.0](https://w3c.github.io/silver/guidelines/).

### Accessibility of sites built with Wagtail

The biggest change here will be the inclusion of built-in accessibility tests, as part of page previews when editing content. This is par for the course of ATAG 2.0 conformance, and we’re also gradually integrating findings from the [We4Authors Cluster](https://accessibilitycluster.com/) research project, which details the most important accessibility features in content management systems.

## How you can help

Two things:

- Regularly [provide feedback on the Page editor 2022](https://github.com/wagtail/wagtail/discussions/7739) project, based on your experience with Wagtail and other content management systems.
- Consider joining our accessibility team! We are looking for new members for the next 6 months or so, from all backgrounds, all skillsets.

In both cases, we’re particularly keen to hear from people who:

- Have personal experience of access and functional needs, or who are regular users of assistive technologies.
- Work on UX, design, or content -- and can help us understand the needs of our users.

To chat to the accessibility team directly, reach out to us [on Slack in #accessibility](https://github.com/wagtail/wagtail/wiki/Slack).
