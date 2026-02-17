const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(n) {

  let result = 1;

	for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
};


console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
