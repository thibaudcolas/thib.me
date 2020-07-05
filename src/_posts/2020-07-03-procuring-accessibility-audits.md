---
layout: post
title: "Procuring accessibility audits"
date: 2020-07-03 19:15:08 +0100
comments: true
categories: [Accessibility, Methodology]
---

Following from [Accessibility audits: getting started](/accessibility-audits-getting-started), here are practical tips on how to procure / schedule an accessibility audit, and how to structure the report.

<!-- more -->

Accessibility audits can take anywhere from 10 minutes to a week, depending on the scope of the audit, the amount of manual testing required, and the expected report format.

The main factors for an estimate are:

- What’s the purpose of the audit? Do we want a "compliant = yes/no", or create a backlog of improvements, or something in-between
- What’s the scope? How many sites / page types / pages. Provide links to a few pages so we have a sense of how many issues we’re likely to find (the more, the longer it takes to report them).
- What kind of report / output do they need? Either something for stakeholders, or developers, or both. Generally it takes nearly as much time to write the report as to find the issues.

Avoid compliance pass/fail audits, which are onerous, and for which we aren’t competent. Get in touch with [DAC](https://digitalaccessibilitycentre.org/), [RNIB](https://www.rnib.org.uk/rnib-business), [AbilityNet](https://abilitynet.org.uk/accessibility-services/products-and-services), or [Deque](https://www.deque.com/).

**Suggested format for medium websites**: "backlog of improvements", for which we can make a proposal for 1 to 4 days, based on automated tests, manual tests for 5 to 10 page types. A one-pager "executive summary" report, and adjoining list of issues / backlog as a spreadsheet or Trello board.

## Audit strategy

### Target standards

First, define the target standard for the audit. Generally WCAG 2.1 AA, or Section 508. We will consider the latest Section 508 version, post January 2018 update to track WCAG2.0 AA.

If relevant, also define which standards are out of scope, such as compliance for the Rehabilitation Act and ADA. Compliance for WCAG2.1 AAA is out of scope, but we may provide AAA issues as relevant if they seem to be easily solvable.

### Audit scope

Make a clear list of URLs to audit. Define whether the audit is on a production or staging environment. If there is any dynamic functionality to audit, define to what extent.

### Report format

> Keep it actionable. We don’t want to do pass/fail compliance audits.

- "Cover sheet" / written document with overview of common issues, and a scoring of how feasible it seems to reach compliance & effort involved.
- Tabular data / spreadsheet with individual issues at a more granular level. Including testing tool if relevant, & proposed solution if time allows.
- As relevant, direct output from automated / semi-automated testing tools

### High-level testing methodology

> See [Accessibility audits: getting started](/accessibility-audits-getting-started).

This is a baseline only, please adapt as needed. For all identified pages,

- Bulk automated page checks with [V.Nu HTML5 validator](https://validator.github.io/validator/)
- Bulk automated page checks with [Pa11y](https://github.com/pa11y/pa11y) – HTML CodeSniffer, Axe.

For a relevant subset of pages,

- Single-page semi-automated checks with either [Accessibility Insights](https://accessibilityinsights.io/) or similar.
- Manual keyboard navigation checks
- Manual colour contrast check for non-text UI elements and images
- Manual screen reader navigation check with VoiceOver in macOS Safari
- Manual zoom & magnification testing with Chrome & macOS Zoom

For a smaller subset of high-value pages,

- Full screen reader testing with VoiceOver in macOS Safari
- Full screen reader testing with NVDA in Firefox ESR
- Full screen reader testing with VoiceOver in iOS Safari
- Mobile touch interaction testing with iOS Safari

## Outcome of the audit

- Report to project stakeholders
- Guidance for implementers
- Report to other vendors if needed
