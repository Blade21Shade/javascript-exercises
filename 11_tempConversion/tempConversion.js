const convertToCelsius = function(inF) {
  let inC = (inF-32) * 5/9.0;
  inC = Math.round(inC * 10) / 10;
  return inC;
};

const convertToFahrenheit = function(inC) {
  let inF = inC*(9/5.0) + 32;
  inF = parseFloat(inF.toFixed(1));
  return inF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
