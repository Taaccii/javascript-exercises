const removeFromArray = function(arr, ...arg) {
  
  const result = arr.filter(item => !arg.includes(item));
  return result;
};

console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
