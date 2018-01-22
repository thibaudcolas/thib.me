var decode = function(arr) {
  return arr.reduce(function(acc, s, i) {
    return acc + String.fromCharCode(s - i);
  }, '');
};

var encodedMail = [116, 105, 107, 101, 68, 121, 110, 112, 106, 55, 119, 112];

document.getElementsByClassName('js-email-replace')[0].href =
  'mailto:' + decode(encodedMail);
