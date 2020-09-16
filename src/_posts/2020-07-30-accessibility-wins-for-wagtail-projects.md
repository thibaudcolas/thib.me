---
layout: post
title: "Accessibility wins for Wagtail projects"
date: 2020-07-30 02:15:22 +0100
comments: true
draft: true
categories: [Accessibility, Wagtail, Tools]
redirect_from:
  - /wagtail-wins
---

I recently gave a talk at [Wagtail Space US 2020](https://us.wagtail.space/) about the accessibility of Wagtail websites – following on last year’s talk about the [accessibility of the Wagtail admin](/making-wagtail-accessible).

<!-- more -->

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZcHfUu_u4e0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Slides: [Wagtail Space US 2020 - Accessibility wins for Wagtail projects](https://docs.google.com/presentation/d/14iSPklZmrjlMZlaFOBP1Mavt_tmz6vcF_t6cHVCCek8/edit)

---

## Why accessibility matters

### Inclusive experiences

- We want all users to have a great experience, no matter how they use the web.
- Accessibility improvements lead to usability improvements for all.

Search: "Curb cut effect"

### Accessibility is not an optional extra

USA:

- [Section 508](https://section508.gov/) for recipients of federal funding, [ADA](https://www.ada.gov/) for all\*.

EU/UK:

- [EU Directive 2016/2102](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016L2102) for the public sector, UK [Equality Act 2010](https://www.legislation.gov.uk/ukpga/2010/15/contents) for all.

In the end it's all based on [WCAG 2.1 AA](https://www.w3.org/TR/WCAG21/).

\* I'm not a lawyer. See [Gimlet Media lawsuit](https://gizmodo.com/gimlet-media-sued-for-not-making-podcasts-accessible-to-1844369021)

### Oh and it's not just about Wagtail sites

Intranets, CRMs, ERPs, dashboards. Django admin.

Internal-only tools shouldn't compromise on accessibility just because their audience is smaller.

[alistapart.com/article/building-the-woke-web](https://alistapart.com/article/building-the-woke-web/)

## Common\* Wagtail issues

\* Very common. Go check your sites after the talk

### Alt text for images

1. Images' Title fields are auto-populated with file names on upload
2. Wagtail sets alt text based on image Title by default
3. ????

Solution: always have an "alt text" field wherever an image is used.

[RFC #51](https://github.com/wagtail/rfcs/pull/51), [#4945](https://github.com/wagtail/wagtail/issues/4945), [RFC #44](https://github.com/wagtail/rfcs/pull/44), [#5789](https://github.com/wagtail/wagtail/pull/5789)

### Alt text for images, #2

- Have a mandatory alt text field when images aren't decorative...
- Display it

Solution: always have an "alt text" field wherever an image is used.

[RFC #51](https://github.com/wagtail/rfcs/pull/51), [#4945](https://github.com/wagtail/wagtail/issues/4945), [RFC #44](https://github.com/wagtail/rfcs/pull/44), [#5789](https://github.com/wagtail/wagtail/pull/5789)

### Alt text for images, #3

- Always have an alt text field for each usage of an image
- Make sure the field is optional when appropriate so decorative images can be hidden
- Give appropriate guidance to editors, [axesslab.com/alt-texts](https://axesslab.com/alt-texts/)
- Wagtail's rich text images alt text needs to become optional

Solution: always have an "alt text" field wherever an image is used.

[RFC #51](https://github.com/wagtail/rfcs/pull/51), [#4945](https://github.com/wagtail/wagtail/issues/4945), [RFC #44](https://github.com/wagtail/rfcs/pull/44), [#5789](https://github.com/wagtail/wagtail/pull/5789)

### Embed titles

- In some cases, Wagtail embeds don’t have a title attribute set
- Screen reader users need it to know what the embed is, and decide to browse it, or skip it

Solution: either check your embed provider returns a title in 100% of the cases, or add a mandatory "Title" field for all embeds.

[#5982](https://github.com/wagtail/wagtail/issues/5982)

### Heading levels

Screen reader users rely on logical, lean heading outlines to navigate pages

- Wagtail makes it easy to restrict which heading levels are available in any rich text field. Do it.
- Also restrict which heading levels are available via StreamField
- Keep your templates in check too.

Solution: [Limiting features in a rich text field](https://docs.wagtail.io/en/stable/advanced_topics/customisation/page_editing_interface.html#limiting-features-in-a-rich-text-field). Use [wagtail-accessibility](https://github.com/neon-jungle/wagtail-accessibility).

### Heading levels, #2

Heading levels

Screen reader users rely on logical, lean heading outlines to navigate pages

- Validate that no heading is left empty
- Or, consider hiding empty headings with CSS (h2:empty { display: none; })

Solution: [Limiting features in a rich text field](https://docs.wagtail.io/en/stable/advanced_topics/customisation/page_editing_interface.html#limiting-features-in-a-rich-text-field). Use [wagtail-accessibility](https://github.com/neon-jungle/wagtail-accessibility).

In the future -- rich text rewriting to remove empty headings? [#4223](https://github.com/wagtail/wagtail/issues/4223)

### Other issues worth knowing about

- TableBlock
  - The Caption field should be mandatory
  - The header cells field should be mandatory ([#5989](https://github.com/wagtail/wagtail/issues/5989))
- Links
  - We need a way to flag / validate link text to avoid "Read more", "Click here", "Find out more"
  - Or having a way to add custom aria-label where relevant
  - Broken links should be user-friendly, not href="None".
- Forms
  - Avoid Django's as_table, as_ul rendering.

## Content wins

- [wagtail-accessibility](https://github.com/neon-jungle/wagtail-accessibility) (based on [tota11y](https://khan.github.io/tota11y/))
- help_text (example: [wagtail-nhsuk-frontend](https://github.com/nhsuk/wagtail-nhsuk-frontend))
- [HelpPanel](https://docs.wagtail.io/en/stable/reference/pages/panels.html#helppanel) -- help_text but bigger
- [wagtail-readinglevel](https://vixdigital.github.io/draftail-plugins/)
- Rich text experiments: guidelines-aware spellcheck
- Rich text experiments: sentence length, [wooorm.com/readability](https://wooorm.com/readability/)

## Developer wins

[Accessibility audits: getting started](https://torchbox.com/blog/accessibility-audits/)

### [django-html-validator](https://github.com/peterbe/django-html-validator)

Based on the official v.Nu validator. Very easy to integrate into your workflow with Docker.

- Finds [about 15% of issues](https://alphagov.github.io/accessibility-tool-audit/)

- v.Nu also has a CLI which I recommend as part of accessibility audits

### Static analysis

- React: [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- Vue: [eslint-plugin-vue-a11y](https://github.com/maranran/eslint-plugin-vue-a11y)
- Styles: [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y)

### Curlylint

### Learn how to use a screen reader

On a Mac with VoiceOver,

- Cmd + F5 to open VoiceOver. Same to close it.
- Ctrl to silence it
- Ctrl + U to open the rotor

That's it.

Even simpler on iOS.

[a11ysupport.io / learn](https://a11ysupport.io/learn/)

## Community wins

A cultural shift?

### You can be the person on your team who advocates for those issues to be fixed

It matters on all projects, all audiences

There are well-defined standards, and readily available tools.

You can be the person who knows how to use a screen reader and shows others how to do it.

[alistapart.com/article/building-the-woke-web](https://alistapart.com/article/building-the-woke-web/)

### Wagtail can be a CMS that's part of the solution

The [WebAIM Million](https://webaim.org/projects/million/) keeps track of the accessibility of 1M websites' homepages

- Numbers are appalling
- We can do better
- Wagtail can help people make accessible websites -- better defaults, starter templates, documentation

### Accessibility team 🌈

The [accessibility team](https://github.com/wagtail/wagtail/wiki/Accessibility-team) focuses on improvements to the accessibility of Wagtail, and of websites built with Wagtail. Everyone is welcome regardless of skill level or background.

Find us on the Wagtail Slack in [#accessibility](https://github.com/wagtail/wagtail/wiki/Slack)
