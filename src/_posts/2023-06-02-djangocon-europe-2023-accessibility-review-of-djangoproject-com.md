---
layout: post
title: "DjangoCon Europe 2023 – Accessibility review of djangoproject.com"
date: 2023-06-02 22:13:03 +0100
comments: true
categories: [Accessibility, Audits, Community, Test, Django]
---

Here are the results of a quick accessibility audit I did for the [Django project website](https://www.djangoproject.com/), as part of the DjangoCon Europe 2023 sprints.

<!-- more -->

I recorded myself going through this and put it up on YouTube, so we have a demo for each of the issues: [djangoproject.com accessibility testing - DjangoCon Europe 2023](https://www.youtube.com/watch?v=dAiMPTOMh1U). I’ve also reported the issues in the project’s GitHub repository: [Accessibility issues with site design and implementation #1381](https://github.com/django/djangoproject.com/issues/1381).

<iframe width="560" height="315" src="https://www.youtube.com/embed/dAiMPTOMh1U" title="YouTube video player: djangoproject.com accessibility testing | DjangoCon Europe 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Overview

TL;DW; There are pretty fundamental issues, that aren’t always blockers but would require widespread changes to address: keyboard support, color contrast, use of headings. My recommended highest-priority changes are:

1. A new top-level navigation, including keyboard support fixes.
2. Changes to the main content layout for easier navigation to important links.
3. A new color palette with more legible text.

## Issues

Here is a detailed list of issues I spotted, split into the categories I normally use, with links to my testing video’s timestamps, WCAG success criteria, and existing GitHub issues where appropriate.

### Blockers

> Blocker: Critical issue. Certain users cannot perceive or operate this, with no workaround available.

- The "hamburger" menu toggle is impossible to use with a keyboard. This makes it impossible for keyboard and screen reader users to access menu items and navigate the site in this way. ([Menu button is not a button #1234](https://github.com/django/djangoproject.com/issues/1234), [18:18](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1098s), [SC 2.1.1 Keyboard](https://www.w3.org/TR/WCAG22/#keyboard)).
- The page’s second column content is hidden in print stylesheets. This makes it impossible for users of magnifiers to access this content ([22:00](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1320s)).

### Major

> Major: Certain users are very likely to have difficulty perceiving or operating this.

- Heading level 1 should be used for the title of the page / visually most prominent heading, ideally not for invisible content ("Django" on homepage). Ideally each page would only have a single h1. ([07:04](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=424s), [SC 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG22/#info-and-relationships)).

### Confusing

> Confusing: Understanding or operating this may be difficult for some users.

- Focus style almost invisible on "Get started with Django" CTA ([02:30](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=150s), [SC 1.4.11 Non-Text Contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast)).
- Links should be identifiable with other means than color ([05:30](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=330s), [SC 1.4.1 Use of Color](https://www.w3.org/TR/WCAG22/#use-of-color)).
- All page content should be in a landmark ([09:39](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=579s), [SC 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG22/#info-and-relationships)).
- A lot of text has color contrast issues making it hard to read ([#974](https://github.com/django/djangoproject.com/issues/974), [13:08](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=788s), [SC 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum)).
- Scrolling should remain vertical only (no overflows) when using 400% page zoom ([16:48](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1008s), [SC 1.4.10 Reflow](https://www.w3.org/TR/WCAG22/#reflow)).
- Website logo disappears in forced colors mode with a light theme (white on white) ([19:14](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1154s), [SC 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum)).

### Minor

> Minor: Degraded user experience for some users. This slows down use of the application.

- Missing skip link ([00:42](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=42s), [SC 2.4.1 Bypass Blocks](https://www.w3.org/TR/WCAG22/#bypass-blocks)).
- Custom "dotted outline" focus styles: not visible enough and broken in main navigation ([01:02](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=62s), [SC 2.4.13 Focus Appearance](https://www.w3.org/TR/WCAG22/#focus-appearance)).
- The two-column layout as implemented means reaching the second column content with the keyboard requires going through the entire first column ([02:58](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=178s), see also [#494](https://github.com/django/djangoproject.com/issues/494)).
- The sidebar heading hierarchy makes it hard to understand the content structure ([07:04](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=424s)).
- Keep uppercase text to a minimum. Can be problematic to read for some people, shouty, leads to pronounciation issues with screen readers ([15:40](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=940s)).
- Avoid interactive elements going right up to the edge of the screen on smaller viewports ("Get started with Django" button), as it makes it hard for touch users to touch-scroll past those elements ([17:30](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1050s)).
- For forced colors mode compatibility, show the regions of the page with borders since backgrounds are removed ([19:40](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1180s)).
- For forced colors mode compatibility, show the outline of buttons with borders since backgrounds are removed ([19:40](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1180s)).
- Form fields should remain visible in print stylesheets so the page content is understandable ([22:20](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1340s)).

### Best practices

> Best practices: These are not accessibility issues, but are recommended for ensuring the best user experience.

- The theme toggle’s icon should resize according to browser font size changes ([15:20](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=920s)).
- Footer logos should also ideally resize according to browser font size changes ([15:20](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=920s)).
- Hide the theme toggle in print styles ([21:05](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1265s)).
- Have link URLs visible in print styles ([21:05](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1265s)).
- Hide footer content in print styles ([21:05](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1265s)).

## Methodology

In the interest of time, I only reviewed the site with a suite of automated and semi-automated checks available in Google Chrome:

- Axe automated checks bundled in the [Accessibility Insights extension](https://accessibilityinsights.io/).
- Other tools from Accessibility Insights: Landmarks, Color, Tab stops, Headings, Accessible names
- Simulated [forced colors mode](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- Font resizing and page zoom
- Keyboard navigation

Though those tests will find a lot of common issues, normally accessibility testing would include navigating the site with assistive technologies (screen readers, speech recognition, screen magnification, etc).

## Video timestamps

- [00:00 - Intro](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=0s)
- [00:15 - Methodology](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=15s)
- [00:30 - Keyboard support](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=30s)
- [00:42 - Missing skip link](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=42s)
- [01:02 - Focus styles in nav](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=62s)
- [02:30 - Focus styles in main CTA](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=150s)
- [02:58 - Two-column layout](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=178s)
- [03:50 - Tab stops](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=230s)
- [04:50 - More focus styles issues](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=290s)
- [05:30 - Link indicators](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=330s)
- [07:04 - Headings](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=424s)
- [09:39 - Landmarks](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=579s)
- [10:13 - Complementary landmark](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=613s)
- [11:05 - Accessible names](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=665s)
- [11:30 - Heading "Django"](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=690s)
- [12:03 - Good example: theme toggle](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=723s)
- [12:12 - Decorative icons](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=732s)
- [12:25 - Alt text in theory](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=745s)
- [13:08 - Color contrast](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=788s)
- [13:50 - Design issues leading to low contrast](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=830s)
- [14:38 - CSS overview](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=878s)
- [15:20 - Font resizing](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=920s)
- [15:40 - Uppercase text](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=940s)
- [16:30 - Resizing images of text and icons](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=990s)
- [16:48 - Page-level 400% zoom](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1008s)
- [17:10 - Overflow issues](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1030s)
- [17:30 - Edge-to-edge button](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1050s)
- [18:10 - Enough margin to scroll past](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1090s)
- [18:18 - Mobile menu keyboard support](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1098s)
- [19:14 - Forced colors mode](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1154s)
- [19:28 - Disappearing logo](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1168s)
- [19:40 - Page structure and button borders](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1180s)
- [20:20 - Link text in WHCM](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1220s)
- [21:05 - Print stylesheets](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1265s)
- [22:00 - Missing sidebar in print styles](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1320s)
- [22:20 - Missing form fields](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1340s)
- [22:55 - Recap](https://www.youtube.com/watch?v=dAiMPTOMh1U&t=1375s)
