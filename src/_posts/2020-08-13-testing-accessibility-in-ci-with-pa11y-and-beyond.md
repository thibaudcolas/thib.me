---
layout: post
title: "Testing accessibility in Continuous Integration with Pa11y and beyond"
date: 2020-08-13 22:21:08 +0100
comments: true
categories: [Accessibility, Tools, Automation, Methodology]
---

Here are tools I recommend to test for accessibility issues in continuous integration, where automation is the only option, and reliability is paramount.

<!-- more -->

## The requirements of CI

It’s worth pointing out early – no accessibility testing tool can [find all issues](https://alphagov.github.io/accessibility-tool-audit/) . With this in mind, in CI, we need to focus on tools that find as much as possible… but don’t create false positives, which are very damaging when they fail your build. It’s more important for a tool to have a [high precision, than a high recall](https://en.wikipedia.org/wiki/Precision_and_recall)).

## Static analysis

This is always a valuable first line of defense.

- Basic checks for stylesheets: [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y)

- Relatively advanced checks for React code: [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react), [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- And a Vue equivalent: [eslint-plugin-vue-a11y](https://github.com/maranran/eslint-plugin-vue-a11y)
- For HTML templates, you can try my own experimental HTML templates linter, [Curlylint](https://github.com/thibaudcolas/curlylint).

## Accessibility tests in unit and integration tests

Here are the options, from simplest to most complex:

- [jest-axe](https://github.com/nickcolley/jest-axe) in jsdom for React projects. It’s very lightweight to set up, and gives surprisingly good results.
- [jest-axe](https://github.com/nickcolley/jest-axe) in Puppeteer. It’s not lightweight to set up, far from it, but does a bit more.
- [Pa11y](https://pa11y.org/), or [pa11y-ci](https://github.com/pa11y/pa11y-ci). Not lightweight either, but simple to configure.
- Google’s Lighthouse also has a [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) variant which may be useful when also wanting to have performance and best practice checks.
- An alternative could also be to run HTML validation with [V.Nu HTML5 validator](https://validator.github.io/validator/).

## What to test

It’s not always easy to have test content to run the checks against of in CI. My personal preference is to run the tests against a pattern library’s components, for example [Storybook](https://storybook.js.org/) or [django-pattern-library](https://github.com/torchbox/django-pattern-library). As part of creating the components, we naturally create test data for them similarly to unit tests (TDD or not) – this test content can then be used to test the components’ variations for accessibility issues.
