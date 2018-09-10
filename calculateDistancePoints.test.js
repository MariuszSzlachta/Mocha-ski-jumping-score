const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  describe('biggest hill', () => {
    it('should return 120 if distance is equal kPoint', () => {
      const actual = calculateDistancePoints(200, 200, 200);
      const expected = '120';

      assert.equal(actual, expected);
    });

    it('should return 120 + 1.2 points for every meter above kPoint', () => {
      const actual = calculateDistancePoints(201, 200, 200);
      const expected = '121.2';

      assert.equal(actual, expected);
    });

    it('should return 120 - 1.2 point for every meter below kPoint', () => {
      const actual = calculateDistancePoints(190, 200, 200);
      const expected = '108';

      assert.equal(actual, expected);
    });
  });

  describe('normal hill', () => {
    it('should return 60 if distance is equal kPoint', () => {
      const actual = calculateDistancePoints(120, 130, 120);
      const expected = '60';

      assert.equal(actual, expected);
    });

    it('should return 60 + 1.8 points for every meter above kPoint', () => {
      const actual = calculateDistancePoints(121, 130, 120);
      const expected = '61.8';

      assert.equal(actual, expected);
    });

    it('should return 60 - 1.8 point for every meter below kPoint', () => {
      const actual = calculateDistancePoints(110, 130, 120);
      const expected = '42';

      assert.equal(actual, expected);
    });
  });

  describe('small hill', () => {
    it('should return 60 if distance is equal kPoint', () => {
      const actual = calculateDistancePoints(90, 100, 90);
      const expected = '60';

      assert.equal(actual, expected);
    });

    it('should return 60 + 2 points for every meter above kPoint', () => {
      const actual = calculateDistancePoints(91, 100, 90);
      const expected = '62';

      assert.equal(actual, expected);
    });

    it('should return 60 - 2 point for every meter below kPoint', () => {
      const actual = calculateDistancePoints(89, 100, 90);
      const expected = '58';

      assert.equal(actual, expected);
    });
  });
});
