---
layout: post
title: "Terminology and understanding of accessibility in Web Sustainability Guidelines"
date: 2023-12-24 16:21:03 +0100
comments: true
categories: [Accessibility, WCAG, WSG, Sustainability]
---

The Web Sustainability Guidelines are a very new standard, which I’ve been reviewing extensively.
There are a number of possible improvements in how accessibility is considered and portrayed in the guidelines.

<!-- more -->

There are a number of occasions in the guidelines where I think there’s room for improvement on terminology around accessibility, and occasions where the guidelines seem to have accessibility confused with general usability or inclusivity. I wouldn’t find this too problematic for general writing on the web, but for web guidelines, I think it’s paramount to have high standards around terminology.

The general issues are:

1. Confusion between accessibility, usability, inclusivity
2. Use of "Accessibility" benefits to make general points about "better UX = good"
3. Misunderstanding of what makes something "accessible"

## [6. Glossary](https://w3c.github.io/sustyweb/#glossary)

> [Web accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/) (also referred to as Inclusive Design) means that websites, tools, and technologies are designed and developed so that people with disabilities (and those without) can use them, free of barriers.

I thought I’d start with this one as this is perhaps where all the other issues stem from. I’m not aware of anyone who refers to web accessibility as Inclusive Design. They’re certainly related concepts but this makes it sound like they’re synonyms, which is very much not the case.

Perhaps this could be replaced with a more formal, agreed-upon definition from WCAG / WAI / WAI EOWG. Or if this standard wants to make the case that "Accessibility" is also about Usability, Inclusiveness, etc – then I think this ought to be made very clear in the introduction and in a glossary entry like this.

> NOTE: Types of accessibility issues can include auditory, cognitive, neurological, physical, speech, and visual. They can also be permanent, temporary, or situational (depending on the accessibility issue).

In the context of the web, I find people use the term "accessibility issue" more to describe the problems with the web content, than to describe accessibility needs or disabilities. For example, "missing alt text" is a common accessibility issue. I’m not too well versed in inclusive language but I think lots of people would disagree with referring to for example neurological conditions as "issues". "disabilities" or "needs" I believe are more generally-accepted.

## [1.2.2 Guidelines](https://w3c.github.io/sustyweb/#guidelines)

> These guidelines also come with both an impact and effort rating system. Unlike Web Content Accessibility Guidelines (WCAG) which uses A to AAA (or in the future, Bronze to Gold) against each guideline as a method of testing levels of conformance; WSG 1.0 uses a system of Low, Medium, or High ratings to reduce the burden for individuals to identify quick wins or minimal implementations from long-term benefits or heavy refactoring encouraging a policy of progress over perfection.

I believe WCAG 3.0 "bronze to gold" rating is at the level of a conformance claim, and explicitly _not_ at the guideline level contrary to A/AA/AAA. I think it’s also meant to encourage "progress over perfection". In any case, personally I think WSGs could explain its approach to conformance without relying on what seems like a dig at another standard. At least the WCAG 3.0 reference feels very superfluous considering it’s so far away from being practically useful.

## [2.9 Respect the Visitor's Attention](https://w3c.github.io/sustyweb/#respect-the-visitor-s-attention)

> - **Accessibility:** Understanding your visitors requires that you respect their needs and accommodate for the various tools and platforms they use to access your information. This improves accessibility by providing a method for them to engage with your product or service and prevents unnecessary data emissions and screen time which drains consumer's device batteries

I don’t understand what this point has to do with accessibility. What does "by providing a method for them to engage with your product or service" mean? Data emissions, screen time, and power usage don’t have much to do with accessibility.

## [2.2 Assess and Research Visitor Needs](https://w3c.github.io/sustyweb/#assess-and-research-visitor-needs)

Under Benefits,

> - **Accessibility:** Understanding the needs of your visitors through accessibility research will help you prioritize which inclusive design extra features need to be implemented to enhance an already accessible product or service.

This is minor but I find the calling out of "extra features" problematic. It can be misconstrued as perpetuating the idea that accessibility is something that has an added effort "on top" of building something. This could be easily rephrased as "inclusive design improvements".

Or just make this all much shorter / to the point:

> Understanding the needs of your visitors through accessibility research will help you make enhancements.

## [2.13 Use a Design System To Prioritize Interface Consistency](https://w3c.github.io/sustyweb/#use-a-design-system-to-prioritize-interface-consistency)

> - **Accessibility:** A design system with accessible components will improve access to information for people with disabilities. Building design features with accessibility baked in by default reduces the time for implementation and decreases the potential that your audience will have issues while browsing.

The second sentence feels redundant to me. "reduces the time for implementation" isn’t an accessibility benefit, and the second "decreases the potential […]" is basically a repeat of the first sentence.

## [2.19 Provide Suitable Alternatives to Web Assets](https://w3c.github.io/sustyweb/#provide-suitable-alternatives-to-web-assets)

> - **Accessibility:** Certain accessibility issues can prevent media from being consumed, as such it's important to offer different ways of viewing a site's content.

See above, better terminology than "issue" is available.

## [2.20 Provide Accessible, Usable, Minimal Web Forms](https://w3c.github.io/sustyweb/#provide-accessible-usable-minimal-web-forms)

> - **Accessibility:** Ensuring your forms are well labelled, and accessible not only for those with disabilities but those using a range of different devices and inputs will allow form processing to occur with higher success rates and thereby avoid wasted attempts that potentially cost you business and cost your visitor's their time (as wasted screen time has an emissions cost as well).

I would recommend making this about strict accessibility considerations rather than the "cost your business". The connection with emissions is also tenuous at best so I’d recommend removing it. Something like:

> Ensuring your forms are well labelled, and accessible not only for those with disabilities but those using a range of different devices and inputs will reduce barriers and thereby form processing will occur with higher success rates.

## [2.29 Incorporate Compatibility Testing Into Each Release-Cycle](https://w3c.github.io/sustyweb/#incorporate-compatibility-testing-into-each-release-cycle)

> - **Accessibility:** The fourth pillar of Accessibility is robustness. By incorporating accessibility into early prototypes, it becomes a priority for project teams throughout a product's lifecycle. Broken source code can also impact screen readers and how they can read content to individuals with visual disabilities. Ensuring semantic code can provide an equal, error-free experience to all.

Two issues here:

- Broken source code is only an accessibility issue in very specific cases. Broken source code isn’t an accessibility consideration in its own right, as demonstrated by WCAG 2.2 removing its Parsing SC.
- Equating accessibility to "screen readers". This point would be equally as good if re-stated as "can also impact assistive technologies".

## [3.6 Avoid Code Duplication](https://w3c.github.io/sustyweb/#avoid-code-duplication)

> - **Accessibility:** Developers with accessibility issues may find the naming conventions used in CSS methodologies easier to work with than generic CSS selector identifiers.

Though this is possibly true, considerations about the accessibility of source code don’t strike me as relevant in those guidelines. I’d expect a point about accessibility to cover benefits for end users. Also terminology "accessibility issues" -> "cognitive needs".

## [3.7 Rigorously Assess Third-Party Services](https://w3c.github.io/sustyweb/#rigorously-assess-third-party-services)

> - **Accessibility:** As part of rigorous quality control efforts, reducing third-party services can potentially improve accessibility by replacing it with accessible by-default alternatives using built-in custom syntax that meets visitor requirements.

This is a strange point to me that seems only tenuously related to accessibility. Building something one way or another can potentially improve anything. Reducing third-party services can potentially worsen accessibility if those third-party services help with accessibility. "built-in custom syntax" is very unclear / vague.

## [3.8 Use HTML Elements Correctly](https://w3c.github.io/sustyweb/#use-html-elements-correctly)

> - **Accessibility:** Semantic HTML increases readability for those with accessibility needs, reducing the time they waste trying to understand your content

I don’t understand why this says "readability". To me readability is more about the quality of the content, and about styling, than HTML semantics. Content can be very readable inside a `<div>` element. I’d also recommend caution when associating semantic HTML with accessibility; there are a lot of semantic HTML elements that do nothing for people with accessibility needs (for example a `<section>` without a label doesn’t do much). And finally "reducing the time" sounds like an argument about productivity, while accessibility is generally more about removing _barriers_.

## [3.11 Validate Form Errors and External Input](https://w3c.github.io/sustyweb/#validate-form-errors-and-external-input)

> - **Accessibility:** Assistance through form filling is beneficial as it anticipates and helps correct (rather than blame for) incorrect data entry.

This is a general usability improvement rather than accessibility specifically. I also don’t understand what the _rather than blame for_ is doing here.

## [3.13 Adapt to User Preferences](https://w3c.github.io/sustyweb/#adapt-to-user-preferences)

> - **Accessibility:** Having a high contrast (prefers-contrast) version of a site will reduce the barriers to entry and time wasted for visually impaired visitors. Less motion may also assist people with accessibility issues.

See above "accessibility issues" would be more inclusive and clearer as "accessibility needs".

## [3.14 Develop a Mobile-First Layout](https://w3c.github.io/sustyweb/#develop-a-mobile-first-layout)

> - **Accessibility:** Interfaces that work well across devices and platforms, including assistive technologies; improve the visitor experience, lead to fewer support requests, allow your products to be used on more devices, and encourage access while on the move.

This is true for all users of all interfaces, so I fail to see the connection to accessibility. It’s a general point about usability. "_lead to fewer support requests_" is a clear benefit but also has nothing to do with accessibility.

## [3.15 Use Beneficial JavaScript and Its APIs](https://w3c.github.io/sustyweb/#use-beneficial-javascript-and-its-apis)

> - **Accessibility:** Having fallbacks for unavailable JavaScript allows older or less capable devices to still experience your products.

Support for older / low-spec devices is a usability / inclusivity consideration, not accessibility.

## [3.18 Include Files That Are Automatically Expected](https://w3c.github.io/sustyweb/#include-files-that-are-automatically-expected)

> - **Accessibility:** OpenSearch enables the browser's default search box rather than a custom solution to be integrated with your website search, which may aid accessibility.

This feels true but somewhat weak. It aids usability generally much more than accessibility

## [3.20 Avoid Using Deprecated or Proprietary Code](https://w3c.github.io/sustyweb/#avoid-using-deprecated-or-proprietary-code)

> - **Accessibility:** Old web standards often have poor accessibility support in screen readers, avoiding them will help to provide a semantic experience that works well for everyone.

I see two issues here:

- First off I don’t think this is true. I suspect older standards will generally have better support than newer ones. See for example support for `input type="date"`. This could be addressed by rephrasing this to be about "deprecated" standards instead of merely "old".
- Second, equating accessibility to "screen readers" is a problematic oversimplification. This point would be equally as good if re-stated as "poor support in assistive technologies".

## [3.22 Use the Latest Stable Language Version](https://w3c.github.io/sustyweb/#use-the-latest-stable-language-version)

> - **Accessibility:** Using the latest language version may improve the page load speed.

I don’t understand what this has to do with accessibility. It feels like just a re-statement of the point about performance below.

## [4.3 Compress Your Files](https://w3c.github.io/sustyweb/#compress-your-files)

> **Accessibility:** People with accessibility needs may be lower income and thereby unable to afford either a high speed or the high cost of data plans found on cellular networks and satellite providers.

This narrative feels more like a social equity or inclusiveness thing to me than accessibility. The "_may_ be lower income" feels like a red flag to me – the issue raised here feels like it’s entirely about income and not so much about accessibility.

## [4.4 Use Error Pages and Redirects Carefully](https://w3c.github.io/sustyweb/#use-error-pages-and-redirects-carefully)

> - **Accessibility:** Error pages matter, they can help lost individuals find their path, providing useful navigation and appropriate signage can reduce the loss of abandonment.

I don’t think any of this has anything to do with accessibility? Perhaps if there was a point made about how this affect people with specific cognitive needs more, but otherwise this reads like a statement about general UX.

## [5.5 Estimate a Product or Service's Environmental Impact](https://w3c.github.io/sustyweb/#estimate-a-product-or-service-s-environmental-impact)

> **Accessibility:** Inclusiveness can be a key part of a digital LCA, as long as parameters are defined up front and maintained throughout the project to ensure barriers to access are eliminated.

I’m finding the wording a bit problematic here. "Inclusiveness" isn’t about removing barriers as much as accessibility is. And as far as accessibility, it seems to me like there are much more obvious exercises than an LCA that can be conducted (a WCAG audit?). I’ve also never seen or heard about an LCA that covers inclusiveness or accessibility, so this whole statement is puzzling to me.
