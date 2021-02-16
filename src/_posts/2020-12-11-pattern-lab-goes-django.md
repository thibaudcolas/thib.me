---
layout: post
title: "Pattern Lab goes Django"
date: 2020-12-11 12:52:22 +0000
comments: true
categories: [Django, Wagtail, Project]
canonical: https://torchbox.com/blog/reusable-ui-components-pattern-lab-goes-django/
---

If you're into UI component reuse, you may have heard of [Atomic Design](https://atomicdesign.bradfrost.com/) and [Pattern Lab](https://patternlab.io/). We're big fans at Torchbox, but Pattern Lab is PHP or Node-based, while we decided long ago to [leave the PHP / Drupal world behind](https://torchbox.com/blog/alternatives-to-drupal/), and concentrate on Django. We took Pattern Lab with us, and built [django-pattern-library](https://torchbox.github.io/django-pattern-library/) -- a.k.a. Pattern Lab goes Django.

<!-- more -->

## Pattern libraries at Torchbox

At Torchbox, pattern libraries are a way to separate concerns between front-end and back-end development. We've been using our Django pattern library package for a couple of years to:

- Clarify responsibilities and separate concerns, both in code, and as members of a development team between front-end and back-end development.
- As needed, enable for front-end developers to work on pages and block templates before any back-end development happens.
- Encourage code reuse and components composition -- defining independent UI components, reusable without markup copy-paste, and reusable on other projects like any Django app.

Does this sound useful to you? Go and have a look at our introductory presentation from Wagtail Space US 2020, [Reusable UI components -- A journey from React to Wagtail](https://www.youtube.com/watch?v=isrOufI7TKc):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/isrOufI7TKc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Slides: [Wagtail Space US 2020 - Reusable UI components – A journey from React to Wagtail](https://docs.google.com/presentation/d/1pZAbunn0Ci8B9NR0mS5taOPe7BMdAiDrKNIcd9xBWO4/edit)

## Our first big release

Pattern Lab has been around for a while, and so has our own [django-pattern-library](https://torchbox.github.io/django-pattern-library/), but we only open-sourced it a few months ago. Sadly it wasn't as well documented or flexible as we would have liked it to be. This is starting to change with our most recent release. Here are the headline features:

- [Support for Python 3.9, Django 3.0, 3.1, and tentatively 3.2](https://torchbox.github.io/django-pattern-library/getting-started/#compatibility). We also started running the project's tests against Django's development branch for good measure.
- A new [*render_patterns* management command](https://torchbox.github.io/django-pattern-library/guides/automated-tests/#with-render_patterns), so you can test whether all of your project's patterns render successfully at once. Think of it as smoke tests for pattern library components.
- [Optional default values for tag overrides](https://torchbox.github.io/django-pattern-library/reference/api/#override_tag), so you no longer have to repeat specific overrides in all of your component mocks.
- [Support for arbitrary template structures](https://torchbox.github.io/django-pattern-library/reference/api/#sections) -- whether that's across multiple apps or only one, however you want your templates to be structured.

View the full [CHANGELOG](https://github.com/torchbox/django-pattern-library/blob/master/CHANGELOG.md). Along those shiny features, we also released two massive improvements to the project: a [new documentation website](https://torchbox.github.io/django-pattern-library/), with lots more content -- guides, recipes, and reference info. And also a [new demo site](https://torchbox.github.io/django-pattern-library/demo/pattern-library/), so you can see for yourself how the project works (although note the public demo is [exported as a static site](https://torchbox.github.io/django-pattern-library/guides/static-site-export/)).

### Template structures

Starting in v0.3.0, you may structure your project's templates in however many folders you want. This feels like such an obvious need in hindsight, but the pattern library having only been an internal Torchbox project for a while, it didn't really need to accommodate that many different structures!

This is now possible thanks to the new [SECTIONS](https://torchbox.github.io/django-pattern-library/reference/api/#sections) setting, with the previous predefined structure kept as the default for backwards compatibility. It also comes with a lot of black magic to decide which templates are partials and should be rendered in a base template, and which can be rendered as-is.

### render_patterns

This new management command might or might not be relevant to you but it's worth highlighting use cases this is intended to support:

- [Static exports of the pattern library](https://torchbox.github.io/django-pattern-library/guides/static-site-export/), for those cases where you want a simple way to share patterns publicly or host them alongside documentation, rather than alongside your site.
- [Automated tests of UI components](https://torchbox.github.io/django-pattern-library/guides/automated-tests/), particularly in continuous integration, where it might be problematic for you to get a Django server up and running depending on the project's dependencies.

Combined with tools like [Pa11y and pa11y-ci](https://pa11y.org/), this makes it much simpler to run site-wide automated accessibility tests for all of your project's templates, making the most of the pattern library's tightly controlled mock data:

![Screenshot of pa11y-ci output in GitLab CI showing reported issues on pattern library templates](/images/blog/pattern-lab-goes-django/gitlab-ci-pa11y-patterns.png)

There are still rough edges (for example the command will abort the whole test suite if only a single template fails to render!), but we hope you'll find uses for this nonetheless.

## What's next

Hopefully more of the above -- new features, more stability, better documentation. We're particulary keen on [finding ways to mock templates with factories rather than plain data structures](https://github.com/torchbox/django-pattern-library/issues/106), and [combining our Django rendering features with Storybook's developer experience](https://github.com/torchbox/django-pattern-library/issues/103).
