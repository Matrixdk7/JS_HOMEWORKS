'use strict';

const arr = [1, 2, 3, 4, 5];

let numSum = 0;
for (const number of arr) {
    numSum += number;
}
console.log(numSum);

let numSquare = 0;
for (const number of arr) {
    numSquare += number ** 2;
}
console.log(numSquare);