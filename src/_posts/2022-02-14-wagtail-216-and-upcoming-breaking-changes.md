---
layout: post
title: "Wagtail 2.16 and upcoming breaking changes"
date: 2022-02-14 19:50:00 +0100
comments: true
categories: [Wagtail, Community]
canonical: https://wagtail.org/blog/wagtail-216-and-upcoming-breaking-changes/
---

Highlights from our latest release, and an early peek at expected breaking changes in future releases.

<!-- more -->

## **Highlights of Wagtail 2.16**

_View the full_ [_release notes for Wagtail 2.16_](https://docs.wagtail.org/en/stable/releases/2.16.html)_, and_ [_2.16.1_](https://docs.wagtail.org/en/stable/releases/2.16.1.html)_._

### **Django 4.0 support**

Wagtail 2.16 is compatible with the latest version of Django, as well as Django 3.2 (LTS). For sites considering the upgrade, make sure all other packages are also compatible, and the project uses Python 3.8 or up. Make sure to read the full release notes including [upgrade considerations](https://docs.wagtail.org/en/stable/releases/2.16.html#upgrade-considerations), as there are a few breaking changes needed to make Wagtail compatible with Django 4.0.

### **Removing support for older Django & Python versions**

Django 3.0 and 3.1 have reached their end of life, and we no longer support those versions. Sites relying on either version need to upgrade to Django 3.2 or above.

Likewise, Python 3.6 is no longer supported, as it has also reached its end of life. View our full [compatibility table](https://docs.wagtail.org/en/stable/releases/upgrading.html#compatible-django-python-versions) for further information.

### **Slim sidebar**

As part of a wider redesign of Wagtail’s administration interface, we have replaced the sidebar with a slim, keyboard-friendly version. This re-implementation comes with significant accessibility improvements for keyboard and screen reader users, and will enable us to make navigation between views much snappier in the future. Please have a look at [upgrade considerations](https://docs.wagtail.org/en/stable/releases/2.16.html#deprecated-sidebar-capabilities) for more details on differences with the previous version.

### **Automatic redirect creation**

For sites using Wagtail’s redirects app, Wagtail will now automatically create redirects whenever a page changes its URL (changing the slug, or moving the page). This can be disabled if needed, although we expect it will be valuable for most sites. Thank you to [The National Archives](https://www.nationalarchives.gov.uk/) for sponsoring this long-requested feature!

## **Breaking changes in upcoming releases**

Wagtail normally follows a strict [deprecation policy](https://docs.wagtail.org/en/stable/releases/upgrading.html#deprecation-policy) when releasing breaking changes, however this isn’t always possible. There are a number of customisations of the admin interface that are widely used in the Wagtail ecosystem, yet aren’t supported – they rely on undocumented internal components, which weren’t intended to be used outside of Wagtail core.

We are intending to change the implementation of those components in the near future, as part of the [page editor 2022](https://github.com/wagtail/wagtail/discussions/7739) project. Package maintainers and site implementers should stop relying on those components, or prepare to redo any customisations that stop working as part of an upgrade.

### **Why we are making those changes**

The driver behind removal of those components is to improve Wagtail’s admin interface - a lot of legacy components are causing well-known issues for end users, often falling short of our current [standards for accessibility](https://wagtail.org/accessibility/). We also want to better support UI customisations in the future – this requires a fresh start, rather than supporting APIs that were never intended to be used outside of Wagtail core.

### **Our approach**

- Even though those APIs are already unsupported, we will strive to mitigate breaking changes where possible, and let Wagtail implementers know ahead of time.
- Where possible, we will also introduce equivalent components designed and documented for third-party reuse in third-party applications and site-specific customisations.
- We will liaise with package maintainers to make sure any common customisation is accounted for, and we make sure packages can be updated alongside our releases.

To help with this process, we performed an [analysis of community packages](https://gist.github.com/thibaudcolas/828ad05f95063e9cf4cb621daff50dcb), to identify any problematic patterns, and start the conversation. Below is a summary of the most actionable and important aspects of this analysis.

### **UI dependencies to be removed**

Wagtail’s administration interface has a few UI dependencies which we intend to stop using, and shouldn’t be relied on for customisations:

**jQuery Datetimepicker**

This widget is completely unusable with keyboards and screen readers, and will be replaced with a modern WCAG-compliant alternative in an upcoming release. Use the following regular expression to check whether a project uses this widget: _(\.datetimepicker|xdsoft_datetimepicker|jquery\.datetimepicker)_.

Here are packages where this widget is used:

- [Wagtail StreamForms](https://github.com/labd/wagtailstreamforms/search?q=datetimepicker)

**Hallo.js**

Initially [deprecated in Wagtail 2.0](https://docs.wagtail.io/en/stable/advanced_topics/customisation/extending_hallo.html), we are now taking steps to [remove Hallo.js](https://github.com/wagtail/wagtail/issues/6228) from Wagtail core. Use the pattern _(HalloRichTextArea|hallo-|hallo\.|\.hallo\()_ to check whether a project depends on it. We are making an external package available to help with the transition, see [wagtail-hallo](https://github.com/wagtail/wagtail-hallo) for more information.

**Bootstrap tooltips**

Use the pattern _(data-wagtail-tooltip|\.tooltip\()_ to check if a project relies on Bootstrap Tooltips. They aren’t accessible to screen reader users, and will be replaced with a modern alternative in an upcoming release.

Here are packages where this widget is used:

- [Wagtail localize](https://github.com/wagtail/wagtail-localize)

**Bootstrap tabs and modals**

Both components suffer from basic accessibility issues, and will be replaced with modern alternatives. Tabs can be found with the pattern _(data-tab-nav|\.tab\(|bs\.tab)_. Modals are harder to find with anything but the keyword “modal”.

Any project creating a custom chooser will likely be reusing those dependencies. We have identified the following packages:

- [wagtailmedia](https://github.com/torchbox/wagtailmedia)
- [wagtail-markdown](https://github.com/torchbox/wagtail-markdown)
- [wagtail-embedvideos](https://github.com/bashu/wagtail-embedvideos)
- [wagtail-generic-chooser](https://github.com/wagtail/wagtail-generic-chooser)
- [Wagtailvideos](https://pypi.org/project/wagtailvideos/)

**Modernizr**

Modernizr will be completely removed, and should be replaced with the native [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) or lightweight purpose-built feature detection.

### **Deprecated UI dependencies**

There are other UI dependencies which we recommend to stop relying on as they will eventually be removed for similar reasons as the above, but we likely won’t remove completely for the time being:

- Tagit. Code search pattern: _(jquery\.tagit|.tagit\(|tag-it)_
- jQuery UI. Code search pattern: _(jquery-ui|ui-)_
- jQuery. Code search pattern: _$\(|jQuery\()_

### **Major implementation changes**

There are a few areas of Wagtail’s page editor we are intending to change the implementation of, which will affect third-party customisations relying on undocumented APIs.

#### Draftail controls and plugins

The current monkey-patching approach will likely be replaced with an official API. Code search pattern: _(draftail\.registerControl|draftail\.registerPlugin)_

Here are affected packages:

- [wagtail-readinglevel](https://github.com/vixdigital/wagtail-readinglevel)
- [wagtail-footnotes](https://github.com/torchbox/wagtail-footnotes)
- [wagtail_draftail_anchors](https://pypi.org/project/wagtail-draftail-anchors/)
- [wagtail-draftail-snippet](https://pypi.org/project/wagtail-draftail-snippet/)

#### Icon font

Wagtail’s icon font will be replaced with SVG icons, which have better accessibility and perform better. Check for the pattern “_icon icon-_” to identify any usage.

We are expecting this will affect a large number of projects customising Wagtail’s admin interface.

#### Templates restructuring

We will be implementing much-needed refactorings to the HTML structure and templates of the administration interface, for example so headers stop using HTML tables for layout. Note that while the majority of the HTML and templates structure is [defined as unstable](https://docs.wagtail.org/en/stable/extending/admin_views.html#adding-a-template), customisations that are already officially supported will likely remain so.

#### JS and CSS restructuring

A large number of projects rely on Wagtail’s internal JS & CSS implementation details for UI customisations. The editor JS or CSS (pattern: \__editor_(css|js)\.html\_) will likely change, and so will other static assets.

### **Supporting package maintainers**

We want to liaise closely with maintainers of third-party packages as we plan and deliver those changes, so Wagtail can propose official APIs for any common customisation.

Please join the new [#package-maintainers](https://wagtailcms.slack.com/archives/C032RLK62PQ) channel on the [Wagtail Slack](https://github.com/wagtail/wagtail/wiki/Slack), where we will share up-to-date analysis of expected breaking changes, and share expected API replacements for external feedback.

### **Supporting Wagtail implementers**

Based on our analysis to date, we expect the UI changes will affect project-specific customisations the same way as reusable packages. To prepare, site implementers should:

- Keep up with refactorings being rolled out to third-party packages – so they learn how to upgrade their projects’ customisations.
- Review their implementations with the shared code search patterns to identify potentially problematic customisations.
- Review their project’s dependencies for upgrade-ability issues – so they can be raised to the respective packages and addressed ahead of a Wagtail release.

For the most up-to-date information, and to ask any questions / provide feedback, subscribe to the [Page editor 2022 discussion](https://github.com/wagtail/wagtail/discussions/7739) on GitHub.
