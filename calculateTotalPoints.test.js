const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  describe('without manipulating gate and without any wind', () => {
    it('on small hill should return sum of notes and distance only', () => {
      const actual = calculateTotalPoints(93, 100, 90, [14, 16, 15, 15.5, 15.5], 0, 0);
      const expected = 112;

      assert.equal(actual, expected);
    });
    it('on large hill should return sum of notes and distance only', () => {
      const actual = calculateTotalPoints(130, 130, 120, [14, 16, 15, 15.5, 15.5], 0, 0);
      const expected = 124;

      assert.equal(actual, expected);
    });
    it('on biggest hill should return sum of notes and distance only', () => {
      const actual = calculateTotalPoints(210, 220, 200, [14, 16, 15, 15.5, 15.5], 0, 0);
      const expected = 178;

      assert.equal(actual, expected);
    });
  });

  describe('with negative gate and positive wind', () => {
    it('on small hill should return sum of notes, distance, wind minus gate factor ', () => {
      const actual = calculateTotalPoints(93, 100, 90, [14, 16, 15, 15.5, 15.5], 10, -5);
      const expected = 117;

      assert.equal(actual, expected);
    });
    it('on large hill should return sum of notes, distance, wind minus gate factor', () => {
      const actual = calculateTotalPoints(130, 130, 120, [14, 16, 15, 15.5, 15.5], 10, -5);
      const expected = 129;

      assert.equal(actual, expected);
    });
    it('on biggest hill should return sum of notes, distance, wind minus gate factor', () => {
      const actual = calculateTotalPoints(210, 220, 200, [14, 16, 15, 15.5, 15.5], 10, -5);
      const expected = 183;

      assert.equal(actual, expected);
    });
  });

  describe('with positive gate and negative wind', () => {
    it('on small hill should return sum of notes, distance, gate minus wind factor', () => {
      const actual = calculateTotalPoints(93, 100, 90, [14, 16, 15, 15.5, 15.5], -10, 5);
      const expected = 107;

      assert.equal(actual, expected);
    });
    it('on large hill should return sum of notes, distance, gate minus wind factor', () => {
      const actual = calculateTotalPoints(130, 130, 120, [14, 16, 15, 15.5, 15.5], -10, 5);
      const expected = 119;

      assert.equal(actual, expected);
    });
    it('on biggest hill should return sum of notes, distance, gate minus wind factor', () => {
      const actual = calculateTotalPoints(210, 220, 200, [14, 16, 15, 15.5, 15.5], -10, 5);
      const expected = 173;

      assert.equal(actual, expected);
    });
  });

  describe('with positive gate and wind', () => {
    it('on small hill should return sum of notes, distance, gate, wind', () => {
      const actual = calculateTotalPoints(93, 100, 90, [14, 16, 15, 15.5, 15.5], 10, 5);
      const expected = 127;

      assert.equal(actual, expected);
    });
    it('on large hill should return sum of notes, distance, gate, wind', () => {
      const actual = calculateTotalPoints(130, 130, 120, [14, 16, 15, 15.5, 15.5], 10, 5);
      const expected = 139;

      assert.equal(actual, expected);
    });
    it('on biggest hill should return sum of notes, distance, gate, wind', () => {
      const actual = calculateTotalPoints(210, 220, 200, [14, 16, 15, 15.5, 15.5], 10, 5);
      const expected = 193;

      assert.equal(actual, expected);
    });
  });
});