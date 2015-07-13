(function() {
  'use strict';

  require('./analytics')();

  const domready = require('../vendor/domready/ready');
  const fitText = require('../vendor/fittext/fittext');
  const smoothScroll = require('../vendor/smooth-scroll.js/src/js/smooth-scroll');
  const decode = require('./obfuscate').decode;

  const encodedMail = [116, 105, 107, 101, 68, 121, 110, 112, 106, 55, 119, 112];

  domready(function() {
    fitText(document.getElementById('main-title'), 0.7, {minFontSize: '35px', maxFontSize: '45px'});

    document.getElementsByClassName('js-email-replace')[0].href = 'mailto:' + decode(encodedMail);

    smoothScroll.init({speed: 300});
  });
})();
