'use strict';

require('./analytics')();

const fitText = require('./vendor/fittext');
const decode = require('./obfuscate').decode;

const encodedMail = [116, 105, 107, 101, 68, 121, 110, 112, 106, 55, 119, 112];

fitText(document.getElementById('main-title'), 0.7, {
  minFontSize: '35px',
  maxFontSize: '45px',
});

document.getElementsByClassName('js-email-replace')[0].href =
  'mailto:' + decode(encodedMail);
