---
layout: post
title: "Making Wagtail accessible"
date: 2019-07-25 19:15:08 +0100
comments: true
categories: [Wagtail, Accessibility, Tools, Talks]
---

I recently gave a talk at [Wagtail Space US 2019](https://us.wagtail.space/) about making Wagtail accessible – an ongoing effort over the last few months. This is a blog post version of the same talk.

<!-- more -->

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tdB1I_gSCeY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Slides: [Making Wagtail accessible – Wagtail Space US 2019](https://docs.google.com/presentation/d/15y8XIe7SL-RYEO9tEE8n9chx80_X4j4PbczGGM-cEGE/edit)

---

There’s good news for accessibility back in the Wagtail 2.6 release notes:

> Wagtail now has official accessibility support targets: we are aiming for compliance with WCAG2.1, AA level. WCAG 2.1 is the international standard which underpins many national accessibility laws.
>
> Wagtail isn't fully compliant just yet, but we have made many changes to the admin interface to get there. We thank the UK Government (in particular the CMS team at the Department for International Trade), who commissioned many of these improvements.

## Why this matters

For users of assistive technologies, using Wagtail’s admin interface can be [difficult](https://github.com/wagtail/wagtail/issues/4199#issue-288601594). Organisations shopping for a CMS also are very aware of accessibility – because of legislation that mandates compliance with accessibility standards ([NZ](https://www.digital.govt.nz/standards-and-guidance/nz-government-web-standards/web-accessibility-standard-1-0/), [USA](https://www.section508.gov/), [EU](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.327.01.0001.01.ENG), [UK](https://www.legislation.gov.uk/uksi/2018/952/introduction/made), and more).

We also simply want Wagtail users to have a good experience, regardless of how they access Wagtail. And accessibility improvements for people relying on assistive technology usually also lead to usability improvements for everyone.

**And this reasoning also applies beyond Wagtail** – whether you’re building working on an intranet platform, CRM, ERP, dashboard tools. Building an internal app with the Django admin. The same standards should apply, even if the audience is smaller or restricted to a specific organisation.

## What we’ve done so far

We started by setting our target: compliance with [WCAG 2.1](https://www.w3.org/TR/WCAG21/), AA level.

- Why WCAG2.1? Because it’s a well-established standard internationally, and the basis of many national accessibility laws.
- Why AA level instead of AAA? Because AAA compliance generally mandates a lot when it comes to visual design, and it didn’t feel realistic. AAA-level compliance will be achieved on some parts of Wagtail, but not all of it.

To complement this target, we also decided to make a shortlist of specific assistive technologies we wanted to support and use in our testing:

- [NVDA](https://www.nvaccess.org/download/) on Windows with Firefox ESR
- [VoiceOver](https://support.apple.com/en-gb/guide/voiceover-guide/welcome/web) on macOS with Safari
- Windows Magnifier
- macOS Zoom
- Windows Speech Recognition
- macOS Dictation
- Mobile VoiceOver on iOS, or TalkBack on Android

Like for cross-browser testing, having explicit targets helps a lot in understanding what to test. When choosing those targets, we tried to have a representative selection of assistive technology in use (thanks to the [2016 GOV.UK assistive technology survey](https://accessibility.blog.gov.uk/2016/11/01/results-of-the-2016-gov-uk-assistive-technology-survey/)), but also choose tools that we could reasonably expect people contributing to Wagtail to install and test with. There are things not covered here – high-contrast modes, dyslexia fonts, etc.

### Tooling

To assist with our audits and accessibility testing we picked a selection of tools centred on [Axe](https://www.deque.com/axe/), an accessibility rules engine. We specifically chose three integrations of Axe:

- [Accessibility Insights](https://accessibilityinsights.io/docs/en/web/overview) – a set of accessibility compliance browser extenstions, built upon Axe for automated checks.
- [Pa11y](https://pa11y.org/) – Command line tool for accessibility checks with Axe & HTML_CS.
- [React Axe](https://github.com/dequelabs/react-axe) – integrated directly in our build tools, to identify actionable issues. Logs its results in the browser console.

Here again, our choice of Axe over other tools is largely thanks to excellent work from the GDS – its [accessibility tools audit](https://alphagov.github.io/accessibility-tool-audit/) in this case. While Axe doesn’t top this list, it has one of the lowest rates of false positives, making it particularly suitable for automated tests, which are paramount for an open-source project with a lot of contributors.

To make the most of those tools, we also worked on an [automated accessibility and visual regression test suite](https://github.com/thibaudcolas/wagtail-tooling), which helped us seeing our progress as we started fixing issues.

### Audit

There is no better start to an accessibility push than an audit – to understand where we are at, create a backlog of improvements to improve the user experience, and reach compliance. Auditing can be automated (to cover lots of UI at a high-level), semi-automated , or fully manual (to have a more qualitative assessment).

But first – we needed to figure out what to audit. We made a big spreadsheet:

![Screenshot of a spreadsheet – different parts of Wagtail as rows, with columns for whether they are used or not, by whom, what states they can be in, and whether automated tests are set up or not](/images/blog/making-wagtail-accessible/ui-overview.png)

…and from there, we could start to audit our way through the Wagtail admin!

The results

- We identified **344 different scenarios** / parts of Wagtail to test.
- We tested 189 of those 344.

The discrepancy between the two is due to the scenarios either being seldom used (e.g. Sites management), hard to reach, or hard to test (e.g. the inside of the datepicker).

From this, **we found 336 issues via automated testing 🙀.** While this can feel like a big number, there were a lot of issues that were duplicated between the different parts of Wagtail, and a few false positives as well. But 336 is a big number nonetheless.

## The issues

We made a big spreadsheet with the 336 automated test failures, and the manual ones too. It’s not that interesting to look at (_and a lot of them have been fixed since!_), but let’s have a look at a selection of my personal favourites.

### Colour contrast

Can you spot the error message? Hint: it’s red.

![Screenshot of Wagtail’s Documents search, with an error message barely visible under the search field](/images/blog/making-wagtail-accessible/color-contrast-error-solution-v25.png)

What can we learn from this? Testing all variations of a given UI is mandatory – focusing on the "success" path is not enough.

---

If you can’t see colours, can you tell which message is a warning, and which one is a critical error? Hint: one is slightly darker.

![Screenshot of Wagtail’s info, warning and error messages, in greyscale.](/images/blog/making-wagtail-accessible/color-contrast-warning.png)

Here, the takeaway is to never rely on colour alone. Sure – the messages come with icons, but they are identical for warnings and critical messages.

### Focus outlines

Can you spot where the focus is? I can’t either.

![Screenshot of Wagtail’s page editing UI, with a few fields, and a faint focus outline around one of the buttons of the image chooser](/images/blog/making-wagtail-accessible/focus-outline2.png)

Good, consistent focus styles are fundamental to an interface being usable with the keyboard. Don’t build different styles for each component.

### Tab stops

Tab stops are a measure of how many "tab" presses are needed to reach a given part of the page. Wagtail currently doesn’t score well at this, to say the least.

![Screenshot of the Wagtail page editing UI, with a visualisation of tab stops overlayed – the tabs start on random buttons, then go through the menu, and finally arrive on the main content](/images/blog/making-wagtail-accessible/tab-stops-solution-v25.png)

---

As a bonus, here is a recording of testing Wagtail 2.5 with a screen reader:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/f98wE4SwGLk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What we fixed

Quite simply, we went from 336 to 172 issues, with the remainder essentially on parts of Wagtail we chose not to cover (yet!). The [Wagtail 2.6 release notes](https://docs.wagtail.org/en/latest/releases/2.6.html) have more information about the fixes:

- Better text-to-background color contrast across the whole CMS
- Increased font size across the board as well
- Added focus outline styles
- Added more ARIA landmarks and refactored heading structure
- Added a lot more contextual information to links for screen reader users
- Fixed the icons implementation (more or less)
- Fixed focus not moving to the pages explorer

## Up next

Even though this was a wonderful push to make Wagtail more accessible, in practice this really should be part of ongoing development. Accessibility should be taken into account in the design & dev workflow for any UI changes. Contributors to Wagtail should have clear information on what to do to make sure they build accessible UIs.

We’re not there yet, but you can follow our progress and get involved by:

- Looking at the accessibility RFC: [Making Wagtail Accessible for users of assistive technologies](https://github.com/wagtail/rfcs/pull/37). Comments welcome!
- Reviewing our backlog: [WCAG2.1 AA compliance](https://github.com/wagtail/wagtail/projects/5) project on GitHub.
- Joining us on [Wagtail’s Slack workspace](https://github.com/wagtail/wagtail/wiki/Slack), in the #accessibility channel.

And last but not least, this year we are organising a [Wagtail sprint focused on accessibility](https://wagtail.org/blog/bristol-sprint-2020/) in Bristol.

---

## References

[1]: https://github.com/wagtail/wagtail/issues/4199#issue-288601594
[2]: https://www.digital.govt.nz/standards-and-guidance/nz-government-web-standards/web-accessibility-standard-1-0/
[3]: https://www.section508.gov/
[4]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2016.327.01.0001.01.ENG
[5]: https://www.legislation.gov.uk/uksi/2018/952/introduction/made
[6]: https://en.wikipedia.org/wiki/Universal_design
[7]: https://www.w3.org/TR/WCAG21/#conformance-reqs
[8]: https://www.w3.org/WAI/policies/
[9]: https://github.com/dequelabs/axe-core
[10]: https://pa11y.org/
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
- [Wagtail 2.6 release notes](https://docs.wagtail.org/en/latest/releases/2.6.html)
- [WCAG2.1 AA compliance roadmap](https://github.com/wagtail/wagtail/projects/5)
- [Accessibility support targets & tooling setup (#4871) #5245](https://github.com/wagtail/wagtail/pull/5245)
- [RFC 37: Making Wagtail Accessible for users of assistive technologies](https://github.com/wagtail/rfcs/pull/37)
