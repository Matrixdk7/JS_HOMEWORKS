'use strict';

const a = prompt(`Enter 'a' value`);
const b = prompt(`Enter 'b' value`);

// Task 1
const a1 = Number(a) === 0 ? `Вiрно` : `Невірно`;
console.log(`Task 1: a = 0: ${a1}`);

// Task 2
const a2 = Number(a) > 0 ? `Вiрно` : `Невірно`;
console.log(`Task 2: a > 0: ${a2}`);

// Task 3
const a3 = Number(a) < 0 ? `Вiрно` : `Невірно`;
console.log(`Task 3: a < 0: ${a3}`);

// Task 4
const a4 = Number(a) >= 0 ? `Вiрно` : `Невірно`;
console.log(`Task 4: a >= 0: ${a4}`);

// Task 5
const a5 = Number(a) <= 0 ? `Вiрно` : `Невірно`;
console.log(`Task 5: a <= 0: ${a5}`);

// Task 6
const a6 = Number(a) !== 0 ? `Вiрно` : `Невірно`;
console.log(`Task 6: a != 0: ${a6}`);

// Task 7
const a7 = a === `test` ? `Вiрно` : `Невірно`;
console.log(`Task 7: a = 'test': ${a7}`);

// Task 8
const a8 = a === `1` ? `Вiрно` : `Невірно`;
console.log(`Task 8: a === '1': ${a8}`);

// Task 9
let a9;
if (Number(a) > 0 && Number(a) < 5) {
    a9 = `Вірно`;
} else {
    a9 = `Невірно`;
}
console.log(`Task 9: a > 0 and a < 5: ${a9}`);

// Task 10
let a10;
if (Number(a) === 0 || Number(a) === 2) {
    a10 = (Number(a) + 7);
} else {
    a10 = (Number(a) / 10);
}
console.log(`Task 10: ${a10}`);

// Task 11
let a11;
if (Number(a) <= 1 && Number(b) >= 3) {
    a11 = (Number(a) + Number(b));
} else {
    a11 = (Number(a) - Number(b));
}
console.log(`Task 11: ${a11}`);

// Task 12
let a12;
if ((Number(a) > 2 && Number(a) < 11) || (Number(b) >= 6 && Number(b) < 14)) {
    a12 = `Вірно`;
} else {
    a12 = `Невірно`;
}
console.log(`Task 12: ${a12}`);

// Task 13
const num = +prompt(`Enter 'num' value`);
let result;
switch (num) {
    case 1:
        result = `Зима`;
        break;
    case 2:
        result = `Весна`;
        break;
    case 3:
        result = `Лiто`;
        break;
    case 4:
        result = `Осiнь`;
        break;
    default:
        result = `Не вірне значення`;
}
console.log(`Task 13: ${result}`);