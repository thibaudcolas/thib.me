(function() {
  'use strict';

  require('./analytics').default.init();

  const domready = require('../vendor/domready/ready');
  const fitText = require('../vendor/fittext/fittext');
  const FastClick = require('../vendor/fastclick/lib/fastclick');
  const decode = require('./obfuscate').default.decode;

  const encodedMail = [116, 105, 107, 101, 68, 121, 110, 112, 106, 55, 119, 112];

  domready(function() {
    fitText(document.getElementById('main-title'), 0.7, {minFontSize: '35px', maxFontSize: '45px'});

    document.getElementsByClassName('js-email-replace')[0].href = 'mailto:' + decode(encodedMail);

    FastClick.attach(document.body);
  });
})();
