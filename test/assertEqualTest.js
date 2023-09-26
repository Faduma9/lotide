const assert = require('chai').assert;
const assertEqualFunction = require('../assertEqual');

describe('assertEqual', () => {
  it('should pass when comparing two equal strings', () => {
    const actual = "Lighthouse Labs";
    const expected = "Lighthouse Labs";
    assert.equal(actual, expected);
  });

  it('should fail when comparing two different strings', () => {
    const actual = "Lighthouse Labs";
    const expected = "Bootcamp";
    assert.notEqual(actual, expected);
  });

  it('should pass when comparing two equal numbers', () => {
    const actual = 1;
    const expected = 1;
    assert.equal(actual, expected);
  });

  it('should fail when comparing two different numbers', () => {
    const actual = 1;
    const expected = 2;
    assert.notEqual(actual, expected);
  });
});
