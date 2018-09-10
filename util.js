function DecimalRound(DValue, DPrecision) {
  return Math.round(Number(DValue) / Number(DPrecision)) * Number(DPrecision);
}
console.log(DecimalRound(121, 0.5))
module.exports = DecimalRound;