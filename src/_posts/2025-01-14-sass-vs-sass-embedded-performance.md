---
layout: post
title: "Sass vs. sass-embedded performance"
date: 2025-01-14 07:56:37 +0100
comments: true
categories: [Tools, CSS]
---

For all front-end tooling nerds – here’s a quick performance comparison between two implementations of Sass: `sass` and `sass-embedded`.

<!-- more -->

## Results

Straight to it – those numbers are the median of three runs:

| Package       | Production build    | Development watch mode |
| ------------- | ------------------- | ---------------------- |
| sass          | 18.468s             | 3.212s                 |
| sass-embedded | 15.307s (20% lower) | 2.335s (30% lower)     |

Measured with Webpack, for [Wagtail](https://github.com/wagtail/wagtail), in the context of [Sass deprecation warnings fixes](https://github.com/wagtail/wagtail/issues/12719). This is on a 2019 MacBook Pro. macOS Sonoma 14.4, 2.4 GHz Quad-Core Intel Core i5, 16 GB DDR3.

### How much code

The above is for 130 `.scss` files, with 8756 lines of code. Here’s the full `cloc` output for Wagtail.

## Why there are multiple Sass implementations

Historically Sass was written in Ruby and C/C++ I believe. The C/C++ implementation, [LibSass](https://sass-lang.com/libsass/), was the most popular for Node tooling users via `node-sass`. Since then, new implementers took over and rewrote Sass focusing on a Dart implementation: [Dart Sass](https://sass-lang.com/dart-sass/). This is the official implementation now, and it ships as two packages – `sass` which is a JS-compiled version of the Dart code, and `sass-embedded` which is a very thin wrapper around a native Dart binary.

For Wagtail – currently we use `sass` to alleviate any risks of cross-platform compatibility issues (for example macOS users relying on Node tooling within Docker and directly on their machine). In the future we might switch to `sass-embedded` in the interest of performance.

## Full results

### Sass

Webpack production build (`webpack --config ./client/webpack.config.js --mode`):

```txt
webpack compiled with 40 warnings in 16705 ms
webpack compiled with 40 warnings in 18468 ms
webpack compiled with 40 warnings in 16815 ms
27.55s user 3.44s system 164% cpu 18.820 total
27.51s user 3.37s system 150% cpu 20.473 total
27.07s user 3.20s system 160% cpu 18.900 total
```

---

Webpack development build in watch mode (edits on core.scss):

```txt
webpack compiled with 11 warnings in 3183 ms
webpack compiled with 11 warnings in 3212 ms
webpack compiled with 11 warnings in 3314 ms
```

### Sass embedded

Webpack production build (`webpack --config ./client/webpack.config.js --mode`):

```txt
webpack compiled with 40 warnings in 15307 ms
webpack compiled with 40 warnings in 17473 ms
webpack compiled with 40 warnings in 14926 ms
25.05s user 3.51s system 168% cpu 16.948 total
26.02s user 3.56s system 150% cpu 19.681 total
24.80s user 3.22s system 165% cpu 16.952 total
```

---

Webpack development build in watch mode (edits on core.scss):

```txt
webpack compiled with 11 warnings in 2400 ms
webpack compiled with 11 warnings in 2221 ms
webpack compiled with 11 warnings in 2335 ms
```

## Full cloc output

For future reference, this is Wagtail:

```txt
--------------------------------------------------------------------------------
Language                      files          blank        comment           code
--------------------------------------------------------------------------------
Python                         8332         284435         313969        1631855
PO File                        3617         260968          95300         759786
JSON                            503            332              0         179094
HTML                           1122           5423             43         108638
JavaScript                      572          12091           8303          73143
Markdown                        233          11704             91          27626
XML                              11             12           3193          27275
Text                            250           1259              0          16329
TypeScript                      145           2118           2647          14170
SVG                             189              0              4          10851
CSS                              79           1910            855          10759
SCSS                            130           1746            789           8756
reStructuredText                153           2469           1291           4565
TeX                              27            298           2525           3952
YAML                             22             45             89           1883
SQL                               4              0              0           1405
C                                 3             89             33            450
make                              3             55              8            239
TOML                             14             14             13            164
Bourne Shell                      5             30             22            139
Bourne Again Shell                1             13              9             91
Fish Shell                        1             19             14             70
INI                               2             19              0             68
PowerShell                        1             12              3             46
Dockerfile                        2             24             52             44
C Shell                           1             13              7             35
CSV                               2              0              0              8
--------------------------------------------------------------------------------
SUM:                          15424         585098         429260        2881441
--------------------------------------------------------------------------------
```
