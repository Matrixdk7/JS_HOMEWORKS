'use strict';

const age = prompt('Enter your age');
const ageNum = +age;

if (isNaN(ageNum) || age === null || age.trim() === '') {
    alert('Incorrect age');
} else {
    alert(`In 5 years you will be ${ageNum + 5}`);
}