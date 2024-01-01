---
layout: post
title: "Rich text customisations in Wagtail"
date: 2022-09-01 14:32:29 +0100
comments: true
categories: [Draftail, Wagtail, Draftjs]
---

Exploring current customisation capabilities in Wagtail rich text.

<!-- more -->

There are several rich text APIs in Wagtail, added over the years as customisation requirements evolved. Some are editor-agnostic while others aren’t. Some operate at high levels of abstraction, some at low levels.

As part of the introduction of Draftail to the CMS, we took great care to make all rich text storage and server-side data manipulation APIs editor-agnostic, while client-side editor UI customization APIs were left to differ between Hallo.js (our previous default editor) and Draftail. We have known this to be a common pain point for developers wanting to customise the rich text experience, and we have clear ideas on how to improve upon the current state.

We also want to keep making it possible to swap rich text editors entirely on a given project, and avoid dependence on any one implementation, particularly considering the track record of support for our two currently-supported editors. There are clear improvements we can make in this space too, making common customisations more editor-agnostic for the benefit of site implementers.

## Rich text APIs overview

There are six areas we recommend considering. They can all be improved upon separately, though changes should be validated based on the end-to-end implementation of common rich text features.

| **API**                                      | **Current state**                                                                      | **Ideal state**                                                                                                                                      |
| -------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Editor widget UI customisations**          | Editor-specific, low-level, largely undocumented.                                      | New editor-agnostic, high-level API for common use cases. Current APIs documented and exposed publicly.                                              |
| **Editor widget data manipulation**          | Editor-specific, low-level, largely undocumented.                                      | Documented editor-specific APIs. Provide built-in data transformation functions for common use cases.                                                |
| **Editor widget ↔ storage data conversion** | Editor-specific, low-level, basic documentation.                                       | New editor-agnostic, high-level APIs for common use cases. Current APIs retained as-is.                                                              |
| **Storage → front-end data conversion**      | Editor-agnostic, low-level, basic documentation. Missing support for common use cases. | New high-level API for common use cases. Support for advanced use cases in existing API. Documented approach for headless.                           |
| **Rich text features registry**              | Editor-agnostic, high-level, documented                                                | Current API extended to support all types of customizations                                                                                          |
| **End-to-end rich text dev experience**      | All above areas considered separately, documented together in a single tutorial.       | End-to-end tutorials for 2 common use cases with new high-level editor-agnostic APIs. End-to-end tutorials for 2 common use cases with existing APIs |

## Editor widget UI customisations

Those APIs are currently editor-specific, under-designed, and lacking good documentation. The public-facing APIs were largely implemented only as far as to support as-is functionality in Wagtail v2 compared to v1, with basic capabilities to register UI components within the rich text content (entities’ _decorator_ and _block_), as well data sources for those components (_source_). Those APIs are well documented for the editor widget on [draftail.org](https://draftail.org/), but their Wagtail integration is sparsely covered. All other kinds of rich text customisations (decorators without entities, input processing, copy-paste processing, toolbar-only UI elements) are internally supported but not publicly exposed nor documented.

The improvements we can make are to:

- Provide high-level declarative APIs _server-side_ for the most common entity customisations for inline content, based on the latest Wagtail 4.0 work on generic choosers and UI component APIs (for example, a picker for an arbitrary Django model)
- Expose internally-available _decorators_, _controls_, _draft-js-plugins_, and all other Draftail-specific customisation options. See issue [#5580](https://github.com/wagtail/wagtail/issues/5580).
- Document all existing and new UI customisation options _within Wagtail_, rather than only standalone on [draftail.org](https://draftail.org/).

## Editor widget data manipulation

For any client-side data manipulation of rich text, we currently expect knowledge of low-level Draft.js APIs. Draftail provides higher-level functions for common manipulations but they aren’t documented.

We believe those APIs should remain editor-specific, however we should nonetheless:

- Publicly expose & document current APIs in use within Wagtail core
- Document Draftail’s DraftUtils data manipulation APIs (see [draftail#446](https://github.com/springload/draftail/issues/446))
- Similarly make common transformation APIs implemented in the standalone [draftjs-filters](https://github.com/thibaudcolas/draftjs-filters) package more visible within Wagtail docs.
- Create high-level client-side APIs for rich text content replacement when typing and on copy-paste (smart quotes, not-smart quotes, “->” to “→”, and similar generic text processing). Either completely invisible to end users or with generic toolbar controls.

## Editor widget ↔ storage data conversion

The conversion between an editor’s rich text data model and Wagtail’s is by definition editor-specific, and tends to require advanced knowledge of the data formats. The current APIs work well in this respect, but there is no reason not to provide higher-level wrappers that could be made editor-agnostic, and improve documentation:

- The high-level API could work in concert with generic choosers and high-level editor UI customisation APIs, so a given Django model’s “in rich text” representation can be set up in an editor-agnostic way, with boilerplate configuration only.
- Serialisation and deserialisation should be completely declarative.

## Storage → front-end data conversion

Wagtail’s current APIs in this space predate the improved support for rich text customisations added in Wagtail v2, and remain basic. The conversion process is also undocumented for headless sites, which have to figure out their approach independently. There are clear, already-researched improvements we can make in this space:

- The existing front-end conversion APIs should be improved to support conversions at least as complex as what is supported in editor widget ↔ storage APIs (see [#4223](https://github.com/wagtail/wagtail/issues/4223)).
- We should introduce new APIs for common, simple conversions, such as <b> → <strong> (see [#4223](https://github.com/wagtail/wagtail/issues/4223), [#4665](https://github.com/wagtail/wagtail/issues/4665))
- _Server-side_ rendering of rich text HTML should be supported in Wagtail with a bespoke API, replicating current capabilities for non-headless sites with the _|richtext_ template filter.
- _Client-side_ rendering of rich text HTML should be documented as a high-level approach in Wagtail docs (see [https://areweheadlessyet.wagtail.org/rich-text](https://areweheadlessyet.wagtail.org/rich-text))

## Rich text features registry

The current features registry introduced in Wagtail v2 is editor-agnostic, high-level, and works well. We just need to extend it to support more editor customisations:

- Expose internally-available _decorators_, _controls_, _plugins_, and all other Draftail-specific customisation options. See issue [#5580](https://github.com/wagtail/wagtail/issues/5580).

## End-to-end rich text dev experience

The current customisation capabilities across different parts of the rich text pipeline have largely been implemented independently. It would be helpful to provide more guidance covering the whole experience:

- Provide either tutorials, or reference implementations (e.g. the wagtailmedia package), for end-to-end rich text features implementation, from editor widget UI to front-end rendering – using new high-level, editor-agnostic APIs.
- Provide tutorials, reference implementations, or how-to guides on specific customisations requiring editor-specific / low-level APIs (for example anchor links)
