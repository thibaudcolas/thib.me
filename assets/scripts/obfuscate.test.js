"use strict";

const { decode, encode } = require("../app/scripts/obfuscate");

describe("the encode function", function() {
  it("outputs nothing if nothing is entered", function() {
    expect(encode("")).toEqual([]);
  });

  it("converts strings to integers", function() {
    expect(encode("a")).toEqual([97]);
  });

  it("can hide my mail address", function() {
    expect(encode("thib@thib")).toEqual([
      116,
      105,
      107,
      101,
      68,
      121,
      110,
      112,
      106,
    ]);
  });
});

describe("the decode function", function() {
  it("outputs nothing if nothing is entered", function() {
    expect(decode([])).toEqual("");
  });

  it("converts integers to chars", function() {
    expect(decode([97])).toEqual("a");
  });

  it("can hide my mail address", function() {
    expect(decode([116, 105, 107, 101, 68, 121, 110, 112, 106])).toEqual(
      "thib@thib"
    );
  });
});

describe("obfuscation functions can be chained", function() {
  it("looks fun", function() {
    expect(decode(encode(decode(encode("Rhinoceros!"))))).toEqual(
      "Rhinoceros!"
    );
  });
});
