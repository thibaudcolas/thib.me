---
layout: post
title: "Accessibility and inclusivity at FOSDEM 2025"
date: 2025-03-13 09:00:00 +0000
comments: true
categories: [Django, Accessibility, Conference, Diversity]
canonical: https://www.djangoproject.com/weblog/2025/mar/13/accessibility-and-inclusivity-at-fosdem-2025/
seo_image: /images/blog/accessibility-and-inclusivity-at-fosdem-2025/inclusive-web-devroom-panorama.jpg
seo_image_alt: Panorama of the room during a talk, taken from the back. It’s a classroom with multiple rows of tables and seats. Some people are standing on the side. The speaker is in front of their slides at the front of the room.
---

For this year’s FOSDEM conference, our Django accessibility team organized the "Inclusive Web" track. Here’s a recap of how it went!

<!-- more -->

The idea for the [Inclusive Web devroom](https://fosdem.org/2025/schedule/track/inclusive-web/) started at FOSDEM 2024, where we discussed the importance of showcasing accessibility and inclusivity work in open source, in web development and beyond. The [Django accessibility team](https://www.djangoproject.com/foundation/teams/#accessibility-team) got to work on a FOSDEM 2025 proposal. Lo and behold, it got accepted, and here we are with a room full of people interested in those topics, and a great lineup of speakers!

![Panorama of the room during a talk, taken from the back. It’s a classroom with multiple rows of tables and seats. Some people are standing on the side. The speaker is in front of their slides at the front of the room.](/images/blog/accessibility-and-inclusivity-at-fosdem-2025/inclusive-web-devroom-panorama.jpg)

The room was full for most of the day with about 70 attendees, with the conference also providing a livestream for remote participants. We had a great mix of talks, covering a lot of the aspects of the Inclusive Web that we wanted to showcase.

## The talks

### [Top Accessibility Errors Found in Open Source Through Automated Testing](https://fosdem.org/2025/schedule/event/fosdem-2025-6075-top-accessibility-errors-found-in-open-source-through-automated-testing/)

<div style="display: flex; flex-wrap: wrap; column-gap: clamp(1rem, 10vw, 4rem);">

<div style="flex: 1; min-width: min(400px, 95vw);">

<p>In the first talk of the day, Raashi Saxena shares insights on the most common accessibility errors in open-source projects, based on manual and automated testing. She highlights real-world case studies to help developers improve accessibility in their projects – and warn against the legal risks of poor accessibility!</p>

</div>

<figure style="flex: 0 0 256px;">
<img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/speakers/raashi-on-stage-fosdem-2025-60.webp" width="256" height="256" alt="">
<figcaption><strong>Raashi getting the devroom started</strong></figcaption>
</figure>

</div>

### [Solving the world’s (localization) problems](https://fosdem.org/2025/schedule/event/fosdem-2025-5561-solving-the-world-s-localization-problems/)

<div style="display: flex; flex-wrap: wrap; column-gap: clamp(1rem, 10vw, 4rem);">

<div style="flex: 1; min-width: min(400px, 95vw);">

<p>Eemeli Aro and Ujjwal Sharma introduce <a href="https://messageformat.dev/">MessageFormat 2</a>, a new standard to address long-standing localization challenges. They discuss its potential applications and the tools being built around it. This standard is very promising for Django developers working on multilingual applications to provide better translations for users, and better capabilities for translators.</p>

</div>

<figure style="flex: 0 0 256px;">
<img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/speakers/ujjwal-and-eemeli-on-stage-fosdem-2025-60.webp" width="256" height="256" alt="">
<figcaption><strong>Eemeli and Ujjwal introduce themselves</strong></figcaption>
</figure>

</div>

### [Alternative Text for Images: How Bad Are Our Alt-Text Anyway?](https://fosdem.org/2025/schedule/event/fosdem-2025-4709-alternative-text-for-images-how-bad-are-our-alt-text-anyway-/)

<div style="display: flex; flex-wrap: wrap; column-gap: clamp(1rem, 10vw, 4rem);">

<div style="flex: 1; min-width: min(400px, 95vw);">

<p>Mike Gifford explores the importance of alt text in web accessibility and how often it misses the mark. He demonstrates his <a href="https://github.com/CivicActions/site-evaluation-tools/blob/main/alt-text-scan.py.md">alt text scan Python script</a> for auditing alt-text across websites. Alt text is a common issue on Django projects, and the AI generation showcased by Mike has the potential to move the needle.</p>

</div>

<figure style="flex: 0 0 256px;">
<img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/speakers/mike-on-stage-fosdem-2025-60.webp" width="256" height="256" alt="">
<figcaption><strong>Mike shares his experiments</strong></figcaption>
</figure>

</div>

### [Secure and Inclusive: WebAuthn for (Multi-Factor) Authentication](https://fosdem.org/2025/schedule/event/fosdem-2025-5777-secure-and-inclusive-webauthn-for-multi-factor-authentication/)

<div style="display: flex; flex-wrap: wrap; column-gap: clamp(1rem, 10vw, 4rem);">

<div style="flex: 1; min-width: min(400px, 95vw);">

<p>Storm Heg explains how WebAuthn (Passkeys) offers a secure and user-friendly alternative to traditional authentication methods. This talk covers how it works, its accessibility benefits, and how Django developers can integrate it into their projects. Storm showcases his <a href="https://github.com/Stormbase/django-otp-webauthn">django-otp-webauthn</a> package and other alternatives.</p>

</div>

<figure style="flex: 0 0 256px;">
<img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/speakers/storm-on-stage-fosdem-2025-60.webp" width="256" height="256" alt="">
<figcaption><strong>Storm’s whoami output</strong></figcaption>
</figure>

</div>

### [How do we work out the environmental savings from accessibility?](https://fosdem.org/2025/schedule/event/fosdem-2025-5292-how-do-we-work-out-the-environmental-savings-from-accessibility-/)

<div style="display: flex; flex-wrap: wrap; column-gap: clamp(1rem, 10vw, 4rem);">

<div style="flex: 1; min-width: min(400px, 95vw);">

<p>Chris Adams discusses how supporting older devices through accessible digital services can reduce e-waste. He explores research on hardware obsolescence, data-driven methods for measuring environmental impact, and policy changes in digital sustainability. This builds upon previous work by Chris <a href="https://archive.fosdem.org/2021/schedule/event/webperf_building_a_greener_web/">showcasing the parallels between web accessibility and sustainability</a>.</p>

</div>

<figure style="flex: 0 0 256px;">
<img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/speakers/chris-on-stage-fosdem-2025-60.webp" width="256" height="256" alt="">
<figcaption><strong>Chris with his cover slide</strong></figcaption>
</figure>

</div>

### [Growing inclusive communities: Djangonaut Space program](https://fosdem.org/2025/schedule/event/fosdem-2025-5237-growing-inclusive-communities-djangonaut-space-program/)

<div style="display: flex; flex-wrap: wrap; column-gap: clamp(1rem, 10vw, 4rem);">

<div style="flex: 1; min-width: min(400px, 95vw);">

<p>Raffaella Suardini shares the success of the <a href="https://djangonaut.space/">Djangonaut Space</a> mentorship program in fostering sustainable contributions and welcoming new contributors. She provides strategies for building inclusive tech communities, which are crucial to the success of open-source projects like Django 💜.</p>

</div>

<figure style="flex: 0 0 256px;">
<img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/speakers/raffaella-on-stage-fosdem-2025-60.webp" width="256" height="256" alt="">
<figcaption><strong>Raffaella taking questions</strong></figcaption>
</figure>

</div>

### [Multilingual Speech Technologies That Understand You](https://fosdem.org/2025/schedule/event/fosdem-2025-5948-multilingual-speech-technologies-that-understand-you/)

<div style="display: flex; flex-wrap: wrap; column-gap: clamp(1rem, 10vw, 4rem);">

<div style="flex: 1; min-width: min(400px, 95vw);">

<p>Jessica Rose discusses how <a href="https://commonvoice.mozilla.org/en">Common Voice</a>’s <a href="https://github.com/common-voice/common-voice">crowdsourced speech dataset</a> helps developers build speech technologies for underrepresented languages. She highlights the challenges of linguistic diversity in tech – which are very relevant for a project with such an international and multiligual user base as Django.</p>

</div>

<figure style="flex: 0 0 256px;">
<img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/speakers/jessica-on-stage-fosdem-2025-60.webp" width="256" height="256" alt="">
<figcaption><strong>Jessica showcases project challenges</strong></figcaption>
</figure>

</div>

### [ATAG accessibility audits: worth your while](https://fosdem.org/2025/schedule/event/fosdem-2025-5806-atag-accessibility-audits-worth-your-while/)

<div style="display: flex; flex-wrap: wrap; column-gap: clamp(1rem, 10vw, 4rem);">

<div style="flex: 1; min-width: min(400px, 95vw);">

<p>Thibaud Colas introduces the Authoring Tool Accessibility Guidelines (ATAG) and explains why they are essential for content creation tools, like the Django admin. He shares highlights of where projects can learn a lot from ATAG, making this talk valuable for Django developers working with content publishing.</p>

</div>

<figure style="flex: 0 0 256px;">
<img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/speakers/thibaud-on-stage-fosdem-2025-60.webp" width="256" height="256" alt="">
<figcaption><strong>Thibaud lists accessibility standards</strong></figcaption>
</figure>

</div>

# All recordings

You can watch them all on the FOSDEM website:

<div style="display: grid; text-align: center; gap: 1rem; row-gap: 3vw; margin-top: 3vw; grid-template-columns: repeat(auto-fit, minmax(min-content, 320px));">
<a href="https://fosdem.org/2025/schedule/event/fosdem-2025-6075-top-accessibility-errors-found-in-open-source-through-automated-testing/">
    <figure>
        <img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/thumbnails/top-accessibility-errors-found-in-open-source-through-automated-testing.webp" width="256" height="180" alt="Raashi to the side of her slides, titled 'Accessibility', with examples of what accessibility means">
        <figcaption>Raashi Saxena - Top Accessibility Errors Found in Open Source Through Automated Testing | FOSDEM 2025</figcaption>
    </figure>
</a>
<a href="https://fosdem.org/2025/schedule/event/fosdem-2025-5561-solving-the-world-s-localization-problems/">
    <figure>
        <img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/thumbnails/solving-the-world-s-localization-problems.webp" width="256" height="180" alt="Eemeli and Ujjwal in front of Ujjwal’s introduction slide, with audience members in the foreground">
        <figcaption>Eemeli Aro and Ujjwal Sharm - Solving the world’s (localization) problems | FOSDEM 2025</figcaption>
    </figure>
</a>
<a href="https://fosdem.org/2025/schedule/event/fosdem-2025-4709-alternative-text-for-images-how-bad-are-our-alt-text-anyway-/">
    <figure>
        <img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/thumbnails/alternative-text-for-images-how-bad-are-our-alt-text-anyway.webp" width="256" height="180" alt="Mike to the right of his slides, titled 'Initial experiment with proprietary tools', with attendees in the foreground">
        <figcaption>Mike Gifford - Alternative Text for Images: How Bad Are Our Alt-Text Anyway? | FOSDEM 2025</figcaption>
    </figure>
</a>
<a href="https://fosdem.org/2025/schedule/event/fosdem-2025-5777-secure-and-inclusive-webauthn-for-multi-factor-authentication/">
    <figure>
        <img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/thumbnails/secure-and-inclusive-webauthn-for-multi-factor-authentication.webp" width="256" height="180" alt="Storm in front of his slides, with audience members in the foreground">
        <figcaption>Storm Heg - Secure and Inclusive: WebAuthn for (Multi-Factor) Authentication | FOSDEM 2025</figcaption>
    </figure>
</a>
<a href="https://fosdem.org/2025/schedule/event/fosdem-2025-5292-how-do-we-work-out-the-environmental-savings-from-accessibility-/">
    <figure>
        <img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/thumbnails/how-do-we-work-out-the-environmental-savings-from-accessibility.webp" width="256" height="180" alt="Chris is to the right of his slide, titled 'How do we work out the environmental savings from accessibility?'">
        <figcaption>Chris Adams - How do we work out the environmental savings from accessibility? | FOSDEM 2025</figcaption>
    </figure>
</a>
<a href="https://fosdem.org/2025/schedule/event/fosdem-2025-5237-growing-inclusive-communities-djangonaut-space-program/">
    <figure>
        <img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/thumbnails/growing-inclusive-communities-djangonaut-space-program.webp" width="256" height="180" alt="Raffaella in front of a slide titled 'Thank you'">
        <figcaption>Raffaella Suardini - Growing inclusive communities: Djangonaut Space program | FOSDEM 2025</figcaption>
    </figure>
</a>
<a href="https://fosdem.org/2025/schedule/event/fosdem-2025-5948-multilingual-speech-technologies-that-understand-you/">
    <figure>
        <img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/thumbnails/multilingual-speech-technologies-that-understand-you.webp" width="256" height="180" alt="Jessica in front of a slide titled 'Why are these problems?'">
        <figcaption>Jessica Rose - Multilingual Speech Technologies That Understand You | FOSDEM 2025</figcaption>
    </figure>
</a>
<a href="https://fosdem.org/2025/schedule/event/fosdem-2025-5806-atag-accessibility-audits-worth-your-while/">
    <figure>
        <img src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/thumbnails/atag-accessibility-audits-worth-your-while.webp" width="256" height="180" alt="Thibaud in a pineapple hoodie in front of his slides">
        <figcaption>Thibaud Colas - ATAG accessibility audits: worth your while | FOSDEM 2025</figcaption>
    </figure>
</a>
</div>

## See you in 2026

We had a blast running this devroom, and we’re looking forward to doing it again in 2026 if we get the chance! Thank you to our speakers, devroom organizers (Saptak, Tom, Sarah, Thibaud, Eli), and helpers (Alex and Storm) for making this event a success! 🎉

<figure>
<img style="max-width: 100%; height: auto;" src="/images/blog/accessibility-and-inclusivity-at-fosdem-2025/fosdem-2025-inclusive-web-organizers-helpers-speakers-collage.jpg" width="512" height="512" alt="Collage of Inclusive Web devroom organizers, helpers, and speakers. With three separate pictures of people smiling, in different areas of the conference venue. Top: Raffaella, Sarah, Thibaud, Alex. Then Saptak, Storm, Sarah, Thibaud. Then at the bottom Storm, Thibaud, Sarah, Alex.">
<figcaption>Our 2025 devroom speakers, organizers, and helpers. Top left to right: Raffaella, Sarah, Thibaud, Alex, Saptak, Storm</figcaption>
</figure>

