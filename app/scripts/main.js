(function () {
  'use strict';

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create','UA-34692999-4','thibaudcolas.fr');
  ga('send','pageview');

  function decode (arr) {
    return arr.reduce(function(acc, car, i) {
      return acc + String.fromCharCode(car - i);
    }, '');
  }
  var correctMail = decode([116, 105, 107, 101, 68, 121, 110, 112, 106, 55, 119, 112]);

  window.domready(function () {
    window.fitText(document.getElementById('main-title'), 0.7, {minFontSize: '35px', maxFontSize: '45px'});

    document.getElementsByClassName('js-email-replace')[0].href = 'mailto:' + correctMail;
  });
})();
