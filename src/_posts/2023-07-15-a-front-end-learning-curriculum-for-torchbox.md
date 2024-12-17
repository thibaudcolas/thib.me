---
layout: post
title: "A front-end learning curriculum for Torchbox"
date: 2023-07-15 01:47:03 +0100
comments: true
categories: [Torchbox, JavaScript, CSS, HTML]
---

We created a new front-end learning curriculum for Torchbox developers. This is meant to simplify understanding one’s progress through the various competencies relating to front-end development. The focus is on junior and intermediate skills.

<!-- more-->

## High-level overview

This overview states which competencies are important without explaining how to demonstrate them.

### HTML

- HTML fundamentals _\[Junior\]_
  - HTML syntax 101
  - HTML5 semantics
  - Links
- Common meta tags _\[Junior\]_
  - UX meta tags
  - SEO-focused tags
  - Performance-focused tags
- Forms _\[Junior\]_
  - Form controls
  - Common form attributes
  - Form structure
  - Validation
  - Autofill
- Templates fundamentals _\[Junior\]_
  - Template syntax 101
  - Template partials
  - Template inheritance
  - Template debugging
  - django-pattern-library basics
- Common HTML patterns _\[Junior\]_
  - Tables
  - Breadcrumbs
  - Navigation menu
  - Disclosure
- Django Templates _\[Intermediate\]_
  - Django tags and filters
  - Wagtail tags and filters
  - Setting context variables
  - QuerySets basics
- Templating beyond Django _\[Intermediate\]_
  - Custom elements
  - Vue templates

### CSS

- Vanilla CSS fundamentals _\[Junior\]_
  - CSS syntax 101
  - Cascading and specificity
  - Common sizing units
  - Media queries & responsive web design
  - CSS variables
  - CSS resets
  - position property and z-index
  - Spacing
  - Colors for text and backgrounds
  - Cross-browser support 101
  - Print stylesheets
- Vanilla CSS conventions _\[Junior\]_
  - BEM
  - ITCSS
  - Utility CSS
- CSS tooling fundamentals _\[Junior\]_
  - Browser DevTools styles panel
  - Stylelint
- Sass _\[Junior\]_
  - Sass syntax 101
  - Sass mixins and functions
  - Sass variables
- Layout _\[Intermediate\]_
  - Grid
  - Flexbox
  - Overflows
  - Legacy layout approaches
- Code quality _\[Intermediate\]_
  - Readable & maintainable styles
  - CSS refactorings
- Web typography _\[Intermediate\]_
  - Font stacks
  - Font sizing
  - Line height and vertical rhythm
  - Responsive typography
- CSS frameworks and libraries _\[Intermediate\]_
  - Tailwind
  - CSS modules
  - Industry trends

### Images

- Image formats _\[Junior\]_
- Images with Wagtail _\[Junior\]_
- SVG fundamentals _\[Junior\]_
  - SVG syntax 101
  - SVG optimisation
- SVG _\[Intermediate\]_
  - SVG editing
  - Inline SVGs
  - Icons at Torchbox
  - Styling SVGs
- Responsive images _\[Intermediate\]_
- Image optimisations _\[Intermediate\]_

### Accessibility

- Semantic HTML fundamentals _\[Junior\]_
  - Landmarks
  - Headings
  - Other semantic elements
  - Keyboard navigation
- Semantic HTML _\[Intermediate\]_
  - ARIA
  - List semantics
  - Accessible name
- Accessibility Guidelines _\[Junior\]_
  - WCAG overview
  - Use of color and contrast
  - Animation and motion
- Assistive technologies awareness _\[Junior\]_
  - Screen readers
  - WHCM
  - Voice recognition
  - Screen magnification
- QA fundamentals _\[Junior\]_
  - Automated testing basics
  - Manual testing basics
- QA _\[Intermediate\]_
  - Testing strategies
  - Manual testing with screen readers
  - Design QA

### JavaScript

- Vanilla JS fundamentals _\[Junior\]_
  - JS syntax 101
  - ES modules
  - Control structures
  - Array methods
  - Template literals
  - Regular expressions 101
  - Mutable vs. immutable code
  - Async with callbacks and promises
  - Error handling
- DOM APIs fundamentals _\[Junior\]_
  - jQuery basics
  - Cross-browser support 101
  - Event listeners
  - Throttle and debounce
  - UI animations with JS
  - DOM manipulations
- JS tooling fundamentals _\[Junior\]_
  - package.json and package-lock.json
  - wagtail-kit tooling know-how
  - Browser DevTools Console
  - Browser DevTools Debugger
  - JS REPL
  - ESLint
  - Jest, Babel awareness
- Vanilla JS & DOM APIs _\[Intermediate\]_
  - Airbnb JavaScript styleguide
  - requestAnimationFrame and requestIdleCallback
  - Regular expressions usage
  - ES modules
  - ES6 classes
  - Event propagation in the DOM
  - TypeScript awareness
  - Compile-to-JS languages awareness
  - WebAssembly awareness
  - npm package quality assessment
- Testing JavaScript fundamentals _\[Intermediate\]_
  - Jest unit tests 101
  - DOM manipulation tests 101
  - Jest CLI usage
  - Test coverage
  - Browser vs. Node testing
  - Automated browser testing tools awareness
  - Code complexity awareness
- Debugging JavaScript _\[Intermediate\]_
  - Console APIs
  - Breakpoints & step-by-step debugging
  - Call stack
  - Source maps, transpiling
  - JS error monitoring
  - Performance issues in JS

### React

- React fundamentals _\[Junior\]_
  - JSX syntax 101
  - TypeScript syntax 101
  - React APIs 101
  - Component-driven paradigm
  - Passing props and PropTypes
  - Component lifecycle
  - useState
  - useEffect
  - Passing and using callbacks
- React tooling fundamentals _\[Junior\]_
  - JSX transforms
  - eslint-plugin-react
  - React DevTools
  - React testing with Jest
  - Storybook
- React UI components _\[Intermediate\]_
  - key prop
  - useEffect dependencies
  - useCallback usage
  - dangerouslySetInnerHTML
  - Props spreading anti-patterns
  - Vanilla DOM integrations
  - Components file structure
  - Portal API
  - Strict mode
- React state management fundamentals _\[Intermediate\]_
  - React data flow
  - Choosing a state management approach
  - Lifting state up
  - useState and useReducer usage
  - Context APIs
  - Redux Toolkit
  - Redux DevTools
- TypeScript fundamentals _\[Intermediate\]_
  - TypeScript lang 101
  - TypeScript type annotations syntax
  - Custom union types and interfaces
  - Generics for arrays
  - Typeof and keyof
  - Type narrowing & type guards
  - React components typing
- React tooling _\[Intermediate\]_
  - Storybook stories
  - React unit tests
  - React linting
  - DevTools profiler
  - Dev & production mode builds

### Front-end tooling

- Design tools _\[Junior\]_
  - Figma prototypes
  - Figma editor
  - Design systems in Figma
- Node tooling _\[Junior\]_
  - Node and npm CLI 101
  - Prettier
  - Webpack 101
- Browser DevTools _\[Junior\]_
  - Elements
  - Rendering settings
  - Network
- Cross-browser testing _\[Junior\]_
  - Browserstack
  - Simulators
- Pattern libraries fundamentals _\[Junior\]_
  - django-pattern-library
    - Basic usage
    - Defining context
  - Storybook awareness
- Pattern libraries usage _\[Intermediate\]_
  - django-pattern-library
    - Tag overrides
    - Complex context data
  - Storybook

### Other web technologies & important concepts

- Web APIs _\[Intermediate\]_
  - Location
  - Service workers
  - Full screen API
  - Storage: Cookies, localStorage, sessionStorage
- Performance _\[Intermediate\]_
  - Common issues
  - Lighthouse
  - Other testing tools
  - Monitoring tools

## HTML

### Vanilla HTML

#### Beginning

- Can name elements from all of the [categories](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories) of HTML elements
- Can explain what a `<div>` soup is and why we avoid it
- Can use the `<a>` element to create [links](https://web.dev/learn/html/links/), with appropriate attributes

#### Moderate

- Can validate their HTML
- Can implement a [breadcrumbs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)
- Can implement a [disclosure pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) without `<details>`

#### Good

- Can implement [Open Graph](https://web.dev/learn/html/metadata/#open-graph) meta tags and validate the results
- Can implement an HTML [table](https://web.dev/learn/html/tables/) with caption, row headers, column headers
- Can implement a navigation menu

#### Mastery

- Can explain how to order meta tags for the best performance
- Can implement a [schema.org](https://schema.org/) schema with microdata and JSON-LD and check the results
- Can identify when to implement prefetching / preloading tags and measure the potential improvement

### HTML forms \[Junior\]

#### Beginning

- Can create a POST contact us form with text fields and labels in vanilla HTML
- Can create a GET filter form with select and date fields and their labels in vanilla HTML
- Can render a [form in a Django template](https://docs.djangoproject.com/en/4.2/topics/forms/#working-with-form-template) with correct HTML structure

#### Moderate

- Can write correct HTML for radios and checkboxes
- Can create simple form validation with HTML attributes

#### Good

- Can add [autocomplete](https://web.dev/learn/forms/autofill/#how-does-autofill-work), autocorrect, and other UX-enhancing form field attributes
- Can use the correct input types and attributes for mobile keyboard support

#### Mastery

- Can use pattern attributes for validation
- Can implement file inputs

### HTML templates

#### Beginning

- Can write a valid template with control structures and variables
- Can create, include, and pass data to template partials

#### Moderate

- Can explain how template context works and how to troubleshoot it
- Can find the right [Django template tags and filters](https://docs.djangoproject.com/en/4.2/ref/templates/builtins/) or [Wagtail tags/filters](https://docs.wagtail.org/en/stable/topics/writing_templates.html) for a task and reuse them
- Can set up new components with [django-pattern-library](https://torchbox.github.io/django-pattern-library/)

#### Good

- Can set custom context variables in Python
- Can structure template reuse with inheritance and custom blocks
- Can create custom Django template tags

#### Mastery

- Can use HTML templates and [custom elements](https://web.dev/learn/html/template/) with slots and part and is attributes
- Can convert a Django template with control structures to [Vue SFC](https://vuejs.org/guide/scaling-up/sfc.html) and React JSX

## CSS

### Vanilla CSS

#### Beginning

- Can write CSS [selectors](https://web.dev/learn/css/selectors/), understanding CSS [specificity](https://web.dev/learn/css/specificity/) and the [cascade](https://web.dev/learn/css/the-cascade/)
- Knows available properties and units for sizing, [spacing](https://web.dev/learn/css/spacing/), [colors](https://web.dev/learn/css/color/).
- Can write adaptive spacing and sizing styles with media queries and relevant [sizing units](https://web.dev/learn/css/sizing/)

#### Moderate

- Can explain the [CSS box model](https://web.dev/learn/css/box-model/)
- Can create simple layouts with [Flexbox](https://web.dev/learn/css/flexbox/) and [Grid](https://web.dev/learn/css/grid/), such as centering and 12-col grids with offsets
- Can create stylesheet tweaks for print, forced colors mode, dark themes.

#### Good

- Can leverage CSS variables and functions to simplify styles
- Can create layouts with legacy approaches such as inline-block and float
- Can create a web-safe font stack

#### Mastery

- Can position elements with fixed, sticky, absolute approaches; with an understanding of [z-index](https://web.dev/learn/css/z-index/) and stacking contexts
- Can reproduce a designed [vertical rhythm](https://web.dev/learn/css/typography/) in CSS
- Can fix overflow issues with component-specific scrollbars and breaking of long text

### CSS in real-world projects

#### Beginning

- Understands what a CSS reset does and can use [normalize.css](https://necolas.github.io/normalize.css/)
- Can create UIs associating BEM naming conventions and ITCSS file structure
- Can create UIs with utility CSS

#### Moderate

- Can explain when to use BEM + [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/), when to use utility styles, and how to approach this refactoring
- Knows how to check and troubleshoot browser support for given styles
- Can identify and address issues in an existing stylesheet with DevTools and [stylelint](https://stylelint.io/)

#### Good

- Can set up stylelint on a new project
- Can use fallbacks and feature detection to style for a variety of browser support levels
- Can configure [autoprefixer](https://github.com/postcss/autoprefixer)

#### Mastery

- Can refactor a component’s selectors to lower specificity to introduce new variants
- Can refactor a project to introduce a dark theme

### Beyond vanilla CSS

#### Beginning

- Can use [Sass](https://sass-lang.com/) nesting, understanding how it affects output CSS
- Can use Sass variables, functions, mixins, understanding how it affects output CSS
- Understands what [Tailwind](https://tailwindcss.com/) is and how it is configured

#### Moderate

- Can use Sass imports, @use, and other module syntax
- Correctly uses & and the $root pattern when writing nested styles
- Understands what a CSS framework is and how to build with one

#### Good

- Can use Sass control structures where relevant
- Can write styles in CSS modules

#### Mastery

- Can explain what problems CSS-in-JS attempts to solve, and how it does so
- Understands how Tailwind generates its classes

## Images

### Image fundamentals \[Junior\]

#### Beginning

- Understands the difference between [raster](https://web.dev/learn/images/raster-images/) and [vector](https://web.dev/learn/images/vector-images/) images, PNG and JPEG, and when to use each format.
- Can use images in vanilla HTML, CSS, and Django templates.
- Can explain in what scenarios to use images in CSS, vs. hard-coded images in HTML vs. CMS-managed images.

#### Moderate

- Can copy SVG from a design tool or icon library for reuse on the project, running it through optimisations
- Can use Wagtail’s image tag as syntax to create a more bespoke rendering of an image

#### Good

- Understands the advantages and potential issues with modern image formats
- Can use the most appropriate Wagtail image filter depending on the desired effect

#### Mastery

- Can explain the major differences between AVIF and [JPEG XL](https://cloudinary.com/blog/the-case-for-jpeg-xl).
- Can explain potential security issues with SVG.

### SVG in real-world projects \[Intermediate\]

#### Beginning

- Can explain SVG’s [coordinates system](https://www.sarasoueidan.com/blog/svg-coordinate-systems/) and the how the viewBox, width, height attributes work together
- Can use SVG as an image tag, inline in the HTML, or with symbol references

#### Moderate

- Can use SVG to create basic shapes of different sizes and colours
- Can add a new icon to a SVG icons sprite, with styling of the icon colour, [optimising the SVG contents](https://jakearchibald.github.io/svgomg/).

#### Good

- Understands the different techniques to add alternative text to an SVG and their level of support
- Can style a multicolor SVG for dual light and dark themes support

#### Mastery

- Can use a path editor to change a custom shape
- Can animate SVG paths with stroke-dasharray and stroke-dashoffset

### Image optimisations \[Intermediate\]

#### Beginning

- Understands the difference between lossless and lossy compression, and tools to use to run both types on different formats
- Can use the picture tag to serve an image in modern formats and a fallback, in vanilla HTML and Django templates.

#### Moderate

- Can use [srcset](https://web.dev/learn/images/responsive-images/) to serve an image at different sizes
- Can use the [picture tag](https://web.dev/learn/images/prescriptive/) to serve an image in modern formats and a fallback, in vanilla HTML and Django templates.

#### Good

- Can use the picture tag to serve an image in modern formats and a fallback, in vanilla HTML and Django templates, at different sizes.
- Knows which tools to use to evaluate potential image weight savings.

#### Mastery

- Can use image masking techniques to generate highly optimised visuals combining the benefits of multiple formats in a single visual
- Can use the picture tag for [art direction](https://web.dev/learn/images/prescriptive/)

## Accessibility

### HTML for accessibility

#### Beginning

- Can build a page demonstrating correct usage of all [landmark](https://web.dev/learn/accessibility/structure/) elements.
- Can translate a design into the correct [heading hierarchy](https://web.dev/learn/accessibility/structure/#headings) and explain the reasoning for different heading levels.
- Uses anchor, button, and checkbox elements appropriately for interactive components.

#### Moderate

- Can explain why “No ARIA is better than Bad ARIA”.
- Can implement the needed ARIA attributes and keyboard experience for a [Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) pattern.

#### Good

- Can identify semantic elements and needed ARIA patterns on a design.
- Can explain the difference between different accessible name techniques: aria-label, aria-labelledby, sr-only.

#### Mastery

- Can implement the needed ARIA attributes and keyboard experience for the [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) pattern.
- Can explain the different sources of text for the accessible name computation algorithm.

### Accessibility awareness \[Junior\]

#### Beginning

- Can explain the meaning of “[WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)”, “POUR”, and “AAA-level”.
- Knows which WCAG success criteria relate to use of colour and contrast, and can use a tool to check contrast ratios.
- Can explain the difference between the social and medical models of disability.

#### Moderate

- Can explain common issues with animation and motion and how to mitigate them.
- Can start a screen reader and navigate through a simple page, with awareness of common issues.
- Can start screen magnification to test a design, with awareness of common issues.

#### Good

- Can use the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) rotor and navigate a page by heading or landmark.
- Can use [forced-colors mode](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors) simulation to test WHCM compatibility, with awareness of common issues.

#### Mastery

- Can use voice recognition software to test a page, with awareness of common issues.

### Accessibility QA

#### Beginning

- Can use a [browser extension](https://accessibilityinsights.io/) to run automated accessibility checks.
- Can use a browser extension to run semi-automated accessibility checks for colour, headings, and keyboard support.
- Can navigate a page with the keyboard to identify issues.

#### Moderate

- Can use a screen reader to test accessible name and description computation for form fields.
- Can run [Pa11y](https://pa11y.org/) or a similar automated tool to identify accessibility issues.
- Can use touch navigation on a mobile device to test a simple page, with awareness of common issues.

#### Good

- Understands what “[Shift Left](https://www.deque.com/shift-left-testing-solutions/)” means and what types of testing might be conducted at different phases of a project.
- Can test a design with 400% browser zoom to identify resizing issues.

#### Mastery

- Can [annotate a design](https://www.figma.com/community/file/779827094223635810/Accessibility-bluelines) with landmarks, semantic elements, ARIA, and labels for graphical elements requiring them.

## JavaScript

### Vanilla JavaScript

#### Beginning

- Knows fundamental JS concepts: [ES modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), control structures, scopes, hoisting, closures, variable declarations, destructuring, rest, spread, template literals
- Knows what Array methods to use for iteration
- Knows how to use the browser DevTools Console panel and a Node REPL

#### Moderate

- Can write basic error handling code with exception handling and console APIs
- Understands the purpose of package.json and package-lock.json files and can interpret their basic structure.
- Can write asynchronous code with callbacks, promises, async/await

#### Good

- Knows how to use the browser DevTools Source panel / debugger.
- Knows all of the ES modules syntax for static imports
- Is aware of TypeScript and understands what static types bring to JavaScript

#### Mastery

- Has read the [Airbnb JavaScript styleguide](https://github.com/airbnb/javascript)
- Is aware of compile-to-JS languages and understands their value proposition: Dart, Elm, CoffeeScript, PureScript, ReasonML, ClojureScript, Opal
- Knows how to assess the quality of a npm package: popularity, support, security, accessibility, performance

### JavaScript DOM APIs

#### Beginning

- Knows what [jQuery](https://jquery.com/) does and why it’s no longer relevant
- Can manage DOM event listeners and knows what common performance pitfalls to look out for with user-initiated events
- Can manipulate DOM elements, adding or removing them, setting attributes

#### Moderate

- Knows how to manage UI animations with JavaScript
- Can use throttling or debounce for a performance-sensitive event
- Knows about cross-browser support requirements and how to check support for a given technology

#### Good

- Can use [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) and [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) to defer expensive computations
- Understands event propagation in the DOM and when to customise it with [stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation), when to rely on bubbling vs capture
- Can use cookies, [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) to store data between page loads

#### Mastery

- Is aware of Web Components – high-level capabilities and common APIs
- Knows about the [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) and [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) APIs
- Can use advanced HTML5 APIs such as location, [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), [fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)

### JavaScript QA & troubleshooting

#### Beginning

- Can use the different console logging APIs
- Understands the differences between source and output JavaScript, and what source maps are for
- Can write simple unit tests with [Jest](https://jestjs.io/)

#### Moderate

- Can test DOM manipulation code with Jest
- Understands what test coverage represents, and how to view it with Jest
- Is aware of tools to automate browser testing
- Knows about code complexity and how to assess it for a given implementation

#### Good

- Knows how to set and manage breakpoints in the browser [DevTools debugger](https://developer.chrome.com/docs/devtools/javascript/)
- Knows what the call stack is and how to navigate up and down the stack in a debugger

#### Mastery

- Knows what JS error monitoring is for, and how to use it with [Sentry](https://sentry.io/)
- Is aware of potential performance issues in JavaScript and options to investigate those issues

## React

### React basics

#### Beginning

- Can use props to pass data between parent and child components, with default values where needed
- Can use PropTypes or TypeScript to validate a component’s props
- Understands JSX syntax compared to HTML, including the point of the key prop

#### Moderate

- Has a high-level understanding of React’s component-driven, declarative UI paradigm, and the component lifecycle
- Can manage local component state with useState
- Can implement a useEffect hook to run code when a component mounts and unmounts

#### Good

- Understand how useEffect deps behave with primitives vs object references (common issue is when an empty object or array is used as a default value)
- Knows when to use useCallback to have a stable function reference
- Can use dangerouslySetInnerHTML to integrate with legacy HTML, understanding the security implications

#### Mastery

- Knows what props spreading is and why it should generally be avoided
- Can use refs to integrate with vanilla DOM manipulation
- Can turn on strict mode, understanding what it does in theory, and in practice how it prevents common issues

### React tooling

#### Beginning

- Understands what a JSX transform is, what popular parsers include one
- Knows about React-specific aspects of Prettier, ESLint, Jest, and how to run those tools
- Can use basic Inspect functionality of the [React DevTools](https://react.dev/learn/react-developer-tools) to troubleshoot rendering issues

#### Moderate

- Knows what different types of testing are possible for React components with tools like Jest and Storybook
- Can update React unit tests and Storybook stories
- Knows about the differences between React’s dev and production modes, as well as [StrictMode](https://react.dev/reference/react/StrictMode)

#### Good

- Can write Storybook stories for components from scratch, with appropriate usage of CSF and args APIs
- Can set up and configure React linting with [eslint-config-torchbox](https://github.com/torchbox/eslint-config-torchbox) on a project

#### Mastery

- Can write unit tests for components from scratch, with appropriate usage of shallow vs. deep rendering, [snapshot testing](https://jestjs.io/docs/snapshot-testing), and different methods to query sub-elements of a component
- Can use the profiler in the React DevTools to troubleshoot performance issues

### React state management fundamentals \[Intermediate\]

#### Beginning

- Understands how React’s data flow differs from two-way data binding
- Knows in what cases to reach for useState, useReducer, Context, and [Redux](https://redux.js.org/)
- Knows what it means to "lift state up" in a React component hierarchy, and how to do it

#### Moderate

- Can use useState and useReducer to manage state within components
- Knows about Context APIs to share state indirectly in a component hierarchy
- Can use the [Redux DevTools](https://github.com/reduxjs/redux-devtools) to troubleshoot state storage and propagation issues

#### Good

- Can set up [Redux Toolkit](https://redux-toolkit.js.org/) on a new project with a basic slice
- Can troubleshoot a React and Redux data manipulation issue on any project with React & Redux DevTools only

#### Mastery

- Can structure API integration code with Redux actions, including loading states and error handling, with or without [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- Can structure Redux reducers and actions with or without Redux Toolkit with 3+ slices, following the [Ducks pattern](https://github.com/erikras/ducks-modular-redux)

### TypeScript fundamentals \[Intermediate\]

#### Beginning

- Understands what [TypeScript](https://www.typescriptlang.org/) brings compared to vanilla JavaScript
- Can use TypeScript syntax to add type annotations to vanilla JS code with built-in types
- Can define basic custom types with [union types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html) and interfaces

#### Moderate

- Can use [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) for arrays
- Can use the typeof and keyof TypeScript keywords to reduce boilerplate in type definitions
- Can create interfaces for the props and states of React components, including annotations for children

#### Good

- Understands what [type narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) is and how to implement basic typeof or null check type guards
- Can write custom generic types and conditional types
- Knows about the [different ways to type React components](https://react-typescript-cheatsheet.netlify.app/) and why some are preferred to others

#### Mastery

- Understands the performance considerations of type definitions and common mitigations (for example reliance on inference, interfaces vs. type aliases)
- Can write correct module declaration files for APIs of third-party packages

## Front-end tooling

### Front-end tooling fundamentals

#### Beginning

- Knows how to use [Figma](https://www.figma.com/) prototypes, Figma DevTools, the Figma editor, and design system features, in order to re-implement an existing design
- Knows about [Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [Jest](https://jestjs.io/), and how to run them
- Understands the npm packages ecosystem and the npm CLI

#### Moderate

- Can set up and use the JS tooling on our projects autonomously
- Knows how to use the browser [DevTools Elements](https://developer.chrome.com/docs/devtools/), Network, and Rendering panels
- Knows how to use [BrowSerstack](https://www.browserstack.com/) and Simulators to do cross-browser testing

#### Good

- Knows what Babel and Webpack are for and able to do basic configuration changes such as browser support targets
- Can run Lighthouse to identify possible performance issues
- Can set up [DebugBear](https://www.debugbear.com/) to monitor front-end performance

#### Mastery

- Can explain what each of the [Core Web Vitals](https://web.dev/vitals/) are
- Can troubleshoot common front-end performance issues with the DevTools
- Can use the [DevTools Performance](https://developer.chrome.com/docs/devtools/performance/) panel

### Pattern libraries

#### Beginning

- Can explain what a pattern library is and what [django-pattern-library](https://torchbox.github.io/django-pattern-library/) does
- Can set up new components and page templates with django-pattern-library, including mocking context
- Understands what [Storybook](https://storybook.js.org/) is and when to consider using it

#### Moderate

- Can demonstrate multiple variants of a component within django-pattern-library
- Can [override tags](https://torchbox.github.io/django-pattern-library/guides/overriding-template-tags/) with django-pattern-library
- Can write Storybook stories

#### Good

- Can structure Storybook stories, including documentation for components
- Knows about common django-pattern-library pitfalls and how to work around them

#### Mastery

- Can [use Python](https://torchbox.github.io/django-pattern-library/guides/defining-template-context/#modifying-template-contexts-with-python) to generate data for django-pattern-library stories rather than YAML
- Can set up [Storybook addons](https://storybook.js.org/docs/7.0/react/configure/storybook-addons/)
