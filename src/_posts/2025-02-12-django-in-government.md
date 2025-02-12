---
layout: post
title: "Django in government"
date: 2025-02-12 08:18:03 +0000
comments: true
categories: [Django, Django Software Foundation, Open Data]
seo_image: /images/blog/django-in-government/django-governments-world-map.webp
seo_image_alt: Map of world countries, with the ones using Django in blue
---

I have this list of 50k Django projects I put together, and thought it might be more interesting to share specific verticals rather than the whole thing. Today: Django in governments around the world!

<!-- more -->

Here’s an overview of all countries using Django in their government websites. That’s 88 countries according to my dataset.

![Map of world countries, with the ones using Django in blue](/images/blog/django-in-government/django-governments-world-map.webp)

## Top users

Here are the top 10 highest numbers of Django sites by country.

| Country                  | Government websites |
| ------------------------ | ------------------- |
| Brazil                   | 129                 |
| United States of America | 84                  |
| Argentina                | 81                  |
| France                   | 73                  |
| Nepal                    | 48                  |
| Mexico                   | 48                  |
| India                    | 43                  |
| Ukraine                  | 37                  |
| Peru                     | 36                  |
| Colombia                 | 25                  |

There’s a lot of room for this to be affected by how countries choose to assign domain names to their websites, rather than accurately reflecting Django usage. But it’s interesting nonetheless!

## Showcase

I thought I’d share some of the sites I find particularly noteworthy, from that top 10 and otherwise. With the caveat that there are lots of governments and sites I know little about, so there’s some bias towards things that are closer to home for me.

### Ireland

![Screenshot of Ireland.ie website, with a green and white theme. The homepage states 'This is Ireland'](/images/blog/django-in-government/ireland_dot_ie.webp)

I know very little about [ireland.ie](https://www.ireland.ie/en/) – but I know that [DjangoCon Europe 2025](https://2025.djangocon.eu/) will be in Dublin, Ireland! ☘️ So it’s very topical. See you there?

As far as government websites in Ireland, there are other heavy-hitters on the list like [gov.ie](https://www.gov.ie/en/). The website’s design is very simple, behind the scenes I’m sure there is a lot of backoffice work going on.

### Sweden

![Screenshot of Visit Sweden website, with a yellow and white theme. The site states 'Sweden - A destination of a different nature' with a wide picture of sea kayaking](/images/blog/django-in-government/visitsweden_dot_com.webp)

[Visit Sweden](https://visitsweden.com/) I know a tiny bit more about, only because the Fröjd agency who did the work [published the site on Made with Wagtail](https://madewithwagtail.org/developers/frojd/visit-sweden/). I believe they also published some of the site’s building blocks on GitHub, like [django-react-templatetags](https://github.com/Frojd/django-react-templatetags) (just what it sounds like) and [Wagtail-Pipit](https://github.com/Frojd/Wagtail-Pipit) (a Next.js + Wagtail starter kit). Thank you Fröjd for sharing your work!

### France

![Screenshot of Sites faciles, a french govt website with a black navy blue and white theme](/images/blog/django-in-government/sites-faciles_gouv_fr.webp)

[Sites faciles](https://sites-faciles.beta.numerique.gouv.fr/) from the French government is pretty meta – it’s a starter kit for other government websites built with Django and Wagtail! And it’s fully open source, at [numerique-gouv/sites-faciles](https://github.com/numerique-gouv/sites-faciles) on GitHub.

I’m also very interested in what the French government is doing in Django because they have one of the most advanced set of guidelines on digital emissions / the carbon footprint of government websites, the [Arcep Digital Sustainability](https://en.arcep.fr/arcep/arcep-europe-international/digital-sustainability.html) info page is great, and links to an english version of those guidelines (“General policy framework for the ecodesign of digital services (RGESN)”).

### United States

![Screenshot of the NASA JPL website, with a "JPL Dare mighty things" slogan, and a hero image of the Pillars of Creation](/images/blog/django-in-government/jpl_nasa_gov.webp)

A picture of the [Pillars of Creation](https://www.nasa.gov/universe/nasas-webb-takes-star-filled-portrait-of-pillars-of-creation/) by the James Webb Space Telescope on the front page of a Django site… isn’t that the coolest thing ever? The [JPL website](https://www.jpl.nasa.gov/) at NASA is built with Django, and they also open source some of its components: the [Explorer 1 Design System](https://github.com/nasa-jpl/explorer-1), and tools to [manage an ecosystem of websites](https://github.com/nasa-jpl/django-launchbox). Their friends at Caltech also have a lot of [open source Django projects](https://github.com/caltechads), and elsewhere at NASA the [NASA NAS data portal](https://data.nas.nasa.gov/) and the [STEM Gateway](https://stemgateway.nasa.gov/s/) are also built with Django!

I find this one particularly cool because beyond the open sourcing, they were also able to talk about their experience and tools at conferences – which is rare in the public sector! Check out their DjangoCon US 2022 talk, [A Management Layer for Scalable, Multitenant Django with Addison Hardy and James Ray](https://www.youtube.com/watch?v=ELm2mbgWOVY).

---

Also in the US – the [Consumer Financial Protection Bureau](https://www.consumerfinance.gov/) website is worth a look too!

![Screenshot of the CFP website. The banner states "On your side through life’s financial moments."](/images/blog/django-in-government/consumerfinance_gov.webp)

This one I find extra special because the whole site is open source, available on GitHub at [cfpb/consumerfinance.gov](https://github.com/cfpb/consumerfinance.gov). This is one of the best examples I know of using Jinja at scale – and I wish we saw more of that in the Django world!

### Argentina

![Screenshot of the mi Argentina login form](/images/blog/django-in-government/id.argentina.gob.ar_ingresar_.webp)

Some of Argentina’s government portal is built with Django – specifically their [miArgentina](https://mi.argentina.gob.ar/) authentication service! And, you guessed it, [some of it is open source too](https://github.com/argob/id-mi-argentina-distro).

### Czechia

![Screenshot of the Verified Online Identity platform from Czechia](/images/blog/django-in-government/www.mojeid.cz_cs_.webp)

[MojeID](https://www.mojeid.cz/en/) from Czechia is another Django authentication service. Maybe we’ll meet their team at [EuroPython 2025 in Prague?](https://ep2025.europython.eu/).

### New Zealand

![Screenshot of the RealMe New Zealand homepage](/images/blog/django-in-government/www.realme.govt.nz_.webp)

In New Zealand, [RealMe](https://www.realme.govt.nz/) is another online identity service that uses Django :)

### Mexico

![Screenshot of the MéxicoX website](/images/blog/django-in-government/mexicox.gob.mx_.webp)

[MéxicoX](https://mexicox.gob.mx/) is an online course platform from the government of Mexico, built with Django. Pretty cool to see this type of web app in the public sector!

### Ukraine

![Screenshot of the Ukraine government services guide](/images/blog/django-in-government/diia.gov.ua_.webp)

Back in Europe, the [Ukraine government services guide](https://guide.diia.gov.ua/) is also built with Django. They also have [open source code on GitHub](https://github.com/diia-open-source), sadly not this specific website.

### Tunisia

![Screenshot of the Tunisia national open data platform](/images/blog/django-in-government/www.data.gov.tn_ar_.webp)

Tunisia’s national open data platform is built with Django! Interestingly, so are the open data platforms [of Bahrain](https://www.data.gov.bh/pages/homepage/) and [of Lithuania](https://data.gov.lt/). Also in the Python world, the [CKAN platform](https://github.com/ckan/ckan) is very popular – and it’s built on top of the Flask framework.

### Chad

![Screenshot of the Covid 19 platform of Chad](/images/blog/django-in-government/pass.sante.gouv.td_.webp)

Also in Africa, Chad’s [Covid-19 online information and pass platform](https://pass.sante.gouv.td/) uses Django, a great example of how the framework contributes to public health.

### Sudan

![Screenshot of the Sudan passport booking system website](/images/blog/django-in-government/passports.gov.sd_.webp)

[Sudan’s passport and immigration online booking system](https://passports.gov.sd/)! Sudan isn’t too far from [DjangoCon Africa 2025 in Tanzania](https://2025.djangocon.africa/), there will definitely be travelers from Sudan using this platform as part of their travel logistics to attend.

### Türkiye

![Screenshot of the Türkiye Ministry of Education website](/images/blog/django-in-government/abdigm.meb.gov.tr_.webp)

In Türkiye / Turkey, the [Ministry of Education website](https://abdigm.meb.gov.tr/) is built with Django!

### Uzbekistan

![Screenshot of the Uzbekistan parliament website](/images/blog/django-in-government/parliament.gov.uz_.webp)

The [Uzbekistan parliament website](https://parliament.gov.uz/) is also built with Django!

### India

![Screenshot of the National Test House website](/images/blog/django-in-government/mis.nth.gov.in_.webp)

Last but not least, in India, we have the [National Test House website](https://mis.nth.gov.in/) from the Department of Consumer Affairs. And the [Delhi Tourism board website](https://www.delhitourism.gov.in/) is also Django. [Django is big in India](https://www.djangoindia.org/) – DjangoCon India, anyone?

## Methodology and data

That’s a lot of sites, but really just the tip of the iceberg. My [Django in government dataset](https://docs.google.com/spreadsheets/d/1JvMumg29VAbzKyJhc6MkN97-2RQfTpWgtDRlABVbAhQ/edit?usp=sharing) is just shy of 1000 websites, and that’s only based on the most predictable domain name patterns:

```sql
select origin, rank, dj_version, last_modified
from w_dj
where regexp_matches(
  origin,
  '\.((gov|government|gob|gouv|gv)\.?[a-z]{0,2}$|gc\.ca|gouv\.fr|govt\.nz|go\.kr|overheid\.nl|admin\.ch|europa\.eu)'
);
```

The original dataset I collected by crawling about 20M websites from the [Chrome UX Report](https://developer.chrome.com/docs/crux) dataset, running common checks to detect Django (see my [Detect Wagtail](https://github.com/thibaudcolas/detect-wagtail) project for common techniques).

Cross-referencing those 50k websites with other sources, we’re likely to be an order of magnitude below the actual number of Django projects out there, accounting for public sites that aren’t detectable, internal sites, and mobile apps or other projects that aren’t publicly visible in any way.

## Missing countries

There are lots of gaps on the map I’m surprised about! In particular Canada, Germany, Iceland, China, Japan. If you’re aware of government websites in those countries that are built with Django, please let me know!
