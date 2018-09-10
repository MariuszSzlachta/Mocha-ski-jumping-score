const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  return Number(distancePoints) + Number(stylePoints) + windFactor + gateFactor;
}

// calculateTotalPoints(93, 100, 90, [14, 16, 15, 15.5, 15.5], 0, 0);
module.exports = calculateTotalPoints;