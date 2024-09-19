---
layout: post
title: "Wagtail’s 2023 Outreachy: projects report"
date: 2024-06-04 19:50:00 +0100
comments: true
categories: [Wagtail, Outreach, Accessibility]
---

In the December 2023 cohort, Wagtail joined Outreachy’s open source internships program with a focus on accessibility. We ran two projects.

<!-- more -->

For more background about the projects, read [Wagtail’s Outreachy projects in 2023](/wagtail-outreachy-projects-in-2023).

## Wagtail website accessibility

Sherry blogged about her project on the Wagtail blog: [Making wagtail.org more accessible](https://wagtail.org/blog/making-wagtailorg-more-accessible/). Here is my formal report per Outreachy requirements.

### Summary of the project goals completed

Primary goals:

- **Accessibility audit planning**: 100% completed, selected 6 representative pages to test with 11 different types of testing
- **Accessibility testing**: 100% completed – found 47 different issues. See [https://github.com/wagtail/wagtail/discussions/11305](https://github.com/wagtail/wagtail/discussions/11305) for full details of audit
- **Accessibility audit report**: 85% completed – executive summary available in GitHub ([https://github.com/wagtail/wagtail/discussions/11305#discussioncomment-8383881](https://github.com/wagtail/wagtail/discussions/11305#discussioncomment-8383881)), spreadsheet fully completed, 21 issues still to be moved to the GitHub backlog
- **Implement accessibility improvements**: completed fixes for 18 out of 20 issues earmarked for fixing within the scope of the project

Secondary goals:

- **Exploring accessibility best practices**: done for print stylesheets, WHCM, APCA color contrast, hgroup element
- **Sharing best practices with the community**: completed: sharing audit methodology & findings, discussions within accessibility team meetings. Work in progress: final project blog post or blog post series to report on the work, participation to upcoming community webinar

Stretch goals:

- **Auditing other sites**: completed a headline review of [https://areweheadlessyet.wagtail.org/](https://areweheadlessyet.wagtail.org/)
- **Automated tests**: postponed
- **Adding features in Wagtail**: postponed
- **Implement accessibility improvements on other sites**: fixed 4 issues on [https://areweheadlessyet.wagtail.org/](https://areweheadlessyet.wagtail.org/), 2 more issues scheduled to fix within the last week

### Impact the project will have on the open source community

Thanks to this project, we have an excellent sense of how accessible our main website is – and a clear path towards fixing all known issues. We’re aware of where there are potential blockers / major issues for us to prioritise, and can use this information to inform future project plans.

With all of this work being done in the open, we also have a solid case study of what it looks like to improve the accessibility of a website built with our software, and a good sense of what issues to look out for in other projects.

Finally, with Sherry being keen to write a detailed project report and to appear on our community webinar at the end of the project, this will further build up our profile as being an accessibility-focused project.

### What your intern learned during the internship

- Accessibility audit planning
- Accessibility testing
- Working within an accessibility team
- WCAG 2.2
- Screen reader testing: Talkback, NVDA
- WHCM / Contrast themes
- Print stylesheets
- Technical writing
- Accessibility audit reporting
- Stakeholder presentations
- Django / Python tooling
- Node front-end tooling
- Git & GitHub
- Django Templates
- ARIA
- Next.js, React, TypeScript
- CSS modules

## Accessibility features documentation

Ahmed shared his experience on the Wagtail blog: [Technical writing, asking for help, and other things I learned during my Outreachy internship](https://wagtail.org/blog/things-i-learned-during-my-outreachy-internship/).

Here is the headline improvement from his work, our new [Accessibility features](https://guide.wagtail.org/en-latest/concepts/accessibility-features/) documentation page. It covers the following features:

- Global navigation
- Skip link
- Collapsible sections
- Session time limit
- Text search
- Edit screen features
- Page-level keyboard shortcuts
- Mini-map
- Editing of headings and elements nesting in rich text fields
- Live preview
- Command palette
- User account preferences
- Profile settings
- Notification settings
- Browser-level user interface settings
- Sidebar expanded/collapsed
- Rich text toolbar pinned/unpinned
- Mini-map expanded/collapsed
- Side panel

A personal highlight for me was Ahmed’s excellent use of interviews for us to better understand the needs of our users and stakeholders.

## Up next

See you over at [wagtail/outreachy](https://github.com/wagtail/outreachy) once we’re ready to start our 2024 December cohort participation!
