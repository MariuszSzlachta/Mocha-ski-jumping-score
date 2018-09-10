const DecimalRound = require('./util');
const calculateStylePoints = (styleNotes) => {
  // funkcja zaokrąglająca do połówek

  // definiowanie reducera
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // gdyby wpisać za długą tablicę
  if (styleNotes.length > 5) {
    styleNotes.length = 5;
  }

  // zabezpieczam max i min
  const fixedNotes = styleNotes.map(e => {
    // jeśli jest minus to zamieniam na plus
    if (e < 0) {
      return e * -1;
    }
    // jeśli nota powyżej 20, to zakładam, że ktoś chciał dać największą z możliwych czyli 20
    if (e > 20) {
      return 20
    }
    return e;
  });

  // sortowanie od najmniejszej do największej
  fixedNotes.sort((a, b) => a - b);

  // odrzucam dwie skrajne
  const sliced = fixedNotes.slice(1, 4);
  // sumuję
  const result = sliced.reduce(reducer);
  // zaokrąglam wynik
  return DecimalRound(result, 0.5);
};


module.exports = calculateStylePoints;