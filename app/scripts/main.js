(function (console, document) {
  'use strict';

  function decode (arr) {
    return arr.reduce(function(acc, car, i) {
      return acc + String.fromCharCode(car - i);
    }, '');
  }

  var correctMail = decode([116, 105, 107, 101, 68, 121, 110, 112, 106, 55, 119, 112]);
  document.getElementsByClassName('js-email-replace')[0].href = 'mailto:' + correctMail;

})(window.console, document);
