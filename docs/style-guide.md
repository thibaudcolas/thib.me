# Style guide

This guide captures the writing conventions used across the blog. Use it when writing new posts and when revising older ones.

## Design goals

- Write in a direct, useful, personal style.
- Use [Bottom Line Up Front (BLUF)](https://en.wikipedia.org/wiki/BLUF_(communication)) style where possible.
- Make posts easy to scan/skim with clear headings, short paragraphs, lists, and descriptive link text.
- Preserve the author’s point of view: posts can be reflective, opinionated, and transparent about uncertainty.
- Make technical and community work legible to people who know Django, Wagtail, accessibility, open source, or front-end development, without assuming deep context on every topic. Depth is fine if the post warrants it.
- Share information with sources / links. And the occasional image for visual understanding.
- Prefer American english but always Sentence case, unless we’re quoting / reproducing something that was in Title Case originally.

## Tone of voice

Conversational, practical, and candid.

- Use first person freely for personal posts: "I", "my", "I’ve", "I’m".
- Some posts are written on behalf of a team, board, working group, project, or event. Use "we" for that.
- Use "you" when giving advice or explaining what readers can do.
- Contractions are normal: "it’s", "we’re", "don’t", "can’t".
- Prefer plain, active sentences over formal phrasing.
- It’s fine to show enthusiasm, but keep it grounded in the work.
- It’s fine to be critical. Keep the criticism constructive and specific.

Good examples of the house style:

- "Here are my notes."
- "This is looking very neat."
- "I’m unclear here if..."
- "We didn’t manage to do this as well as in past years but got decent results nonetheless."
- "More on that in a future post."

Avoid:

- Punching down, sarcasm, insensitive jokes. There’s enough of that on the internet.
- Marketing copy that hides the actual point.
- Overly polished institutional language for personal posts.
- Over-explaining background at the expense of the observation, data, or recommendation.

## Audience

The site has several overlapping audiences:

- Django, Wagtail, Python, JavaScript, and web tech practitioners.
- Open-source maintainers, contributors, board members, and event organizers.
- Accessibility, sustainability, governance, and community specialists.
- People following the author’s work, talks, projects, and notes.

Assume readers are technically literate but don’t know the specific project or org. Expand or link to the first important mention where the context matters.

For community, governance, code of conduct, accessibility, and inclusion posts, write for readers who may be directly affected by the topic. Prioritize clarity, respect, and accountability over clever phrasing.

## Post types

### Personal reflections

Use first person and make the purpose clear early. These posts often work well with:

- A short opening statement.
- A few thematic sections.
- Honest uncertainty or plans.
- A concise ending that says what happens next.

### Community announcements

Those are often reposts with a canonical version living elsewhere. Lead with the news, then explain why it matters and how people can help. Use "we" only when the author is representing the relevant project or group. Thank people plainly and specifically when appropriate.

### Reports and transparency posts

Use a factual, accountable tone. State scope, dates, responsibilities, and limitations clearly.

Common structure:

- What happened or what the report covers.
- Who was involved.
- What happened before, during, and after the event or project.
- Incidents, outcomes, or results, with enough detail to be useful and anonymized where needed.
- Takeaways or recommendations.
- Closing context or thanks.

### Technical recipes and notes

Keep them pragmatic. State the problem, describe what’s missing or what’s hard, then provide recipes, snippets, links, or tradeoffs.

Use code examples when they are the clearest way to explain the idea. Don’t turn technical posts into full tutorials unless the post is explicitly a tutorial.

### Link-heavy resource posts

It’s acceptable for posts to be short or mostly links when the value is curation or future reference. Add enough context so readers know why the links are there and what they should look at first.

### Talk, podcast, and event notes

It’s fine for these to read like extended show notes or field notes. Start with what the resource is, then provide the recording, slides, references, or takeaways.

## Formatting

Every post is written in Markdown and should have:

- YAML front matter.
- A short opening paragraph before `<!-- more -->`.
- The `<!-- more -->` marker after the opening summary.
- Clear sections for anything longer than a short note.
- Links to other resources for more information.

The opening paragraph will be used in listings. It should say the useful thing first: the announcement, the question, the result, the resource, or the reason for the post.

Use horizontal rules sparingly for major shifts, such as moving from baseline advice to more advanced advice, or separating a copied source section from commentary.

This repository uses Prettier for Markdown formatting.

- Keep Markdown compatible with Prettier.
- Preserve prose wrapping where it is already intentional.
- Run `npm run lint` before publishing larger changes when practical.
- Avoid raw HTML unless Markdown can’t represent the needed embed or layout.

### File names

Always use `YYYY-MM-DD-slug.md`, with the slug a "lowercase hyphenated" version of the post title. With stop words removed for length. If the post has images, they’ll also be in a folder named after the slug within `src/images/blog/`.

### Front matter

Use the existing Jekyll front matter format:

```yaml
---
layout: post
title: "Post title"
date: YYYY-MM-DD HH:MM:SS +0000
comments: true
# Pick relevant categories for the post contents / audience.
categories: [Django, Community]
# Only for reposts of external posts
canonical: https://example.com/original-post/
# Optional but recommended. Never artificial eye candy. Always something actually about the contents of the post.
seo_image: /images/blog/slug/image.webp
seo_image_alt: Descriptive alt text for the SEO image
---
```

Guidelines:

- Keep `layout: post` and `comments: true` for normal posts.
- Use sentence case for titles by default.
- Title case is acceptable when matching a proper title, event title, talk title, survey title, or copied canonical post.
- Keep titles specific and searchable.
- Use `seo_image` and `seo_image_alt` when a post has a meaningful preview
  image.
- Categories are title case, comma-separated, and usually 2-4 terms. Pick from available categories.

## Headings

- Don’t add an H1 inside normal posts; the title provides the page H1.
- Use H2 for main sections.
- Use H3 for subsections.
- Use deeper heading levels only if the hierarchy really helps.
- Prefer short, descriptive headings.
- Sentence case is the default: "What’s missing", "How you can help", "Data and methodology".
- Acronyms and proper nouns keep their normal capitalization.
- Don’t add bold formatting inside headings in new posts, even though some older posts do this.
- Don’t put links inside headings unless there is a strong reason.

Verb-first headings work well for advice posts:

- "Read the selection process"
- "Show nuance"
- "Add an outline"

Question headings work well for notes and research posts:

- "What do we mean by sustainability?"
- "Why should you check out the infographics?"

## Paragraphs and sentences

- Keep paragraphs short, usually 1-4 sentences.
- Vary sentence length, but keep the point visible.
- Lead with the conclusion when the post is advice, reporting, or analysis (see: BLUF).
- Use fragments when they fit the personal blog voice. Don’t overdo them in formal reports.
- Use "for example" and concrete examples instead of abstract claims.
- It’s acceptable to say "I think", "in my opinion", or "my takeaway" when the post is explicitly personal analysis.

## Lists

Use lists generously for ease of scanning.

- Use bullets for unordered notes, references, ideas, and takeaways.
- Use numbered lists for ordered steps, rankings, processes, and counts.
- Keep list items parallel where possible.
- Use nested lists only when they clarify a real hierarchy.
- Long lists are acceptable for reference posts, but introduce what readers are looking at and what conclusion to draw.

## Links

The blog is link-heavy. Links should help readers verify, follow up, or give
credit.

- Link important first mentions of projects, reports, tools, talks, and source material.
- Use descriptive link text. Avoid "click here".
- Link to official sources where possible.
- Link to prior posts when they give useful continuity.
- Use absolute URLs for external sites.
- Use root-relative links for internal posts and assets.
- For copied or syndicated posts, include `canonical` in front matter and keep source links intact.

## Images

Use images when they carry information: screenshots, charts, photos from events, posters, maps, diagrams, or examples of a visual outcome. Illustrations are ok but only thoughtfully done, to inspire, not eye candy. Never use AI-generated illustrations. Always credit the source of the images.

Image alt text should be descriptive and specific. It should tell readers what the image shows, especially for charts, screenshots, and event photos. It should complement the information about the image that is already visible in the surrounding text.

Good patterns:

- "Line chart of Individual Members of the Django Software Foundation, from 2018 to 2025, going from 150 to 400"
- "Screenshot of the Wagtail 6.3 page editor, with a sidebar to the left, an editing form, and to the right a preview panel with a dark theme web page"
- "Audience in the foreground, speaker on stage behind the lectern. The current slide reads…"

For charts, include the chart type, subject, key values, and trend where practical. For screenshots, describe the interface and relevant visible state. For photos, describe the people, setting, and action if relevant.

Use paths under `/images/blog/...` or another existing asset path. Keep image filenames stable and descriptive.

Always optimize images. Use the right dimensions. Use compression, in modern formats if possible.

## Code and technical formatting

Use fenced code blocks with a language where possible:

````markdown
```python
def example():
    return "clear"
```
````

Use inline code for:

- File names and paths.
- Commands.
- Package names when they are code identifiers.
- Setting names, APIs, field names, and exact values.

Use normal prose for product and project names unless the name is normally code styled.

Technical posts can include substantial code, command output, tables, and snippets. Keep enough surrounding explanation for readers to understand why the example matters.

## Tables

Use tables for structured comparisons, survey results, rankings, and matrices.

- Keep column headings short.
- Add a sentence before or after the table explaining the takeaway.
- Don’t rely on the table alone to communicate the conclusion.

## Quotes

Use block quotes for source material, copied statements, participant feedback, or exact wording that matters.

Introduce quotes with enough context: who said it, where it came from, and why it matters. After long quotes, explain the takeaway in the author’s own words.

## Emoji and symbols

Use emoji sparingly and deliberately, when they can add warmth or shorthand content.

- Appropriate: personal posts, event recaps, lightweight notes, celebratory community updates, quick status cues.
- Avoid or minimize: serious statements, security issues, accessibility failures, and posts where the tone should stay formal.
- Don’t use emoji as the only carrier of meaning.
- Avoid dense emoji strings.

Symbols such as arrows, check marks, and trend indicators are acceptable in charts, tables, or short explanatory lists when they improve scanning.

## Spelling, punctuation, and typography

- British spelling appears often: "organise", "favourite", "optimisation". Prefer American spelling for new posts unless quoting a source or matching a project’s own wording.
- Use curly apostrophes and quotation marks in prose where convenient.
- Use straight quotes in code, commands, YAML, and copied technical snippets.
- Use en dashes for parenthetical breaks and ranges where they improve readability.
- Hyphenate compound adjectives when it helps: "open-source community", "front-end development", "links-heavy version".
- Use "website" as one word.
- Write dates with enough context for the post: "February 2024", "October 29th", or exact dates when sequencing matters.

## Terminology

Be consistent with project and community names:

- `Django`
- `Django Software Foundation` on first mention, then `DSF` if useful.
- `Wagtail`, or `Wagtail CMS` when referring to the product in broader marketing or user contexts.
- `Code of Conduct` or `CoC`; introduce `CoC` before relying on it.
- `Google Summer of Code` and `GSoC`.
- `Google Season of Docs` and `GSoD`.
- `Outreachy`.
- `Global Accessibility Awareness Day` and `GAAD`.
- `Web Content Accessibility Guidelines` and `WCAG`.
- `Authoring Tool Accessibility Guidelines` and `ATAG`.
- `HTTP Archive`.

For acronyms, expand them on first use when the post is aimed beyond people already working in that niche.

## Numbers

We regularly share statistics / back of the envelope maths / survey results.

- Be clear what the numbers represent.
- State the methodology or model if there’s space for that.
- State the dataset(s) and date range.
- Be clear about uncertainty and limitations.
- Distinguish measurement from estimation.
- Avoid false precision.
- Explain whether a trend is good or bad when the metric isn’t obvious.
- Link to source data, dashboards, spreadsheets, or methodology pages where possible.

## Accessibility and inclusion

Accessibility and inclusion are recurring themes, so write about them with precision.

- Say "disabled people" or describe the specific group when relevant.
- Name assistive technologies and access needs specifically when possible.
- Don’t frame accessibility as charity or a nice-to-have.
- Distinguish automated checks from manual testing.
- Use content warnings only when they would materially help readers prepare for sensitive content.

## Calls to action

Calls to action should be concrete and relevant.

Good patterns:

- "Fill in the expression of interest form."
- "Come say hi on Slack."
- "Read the report."
- "Nominate someone as an Individual Member."
- "Watch the recording."

Avoid vague calls to action at all costs. No "learn more" BS when a more specific action is available.

## Sensitive and official posts

Some posts are personal notes. Others represent a board, project, conference, or working group. Match the level of care to the role.

For official or semi-official posts:

- State who the post is written with or on behalf of.
- Keep claims factual and attributable.
- Be precise with dates, roles, eligibility, and process.
- Prefer calm, clear wording over dramatic framing.
- Include links to official processes, forms, and discussions.
- Thank contributors and volunteers without overstating certainty.

For code of conduct reports in particular:

- Prioritize privacy and harm reduction.
- Avoid unnecessary detail about incidents.
- Separate facts, actions taken, and recommendations.
- Be transparent about delays or limitations.
- End with the purpose of publication and relevant thanks.

## Canonical and copied posts

Some posts are copied from official sites, GitHub Discussions, conference sites,
or other canonical sources. For those:

- Add `canonical` when there is a canonical URL.
- Keep the copied content as-is unless there is a clear reason to adapt it.
- Add a short note when the post is copied for future reference.

## Quick checklist

Before publishing a post, check:

- The opening paragraph clearly says what the post is about.
- `<!-- more -->` appears after the opening summary.
- Front matter has the right title, date, categories, and canonical URL if
  needed.
- Headings are useful and don’t skip levels unnecessarily.
- Links have descriptive text and point to reliable sources.
- Images have meaningful alt text.
- Acronyms and specialist terms are introduced or linked.
- Sensitive topics are written with care and enough context.
- Technical snippets have language-tagged code fences where possible.
- The ending gives readers the next step, takeaway, or closure.
