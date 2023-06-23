---
layout: post
title: "Maintaining the pre-commit-stylelint mirror"
date: 2023-06-23 01:47:03 +0100
comments: true
categories: [Open Source, Report, Tools]
---

About a year and a half [after set up pre-commit-stylelint](https://github.com/pre-commit/pre-commit/issues/1768), I thought I’d quickly look into how well this mirror has been running.

<!-- more -->

TL;DR; from my perspective as a maintainer and user of this mirror, it’s working great and is better by all my personal measures than an equivalent install from the main project.

## Maintenance

- It’s taken me about 1h of maintenance since initial setup. The main thing I did is writing this report, and adjusting the frequency of the mirroring script a couple times due to concerns with its energy usage.
- No one has opened any issues in the mirror repository. As far as I can tell no one has reported problems with the mirror elsewhere either.

## Infrastructure

- The script takes on average 20s to run, and did so 3 times per week for the last 12+ months. So over that year and a bit that’s somewhere around 1h of run time.
- Since initial setup, the mirror has published 38 versions of Stylelint.

Here is a graph from GitHub which shows commits – i.e. when versions were published over the last few months:

![pre-commit-stylelint mirror publish](/images/blog/maintaining-the-pre-commit-stylelint-mirror/pre-commit-stylelint-mirror-publish.png)

## Usage

- According to GitHub statistics, on average 42 people or CI builds use this mirror (clone the repository) per day
- On average there are 133 clones of the repository per day.
- According to the same stats, less than 1 person looks at the project in GitHub per day.

Here are the full statistics I have access to as of today:

![pre-commit-stylelint mirror statistics](/images/blog/maintaining-the-pre-commit-stylelint-mirror/pre-commit-stylelint-mirror-usage.png)

## Takeaway

Last year I compared the [performance of installing ESLint via a mirror vs. the base repository](https://github.com/pre-commit/pre-commit/issues/1768#issuecomment-1032701216). For that package, the mirror was about 8x faster (7s vs. a minute). If we used those numbers to assess how much processing the mirror has saved – that’d be a lower bound of `7s per use * 42 users per day * 365 days` per year: 30 hours, vs.  255 hours if the same amount of usage had happened via installs of the repository directly.

Again this is mixing _ESLint_ installation times with Stylelint usage figures, so not really correct by any means, but is a good indication the 1h the mirror runs per year is well worth the time and energy saved for everyone. If I calculate this again in the future I’ll also look at memory usage.
