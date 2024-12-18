---
layout: post
title: "Wagtail’s product quality assurance overview - 2022"
date: 2024-12-18 12:18:03 +0000
comments: true
categories: [Django, Wagtail, Test]
---

Earlier this week I stumbled upon notes from an internal discussion we had back in 2022, about Wagtail’s Quality Assurance (QA) practices.

<!-- more -->

Although this is all from 2022, it’s still very relevant, so I thought I’d take a moment to re-post our notes here for future reference. Though most of those things are listed elsewhere, it’s spread across a lot of different docs. None of those lists are exhaustive – they’re just our notes from one discussion. Here is a screenshot of the original whiteboard:

![Screenshot of post-it notes arranged in a rough grid with four categories](/images/blog/wagtail-product-qa-testing-in-2022/qa_workshop_outcomes_december_2022.png)

## What Wagtail maintainers do now

In no particular order:

- Comprehensive unit test suites for Wagtail and add-on packages
- [Wagtail release candidates](https://github.com/wagtail/wagtail/discussions/12440) for community testing
- PRs reviewed by a member of the core team
- Edit our local [bakerydemo](https://github.com/wagtail/bakerydemo) setup for testing, w/ fixtures
- Linting / code style checks on commit
- Other types of static analysis in CI
- [Puppeteer + Axe integration tests](https://github.com/wagtail/wagtail/tree/main/client/tests/integration)
- Automated accessibility checks w/ Pa11y
- Visual regression testing with Backstop.js
- [DebugBear](https://www.debugbear.com/)
- [BrowserStack cross-browser testing](https://www.browserstack.com/open-source)
- [Assistiv Labs](https://assistivlabs.com/) for assistive tech testing
- Pull request template QA checklist
- Pattern library with Storybook

## QA issues we have noticed

- Unwillingness to try out release candidates -> bugs only get caught after release
- Design changes are made by people without knowledge of the context of past design decisions
- Not enough automated end-to-end tests
- Bakerydemo changes are not available to other developers
- Features that require complex client-side interaction are not well-tested
- Time-consuming to create test cases for manual QA
- Tickets lacking acceptance criteria
- Lots of expertise needed to QA specific scenarios
- Brittle visual regression tests
- Expertise needed to improve automated testing tools
- Main testing site unavailable in CI

## Future improvements to consider

Since 2022, we’ve made gradual improvements for a few of those items but they’re largely all still relevant.

- Run nightly tests for more add-on packages
- Pre-made test projects for add-on packages
- Encourage contributors to update bakerydemo test site for new features they add to Wagtail
- Set up more end-to-end testing
- Bakerydemo test site used in PR preview environments
- More comprehensive acceptance criteria for new features
- Cover more of the product with strong automated accessibility checks
- Percy for visual regression testing

## What has worked well?

- Running tests against pre-release versions of Django
- Automated linting checks avoid bikeshedding in code reviews
- Running end-to-end tests conditionally
- Static analysis of templates
- Assistiv Labs for QA with assistive tech
- Recent demo site features updates
- Nightly demo site
- Design review sessions

## What has changed since

Re-reviewing those 2022 notes, here are a few things I’ve noted have changed quite a bit over the two years. All of this for the better.

- User research
  - For our own needs, but also with specific organisations’ needs in mind
  - New triage label: [Needs user research](https://github.com/wagtail/wagtail/issues?q=sort%3Aupdated-desc+is%3Aopen+label%3A%22status%3A+Needs+User+Research%22)
- Sustainability / digital emissions
  - New focus
  - [Research on CMS and sites’ carbon footprint](https://wagtail.org/blog/estimating-wagtail-websites-emissions/)
- Core of core
  - Ruff
  - Triage: unconfirmed
  - Considering a switch to Playwright over Puppeteer
  - Browser support rarely an issue
  - Test coverage automation reliability issues?
  - Regular issues with docs site (search, ads)
  - Bakerydemo test site improvements
- Security
  - GitHub code scanning for security issues
  - New security team members
- Accessibility
  - [Wagtail ATAG audit](https://wagtail.org/accessibility/atag-audit/)
  - wagtail.org and guide.wagtail.org WCAG audits
  - Wagtail VPAT / Accessibility Conformance Report
- Packages
  - [Wagtail Nest](https://github.com/wagtail-nest)
  - More “official” packages we have to support
- Performance
  - [Performance audit (one-off + automation)](https://github.com/wagtail/wagtail/issues/12241)
