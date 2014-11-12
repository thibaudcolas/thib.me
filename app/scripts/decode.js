module.exports = function(arr) {
  'use strict';

  return arr.reduce((acc, car, i) => acc + String.fromCharCode(car - i), '');
};
