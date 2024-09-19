---
layout: post
title: Discovering legacy projects
date: 2018-10-30 03:16:29 +0200
comments: true
categories: [Tools, Resources, Code]
---

Here are some quick notes I put together over the last few months about navigating the uncharted waters of legacy projects. Generally, I think any code that isn’t actively worked on or tested can be considered legacy. The discovery refers to the process of getting to know code that isn't well understood – for example when onboarding on a new project that has poor documentation.

<!-- more -->

Generally, I like to start by looking at the code at a very high level. You can only learn so much from this, but it's usually an automated quick step that gives _some_ insight.

## Code overview

### Gource

[Gource](https://github.com/acaudwell/Gource) will give you a good amount of information on how the project has been worked on in the past – who maintains what parts of it, how frequently, as well as what the project is made of.

Sample command, piping the video to ffmpeg for storage:

```
gource -s 0.05 -1280x720 --stop-at-end --key --highlight-users --hide mouse,progress --file-idle-time 0 --max-files 0 --background-colour 000000 --font-size 22 --title "my gource" --output-framerate 30 -o - | ffmpeg -y -r 30 -f image2pipe -vcodec ppm -i - -vcodec libx264 -preset ultrafast -pix_fmt yuv420p -crf 1 -threads 0 -bf 0 gource.mp4
```

Requirements: ffmpeg. Then use VLC for compression. Share the output around, it's always interesting to look at.

### tree and cloc

tree and cloc are two useful CLI tools that will give you lots of insight into the contents of a project in a short amount of time. Do learn what options are available for both of them.

```bash
tree -D -L 2 .
```

```bash
cloc --vcs git .
```

## eralchemy

```bash
eralchemy -i 'mysql://root:<pw>@127.0.0.1/my_db' -o output.pdf
eralchemy -i 'mysql://root:<pw>@127.0.0.1/my_db' -o output.er
```
