const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let toReturn = 0;
  for (let num of arr) {
    toReturn += num;
  }
  return toReturn;
};

const multiply = function(arr) {
  let toReturn = 1;
  for (let num of arr) {
    toReturn *= num;
  }
  return toReturn;
};

const power = function(base, pow) {
	if (pow == 0) {
    return 1;
  }

  if (pow < 0) { // This would actually divide, but I'm assuming that isn't desired for this project
    return base;
  }
  
  let toReturn = base;

  for (let i = 1; i < pow; i++) {
    toReturn *= base;
  }

  return toReturn;
};

const factorial = function(base) {
  if (base < 0) {
    return -1;
  } else if (base == 0) {
    return 1;
  } else if (base == 1) {
    return 1;
  }

  let toReturn = 1;
  for (let i = 2; i <= base; i++) {
    toReturn *= i;
  }

  return toReturn;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
