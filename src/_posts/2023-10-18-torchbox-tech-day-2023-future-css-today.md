---
layout: post
title: "Torchbox 2023 Tech Day: Future CSS Today ⚡"
date: 2023-10-18 11:07:49 +0100
comments: true
categories: [Talks, CSS, Torchbox]
redirect_from:
  - /tbx-css/
---

Talk at the Torchbox 2023 Tech Day, on modern CSS techniques we could use today.

<!-- more -->

View the slides: [Future CSS Today](https://thib.me/talks/future-css-today/)

## Goals

- No tooling 🔥
- More with less
- Great browser support

## No tooling?

Tooling _where it makes sense_.

Still using linting: [Prettier](https://prettier.io/), [Stylelint](https://stylelint.io/).

Also still using compatibility & performance tools: [Autoprefixer](https://github.com/postcss/autoprefixer), [cssnano](https://cssnano.co/).

Writing modern syntax thanks to [postcss-preset-env](https://preset-env.cssdb.org/).

## More with less?

Vanilla CSS without compromising on expressiveness

- Co-location of related code
- Not a thousand lines of code
- No overrides

## Great browser support?

Support older browsers so users don’t have to upgrade their devices.

- Opera Mini (1%)
- IE11 (0.5%)
- Safari 12-14 (0.5%)
- Android Browser 4.4.4 (0.3%)
- Chrome 69-89 (1.2%)
- Firefox 3.6

[caniuse.com/ciu/comparison](https://caniuse.com/?compare=firefox+3.6,ie+11,op_mini+all,android+4.4.3-4.4.4&compareCats=all)

## More with less, continued

Things in CSS that take lots of lines for no reason

- **Responsive design** - avoid media queries
- **Interaction styles** (hover, focus, touch, etc.)
- **Right-to-left** support
- **Light and dark** themes
- **Contrast themes** / Windows High Contrast Mode
- **Print stylesheets**

## CSS patterns: layout

- Flexbox and Grid 🐸
- Logical properties and values

```css
.slide-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-inline-start: 5rem;
}
```

[flexboxfroggy.com](https://flexboxfroggy.com/)

## Typography

- System font stack
- Dynamic viewport units
- `clamp()`

```css
body {
  font-family: "Segoe UI", "system-ui", "Roboto", "Helvetica Neue", "Arial",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  font-size: clamp(1rem, calc(2dvmax + 1rem), 5dvmin);
}
```

[web.dev/articles/viewport-units](https://web.dev/articles/viewport-units)

## Colors

All of them!

- CSS variables
- `oklch()`
- `color-mix()`
- System colors

```css
--light-dark: color-mix(in oklch, CanvasText 10%, Canvas 50%);
--dark-light: color-mix(in oklch, Canvas 10%, CanvasText 50%);
color: color-mix(in oklch, var(--light-dark) 20%, CanvasText);
```

[w3.org/TR/css-color-4](https://www.w3.org/TR/css-color-4/#css-system-colors)

## Demo!

View source

```html
view-source:
```

## Does it work?

Yes and no

- This shows promise but there are still a lot of hurdles.
- Likely practical for small projects within the next 2 years.
- Early adopters can use this now with little compromises.

## Takeways for pro™ projects

Great things you should definitely use on projects:

- Media queries 💯
- CSS variables 💅
- [Sass](https://sass-lang.com/) and [PostCSS](https://postcss.org/) tooling

## Thanks!

[preset-env.cssdb.org/features](https://preset-env.cssdb.org/features/)
