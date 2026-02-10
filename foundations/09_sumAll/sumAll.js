const sumAll = function(start, end) {
  let arr = [];

  if (typeof start !== 'number' || typeof end !== 'number') {
    return 'ERROR'
  }

  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return 'ERROR'

  } else if (start < 0 || end < 0) {
    return 'ERROR';

  } else if (start <= end ) {

    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
  } else {

    for (let i = start; i >= end; i--) {
      arr.push(i);
    }
  }
  return arr.reduce((sum, current) => sum + current, 0);


};

console.log(sumAll(2.5, 4));

// Do not edit below this line
module.exports = sumAll;
