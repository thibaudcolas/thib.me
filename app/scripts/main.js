(function () {
  'use strict';

  var decode = function(arr) {
    return arr.reduce((function(acc, car, i) {
      if (acc == null) {
        acc = '';
      }
      return acc + String.fromCharCode(car - i);
    }), '');
  };
  var spam_txt = [116, 105, 107, 101, 68, 121, 110, 112, 106, 55, 119, 112];
  var correctMail = decode(spam_txt);
  console.log(correctMail);
  // $('a.remplacement').attr('href', "mailto:" + correctMail);
  // $('span.remplacement').html(correctMail);


})();
