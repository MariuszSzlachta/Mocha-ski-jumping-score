const DecimalRound = require('./util');

const calculateDistancePoints = (distance, hillSize, kPoint) => {
  switch (true) {
    // mamucia
    case (hillSize >= 180): {
      const result = 120 + (DecimalRound((distance - kPoint), 0.5) * 1.2);
      return String(result);
    }
    // duża skocznia
    case (hillSize >= 120 && hillSize < 180): {
      const result = 60 + (DecimalRound((distance - kPoint), 0.5) * 1.8);
      return String(result);
    }
    // mała
    case (hillSize < 120): {
      const result =  60 + (DecimalRound((distance - kPoint), 0.5) * 2);
      return String(result);
    }
  }
};
module.exports = calculateDistancePoints;
