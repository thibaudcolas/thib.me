---
layout: post
title: "Making Wagtail accessible"
date: 2019-07-25 19:15:08 +0100
comments: true
categories: [Wagtail, Accessibility, Tools, Talks]
---

I recently gave a talk at [Wagtail Space US 2019](https://us.wagtail.space/) about making Wagtail accessible – an ongoing effort over the last few months.
The recording is available on YouTube: [Making Wagtail accessible](https://www.youtube.com/watch?v=tdB1I_gSCeY&list=PLEyaio0l1qoEIUFM9bnRKoN6VKEUOdxAn), with more notes / links available below.

<!-- more -->

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tdB1I_gSCeY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Slides: [Making Wagtail accessible – Wagtail Space US 2019](https://docs.google.com/presentation/d/15y8XIe7SL-RYEO9tEE8n9chx80_X4j4PbczGGM-cEGE/edit)

Please find the initial "blog" version of the talk below for reference.

## Intro

From the [Wagtail 2.6 release notes](https://docs.wagtail.io/en/latest/releases/2.6.html):

> Wagtail now has official accessibility support targets: we are aiming for compliance with [WCAG2.1](https://www.w3.org/TR/WCAG21/), AA level. WCAG 2.1 is the international standard which underpins many national accessibility laws.
>
> Wagtail isn't fully compliant just yet, but we have made many changes to the admin interface to get there. We thank the UK Government (in particular the CMS team at the Department for International Trade), who commissioned many of these improvements.

## Why

### There are many reasons

There are many reasons to care about accessibility!

For users of assistive technologies, using Wagtail’s admin interface is difficult ([#4199][1]). This is at odds with Wagtail’s general focus on user experience. For organisations choosing between CMSes, this might make Wagtail a bad option – because of concerns with equality in the workplace, and legislation that mandates compliance with accessibility standards[\[2\]][2][\[3\]][3][\[4\]][4][\[5\]][5].

- [#4199: Making Wagtail Accessible for users with disabilities][1]
- [NZ: Web Accessibility Standard][2]
- [US: Section 508][3]
- [EU: Directive on the accessibility of public sector websites and mobile applications.][4]
- [GB: The Public Sector Bodies (Websites and Mobile Applications) (No.2) Accessibility Regulations 2018][5]

### It doesn’t have to be so negative

This initial problem statement is quite negative, and puts a lot of emphasis on procurement competitiveness and legal risks as motivations. We could also say that it’s important for Wagtail to be accessible, simply because we want Wagtail users to have a good experience, regardless of how they access Wagtail. And accessibility improvements for people relying on assistive technology usually also lead to usability improvements for everyone.

So there are many great reasons to care about accessibility, whether you want to see this in a pessimistic or optimistic light.

### And it’s not just Wagtail

Not much specific to Wagtail here. Intranet, CRMs, ERPs, social media tools, business intelligence, Django admin.

Internal tools shouldn’t compromise on accessibility just because their audience is smaller.

## What we did

> We = a bunch of us. Not just me.

### Targets

Compliance with [WCAG2.1](https://www.w3.org/TR/WCAG21/), AA level

- Why WCAG2.1? Because it’s the basis of many national accessibility laws.
- Why AA level instead of AAA? Because AAA compliance generally mandates a lot when it comes to visual design, and it didn’t feel realistic

#### Assistive technology support targets

Here is what we settled for:

| Type          | Assistive technology                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| Screen reader | [NVDA](https://www.nvaccess.org/download/) on Windows with Firefox ESR                                             |
| Screen reader | [VoiceOver](https://support.apple.com/en-gb/guide/voiceover-guide/welcome/web) on macOS with Safari                |
| Magnification | [Windows Magnifier](https://support.microsoft.com/en-gb/help/11542/windows-use-magnifier)                          |
| Magnification | macOS Zoom                                                                                                         |
| Voice control | Windows Speech Recognition                                                                                         |
| Voice control | macOS Dictation                                                                                                    |
| Screen reader | Mobile VoiceOver on iOS, or [TalkBack](https://support.google.com/accessibility/android/answer/6283677) on Android |

Like for cross-browser testing, having explicit targets helps a lot in understanding what to test.
When choosing those targets, we tried to have a representative selection of assistive technology in use, but also choose tools that we could reasonably expect people contributing to Wagtail to install and test with. There are things not covered here, for example high-contrast modes, dyslexia fonts.

This is largely based on the results of the [GOV.uk 2016 assistive technology survey by GDS](https://accessibility.blog.gov.uk/2016/11/01/results-of-the-2016-gov-uk-assistive-technology-survey/) (the UK’s equivalent of 18F?).

### Tooling

To assist with the auditing, and further testing. We picked a selection of tools centered on Axe, an accessibility rules engine.

- [Axe](https://www.deque.com/axe/) – Accessibility rules engine with support for WCAG & Section 508
- [Accessibility Insights](https://accessibilityinsights.io/docs/en/web/overview) – a set of accessibility compliance browser extenstions built upon Axe for automated checks
- [Pa11y](https://pa11y.org/) – Command line tool for accessibility checks with Axe & HTML_CS
- [React Axe](https://github.com/dequelabs/react-axe) – integrated directly in our build tools, to identify actionable issues. Logs its results in the browser console.

> [GDS accessibility tools audit](https://alphagov.github.io/accessibility-tool-audit/)

Also,

- Automated accessibility test suite with 100+ scenarios
- Automated visual regression test suite, 87 scenarios ([BackstopJS](https://github.com/garris/BackstopJS))

GitHub: [thibaudcolas/wagtail-tooling](https://github.com/thibaudcolas/wagtail-tooling)

### Audit

Main goal: understand where we are at, and create a backlog of improvements to improve the user experience / reach compliance. Both automated (cover lots of UI), semi-automated, and manual.

First, figure out what to audit. We made a big spreadsheet.

![Screenshot of UI overview spreadsheet](/images/blog/making-wagtail-accessible/ui-overview.png)

#### Results

- Scenarios identified: 344
- Scenarios tested: 189
- Discrepancy between the two are for parts of the UI that are either:
  - Not used often
  - Hard to reach
  - Hard to test
- Automated issues found: 336 🙀
  - This can feel like a big number, but there’s lots of duplicates here between different parts of the UI
  - Some of the issues are false-positives

But still, that’s a lot of issues

### Issues

We made a big spreadsheet with the 336 automated test failures, and the manual ones too. I don’t think it’s that interesting to look at, so let’s just spend a bit of time auditing Wagtail together

Let’s look at some examples, first with a screen reader. What issues can we spot? Rapid fire.

On YouTube: **VoiceOver accessibility testing: Wagtail 2.5 demo**,

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/f98wE4SwGLk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### What we fixed

From 336 issues to 172, most of them on parts of the Wagtail UI we chose not to cover

Wagtail 2.6 release notes:

- Better text-to-background color contrast across the whole CMS
- Increased font size across the board as well
- Added focus outline styles
- Added more ARIA landmarks and refactored heading structure
- Added a lot more contextual information to links for screen reader users
- Fixed the icons implementation (more or less )
- Fixed focus not moving to the pages explorer
- [VoiceOver accessibility testing: Wagtail 2.6 demo](https://www.youtube.com/watch?v=CELYUMFiuEQ)

[Full release notes](https://docs.wagtail.io/en/latest/releases/2.6.html)

## What’s next

Accessibility should be part of the design & dev workflow for any UI changes, rather than an occasional one-off push

Contributors to Wagtail should have clear information on what to do to make sure they build accessible UIs

Work in progress:

- RFC: [Making Wagtail Accessible for users of assistive technologies](https://github.com/wagtail/rfcs/pull/37)
- Backlog: [WCAG2.1 AA compliance project on GitHub](https://github.com/wagtail/wagtail/projects/5)

---

## References

[1]: https://github.com/wagtail/wagtail/issues/4199#issue-288601594
[2]: https://www.digital.govt.nz/standards-and-guidance/nz-government-web-standards/web-accessibility-standard-1-0/
[3]: https://www.section508.gov/
[4]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.327.01.0001.01.ENG
[5]: http://www.legislation.gov.uk/uksi/2018/952/introduction/made
[6]: https://en.wikipedia.org/wiki/Universal_design
[7]: https://www.w3.org/TR/WCAG21/#conformance-reqs
[8]: https://www.w3.org/WAI/policies/
[9]: https://github.com/dequelabs/axe-core
[10]: http://pa11y.org/
[11]: https://medium.com/slalom-engineering/a-maturity-model-for-design-systems-93fff522c3ba
[12]: https://www.deque.com/shift-left/

- [Issue #4199: Making Wagtail Accessible for users with disabilities][1]
- [NZ: Web Accessibility Standard][2]
- [US: Section 508][3]
- [EU: Directive on the accessibility of public sector websites and mobile applications.][4]
- [GB: The Public Sector Bodies (Websites and Mobile Applications) (No.2) Accessibility Regulations 2018][5]
- [Wikipedia: Universal design][6]
- [WCAG2.1 conformance levels][7]
- [W3C: Web Accessibility Laws and Policies][8]
- [Axe: Accessibility engine for automated Web UI testing][9]
- [Pa11y: your automated accessibility testing pal][10]
- [A maturity model for design systems][11]
- [Deque: What is Shift Left Accessibility Testing?][12]
- [Wagtail 2.6 release notes](https://docs.wagtail.io/en/latest/releases/2.6.html)
- [WCAG2.1 AA compliance roadmap](https://github.com/wagtail/wagtail/projects/5)
- [Accessibility support targets & tooling setup (#4871) #5245](https://github.com/wagtail/wagtail/pull/5245)
- [RFC 37: Making Wagtail Accessible for users of assistive technologies](https://github.com/wagtail/rfcs/pull/37)
