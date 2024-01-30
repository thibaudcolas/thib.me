---
layout: page
title: DSF Board Secretary role
---

This page provides an overview of what the Secretary role entails, and documents specific aspects of performing the role.
For very specific tasks, see [DSF Board Secretary todos](/django-docs/dsf-board-member-todos.html).

## Role

The role of the Secretary is defined in the [DSF bylaws (PDF)](https://media.djangoproject.com/foundation/bylaws.pdf) \[TODO: update link when an up-to-date HTML version of the bylaws exists\]:

> 8.8. **Secretary**. The Secretary shall:
>
> 1. Keep the minutes of the Board of Directors’ meetings in one (1) or more books provided for that purpose;
> 2. See that all notices are duly given in accordance with the provisions of these Bylaws or as required by law;
> 3. Be custodian of the corporate records;
> 4. And in general perform all duties incident to the office of Secretary and such other duties as from time to time may be assigned by the President or by the Board of Directors.

## Responsibilities

The Secretary is responsible for:

- [Publishing DSF Board meeting minutes](#publishing-dsf-board-meeting-minutes)
- [Preparing the agenda for DSF Board meetings](#preparing-the-agenda-for-future-meetings)
- [Elections](#elections)
- [Other responsibilities](#other-responsibilities)

### Publishing DSF Board meeting minutes

Meeting notes during the meeting are in Google Docs. At the end of the meeting, the secretary copies them over to the public [meeting minutes archive](https://www.djangoproject.com/foundation/minutes/), minus any private board business.

Here are examples of private board business the board decides to _not_ publish:

- Unannounced DjangoCon locations or dates
- Security flaws
- Discussions escalated from code of conduct issues.
- Private discussions

#### Website publishing steps

Things to know

- The content model is very structured in the site’s CMS ([`Meeting` model](https://github.com/django/djangoproject.com/blob/main/foundation/models.py#L70))
- There is no preview, and once saved the notes are live and pushed to RSS as-is instantly.
- If this is your first time, look at past meetings for reference.
- Some fields support reStructured Text. [TODO: add link to style guide with supported formatting. Check HTML support]

To start, go to the [Meetings list](https://www.djangoproject.com/admin/foundation/meeting/), and click [Add meeting](https://www.djangoproject.com/admin/foundation/meeting/add/).

##### Metadata

1. Title: keep the default "DSF board monthly meeting" as-is.
2. Slug: keep the default `dsf-board-monthly-meeting` as-is.
3. Date: Set to the date of the meeting.
4. Leader: Set to the person marked as Chair in the meeting notes, making sure to use the correct year for people who have been on the board multiple years.
5. Board attendees: Multi-select correct attendees from the predefined list.
6. Non board attendees: Multi-select correct attendees from the predefined list.

Note – only predefined board members and non board members can be selected. If someone is missing, manage [Non-board attendees](https://www.djangoproject.com/admin/foundation/nonboardattendee/). For `BoardMember`, a site administrator needs to manage entries.

##### Treasurer report

1. Treasurer balance: copy the figure as-is from meeting notes, in USD.
2. Treasurer report: unused?

##### Approved grants

Copy the Entity and amount with correct currency from the meeting notes.

##### Approved individual members

Copy the list of names from the meeting notes.

##### Approved corporate members

Copy the list of names from the meeting notes, without the sponsorship level.

##### Ongoing business

Copy into the "Business" categories, with:

1. Title: copied as-is
2. Body: copied converted to reStructuredText formatting
3. Business type: Ongoing

##### Review Private business

Do _not_ copy this anywhere.

##### New business

Copy into the "Business" categories, with:

1. Title: copied as-is
2. Body: copied converted to reStructuredText formatting
3. Business type: New

##### Action items

Copy from To-dos and To-dos from previous meetings, with better wording for clarity where necessary.

---

Once the form is all filled,

1. Hit "Save"
2. Go view the live page, and make sure all formatting works and all links are correct.
3. Share the link to the published minutes to the #board channel.
4. Add the link to published minutes in the Google Doc for future reference.
5. Prepare the [meeting agenda for the next meeting](#preparing-the-agenda-for-future-meetings).

### Preparing the agenda for future meetings

Update the meeting agenda document, with all the necessary content for people to spend their time effectively.

Specific tasks:

- Copy the meeting template to an entry for the new month, with the latest meeting kept at the top of the file.
- From the previous meeting copy over all ongoing business, TODOs, and any other items that should be addressed in the next meeting.
- Share the agenda in the `#board` Slack channel, as a reminder to directors that the meeting is upcoming, and to encourage adding items to the agenda.

Past meetings:

- Meeting agendas, 2023-current: Drive
- Meeting agendas, 2019-2022: TBC (lost?)
- Meeting agendas, 2015-2018: Drive

### Elections

#### Board Elections

DSF Board elections happen annually. As of 2023, these are staggered two year terms -- half the board continues in their positions, and the remainder will be up for election. \[TODO: needs documentation as this is a high-stakes task\]

#### Steering Council Elections

See separate Steering Council Elections documentation.

### Other responsibilities

- The Secretary can access and use the project’s social media accounts.
