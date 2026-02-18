const getTheTitles = function(array) {
  let titleFiltered = array.map(titles => `${titles.title}`);
  return titleFiltered;
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
