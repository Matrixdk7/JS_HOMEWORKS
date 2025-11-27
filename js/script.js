'use strict';

const user = {
    name: "Alex",
    age: 25,
    city: "Kyiv",
    job: "Frontend"
};

const { name, age, city, job} = user;

const shortInfo = {
    name,
    city
};

const renamed = {
    fullName: name,
    location: city
};

console.log(user);
console.log(shortInfo);
console.log(renamed);