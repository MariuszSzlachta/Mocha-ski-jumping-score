const DecimalRound = require('./util');

const calculateDistancePoints = (distance, hillSize, kPoint) => {
  switch (true) {
    // mamucia
    case (hillSize >= 180): {
      if (kPoint === distance) {
        return '120';
      }
      else if (kPoint > distance){
        const result = 120 - (DecimalRound((kPoint - distance), 0.5) * 1.2);
        return String(result);
      } else {
        const result = 120 + (DecimalRound((distance - kPoint), 0.5) * 1.2);
        return String(result);
      }
    }
    // duża skocznia
    case (hillSize >= 120 && hillSize < 180): {
      if (kPoint === distance) {
        return '60';
      }
      else if (kPoint > distance){
        const result = 60 - (DecimalRound((kPoint - distance), 0.5) * 1.8);
        return String(result);
      } else {
        const result = 60 + (DecimalRound((distance - kPoint), 0.5) * 1.8);
        return String(result);
      }
    }
    // mała
    case (hillSize < 120): {
      if (kPoint === distance) {
        return '60';
      }
      else if (kPoint > distance){
        const result = 60 - (DecimalRound((kPoint - distance), 0.5) * 2);
        return String(result);
      } else {
        const result =  60 + (DecimalRound((distance - kPoint), 0.5) * 2);
        return String(result);
      }
    }
  }
};
module.exports = calculateDistancePoints;
