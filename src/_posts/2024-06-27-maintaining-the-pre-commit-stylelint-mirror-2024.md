---
layout: post
title: "Maintaining the pre-commit-stylelint mirror - 2024"
date: 2023-06-23 01:47:03 +0100
comments: true
categories: [Open Source, Report, Tools]
---

Two years later, it’s (still) working great!

<!-- more -->

TL;DR; it’s all going well. After last year’s [Maintaining the pre-commit-stylelint mirror](/maintaining-the-pre-commit-stylelint-mirror).

One year later, still working great!

## Maintenance

Pretty sure again the maintenance has been 30min to 1h over the year, mostly writing this report, reviewing whether anyone has opened any issues / support questions about this hook. There’s not been any that I could find.

## Infrastructure

- The script takes on average 18s to run (down from 20s), and did so 2 times per week for the last 12+ months. So over that year that’s somewhere around 31min of run time (down from 60min).
- Since last year’s report, the mirror has published 22 versions of Stylelint (v15.9.0 to v16.6.1).

Commits according to GitHub:

![GitHub commits graph](/images/blog/maintaining-the-pre-commit-stylelint-mirror-2024/pre-commit-stylelint-mirror-publish.png)

## Usage

- According to GitHub statistics, on average 44 people or CI builds use this mirror (clone the repository) per day (up from 42).
- On average there are 143 clones of the repository per day (up from 133).
- According to the same stats, less than 1 person looks at the project in GitHub per day (no change).

Full usage statistics as of today:

![GitHub usage statistics](/images/blog/maintaining-the-pre-commit-stylelint-mirror-2024/pre-commit-stylelint-mirror-publish.png)

## Takeaway

It’s working great.
