const findTheOldest = function(people) {
    let oldestPerson = {};
    let oldestAge = 0;
    
    let ages = people.map((person) => {
        let yob = person.yearOfBirth;
        let yod = person.yearOfDeath;
        let dif = yod-yob;
        if (dif > oldestAge) {
            oldestAge = dif;
            oldestPerson = person;
        }
    })

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
