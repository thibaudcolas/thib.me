---
layout: post
title: "Waffle vs Trello"
date: 2016-08-20 11:34:00 +0200
comments: true
categories: [List, Tools, Test]
---

I am a big user of [Trello](https://trello.com). For todolists, waterfall projects, kanban boards, all the things. I particularly love its flexibility – there are a thousand ways to structure your work with it. This can be overwhelming if you’re not familiar with it though.

At Springload, we took one of the competing tools, [Waffle](https://waffle.io/), for a spin. Here are my notes.

<!-- more -->

While Trello is a standalone tool, Waffle is built upon GitHub issues. Instead of duplicating the information between multiple trackers/tools, GitHub issues and pull requests become the single source of truth. Since they are used for development anyway, we might as well get the most out of them and reduce our tool fragmentation!

I took Waffle for a spin on one of our prototyping projects, and here is the conclusion: **while I like GitHub issues, they might not be an appropriate medium for our project tasks**. Waffle has interesting features that distinguish itself from Trello, but they are too targeted towards development tasks for the tool to be as relevant to non-developers, or to developers handling other aspects of the work. I like the fact that Waffle pushes you to do more Markdown and "GitHub", but this isn’t always appropriate.

## Waffle things I like

* Tighter integration with GitHub means that it will be easier for GitHub to get more non-code use. Which can be a good thing?
* Filters are persisted in URL

## Waffle things I don’t like

* Waffle uses the word “Issue”, as GitHub does. This might be innocuous but it’s not a word I like to describe what we do. We’re organising tasks, not bugs and support tickets. Trello says “Card”, which is more neutral.
* Does not have color-less labels
* Does not support multiple “Backlog” or “Done” columns
* Does not support attaching images to cards/issues
  * Nor other files…
* Cannot create a board without a GitHub repository

## Trello things I like

* Lots
* Mainly,
  * the UI is more refined
  * it proposes interesting integration, and
  * it is way easier to use lists of tasks via the Checklist feature

## Conclusion

I will stick with Trello over Waffle because:

* Waffle’s interface isn’t as good in general, doesn’t do as many things
* You need a GitHub repository to create a Waffle board.
* You need a GitHub account to access a Waffle board.

On the contrary, with Trello:

* The interface is amazing, although confusing to newcomers, not more than Waffle’s
* You can create as many boards as you want to, give access to some to the clients, keep some for ourselves, keep some private just for you
* There are more integrations and other things we could make use of but aren’t using at the moment (Calendars view, card aging, vote, Slack/GitHub integrations)

Go #TeamTrello!
