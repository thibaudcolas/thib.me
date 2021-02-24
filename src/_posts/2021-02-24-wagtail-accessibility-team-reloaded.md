---
layout: post
title: "Accessibility team reloaded"
date: 2021-02-24 07:42:03 +0000
comments: true
categories: [Accessibility, Wagtail, Community]
---

After [6 months of operations](https://wagtail.io/blog/announcing-wagtail-sub-teams/), we reflect on the progress our [accessibility team](https://github.com/wagtail/wagtail/wiki/Wagtail-sub-teams#accessibility) has made, and go on the lookout for new contributors.

<!-- more -->

## Progress to date

Early on, [we chose](https://github.com/wagtail/wagtail/wiki/Accessibility-team#2020-07-17) to give priority to improvements we could make to sites built with Wagtail, rather than the Wagtail admin. Practically, this meant:

- Putting together [Wagtail’s accessibility considerations documentation](https://docs.wagtail.io/en/latest/advanced_topics/accessibility_considerations.html), as most of the accessibility issues we identified were either dependent on how Wagtail is used, or could be worked around by implementers.
- From this list, we also created a [backlog of known accessibility issues](https://github.com/wagtail/wagtail/projects/10), which we would then proceed to fixing.

Along the way, we also kept working on the [SVG icons](https://github.com/wagtail/wagtail/issues/6107) refactoring for the admin, bit by bit.

## Team operations

We ran a short [retrospective](https://github.com/wagtail/wagtail/wiki/Accessibility-team#2021-01-22----team-retrospective) to reflect on the team’s way of working over the last 6 months.

- There were a total of 5 people involved at some point over the 6 months (Scott, Andreas, Nick, Helen, and Thibaud), but only 2 people attended each meeting on average. Not as much as we’d ideally want to.
- We met 9 times, for 30min each, scheduled once every two weeks.
- Overall we’re happy with what we’ve achieved and how the team works.
- We were keen to do more automated tests and manual auditing but didn't get around to it.

## The future

There are a few changes we will want to see over the next 6-month tenure of the team.

**We’ll want to do a new, comprehensive accessibility audit of Wagtail**, either for WCAG 2.2 AA or ATAG 2.0. We want to have a clear, public record of how we’re doing.

We’ll review our contribution guidelines **so accessibility is part and parcel of making changes to Wagtail**.

And we’ll also investigate having **automated accessibility tests built into Wagtail**. [wagtail-accessibility](https://github.com/neon-jungle/wagtail-accessibility) is one of the most popular third-party packages out there, and we want to double down on having this be one of Wagtail’s strengths.

---

### We also want to involve more people

There’s only so much we can do with two to three of us actively involved – ideally we’d want a team twice that size! All are welcome regardless of skill level or background, and the time commitment is very reasonable. We’re particularly keen to work with people who:

- Have personal experience of access and functional needs, or who are regular users of assistive technologies.
- Work on User Experience, design, or content – and can help us understand the needs of our users.

And of course web developers who want to have a practical impact on making the web more accessible!

Does this sound like your kind of jam? If you’re keen to learn more, [reach out to us on Slack](https://github.com/wagtail/wagtail/wiki/Slack) in #accessibility.
