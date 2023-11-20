---
layout: post
title: "Django security releases relevant to Wagtail sites"
date: 2019-12-18 19:50:00 +0100
comments: true
categories: [Security, Wagtail, Django]
canonical: https://wagtail.org/blog/django-security-releases-relevant-to-wagtail-sites/
---

Maintaining a Django or Wagtail site? Today’s security releases are relevant to you

<!-- more -->

Today, Django released [security patch updates](https://www.djangoproject.com/weblog/2019/dec/18/security-releases/) for all of its supported versions. These address an account hijack vulnerability with Django’s password reset form. We strongly recommend you have a look at websites where the password reset form might be in use to confirm whether they are vulnerable or not, and if so, upgrade Django or remove the form.

This vulnerability also affects Wagtail’s password reset form, which is built on top of Django’s own form. All you need to do is upgrade Django to one of the versions released today, which include the fix. No Wagtail upgrade needed.

If upgrading isn’t an option for you, consider [disabling password resets](https://docs.wagtail.io/en/stable/advanced_topics/settings.html#password-management) in the meantime with the `WAGTAIL_PASSWORD_RESET_ENABLED` setting.
