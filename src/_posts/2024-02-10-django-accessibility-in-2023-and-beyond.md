---
layout: post
title: "Django accessibility in 2023 and beyond"
date: 2024-02-10 22:29:58 +0100
comments: true
categories: [Django, Accessibility, Community]
---

Happy birthday, Django accessibility team! 🌈

<!-- more -->

The team has been up and running for [three years](https://github.com/django/deps/pull/69#event-4314066071), and is now looking for new members. With a lot happening in this space, we thought we were overdue for an update on what we’re up to.

## Django accessibility in 2023

We’re very happy with the work done to date. There have been a lot of efforts to improve the accessibility of core Django features such as forms, and of the administrative interface. Beyond Django core, there has also been progress on [djangoproject.com](https://www.djangoproject.com/), Django packages, and community awareness via talks and events.

### Django core

We made a lot of improvements this year. Django forms saw big fixes, which [shipped in Django 5.0](https://docs.djangoproject.com/en/5.0/releases/5.0/#forms):

- [Fields’ help text and errors should be associated with input – #32819](https://code.djangoproject.com/ticket/32819)
- [Fields’ errors should be programmatically associated with fields – #32820](https://code.djangoproject.com/ticket/32820)

With forms being such a core feature of Django, reused across countless websites, those changes will lead to accessibility improvements across big parts of the web.

The admin interface also saw a lot of fixes and improvements:

- [Tab order should match visual order for admin model forms’ submit buttons - #33728](https://code.djangoproject.com/ticket/33728)
- [Low text contrast over light blue backgrounds in admin light theme - #34036](https://code.djangoproject.com/ticket/34036)
- [Ensures `<meta name="viewport">` does not disable text scaling and zooming - #34617](https://code.djangoproject.com/ticket/34617)
- [Admin action log entry types should be communicated to screen reader users - #34618](https://code.djangoproject.com/ticket/34618)
- [Django admin site name shouldn’t be an h1 - #34621](https://code.djangoproject.com/ticket/34621)
- [RelatedFieldWidgetWrapper links don’t convey their state for screen reader users - #34622](https://code.djangoproject.com/ticket/34622)
- [Active row states invisible for WHCM users - #34627](https://code.djangoproject.com/ticket/34627)
- [RelatedFieldWidgetWrapper link icons are very hard to see - #34628](https://code.djangoproject.com/ticket/34628)
- [Use banner landmark or `<header>` element for the admin header area - #34832](https://code.djangoproject.com/ticket/34832)
- [Use a main landmark in the admin interface - #34833](https://code.djangoproject.com/ticket/34833)
- [Use search role for the admin changelist search form - #34834](https://code.djangoproject.com/ticket/34834)
- [Use a nav element or navigation landmark for changelist filters - #34835](https://code.djangoproject.com/ticket/34835)
- [Date picker cancel button does not respect color theme/dark mode - #34857](https://code.djangoproject.com/ticket/34857)
- [Main landmark is on the wrong element - #34905](https://code.djangoproject.com/ticket/34905)
- [Accessible names for Add / Change buttons in Django Admin - #34909](https://code.djangoproject.com/ticket/34909)
- [Admindocs index skips from h1 to h3 - #34911](https://code.djangoproject.com/ticket/34911)
- [Admindocs back-links and bookmarklet help text is too small - #34912](https://code.djangoproject.com/ticket/34912)
- [Django Admin high contrast mode no clear session - #34913](https://code.djangoproject.com/ticket/34913)
- [Missing scope attribute in admin doc table headers - #34919](https://code.djangoproject.com/ticket/34919)

Some of those improvements will reflect for everyone, and some will only be beneficial for users of specific assistive technologies, such as Contrast themes in Windows:

[![Django admin interface in high contrast mode, black theme](/images/blog/django-accessibility-in-2023-and-beyond/high-contrast-mode-django.png)](/images/blog/django-accessibility-in-2023-and-beyond/high-contrast-mode-django.png)

> Screenshot of the admin interface in a "Change redirect" form, in Windows high contrast mode with the "Black" theme.

Though Contrast Themes isn’t well known, it’s a built-in feature of Windows which is essential for people with low vision. There is a lot of room for improvement to better support it in Django – can you spot the five issues in this screenshot?

---

We’ve also made a lot of progress on documenting accessibility considerations, though there is still work to be done there:

- FAQ: [What assistive technologies are supported for using the admin?](https://docs.djangoproject.com/en/5.0/faq/admin/#what-assistive-technologies-are-supported-for-using-the-admin)
- In progress: [Accessibility guidelines for all contributors](https://github.com/django/django/pull/17338)
- In progress: [Guidelines for accessibility considerations in documentation](https://github.com/django/django/pull/17340)

And finally tooling improvements such as running [accessibility checks in the CI pipeline](https://code.djangoproject.com/ticket/33620) is still a big topic for us, with in-progress efforts to add [checks in Selenium tests](https://github.com/django/django/pull/17074) and [standalone with Pa11y](https://github.com/django/django/pull/16115).

### Django website

In 2023, the website saw its first ever [accessibility audit](https://github.com/django/djangoproject.com/issues/1381) with a focus on the homepage, as well as a good number of accessibility improvements. Those are all very welcome iterative steps in the context of [user research on the usability of the website](https://forum.djangoproject.com/t/at-what-point-is-the-work-on-the-ux-of-the-django-website/25981), led by 20tab.

- [Display all header anchor link indicators, always - #1429](https://github.com/django/djangoproject.com/pull/1429)
- [Add Keyboard Accessibility To Hamburger Menu - #1418](https://github.com/django/djangoproject.com/pull/1418)
- [Fix selection css on dark mode - #1415](https://github.com/django/djangoproject.com/pull/1415)
- [Add back to top link in documentation - #1370](https://github.com/django/djangoproject.com/pull/1370)
- [Improve accessibility on warning admonitions - #1360](https://github.com/django/djangoproject.com/pull/1360)
- [Accessibility review of djangoproject.com at DjangoCon Europe 2023](https://github.com/django/djangoproject.com/issues/1381)

### Thank you to our website contributors Sarah Abderemane, Thibaud Colas, ontowhee, Sanyam Khurana, Hana Burtin, Paolo Melchiorre, and Tom Carrick ❤️

### Accessibility in our community

We’re elated to see accessibility being such a prominent topic in our community. In 2023, there were a lot of accessibility talks at Django events. There were accessibility contributors at the sprints for DjangoCon Europe, and DjangoCon US. The #accessibility channel on the [Django Discord](https://discord.gg/xcRH6mN4fa) was also very active, and we got a new [Accessibility forum category](https://forum.djangoproject.com/c/internals/accessibility/26).

There were a lot of accessibility-focused talks at Django events:

- [Django Accessibility for Everyone](https://www.youtube.com/watch?v=bflB8xZmSNw) – DjangoCon Europe 2023, by Lauren Parsons
- [Consider the Colourblind](https://youtu.be/acQdzpt68Fk?si=pE2cCnK0x9kaBb60&t=836) – Django Day CPH 2023, by Michael Nicholson
- [Best Practices for Making a Wagtail Site as Accessible as Possible](https://www.youtube.com/watch?v=qqQBbVIHkCA) – DjangoCon US 2023, by Scott Cranfill
- [Django’s accessibility track record](https://www.youtube.com/watch?v=IXxwzFusFlM) – DjangoCon US 2023, by Thibaud Colas
- [Making Our Python Code More Accessible](https://www.youtube.com/watch?v=To1GASgqSek&) – PyOhio 2023, Dmitriy Chukhin & Janelle Bouchard

Our very own accessibility team member Sarah Abderemane was also featured on [Django Chat: Accessibility - Sarah Abderemane](https://djangochat.com/episodes/accessibility-sarah-abderemane) 🎉, while Tom and Thibaud signed up for [Djangonaut Space’s first session as navigators](https://djangonaut.space/comms/2024/01/17/introducing-our-2024-session-1-officers/).

Behind the scenes, the accessibility team also started maintaining a backlog of [django accessibility improvement](https://github.com/orgs/django/projects/7/views/5), and also publish their [accessibility team meeting notes on the forum](https://forum.djangoproject.com/t/accessibility-team-meeting-notes/26133).

### Django accessibility in numbers

This year, we were able to produce statistics on the accessibility of Django projects, thanks to reports from the [HTTP Archive](https://httparchive.org/reports). There is clear room for improvement, with Django websites generally scoring lower than sites built with other technologies:

[![Median accessibility score of websites by framework, cwvtech.report, December 2023](/images/blog/django-accessibility-in-2023-and-beyond/median-accessibility-dec-2023.png)](/images/blog/django-accessibility-in-2023-and-beyond/median-accessibility-dec-2023.png)

> Median Lighthouse website accessibility score of websites by framework. Source: cwvtech.report, December 2023. Next.js: 85/100, Rails: 83, “All”: 82.5, Django: 80.5, ASP.NET: 79, Laravel: 78.5.

There is also clear data to establish exactly which accessibility issues are common on Django websites:

[![Difference in Lighthouse audit success rate for sites built with Django vs average site](/images/blog/django-accessibility-in-2023-and-beyond/django-vs-average-accessibility-apr-2023.png)](/images/blog/django-accessibility-in-2023-and-beyond/django-vs-average-accessibility-apr-2023.png)

> Difference in Lighthouse audit success rate for sites built with Django vs. average site, HTTP Archive 2023-04-01 data, Django vs. “All”.

We see those numbers as a good challenge for the Django community to explore ways in which the framework could be improved.

## Accessibility plans for 2024

There are a lot of ways in which the accessibility of Django could be improved in 2024. Here are a few ideas that have been discussed so far, where our [accessibility team](https://www.djangoproject.com/foundation/teams/#accessibility-team) is looking for help:

- **Django ecosystem accessibility audits**: Testing Trac or the Forum; or popular Django packages.
- **An official Django demo site**: [django-admin-demo](https://github.com/knyghty/django-admin-demo) with even more features.
- **Stylesheets linting**: To catch and fix common issues such as small font sizes or poor focus states.
- **Accessibility in docs**: A possible big docs overhaul as a [Google Season of Docs](https://developers.google.com/season-of-docs) project.
- **New, accessible admin components**: Addressing big gaps in the admin interface.
- **User testing**: Working directly with users of assistive technologies.
- **An official Django accessibility statement**: On the website, loud and clear.

### New members

With this roadmap of improvements in mind, our accessibility team is looking for six new members in 2024. If this sounds like the type of valuable, high-purpose work you want to contribute to – reach out on the [Django Discord](https://discord.gg/xcRH6mN4fa) in #accessibility.

## Thank you

Thank you to everyone who took part in making Django more accessible in 2023 and early 2024. You rock!
