const palindromes = function (str) {

  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  const reversed = cleaned
    .split('')
    .reverse()
    .join('');

  return reversed === cleaned;

  };


console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
