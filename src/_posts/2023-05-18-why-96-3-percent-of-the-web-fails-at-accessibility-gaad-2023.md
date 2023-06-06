---
layout: post
title: "Why 96.3% of the Web Fails at Accessibility - GAAD 2023"
date: 2023-05-18 16:13:03 +0100
comments: true
categories: [Accessibility, Report, Wagtail]
---

As part of Global Accessibility Awareness Day 2023, here is an overview of the state of accessibility on the Web, and specifically how technology like Wagtail has an impact.

<!-- more -->

Slides (Google Slides): [Why 96.3% of the Web Fails at Accessibility - GAAD 2023](https://docs.google.com/presentation/d/15KUwbaVI_bKO1xJwRvWw5gSGXaufVryAE4xXxde6-tA/edit)

Recording:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Htybs50VpfU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Highlights

Here are high-level highlights / graphs from the presentation.

### 96.3%

96.3% of the top 1’000’000 sites have basic\* accessibility issues. Source: [WebAIM Million](https://webaim.org/projects/million/).

\*basic = WCAG AA failure

### Why we care about accessibility

- We want all users to have a great experience, no matter how they use the web.
- Accessibility improvements lead to usability improvements for all.

> Search: “Curb Cut Effect”

#### Legally (everywhere): [WCAG 2.1](https://www.w3.org/TR/WCAG21/), AA level

- **UK**: PSBAR 2018, Equality Act
- **EU**: Web Accessibility Act, European Accessibility Act
- **US**: ADA, Section 508

Soon – WCAG 2.2

### The extent of the problem

![Percentage of home pages with detected WCAG conformance failures over time](/images/blog/why-96-3-percent-of-the-web-fails-at-accessibility-gaad-2023/percentage-homepage-failures.png)

> Percentage of home pages with detected WCAG conformance failures over time

Source: [WebAIM Million](https://webaim.org/projects/million/)

Projecting this:

![Screencap of Excel sheet projection of how errors over time will reduce](/images/blog/why-96-3-percent-of-the-web-fails-at-accessibility-gaad-2023/analyse-tres-poussee.gif)

#### Deque / Axe: The Automated Accessibility Coverage Report

![57.38% of total issues were detected using automated tests](/images/blog/why-96-3-percent-of-the-web-fails-at-accessibility-gaad-2023/deque-axe-coverage-automation.png)

Source: Deque, 2021 – [deque.com / coverage-report (PDF)](https://deque.com/coverage-report/)

### The impact of technology

![57.38% of total issues were detected using automated tests](/images/blog/why-96-3-percent-of-the-web-fails-at-accessibility-gaad-2023/webaim-million-errors-by-cms.png)

Source: [WebAIM Million technologies](https://webaim.org/projects/million/#technologies)

### How can we do better?

Design. Technology. And Wagtail

1. Provide [**accessible defaults**](https://hiddedevries.nl/en/blog/2020-03-01-more-accessible-defaults-please).
2. Follow accessibility best practices.

#### Methodology: Shift-Left

![57.38% of total issues were detected using automated tests](/images/blog/why-96-3-percent-of-the-web-fails-at-accessibility-gaad-2023/deque-shift-left.png)

Ref: [deque.com / shift-left](https://www.deque.com/shift-left/)

Shift-Left in practice

- Clear strategy defined from the get-go
- Accessibility considerations at every stage
- Automated and manual QA
- **Audits as a last resort!**

#### Good resources

- Guides for all roles: [Accessibility for Teams](https://accessibility.digital.gov/) (GSA)
- Acceptance criteria**:** [a11y BID](https://www.deque.com/blog/collaborative-planning-the-forgotten-step-of-accessible-development/), [MagentaA11y](https://www.magentaa11y.com/)

### Accessible defaults

Accessible defaults means…

- Doing the right thing should be the path of least resistance.
- The default behavior should lead to accessible experiences _without extra work_.
- `<button>Submit</button>` over `<div role="button">Submit</div>`

#### Existing standard: [ATAG 2.0](https://www.w3.org/TR/ATAG20/)

ATAG: Authoring Tool Accessibility Guidelines

- [A. Make the authoring tool user interface accessible](https://www.w3.org/TR/ATAG20/#part_a)
- [B. Support the production of accessible content](https://www.w3.org/TR/ATAG20/#part_b)

#### Authoring tools?

- web page authoring tools (e.g. [WYSIWYG](https://www.w3.org/TR/ATAG20/#def-WYSIWYG) HTML editors)
- software for directly editing source code
- software for converting to [web content technologies](https://www.w3.org/TR/ATAG20/#def-Web-Content-Technology) (e.g. "Save as HTML" features in office document applications)
- integrated development environments (e.g. for web application development)
- software that generates web content on the basis of [templates](https://www.w3.org/TR/ATAG20/#def-Template), scripts, command-line input or "wizard"-type processes
- software for rapidly updating portions of web pages (e.g. blogging, wikis, online forums)
- software for generating/managing entire websites (e.g. **content management systems**, courseware tools, content aggregators)
- email clients that send messages using web content technologies
- multimedia authoring tools
- software for creating mobile web applications

Examples:

- Rails, Django, CKEditor, TinyMCE, Wagtail, Drupal
- Zoom, **Slack**, Gmail, Excel, Notion
- Instagram, YouTube, TikTok, LinkedIn Live
- VS Code, GitHub. Tailwind, HTMX, React.

#### Demand more from your tools

Back to ATAG:

- B.1. Fully automatic processes produce accessible content
- B.2. Authors are supported in producing accessible content
- B.3. Authors are supported in improving the accessibility of existing content
- B.4. Authoring tools promote and integrate their accessibility features

##### QA quick wins: demo

- [forced-colors / Windows High Contrast mode / Contrast themes](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- Reader mode / reading mode / immersive reader
