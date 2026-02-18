function getAge(birth, death) {
  if(!death) return death = new Date().getFullYear() - birth;
  return death - birth;
};


const findTheOldest = function(array) {
  
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

    return currentAge > oldestAge ? currentPerson : oldest;
  });

};


    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
