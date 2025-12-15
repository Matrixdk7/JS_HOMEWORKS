'use strict';

// Task 1
const positiveNumbers = arr.filter(num => num > 0);

const sum = positiveNumbers.reduce((acc, num) => acc + num, 0);
const count = positiveNumbers.length;

console.log(sum);
console.log(count);

// Task 2
const min = arr.reduce((acc, num, index) => {
    if (num < acc.value) {
        acc.value = num;
        acc.index = index;
    }
    return acc;
}, { value: Infinity, index: -1 });

console.log(min.value);
console.log(min.index);

// Task 3
const max = arr.reduce((acc, num, index) => {
    if (num > acc.value) {
        acc.value = num;
        acc.index = index;
    }
    return acc;
}, { value: -Infinity, index: -1 });

console.log(max.value);
console.log(max.index);

// Task 4
const negativeCount = arr.filter(num => num < 0).length;
console.log(negativeCount);

//Task 5
const oddPositiveCount = arr.filter(num => num > 0 && num % 2 !== 0).length;
console.log(oddPositiveCount);

//Task 6
const evenPositiveCount = arr.filter(num => num > 0 && num % 2 === 0).length;
console.log(evenPositiveCount);

//Task 7
const evenPositiveSum = arr.filter(num => num > 0 && num % 2 === 0).reduce((acc, num) => acc + num, 0);
console.log(evenPositiveSum);

//Task 8
const oddPositiveSum = arr.filter(num => num > 0 && num % 2 !== 0).reduce((acc, num) => acc + num, 0);
console.log(oddPositiveSum);

//Task 9
const positiveMulti = arr.filter(num => num > 0).reduce((acc, num) => acc * num, 1);
console.log(positiveMulti);

//Task 10
const maxElement = Math.max(...arr);
const result = arr.map(num => num === maxElement ? num : 0);
console.log(result);