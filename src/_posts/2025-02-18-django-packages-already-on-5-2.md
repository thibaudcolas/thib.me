---
layout: post
title: "Django packages already on 5.2"
date: 2025-02-18 08:18:03 +0000
comments: true
categories: [Django, List, Open Source]
seo_image: /images/blog/django-packages-already-on-5-2/packages-with-advertised-django-5-2-compatibility.webp
seo_image_alt: Packages with advertised compatibility with specific recent Django versions
---

Django 5.2’s final release is scheduled for April 2025, weeks from now. But pre-releases are out already, and package maintainers are busy supporting the new release!

<!-- more -->

## Packages already declaring support

There’s 23 released on PyPI, which were tested with the [Django 5.2 alpha 1 release](https://www.djangoproject.com/weblog/2025/jan/16/django-52-alpha-1-released/).
That’s out of about 1394 packages that declare which versions their support (out of 17k packages in total).

- [django-csp v4.0b3](https://github.com/mozilla/django-csp/blob/main/CHANGES.md)
- [django-bird v0.14.2](https://github.com/joshuadavidthomas/django-bird)
- [django-filter v25.1](https://github.com/carltongibson/django-filter/blob/main/CHANGES.rst)
- [django-tailwind-cli v4.1.0](https://django-tailwind-cli.rtfd.io/)
- [django-appconf v1.1.0](https://github.com/django-compressor/django-appconf)
- [django-rich v1.14.0](https://github.com/adamchainz/django-rich/blob/main/CHANGELOG.rst)
- [django-mysql v4.16.0](https://django-mysql.readthedocs.io/en/latest/changelog.html)
- [django-perf-rec v4.28.0](https://github.com/adamchainz/django-perf-rec/blob/main/CHANGELOG.rst)
- [django-version-checks v1.14.0](https://github.com/adamchainz/django-version-checks/blob/main/CHANGELOG.rst)
- [django-read-only v1.19.0](https://github.com/adamchainz/django-read-only/blob/main/CHANGELOG.rst)
- [django-permissions-policy v4.25.0](https://github.com/adamchainz/django-permissions-policy/blob/main/CHANGELOG.rst)
- [django-linear-migrations v2.17.0](https://github.com/adamchainz/django-linear-migrations/blob/main/CHANGELOG.rst)
- [django-watchfiles v1.1.0](https://github.com/adamchainz/django-watchfiles/blob/main/CHANGELOG.rst)
- [django-minify-html v1.12.0](https://github.com/adamchainz/django-minify-html/blob/main/CHANGELOG.rst)
- [django-cors-headers v4.7.0](https://github.com/adamchainz/django-cors-headers/blob/main/CHANGELOG.rst)
- [django-htmx v1.22.0](https://django-htmx.readthedocs.io/en/latest/changelog.html)
- [django-harlequin v1.5.0](https://github.com/adamchainz/django-harlequin/blob/main/CHANGELOG.rst)
- [django-browser-reload v1.18.0](https://github.com/adamchainz/django-browser-reload/blob/main/CHANGELOG.rst)
- [django-auto-prefetch v1.12.0](https://github.com/tolomea/django-auto-prefetch/blob/main/CHANGELOG.rst)
- [django-ditto v3.5.0](https://github.com/philgyford/django-ditto/blob/main/CHANGELOG.md)
- [django-syzygy v1.2.0](https://github.com/charettes/django-syzygy)
- [django-extra-checks v0.17.0a1](https://github.com/kalekseev/django-extra-checks)
- [django-admin-groups v0.3](https://github.com/OmarSwailam/django-admin-groups)

For a community-driven project like Django, **community-driven testing efforts are essential**. It’s excellent to see this work happening ahead of the final release. Benefits are clear:

- Potentially catching bugs in the new release ahead of it being generally available.
- Making it easier for users to upgrade to Django 5.2 when they start adopting the new version in April.

## Django versions support overview

There’s more package releases with tentative Django 5.2 support everyday. As of today, here’s the numbers through the whole package ecosystem:

| Version      | 5.2          | 5.1       | 5.0       | 4.2       | Total       |
| ------------ | ------------ | --------- | --------- | --------- | ----------- |
| **Packages** | 23 🎉 (1.6%) | 240 (17%) | 409 (29%) | 570 (41%) | 1394 (100%) |

This is only packages that already explicitly declare support for specific versions. There are tons of packages that don’t use classifiers for this but would support those versions in any case. With Django having such a strong [commitment to API stability](https://docs.djangoproject.com/en/5.1/misc/api-stability/), there are a ton of scenarios where new releases “just work”. So this won’t account for:

- Packages that don’t use trove classifiers to declare compatibility.
- Packages that do, but haven’t published a new release (maybe Django 5.2 works with no code changes).

---

I love how my Django colleague [Baptiste Mispelon] put it when trying out Django 5.2 alpha 1 on [djangoproject.com](https://www.djangoproject.com/):

> We just updated the dependency file and everything worked.
> – [Baptiste Mispelon](https://fosstodon.org/@bmispelon@mastodon.social)

---

And for those interested in numbers crunching – this data is from the [PyPI dataset on BigQuery](https://cloud.google.com/blog/topics/developers-practitioners/analyzing-python-package-downloads-bigquery). Here’s the query: [package-ecosystem-latest.sql](https://github.com/thibaudcolas/timeline-of-django/blob/main/package-ecosystem/package-ecosystem-latest.sql).

## How you can help

Try out the pre-releases on your projects or packages! And if you find any issues, investigate and consider reporting them back. Even better if you:

- Configure your packages’ continuous integration to run with Django 5.2 pre-releases already
- Spend time to adopt specific features listed in the [Django 5.2 release notes](https://docs.djangoproject.com/en/dev/releases/5.2/), to further stress test any additions.

And if you maintain packages – consider running your tests against Django’s main? Watch Sage’s talk at Django London:

<div>
  <a href="https://www.youtube.com/watch?v=X3fR1HOYcl0">
      <figure>
          <img src="https://i.ytimg.com/vi_webp/X3fR1HOYcl0/maxresdefault.webp" width="320" height="180" alt="">
          <figcaption>Run your tests against Django's main! – Django London Meetup, 13 February 2025</figcaption>
      </figure>
  </a>
</div>
