---
layout: post
title: "DjangoCon US 2023: Django’s accessibility track record"
date: 2023-10-18 16:00:00 -0400
comments: true
categories: [Talks, Django, Accessibility, Report]
redirect_from:
  - /dc2023
---

Ever wonder how accessible Django is? I reviewed Django’s accessibility track record this year, and presented the results at DjangoCon US 2023.

<!-- more -->

View the presentation:

- [YouTube: Django’s accessibility track record \| Thibaud Colas \| DjangoCon US 2023](https://www.youtube.com/watch?v=IXxwzFusFlM)
- [Google Slides: Django’s accessibility track record \| Thibaud Colas \| DjangoCon US 2023](https://docs.google.com/presentation/d/1Sq1U3yNLzNUn8mPQZhw0fBwat3kcXOPpnt2N69qkEGU/edit)
- [PDF: Django’s accessibility track record \| Thibaud Colas \| DjangoCon US 2023](https://drive.google.com/file/d/1FXrCO1i0fstZxFUgQxX1XNb7ktv-2C5y/view?usp=sharing)

View the _data_ the presentation is based on: [Django accessibility data \| DjangoCon US 2023](https://docs.google.com/spreadsheets/d/13E3YSVXXCJtN036OKPvBS29k_2XCA-S6mmfEk055ifs/edit)

And here’s a supercut version of the talk as a blog post.

## Why I’m here

- Open source is rad
- Accessibility is rad
- There are a lot of rad people here who could help with this

This isn't just about compliance or checking boxes; it's about making the web a more inclusive and welcoming space for everyone.
As Django developers, we have a responsibility to consider the diverse needs of all users, especially those who rely on assistive technologies.
The decisions we make in our code can significantly impact the lives of many, and it's high time we embed accessibility in our development practices.

### A wake-up call

[![musharraf Wagtail comment](/images/blog/djangocon-us-2023-django-accessibility-track-record/musharraf-wagtail-comment.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/musharraf-wagtail-comment.png)

> Hello everyone,
>
> After reading the docs, I've decided to use Wagtail on one of my personal projects.
>
> Since I'm blind, I've discovered that my experience on editing content would be rather unpleasant, because the admin interface of Wagtail has some accessibility problems.

## 96.3%

A staggering 96.3% of the top 1,000,000 homepages have basic\* accessibility issues. Source: [WebAIM Million 2023](https://webaim.org/projects/million/)

\*basic = WCAG 2 AA fail

[![This is fine](/images/blog/djangocon-us-2023-django-accessibility-track-record/this-is-fine.jpeg)](/images/blog/djangocon-us-2023-django-accessibility-track-record/this-is-fine.jpeg)

Credit: This is fine – KC Green

This statistic isn't just alarming; it's a wake-up call for all of us in the web development community.

It’s a "North Star" of sorts.

[![North Star in long-exposure shot. silhouette of trees under blue sky](/images/blog/djangocon-us-2023-django-accessibility-track-record/good-free-photos-1nzAvdUifJE-unsplash-north-star.jpg)](/images/blog/djangocon-us-2023-django-accessibility-track-record/good-free-photos-1nzAvdUifJE-unsplash-north-star.jpg)

Credit: [Good Free Photos, silhouette of trees under blue sky, Unsplash](https://unsplash.com/photos/silhouette-of-trees-under-blue-sky-1nzAvdUifJE)

It shows us the magnitude of the challenge we face in making the web accessible.
When I came across this figure, it made me think deeply about the state of our websites and how we, as part of the Django community, contribute to this landscape.
It begs the question: What can we do better? How can we have Django lead by example?

### For Django: 95%

95% (ish) 🎉 of a sample of 25,000 Django homepages have basic\* accessibility issues.

Source: [me (HTTP Archive dataset)](https://docs.google.com/spreadsheets/d/13E3YSVXXCJtN036OKPvBS29k_2XCA-S6mmfEk055ifs/edit#gid=478397185)

\*basic = WCAG 2 AA fail

## Diving deeper: lighthouse scores, http archive

To grasp the state of Django's accessibility, we delve into Lighthouse scores and HTTP Archive data. Analyzing over 8 million websites reveals a telling story.
How does Django stack up against other frameworks? Where do we excel, and where do we fall short?
This data-driven approach helps us pinpoint specific areas needing attention.

### Median Lighthouse Accessibility scores, 2020-2023

[![Median Lighthouse Accessibility scores, 2020-2023, cwtech.report](/images/blog/djangocon-us-2023-django-accessibility-track-record/cwvtech-report-2023-10.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/cwvtech-report-2023-10.png)

This line chart tracks the median Lighthouse accessibility scores from 2020 to 2023 for sites built with different technologies, and the collective average.
The X-axis represents the date by year and month, while the Y-axis shows the median score.
The chart displays multiple lines, each corresponding to a different technology: Django, Django CMS, and WordPress, among others.
Over the years, the scores for each technology fluctuate slightly but generally show a stable trend around the 75-85 score range.

Source: [**cwvtech.report**](https://cwvtech.report/)

### Zoomed – October 2023, Median Lighthouse Accessibility scores

[![Zoomed – October 2023, Median Lighthouse Accessibility scores, 2020-2023, cwtech.report](/images/blog/djangocon-us-2023-django-accessibility-track-record/zoom-cwvtech-report-2023-10.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/zoom-cwvtech-report-2023-10.png)

Zooming in to the latest data for 2023, we can see:

- Squarespace consistently at the #1 spot, though scores have dropped recently.
- WordPress consistently above other options
- Wagtail and Rails next, at a score of "83" in October 2023
- The combined average as "All" at 82 in October 2023
- Django dropping to 80 in October 2023
- Django CMS at the bottom of the list, at 77 in October 2023

Source: [**cwvtech.report**](https://cwvtech.report/)

### Median Lighthouse accessibility score by framework

[![Median Lighthouse accessibility score by framework](/images/blog/djangocon-us-2023-django-accessibility-track-record/median-lighthouse-accessibility-score-by-framework.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/median-lighthouse-accessibility-score-by-framework.png)

This bar chart compares the median Lighthouse accessibility scores across sites built with various web frameworks.
Each bar represents a different technology, with the score denoted at the top of the bar.
Remix leads with a score of 88, followed by Next.js at 85, and the collective average at 82.
Django and Laravel trail slightly behind, with scores of 80 and 79 respectively.

Source: [**cwvtech.report**](https://cwvtech.report/)

### Deque/Axe: The Automated Accessibility Coverage Report

[![Deque Axe coverage automation](/images/blog/djangocon-us-2023-django-accessibility-track-record/deque-axe-coverage-automation.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/deque-axe-coverage-automation.png)

57.38% of Total issues were detected using automated tests.

And – 97.51% of keyboard navigation barriers can only be detected with manual tests

Source: Deque, 2021 – [(PDF) deque.com / coverage-report](https://deque.com/coverage-report/)

### Limitations of automated checks

Here is a table of how many accessibility issues different automated tools can detect.

| Checker          | Identified barriers | License              |
| ---------------- | ------------------- | -------------------- |
| SortSite         | 40%                 | Commercial           |
| Tenon            | 34%                 | Commercial           |
| WAVE             | 30%                 | ???                  |
| Axe              | 29%                 | Open source, MPL-2.0 |
| HTML CodeSniffer | 20%                 | Open source, ???     |

Source: GOV.UK GDS, 2019 – [alphagov.github.io / accessibility-tool-audit](https://alphagov.github.io/accessibility-tool-audit/)

## Diving deeper: specific lighthouse checks

Taking a closer look at Lighthouse checks, we identify common issues affecting Django sites.
And more broadly, we see how different technologies are correlated with the prevalence of different accessibility issues.

### Percentage of sites with accessibility issues, by Lighthouse check

[![Percentage of sites with accessibility issues, by Lighthouse check](/images/blog/djangocon-us-2023-django-accessibility-track-record/percentage-of-sites-with-accessibility-issues-by-lighthouse-check.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/percentage-of-sites-with-accessibility-issues-by-lighthouse-check.png)

This horizontal bar chart shows the percentage of sites with accessibility issues, broken down by individual Lighthouse checks.
The checks are listed on the Y-axis, and the corresponding percentage of sites with issues is shown on the X-axis.
The most common issues across all sites are with 'color-contrast' and 'link-name'.
The length and position of the bars indicate how widespread each issue is, with 'color-contrast' being the most prevalent problem.

Source: [me (HTTP Archive dataset)](https://docs.google.com/spreadsheets/d/13E3YSVXXCJtN036OKPvBS29k_2XCA-S6mmfEk055ifs/edit#gid=259785653)

### Sites built with Django vs. average site

[![Difference in Lighthouse audit success rate for sites built with Django vs. average site](/images/blog/djangocon-us-2023-django-accessibility-track-record/difference-in-lighthouse-audit-success-rate-for-sites-built-with-django-vs-average-site.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/difference-in-lighthouse-audit-success-rate-for-sites-built-with-django-vs-average-site.png)

### Sites built with Wagtail vs. average site

[![Difference in Lighthouse audit success rate for sites built with Wagtail vs. average site](/images/blog/djangocon-us-2023-django-accessibility-track-record/difference-in-lighthouse-audit-success-rate-for-sites-built-with-wagtail-vs-average-site.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/difference-in-lighthouse-audit-success-rate-for-sites-built-with-wagtail-vs-average-site.png)

### Sites built with Drupal vs. average site

[![Difference in Lighthouse audit success rate for sites built with Drupal vs. average site](/images/blog/djangocon-us-2023-django-accessibility-track-record/difference-in-lighthouse-audit-success-rate-for-sites-built-with-drupal-vs-average-site.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/difference-in-lighthouse-audit-success-rate-for-sites-built-with-drupal-vs-average-site.png)

### Sites built by Torchbox vs. average site

[![Difference in Lighthouse audit success rate for sites built by Torchbox vs. average site](/images/blog/djangocon-us-2023-django-accessibility-track-record/difference-in-lighthouse-audit-success-rate-for-sites-built-by-torchbox-vs-average-site.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/difference-in-lighthouse-audit-success-rate-for-sites-built-by-torchbox-vs-average-site.png)

---

These charts offer a data-driven glimpse into how each framework performs in accessibility standards, providing actionable insights for developers to prioritize improvements in their web projects.

### Technology has an impact on accessibility

- Overall architecture, and implementation details
- Build methodology
- QA / testing
- Project management

## Demo time

### A fun exercise: djangoproject.com

Speedrun! Go to [djangoproject.com](https://www.djangoproject.com/) and time:

- How long it takes to find 1 accessibility issue
- How long it takes to find 10
- How long it takes to find 100

Recommended testing tool: [accessibilityinsights.io](https://accessibilityinsights.io/) (Browser extension by Microsoft bundling the Axe checker)

Solution: [issue #1381](https://github.com/django/djangoproject.com/issues/1381)

### A fun exercise: djangoproject.com

Can you spot…

- A color contrast issue
- A keyboard interaction issue
- A heading issue

Solution: [issue #1381](https://github.com/django/djangoproject.com/issues/1381)

### More fun! Django forms

[static-django-demo.netlify.app/django_admin_tests/v5.0/english/forms/example_form/table/](https://static-django-demo.netlify.app/django_admin_tests/v5.0/english/forms/example_form/table/)

Can you spot…

- A cognitive burden
- A mobile device / small screen issue
- A screen reader labelling issue

Solution: tickets [#32339](https://code.djangoproject.com/ticket/32339), [#32338](https://code.djangoproject.com/ticket/32338)

### More fun! The Django admin

We need to talk about the Django admin. Seriously.

[static-django-demo.netlify.app/django_admin_tests/v5.0/english/admin/auth/user/7/change/](https://static-django-demo.netlify.app/django_admin_tests/v5.0/english/admin/auth/user/7/change/)

[![Django admin screenshot](/images/blog/djangocon-us-2023-django-accessibility-track-record/django-admin-screenshot.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/django-admin-screenshot.png)

### Django admin 10 years behind

How do we square this with it being so popular?

[![Django Developers survey 2022: What Django contrib apps do you find most useful?](/images/blog/djangocon-us-2023-django-accessibility-track-record/django-survey-2022-what-contrib-apps-most-useful.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/django-survey-2022-what-contrib-apps-most-useful.png)

This horizontal bar chart displays the results of a survey asking users which Django contrib apps they find most useful.
The 'admin' app leads with 85%, followed closely by 'auth' at 80%, and 'postgres' at 50%.

Source: [2022 Django Developers survey](https://lp.jetbrains.com/django-developer-survey-2022/)

## What to do, where to go

Improving accessibility isn't just a technical challenge; it's a community effort.
I shared resources and best practices that can guide us in making our Django projects more inclusive.
As well as practical ways to organize our community to catch up on 10 years of accessibility debt.

### An accessible future for Django?

Here were our plans from 2020:

- WCAG 2.1 AA compliant Django admin
- WCAG 2.1 AA compliant [djangoproject.com](https://www.djangoproject.com/)
- Built-in Django features (forms, etc) accessible by default
- Official documentation about accessibility, common gotchas
- Review of major third-party packages
- Review of major third-party project templates

### An accessible future for Django? … now

- 10% ⌛ WCAG 2.1 AA compliant Django admin
- 10% ⌛ WCAG 2.1 AA compliant [djangoproject.com](https://www.djangoproject.com/)
- 80% ⌛ Built-in Django features (forms, etc) accessible by default ⭐
- 40% ⌛ Official documentation about accessibility, common gotchas 💛
- 5% ⌛ Review of major third-party packages
- 2% ⌛ Review of major third-party project templates
- 3 ⌛ People on accessibility team
- Survey of Django users ⭐

What do you think?

### An accessible future for Django? … 2024?

Our hopes for 2024:

- 20% ⌛ WCAG 2.1 AA compliant Django admin
- 100% ✅ WCAG 2.1 AA compliant [djangoproject.com](https://www.djangoproject.com/)
- 100% ✅ Built-in Django features (forms, etc) accessible by default
- 100% ✅ Official documentation about accessibility, common gotchas
- 10% ⌛ Review of major third-party packages
- 10% ⌛ Review of major third-party project templates

What do you think?

### For Django core: Shift-Left accessibility methodology

[![Deque Shift Left](/images/blog/djangocon-us-2023-django-accessibility-track-record/deque-shift-left.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/deque-shift-left.png)

Ref: [deque.com / shift-left](https://www.deque.com/shift-left/) (not specific to Deque, just a nice graphic)

### What Shift-Left would look like for Django core

1. Clear standards for all contributors
2. Feature design with accessibility in mind
3. Automated QA in continuous integration
4. Manual QA as part of code review
5. Lengthy audits only as a last resort

### ATAG 2.0

[ATAG](https://www.w3.org/TR/ATAG20/): Authoring Tool Accessibility Guidelines

- [A. Make the authoring tool user interface accessible](https://www.w3.org/TR/ATAG20/#part_a)
- [B. Support the production of accessible content](https://www.w3.org/TR/ATAG20/#part_b)

#### A wake-up call

[![Musharraf tweet](/images/blog/djangocon-us-2023-django-accessibility-track-record/musharraf-tweet.png)](/images/blog/djangocon-us-2023-django-accessibility-track-record/musharraf-tweet.png)

## Let’s join forces

This is a call to action for all of us in the Django community.
This requires our collective effort.

### What our community is already doing

- DjangoCon
  - Accessibility of the physical space
  - Multiple events around the world to cut on travel time / fatigue
  - Accessibility guidelines for speakers
  - Captions! Human captions! Thank you captioners!
- [djangoproject.com](https://www.djangoproject.com/)
  - Accessibility testing
  - Accessibility considerations as part of upcoming redesign (thank you Paolo!)
- Django documentation
  - Guidelines for code contributors
  - Guidelines for documentation contributors
  - Documentation for admin users

### Let’s join forces! Lots of opportunities

- Big changes via mentoring programs like Djangonaut Space, Outreachy, GSoC, GSoD
- Gradual fixes via sprints
- An ATAG audit?
- Django Girls tutorial extension focused on accessibility
- Accessibility baseline in startproject starter template
- More advanced templates focused on best practices
- General sustainability improvements to Django ([WSG 1.0 guidelines](https://w3c.github.io/sustyweb/))
- Standardised review of all Jazzband packages?

### Let’s join forces! There are lots of ways to contribute

- Chat in the #accessibility Discord channel
  - Ask questions about Django and related projects
  - Share resources
- Work with our accessibility team at sprints or online (Sarah, Thibaud, Tom)
  - Let’s collaborate on a project (package? website?)
  - Join the team? :wink:
- Help us make Django more compelling for UI people?
  - Make space for contributions from UX/UI designers and front-end developers
  - Modernize Django tooling and templates
  - Help us talk to our users, disabled or not
- Raise the bar
  - Test Django and related projects and report issues
  - Research accessibility best practices and share your findings
  - Talk or write about accessibility in the Django/Python community

## Thank you!

Let’s work on this together some time?

## Questions and answers

The session concluded with insightful questions and engaging discussions.
