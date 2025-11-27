'use strict';

const people = [
    { name: "Anna", age: 22 },
    { name: "Oleg", age: 31 },
    { name: "Maria", age: 27 }
];

let [firstPersonName] = people;
firstPersonName = firstPersonName.name;

console.log(firstPersonName);

let oldest = people[0];
if (people[1].age > people[0].age) {
    oldest = people[1];
} else if (people[2].age > people[1].age) {
    oldest = people[2];
}

console.log(oldest);

const totalAge = people[0].age + people[1].age + people[2].age;
const ageSummary = {
    total: totalAge,
    average: totalAge / 3
};

console.log(ageSummary);