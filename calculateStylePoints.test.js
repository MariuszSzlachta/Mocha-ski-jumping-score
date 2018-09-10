const DecimalRound = require('./util');
const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  it('should trim array into 5 elements if styleNotes.length is greater than 5', () => {
    const actual = calculateStylePoints([19, 19, 19, 19, 19, 19, 19, 19, 19]);
    const expected = 57;

    assert.equal(actual, expected);
  });

  it('should return return 20 for every note bigger than 20', () => {
    const actual = calculateStylePoints([21, 21, 21, 21, 21]);
    const expected = 60;

    assert.equal(actual, expected);
  });

  it('should treat negative number as positive', () => {
    const actual = calculateStylePoints([-20, -20, -20, -20, -20]);
    const expected = 60;

    assert.equal(actual, expected);
  });

  it('should round number with 0.5 precision', () => {
    const actual = calculateStylePoints([18, 19, 19.6, 19.6, 20]);
    const expected = 58;

    assert.equal(actual, expected);
  });

  it('should allow for the same notes', () => {
    const actual = calculateStylePoints([20, 20, 20, 20, 20]);
    const expected = 60;

    assert.equal(actual, expected);
  });

  it('should reject extreme notes', () => {
    const actual = calculateStylePoints([10, 17, 18, 19, 20]);
    const expected = 54;

    assert.equal(actual, expected);
  });
});