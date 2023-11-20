---
layout: post
title: "Wagtail statement on Log4j vulnerability"
date: 2021-12-17 19:50:00 +0100
comments: true
categories: [Wagtail, Security]
canonical: https://wagtail.org/blog/log4j-statement/
---

Wagtail itself isn’t vulnerable, but we encourage users of Elasticsearch to consider updating to the latest version of Elasticsearch.

<!-- more -->

In the last few days, there’s been widespread publicity regarding a serious vulnerability in the software Log4j, which is widely used by web-based Java applications and cloud suppliers. This vulnerability - CVE-2021-44228 and CVE-2021-45046, also known as Log4Shell or LogJam - allows complete system takeover on systems using certain versions of Log4j. It is being actively exploited across the web, and we are seeing multiple exploit attempts for it in server logs of Wagtail sites.

**Wagtail itself isn’t vulnerable**, however we recommend users of Elasticsearch (with our [search backend](https://docs.wagtail.io/en/stable/topics/search/backends.html#wagtailsearch-backends-elasticsearch) or otherwise) consider updating to the latest version of Elasticsearch. This is based on [Elastic’s official statement](https://discuss.elastic.co/t/apache-log4j2-remote-code-execution-rce-vulnerability-cve-2021-44228-esa-2021-31/291476).

To check whether your site uses this search backend, review your site’s [WAGTAILSEARCH_BACKENDS](https://docs.wagtail.io/en/stable/reference/settings.html#wagtailsearch-backends) Django setting.

We take the security of Wagtail, and related packages we maintain, seriously. Please follow our [security policy](https://github.com/wagtail/wagtail/security/policy) when reporting issues, and refer to our [support channels](https://docs.wagtail.io/en/stable/support.html) for any other queries.
