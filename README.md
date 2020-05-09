# [thib.me](https://thib.me) [![Build Status](https://travis-ci.com/thibaudcolas/thibaudcolas.svg?branch=master)](https://travis-ci.com/thibaudcolas/thibaudcolas)

## Tooling

```sh
git clone git@github.com:thibaudcolas/thibaudcolas.git
cd thibaudcolas
rbenv version
gem install bundler
bundle install
npm install
```

### Favicons

Generated with [https://realfavicongenerator.net/](https://realfavicongenerator.net/) and xiconeditor.

### Color theme

Built with [Adobe Kuler](https://color.adobe.com/create/color-wheel/?base=2&rule=Analogous&selected=1&name=Personal%20website%20redesign&mode=rgb&rgbvalues=0.424328350620377,0.42591677272328,1,0.91,0.36734648096474953,0.3946467367365962,1,0.85364851751096,0.4536774516096149,0.42998257207678636,0.91,0.43710821456245713,0.43015095296512473,0.6857355094330078,1&swatchOrder=0,1,2,3,4).

### Icon font

Custom font built with [IcoMoon](https://icomoon.io).

### Web font

I use Fira Sans by Mozilla.

## Browser Support

- IE10+
- IE Mobile 10+
- FF 30+
- Chrome 34+
- Safari 7+
- Opera 23+
- iOS Safari 7+
- Android / Chrome 4.4+
- BlackBerry 10

### Tests

Static code analysis:

- https://github.com/jscs-dev/node-jscs
- https://github.com/causes/scss-lint

Unit testing:

- https://jasmine.github.io/

Visual regression:

- https://github.com/garris/BackstopJS

```sh
# Generate reference screenshots:
cd backstopjs && gulp reference
# Test new UI against references:
cd backstopjs && gulp test
```

SEO analysis:

- https://github.com/Munter/hyperlink

Performance:

- https://gtmetrix.com/
- https://webpagetest.org/
- https://developers.google.com/speed/pagespeed/insights/

Accessibility:

- https://tenon.io/
- https://leaverou.github.io/contrast-ratio/
