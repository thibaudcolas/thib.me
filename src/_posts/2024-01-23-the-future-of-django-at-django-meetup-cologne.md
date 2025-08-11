---
layout: post
title: "The future of Django: at Django Meetup Cologne"
date: 2024-01-23 21:29:58 +0100
comments: true
comments_discussion:
categories: [Talks, Django Software Foundation, Django, Governance]
---

We discussed the future of Django with the Django Meetup Cologne community. Here are the results and my notes.

<!-- more -->

This week, Sarah Abderemane and I got invited to join the [50th edition of the Django Meetup in Cologne](https://www.meetup.com/koln-django-meetup-gruppe/events/298437052/) 😌. We had a great time thanks to the meetup organizers and our hosts [Ambient](https://ambient.digital/). We ran a "Future of Django" interactive session to gather feedback from our community. Here are the results.

## Community questions

Starting with a few broad questions about Django and friends.

### Have you ever been to a Django conference?

| Yes     | No      |
| ------- | ------- |
| 9 (56%) | 7 (44%) |

### Would you be interested to have social events online as well?

| Yes     | No      |
| ------- | ------- |
| 8 (61%) | 5 (39%) |

### Have you ever done a sprint?

| Statement                                      | Count |
| ---------------------------------------------- | ----- |
| Yes, physically and I would love to do another | 9     |
| Yes, virtually and I would love to do another  | 0     |
| Yes, I don’t want to do another                | 1     |
| No but I would love to do one physically       | 0     |
| No but I would love to do one virtually        | 0     |
| No and I don’t want to                         | 0     |

### Django’s direction questions

Branching from community towards the core framework (but not just the core framework).

### Should Django have a public roadmap?

| Yes | No  |
| --- | --- |
| 14  | 1   |

### Do you have any packages in mind you would like to see in Django core?

Participants could vote for as many options as they wanted.

| Package                                                   | Count |
| --------------------------------------------------------- | ----- |
| whitenoise, django-cors-headers                           | 7     |
| django-environ                                            | 7     |
| django-csp                                                | 7     |
| django-extensions                                         | 6     |
| some stuff from django-extensions (show_urls, shell_plus) | 5     |
| django-pony-express                                       | 4     |
| dj-database-url                                           | 4     |
| django-ninja                                              | 3     |
| django-cte                                                | 3     |

My takeaway from this list is there are a number of packages that provide such fundamental capabilities to Django that people likely use them on all projects, and as such would be better served by the functionality being built-in.

I find it telling about the pace and inordinate complexity of Django core contributions that packages like [django-csp](https://github.com/mozilla/django-csp) aren’t already in core considering there’s been years of discussions about such a change ([13 years to be precise](https://code.djangoproject.com/ticket/15727)).

It’s also interesting to me that django-environ sees so much demand, considering I don’t use it myself.

### What else would you like to see in Django?

Participants could vote for as many options as they wanted.

| Idea                                                                                             | Count |
| ------------------------------------------------------------------------------------------------ | ----- |
| Some kind of task runner                                                                         | 11    |
| htmx in the admin                                                                                | 11    |
| Less magic in the ORM (maybe more in the direction of a query builder)                           | 6     |
| Advanced tutorials on async, htmx                                                                | 5     |
| Serverless Django docs                                                                           | 5     |
| Better way to build components for full-stack apps (i.e. django-components, slippers)            | 5     |
| Advanced tutorial                                                                                | 4     |
| Listing of possible ways to contribute (not only code, stuff like evangelist, community manager) | 4     |
| Docs for custom business logic                                                                   | 4     |

Lots of interesting items here.

I’m unclear here if by "task runner" we’re talking about background tasks in the sense of [RQ](https://github.com/rq/django-rq) or Celery, or tasks in the sense of project-specific commands à la cargo / npm.

## Do you have any ideas to improve the fundraising of the Django Software Foundation?

Participants could propose as many ideas as they wanted, and there was no voting for this round:

- Money for features via kickstarter
- Stay independent of big firms like Amazon, Microsoft
- Integrated hosting like laravel
- organize paid training courses
- Paid advertising for jobs on djangoproject.com
- Paid Certifications
- Merchandise with Django logo (Shirts, hoodies, cups, etc...)
- Paid support by django experts
- Paid-for features
- Find some government funding
- Make donations tax deductible

Tax-deductible donations are interesting because this is why the Django Software Foundation is a 501(c)(3) non-profit in the US. Whether this is possible in other countries would warrant investigation. In addition, the DSF could also better document how in-kind contributions to Django could count as R&D with dedicated tax incentives.

### What would you like to see in Django in terms of community?

Lots of good ideas here!

| Idea                                                                            | Count |
| ------------------------------------------------------------------------------- | ----- |
| Django Under the Hood reboot                                                    | 9     |
| Roadmap ;)                                                                      | 8     |
| Django community streams by contributers of just chatting / answering questions | 6     |
| Overview of meetups/conferences etc                                             | 5     |
| A more encouraging ticket system                                                | 5     |
| Retire google groups                                                            | 5     |
| Official Django Tutorial Series                                                 | 5     |
| Django ambassadors program                                                      | 5     |
| More in person sprints.                                                         | 4     |
| More examples in the documents                                                  | 4     |
| A community I'm building in Niger. I hope it will grow.                         | 3     |
| In person events                                                                | 2     |
| Local hubs                                                                      | 2     |
| New people                                                                      | 0     |

## My takeway

My takeaway from running this session with Sarah is that there were lots of excellent ideas, and a non-zero amount of people willing to get involved with Django that I had never heard of before!

Beyond what we covered above during the session, here are my highlights of interesting ideas from just chatting with people:

- An advanced tutorial would be great in the official docs. For Wagtail, we [took part in Google Season of Docs](https://github.com/wagtail/gsod) to do this, spending months of effort on it, so it’s a big undertaking but very high value in my opinion.
- We should get our new social media working group involved with fundraising.
- django startproject could have a call for donations?
- Could DSF donations be tax-deductible for European donors?
