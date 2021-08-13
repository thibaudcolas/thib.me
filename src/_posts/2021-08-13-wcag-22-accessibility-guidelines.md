---
layout: post
title: "WCAG 2.2: new accessibility guidelines on the way"
date: 2021-08-13 16:52:22 +0000
comments: true
categories: [WCAG, Accessibility, Methodology]
canonical: https://torchbox.com/blog/wcag-22-accessibility-guidelines/
---

In web accessibility testing, WCAG 2.1 is the gold standard. But talk to experts -- and they'll be quick to tell you it's a very low baseline. WCAG 2.2's latest draft introduces new criteria, relevant for all websites.

<!-- more -->

## What’s new in WCAG 2.2

Plenty of good things -- there are 9 new success criteria:

- Guideline 2.4 Navigable
  - [2.4.11 Focus Appearance (Minimum) (AA)](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#2411-focus-appearance-minimum-aa)
  - [2.4.12 Focus Appearance (Enhanced) (AAA)](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#2412-focus-appearance-enhanced-aaa)
  - [2.4.13 Page Break Navigation (A)](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#2413-page-break-navigation-a)
- Guideline 2.5 Input Modalities
  - [2.5.7 Dragging Movements (AA)](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#257-dragging-movements-aa)
  - [2.5.8 Target Size (Minimum) (AA)](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#258-target-size-minimum-aa)
- Guideline 3.2 Predictable
  - [3.2.6 Consistent Help (A)](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#326-consistent-help-a)
  - [3.2.7 Visible Controls (AA)](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#327-visible-controls-aa)
- Guideline 3.3 Input Assistance
  - [3.3.7 Accessible Authentication (A)](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#337-accessible-authentication-a)
  - [3.3.8 Redundant Entry (A)](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#338-redundant-entry-a)

As well as the normative guidelines, all criteria also use [stories of web users](https://www.w3.org/WAI/people-use-web/user-stories/) to better convey what problems we are trying to prevent with those guidelines -- and what "success" looks like.

There are a lot of good resources covering the new criteria in much better detail than we ever could -- we'd highly recommend taking a look at Alastair Campbell's talk [WCAG 2.2: What's new and what to do with it](https://www.youtube.com/watch?v=EZlqSwgKuZE) at the Virtua11y conference.

## Applying WCAG 2.2 to sites

There won't be any legal requirements to follow this new draft version for quite a while. That said, the new guidelines are so good they are well worth implementing and testing for right away.

WCAG 2.1 is a good baseline, but there are a lot of areas where it falls short and we should aim beyond. To illustrate -- here is a color contrast fail, generated with [Who Can Use](https://whocanuse.com/). According to WCAG 2.1 rules, the black text would be higher-contrast over this shade of blue than white text:

![Comparison of lorem copy in white and black, over a blue background (hex code #2E7CD6). White has a contrast ratio of 4.23:1, non-compliant, black has 4.97:1, passing level AA.](/images/blog/wcag-22-accessibility-guidelines/whocanuse-blue.png)

> Comparison of lorem copy in white and black, over a blue background (hex code #2E7CD6). White has a contrast ratio of 4.23:1, non-compliant, black has 4.97:1, passing level AA

This is due to how basic the contrast calculations are in WCAG 2.1. This specific issue will -- hopefully -- be addressed in the upcoming [WCAG 3.0](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/). It's still a very early draft, but is well worth being aware of as well if you're critically thinking of where else WCAG 2.1 might be falling short.

## We can help

Torchbox offers standalone [accessibility consulting services](https://torchbox.com/digital-products/accessibility-testing/), with the goal of helping organisations aim beyond compliance. Don't hesitate to get in touch if you want your site to get ahead of the curve.
