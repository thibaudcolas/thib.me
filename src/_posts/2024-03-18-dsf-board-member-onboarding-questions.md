---
layout: post
title: "DSF board member onboarding questions"
date: 2024-03-18 22:29:58 +0100
comments: true
categories: [Django Software Foundation, Django, Documentation]
---

I recently joined the Django Software Foundation board. As part of my onboarding and that of my colleague Sarah Abderemane, here is a record of various questions we asked, and the answers we got.

<!-- more -->

## Working groups

- For DSF Working Groups, what is the process as someone part of the board? Should we vote when a PR is open or something else?
  - Vote once there’s a charter that’s clear enough for a vote; scope of powers, initial chair, process for adding new members
- What’s the timeline / next steps for working groups to be up and running?
  - There’s no timeline, it’s up to individual groups to figure this out. See answers from Jacob in #board.
  - Steps documented in [dsf-working-groups README](https://github.com/django/dsf-working-groups/blob/main/README.md)
- Who is able to merge on WG repo?
  - Now – all board team
- The fundraising WG is marked as active but there are many TBD in it. Has the page not been updated or something else?
  - Needs someone to take ownership and define this more fully
- Who is the Chair or the board liaison for this fundraising WG? How to volunteer?
  - There is none currently. No defined step for volunteering aside from “contact the board”
  - Needs someone to take ownership and define this more fully
- Do you have to be a DSF member to be in a working group?
  - No / it’s up to each group to define this
- How to get involved with DjangoCon Europe organizers working group?
  - Steps needed to get it up and running are clear.
  - Thibaud misunderstanding the purpose of the group compared to [discussions so far](https://github.com/django/dsf-working-groups/issues/1), so staying out of this for now.

## Finances

- What’s a comfortable amount of money in the bank?
  - No one has been able to give a good answer to this so far.
- Has there been discussions before on what tax deductions are possible (if any) for donations outside the USA?
  - Yes, it’s unclear.
- What’s the size of individual and corporate donations by country?
  - Not asked yet
- Any plans to request MOSS-type grants?
  - Not asked yet

## New board members

- Do you have onboarding processes for new board members?
  - "what the \[officer role\] does" document hanging around – unable to locate it
  - Beyond that the onboarding at the moment is - being through a few board meetings, seeing the emails sent to the foundation email address (that is the public address that goes to the whole board). Much of the impetus for switching to staggered terms was for the purposes of transfer of experience. if you would like to document your experience that would be valuable.
  - Catch up with other board members
  - Access via `djangoproject.com` accounts
- Handover document from board members who have finished their term?
  - This doesn’t seem to exist. Have to find existing docs if any (unlikely)
- Are we announcing our appointment in any kind of formal way aside from the candidacy results?
  - No point to do that in the past but why not.
  - [DSF Board 2024 Elections – New board members 👋](https://www.djangoproject.com/weblog/2024/jan/08/dsf-board-2024-elections-new-board-members/)
- Can I get access to the 2022-ish membership survey?
  - Should have access but not working currently. Shared with board google group (external)?
- Who looks after Google Summer of Code participations for Django?
  - Historically, Fellows, seasoned community members (not the board)
- Is it ok with you all if I use my existing personal account for Trello
  - Yes
- On Google Drive – I seem to just have read-only access to "DSF shared files". Is that on purpose?
  - Those are older files. Not on purpose, we all only have “Viewer” access. Can add/edit if there’s a need for specific access\ Specific access needed:
    - Move all meeting minutes I can see currently to the same place, either that shared files folder, or the shared drive
    - Locate the 2019-2022 meeting minutes and put them in the right folder too
    - Create a new folder and docs for drafts of blog posts for the site, probably inside "Communications"
- Does the DSF / DSF board still use Dropbox? If so how do I get access to that?
  - Not asked yet
- Why are 2023 meeting minutes in their own shared drive?
  - Access issue, set this up as a workaround. Could be consolidated with other minutes.
- Slack special admin access – why just Chaim?
  - Not asked yet - Can make all board members Admin?
- Do we have a list of Google Groups / email aliases somewhere?
  - Not really – mixture of inconsistent use as admin groups and aliases
- What’s secretary@ email for?
  - Chaim mentions so we don’t have our emails shared around
- Do we have documentation on what the foundation@ email is for, and how we process any emails?
  - Catherine handles a lot/most of them. No specific process, whoever on the mailing list (The board+Catherine) who has the time and ability to answer can. Catherine tends to as it is in her purview and she is paid for it, but if it is more of a board matter any/all of us can
- Is there any internal documentation about how elections work?
  - Only for SC elections
- Calendar invitation for meetings?
  - Yes
- Is there a reason why we have one document per meeting for board meeting notes?
  - Not really, change this if you want
  - Fundamental legal requirement to keep agendas & minutes for 10 years
- There was no board meeting in August 2023?
  - Yes, likely no quorum no meeting
- Is this the most recent version of the bylaws? Is there a copy somewhere in another format than PDF?
  - <https://media.djangoproject.com/foundation/bylaws.pdf>
  - No this is out of date. Two sets of updates that are not reflected yet
  - Chaim working on this. Thibaud keen to help.
- I don’t seem to have access to dsf-board@, not sure if that’s missing or if there’s something I don’t understand?
  - Sorted
- Calendar events for tax & accounting-related filings – what involvement?
  - Not asked yet

## Board

- When can we expect the 2023 django developers survey results?
  - Asked but got unclear answer. Ask again
  - [Survey form](https://surveys.jetbrains.com/s3/django-developers-survey-2023) no longer accepting responses as of Jan 2023
  - 2022 survey results weren’t ready in March 2023
  - (private) preliminary results now shared
- Annual report for 2023?
  - “Low interest but sure” answer – make it happen, re-raise
  - Membership survey from 2022-ish that could be interesting to review
- How much work should I expect on a weekly basis?
  - No clear answer.
- I would like to promote companies
  - Strong agree! Room for improvement. Careful on advertising from anti-corporate folks.
  - See [social media WG proposal](https://github.com/django/dsf-working-groups/pull/6)

## Accessibility

- Selenium axe package
  - Raised in January meeting

## Django website

- How can I get enough access to djangoproject.com to fix accessibility issues in the content? (on the order of 10-30 pages)
  - Short answer: be Secretary. Other people: TBC
- What’s the detailed scope, estimates, & budget of 20tabs djangoproject.com work?
  - 20tab possibly making a proposal after the ongoing UX phase
  - Changing site management is out of scope
  - Need to check Drive on DSF-owned documentation
  - 20tab & website group meant to share updates / have calls more regularly than in practice
- Do you take publishing an announcement to the board?
  - Not needed for already-approved events
- Analytics set up on the site?
  - Nope
- What’s the fundraising target from?
  - [hard-corded in the site](https://github.com/django/djangoproject.com/blob/main/fundraising/models.py#L11)
  - Relatively arbitrary number

## Mentoring

- Is the Steering Council in charge of Django’s Google Summer of Code and Google Season of Docs participations?
  - Steering Council not really involved in GSoC or GSoD. Fellows are.
- How can someone become a mentor? Is it proposed by fellows to people they think they should be good mentors?
  - It's enough to want to be one, people can add themselves on the project desired in the wiki of GSOC of each release (the wiki is created by a fellow)
- Do we have enough mentors for the projects we have in general?
  - Never enough
- Who looks after Google’s payment of mentoring stipends, and who do the mentoring stipends go to?
  - Treasurer / Assistant to the Treasurer / looks after itself.
  - Payments in 2022 & 2023 of $1000
- How do you decide who to send to the Mentor Summit?
  - Nobody ever had free time to go, so there was no competition. If you will become a mentor and would like to go, probably no one will object.

## Social media

- who is posting to the social medias for django? Is it who ever who can? How to get access?
  - Markus + operations team. Also Secretary.
  - Twitter manual. Mastodon RSS feed auto-posting
  - Current process on who should have access isn’t super clear. See notes on [Joining the DSF Social Media working group](/joining-the-dsf-social-media-working-group) for the logistics of account sharing.
- Fundraising campaign at year-end – how do we organize a tweet or two?
  - See above re Twitter access. Didn’t end up getting it on time to do anything

## 2024 - 2025

- Who oversaw Google Season of Docs participation in past years? Plans for 2024?
  - Only participation ever: Carlton Gibson, though that was in the previous "mentorship" model of Season of Docs
- Who oversaw Google Summer of Code participation in past years? Plans for 2024?
  - Mostly individual mentors.
- DjangoCon Africa 2024?
  - Not in 2024. Focus on 2025
- Celebration for “20 years of Django”?
  - Some ideas, no set plan just yet
