---
layout: post
title: "GGJ 2015: RubeGoldBash"
date: 2015-02-04 23:50:08 +1300
comments: true
categories: [Events, Game, Project]
---

This post is my post-mortem after the 2015 edition of the [Global Game Jam](http://globalgamejam.org/). It was my first Game Jam ever, and I planned to learn the [Phaser](http://phaser.io/) framework beforehand in order to get going quickly.

It was completely useless, as I decided to build a game in Bash, [RubeGoldBash](https://github.com/thibaudcolas/rubegoldbash).

<!-- more -->

I started thinking about command-line games when I had a look at the [diversifiers](http://globalgamejam.org/news/introducing-ggj-2015-diversifiers) in the morning, particularly:

> **Batch Job**: The game is a batch file from any operating system, using command line tools found in an out of the box installation.

Inspiring isn't it? I got my idea when we learned the theme: _What do we do now?_ See, UNIX tools are known to be easy to combine together. You start with a fixed toolset, but by combining them together you end up with endless possibilities. I would build a game about building [Rube Goldberg machines](https://en.wikipedia.org/wiki/Rube_Goldberg_machine) in bash, _RubeGoldBash_ (thanks for the name Chris).

<p><a href="https://commons.wikimedia.org/wiki/File:Professor_Lucifer_Butts.gif#mediaviewer/File:Professor_Lucifer_Butts.gif"><img alt="Professor Lucifer Butts.gif" src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Professor_Lucifer_Butts.gif"></a><br>"<a href="https://commons.wikimedia.org/wiki/File:Professor_Lucifer_Butts.gif#mediaviewer/File:Professor_Lucifer_Butts.gif">Professor Lucifer Butts</a>" by Rube Goldberg - an old comic book. Licensed under Public Domain via <a href="//commons.wikimedia.org/wiki/">Wikimedia Commons</a>.</p>

This is what it looks like:

<iframe src="http://showterm.io/a06f7dcf548aadbbcb751" width="640" height="480"></iframe>

The goal of the game is to create the most crazy, useless, enormous bash one-liners by combining basic commands together, using as many pipes as possible. Quite simple!

Here are a few examples which are worth a lot of points:

```bash
# Retrieve the weather for your location
curl -s ip.appspot.com | xargs -n 1 curl -s "freegeoip.net/csv/$1" | cut -d ',' -f '9 10' | sed 's/,/\&lon=/g' | xargs -n 1 echo "http://api.openweathermap.org/data/2.5/weather?mode=html&lat=$1" | sed 's/ //g' | xargs -n 1 curl -s $1 | tee weather.html
# Same request, with display to the prompt using lynx
curl -s ip.appspot.com | xargs -n 1 curl -s "freegeoip.net/csv/$1" | cut -d ',' -f '9 10' | sed 's/,/\&lon=/g' | xargs -n 1 echo "http://api.openweathermap.org/data/2.5/weather?mode=html&lat=$1" | sed 's/ //g' | xargs -n 1 curl -s $1 | lynx -stdin -dump

# Retrieve the answer to "When will it be done?" (scraping) and make a nice voice read it for you.
lynx --dump whenwillitbedone.trgdy.com | head -n 8 | tail -n 4 | tr "\\n" ' ' | cut -d '[' -f 1 | sed 's/   //g' | sed "s/'/ /g" | perl -pe 's/([^a-zA-Z0-9_.!~*()'\''-])/sprintf("%%%02X", ord($1))/ge' | xargs -n 1 echo "http://translate.google.com/translate_tts?ie=UTF-8&tl=en&q=$1" | sed 's/ //g' | xargs -n 1 curl -s "$1" > whenwillitbedone.mp3
# File can be read with
afplay whenwillitbedone.mp3

# Count the number of folders in the current working directory.
ls -l | cut -c 1 | grep d | wc -l

# Find the longest name
cat /usr/share/dict/propernames | grep 'S' | awk '{print length($1), $1}' | sort -n | tail -n 1 | cut -d ' ' -f 2
# And spell it
cat /usr/share/dict/propernames | grep 'S' | awk '{print length($1), $1}' | sort -n | tail -n 1 | cut -d ' ' -f 2 | say
```

You can then submit your score by using the `rubeshare` command:

<iframe style="width: 100%; height: 600px" src="http://highscore.rubegoldbash.com/?limit=5"></iframe>

And voilà! Your score is on the wall, your commands are stored as Gists on GitHub, and you can boast about your newly gained UNIX wizardry skills!

Thanks [Global Game Jam](http://globalgamejam.org/), I had a lot of fun.
