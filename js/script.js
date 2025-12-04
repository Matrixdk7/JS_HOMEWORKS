'use strict';

// Task 1
for(let i=20; i<=30;i += 0.5){
    console.log(i);
}

// Task 2
const uah = 27;
for (let i = 10; i <= 100; i += 10){
    let a = i*uah;
    console.log(`${i} dollars = ${a} uah`);
}

//Task 3
const num = +prompt('Enter a number');
for (let i = 1; i <= 100; i += 1 ){
    if (i * i <= num) {
        console.log(i);
    }
}

//Task 4
const num2 = +prompt('Enter a number');
if (num2 <= 1) {
    console.log('Not simple');
} else {
    let numVerify = true;
    for (let i = 2; i < num2; i += 1) {
        if (num2 % i === 0 ) {
            numVerify = false;
            break;
        }
    }
    console.log(numVerify ? 'Simple' : 'Not simple');
}

// Task 5
let num3 = +prompt('Enter a number');
while (num3 % 3 === 0) {
    num3 = num3 / 3;
}
console.log(num3 === 1 ? "Yes" : "No");