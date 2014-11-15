export default {
  encode(str) {
    'use strict';

    return [];
  },
  decode(arr) {
    'use strict';

    return arr.reduce((acc, char, i) => acc + String.fromCharCode(char - i), '');
  }
};
