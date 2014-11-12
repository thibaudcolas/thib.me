(function() {
  'use strict';

  const decode = function(arr) {
    return arr.reduce((acc, car, i) => acc + String.fromCharCode(car - i), '');
  };

  const correctMail = decode([116, 105, 107, 101, 68, 121, 110, 112, 106, 55, 119, 112]);

  window.domready(function() {
    window.fitText(document.getElementById('main-title'), 0.7, {minFontSize: '35px', maxFontSize: '45px'});

    document.getElementsByClassName('js-email-replace')[0].href = 'mailto:' + correctMail;

    window.FastClick.attach(document.body);
  });
})();
