---
layout: post
title: 'aria-invalid="true" with aria-describedby'
date: 2022-01-12 22:42:03 +0000
comments: true
categories: [Accessibility, Django]
---

As part of Django’s [accessibility team](https://github.com/django/deps/blob/main/accepted/0011-accessibility-team.rst), I’ve been doing a lot of research into specific patterns. Today – `aria-required="true"` combined with `aria-describedby` for error messages! Is it good? Is it redundant? What do authorative sources say?

<!-- more -->

_This is a copy of my [GitHub comment on django/django#15036](https://github.com/django/django/pull/15036#issuecomment-1008738687) to keep for future reference_.

## TL;DR;

TL;DR; “`aria-invalid ="true"` + `aria-describedby` pointing at error message” seems to me like it would be the best for Django. It’s recommended in the non-normative [ARIA21](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21) technique, and by a renowned expert in the field. I found one pattern that seems better than it in some cases, but I don’t think it’s as good of a fit for Django.

## Recommendations for the pattern

I could find the following sources recommending `aria-invalid="true"` usage alongside `aria-describedby`:

- The official (non-normative) [ARIA21 Using Aria-Invalid to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21) technique from WCAG:

> When visible text is used to programmatically identify a failed field and / or convey how the error can be corrected, setting aria-invalid to "true" is not required from a strict compliance standpoint but may still provide helpful information for users.

- A [post from Léonie Watson on the web-a11y Slack](https://web-a11y.slack.com/archives/C042TSFGN/p1557348802029700):

> […]
> Or you can use aria-describedby to make the association, like this:
> […] > `<input type="text" id="this" aria-describedby="error" ...>` > […] > `<p id="error">Don't forget to enter your first name!</p>`
>
> You can also use aria-invalid="true" on the input, as you have done, for belt and braces information.

Those two sources indicate `aria-describedby` pointing at the error message could be sufficient. Using `aria-invalid="true"` basically just helps unambiguously identifying fields that are in error, rather than relying on the wording of the error messages conveyed via `aria-describedby` only.

## Alternative

I couldn’t find anyone actively recommending against this combination, however the GOV.UK design system [decided not to use it](https://github.com/alphagov/govuk-frontend/issues/1168). They instead added an ["Error:" prefix for all error messages](https://design-system.service.gov.uk/components/error-message/#label), as visually hidden / screen-reader-only text:

```html
[…]
<p id="national-insurance-number-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Enter a National Insurance
  number in the correct format
</p>
<input
  class="govuk-input govuk-input--error"
  id="national-insurance-number"
  name="national-insurance-number"
  type="text"
  aria-describedby="national-insurance-number-hint national-insurance-number-error"
/>
```

I can see some clear advantages to this:

- It’s equally as unambiguous for screen reader users that the fields are in error (compare Django’s `This field is required.` message or `Enter a whole number.` with `Error: This field is required.` or `Error: Enter a whole number.`).
- "Error:" is more plain language than "Invalid entry"
- Since this doesn’t rely on ARIA, screen reader support for this is better than `aria-invalid="true"`

I can also see some issues:

- It’s more opinionated markup to maintain / less "by-the-book semantic HTML"
- Django’s error messages are meant to be customized with no oversight on how implementers will ultimately word them, so adding a prefix wouldn’t always be appropriate.
- It’s one more string that will need translations (not necessarily a big deal for such a generic word but does constraint the languages with which Django’s forms rendering could be used).

## Recommendation for Django

Based on this, for Django, I’d still recommend `aria-invalid="true"` wherever possible, and `aria-describedby` for the error message wherever possible. So both together, wherever possible. It’s a more established pattern than bespoke error message prefixes, and lower maintenance. `aria-invalid="true"` support isn’t as good, but good enough for something that’s used _in addition to_ `aria-describedby`.

## Caveats

- This is based on [a11ysupport.io](https://a11ysupport.io/) data, which only tested support on `<input type="text">` and `<select>`.
- I only looked at `aria-invalid="true"`. There are other `aria-invalid` values, which are harder to use and I wouldn’t recommend at this time.

---

Further references:

- [a11ysupport.io support data for aria-invalid](https://a11ysupport.io/tech/aria/aria-invalid_attribute)
- [a11ysupport.io support data for aria-describedby](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
- [PowerMapper support data for aria-describedby](https://www.powermapper.com/tests/screen-readers/aria/)
