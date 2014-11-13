'use strict';

const decode = require('../app/scripts/decode');

describe('the decoder function', function() {
  it('returns nothing if nothing is entered', function () {
    expect(decode([])).toEqual('');
  });

  it('more or less converts integers to chars', function () {
    expect(decode([97])).toEqual('a');
  });

  it('transforms input into my mail address', function() {
    expect(decode([116, 105, 107, 101, 68, 121, 110, 112, 106])).toEqual('thib@thib');
  });
});
