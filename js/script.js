'use strict';

let ul = document.getElementById('ulId');
let li = ul.querySelectorAll("li");

console.log(li.length);

const arr = [];
for (const item of li) {
    console.log(item);
    arr.push(item.innerText);
}

console.log(arr);