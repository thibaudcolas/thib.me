export default {
  encode(str) {
    "use strict";

    return str.split("").map((s, i, arr) => s.charCodeAt(0) + i);
  },
  decode(arr) {
    "use strict";

    return arr.reduce((acc, s, i) => acc + String.fromCharCode(s - i), "");
  },
};
