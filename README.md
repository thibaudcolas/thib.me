[thib.me](http://thib.me) [![Build Status](https://travis-ci.org/ThibWeb/thibaudcolas.svg?branch=master)](https://travis-ci.org/ThibWeb/thibaudcolas) [![devDependency Status](https://david-dm.org/ThibWeb/thibaudcolas/dev-status.svg)](https://david-dm.org/ThibWeb/thibaudcolas#info=devDependencies)
============

My personal website's repository.

## Tooling

```sh
$ # Install all development tools
$ npm install
$ # Watch For Changes & Automatically Refresh Across Devices
$ npm start
$ # Build & Optimize
$ npm run build
$ # Run tests & linting
$ npm test
```

### Favicons

Generated with [http://realfavicongenerator.net/](http://realfavicongenerator.net/) and [http://www.xiconeditor.com/](http://www.xiconeditor.com/)

### Color theme

Built with [Adobe Kuler](https://color.adobe.com/create/color-wheel/?base=2&rule=Analogous&selected=1&name=Personal%20website%20redesign&mode=rgb&rgbvalues=0.424328350620377,0.42591677272328,1,0.91,0.36734648096474953,0.3946467367365962,1,0.85364851751096,0.4536774516096149,0.42998257207678636,0.91,0.43710821456245713,0.43015095296512473,0.6857355094330078,1&swatchOrder=0,1,2,3,4).

### Icon font

Custom font built with [IcoMoon](http://icomoon.io).

### Web font

I use [Fira Sans](http://www.carrois.com/fira-3-1/) by Mozilla.

## Browser Support

* IE10+
* IE Mobile 10+
* FF 30+
* Chrome 34+
* Safari 7+
* Opera 23+
* iOS Safari 7+
* Android / Chrome 4.4+
* BlackBerry 10

### Tests

Static code analysis:

- http://www.jshint.com/
- https://github.com/jscs-dev/node-jscs
- https://github.com/causes/scss-lint

Unit testing:

- https://jasmine.github.io/
- https://karma-runner.github.io/
- http://phantomjs.org/

Visual regression:

- https://github.com/garris/BackstopJS

~~~sh
# Generate reference screenshots:
cd backstopjs && gulp reference
# Test new UI against references:
cd backstopjs && gulp test
~~~

SEO analysis:

- https://github.com/Munter/hyperlink

Performance:

- http://gtmetrix.com/
- http://webpagetest.org/
- https://developers.google.com/speed/pagespeed/insights/

Accessibility:

- http://tenon.io/
- https://leaverou.github.io/contrast-ratio/

Monitoring:

- http://www.pingdom.com

## TODO

- 2) GitHub repos integration
- 2) GitHub card integration https://github.com/lepture/github-cards
- 2) Kudos counter
- 2) Fix the font loading experience
- 3) StackOverflow flair integration
- 3) Images on top
- 3) Twitter integration
- 3) "More cards" button (Twilight SPARQL, Skimbo, Koans, iCopter) https://www.youtube.com/watch?v=lR7QnU34BGs
- 3) Work experience section
- 3) Add HTML5 AppCache for offline viewing
- 4) Add js-complexity report via https://www.npmjs.com/package/gulp-complexity
- 4) Code coverage for the tests

## Monitoring

Site uptime and response time checked with Pingdom:

[![Response time Report for thib.me: Last 30 days](https://share.pingdom.com/banners/5f5f5fc1)](http://stats.pingdom.com/22u60my6ll2k/1451905)
