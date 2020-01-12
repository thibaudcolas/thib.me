---
layout: post
title: "(Not) building custom e-commerce marketplaces"
date: 2016-06-14 19:38:27 +0300
comments: true
categories: [Commerce, Community, Startup]
---

I think it's now the third time I've had to think about the best approach to create new e-commerce marketplaces.

**TL;DR;** This is hard, and there is no go-to marketplace as a service yet. But there are alternative approaches.

<!-- more -->

> Note: this text was originally in email form.

In general, I would try to challenge the conclusion that you **"need to create a commerce marketplace from scratch"** as much as possible, as it will be a big up front effort that might not yield reliable results fast enough. Here are alternative things to look at:

- https://www.shopify.com/, build e-commerce shops in minutes (likely not to be for you, but well worth a try)
- http://inselly.com/, http://www.instaorders.com/, tools to sell through Instagram
- http://pasary.com/, best marketplace as a service contender... from the looks of their product site.

# The "sell through Instagram" approach

No need to build user profile features (Instagram account instead) and product pages (Instagram "posts"). You'd just need to build enough product discovery (hashtags!) and transaction record features on top of Instagram so that your users can successfully browse items and complete transactions. I've seen many success stories of shops doing their business only on free Instagram and Messenger/WhatsApp accounts. Get people advertising their items there, track point counts with your custom code, and get people doing transactions.

# The "custom" approach with a web framework

Have a good look through reusable, semi off the shelf solutions like this matrix of Django-based e-commerce modules: https://www.djangopackages.com/grids/g/ecommerce/. It's important to note that most of the building blocks out there are meant to create e-commerce sites for shops or retailers, not full-fledged platforms/marketplaces with transactions between different users.

IMHO it's paramount to focus on your MVP features to ship something fast, validate it, iterate on it. Web technologies are great at that. There are plenty of tools to reuse (Django / Oscar- Python, Drupal Commerce - PHP, Magento - PHP). Pick the technology you're most familiar with.

For single-page applications – this is where most of the web apps are headed these days, but I wouldn't advise you to go in that direction just yet if you don't have the technical resources to do so. From a technical standpoint you can still do something like PJAX (for example https://github.com/defunkt/jquery-pjax) to get that same performance feeling. For the UI, I think that Bootstrap is a good choice if this isn't your strong point. Again for the purpose of creating something fast.

For that approach to work, you'll most likely need more than 1/2 developers. Get coding!

# Regarding Startup Weekend

I have attended multiple of those in the past. My two cents: most of the times the ideas are great but the teams lack the resources (time, finances, business know-how, technical know-how) to bring those ideas to fruition.

Try to explore those alternative solutions first (eg. building on top of established social platforms) so that you can get going, **fail fast**, make progress. If you succeed there, you'll have the opportunity to take this to the next level, get financial backing and tailor-build the best platform for your users to be happy and your business model to work.
