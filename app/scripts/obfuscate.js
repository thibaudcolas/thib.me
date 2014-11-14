export default {
  decode(array) {
    'use strict';

    return array.reduce((acc, char, i) => acc + String.fromCharCode(char - i), '');
  }
};
