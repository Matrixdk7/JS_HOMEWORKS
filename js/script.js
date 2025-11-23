'use strict';

const userName = prompt('What is your name?');
const userAge = +prompt('What is your age?');
const userLives = prompt('Where do you live?');
let userJslike = prompt('Do you like JavaScript?');
if (userJslike.toLowerCase() === `yes`) {
    userJslike = `likes`;
} else {
    userJslike = `doesn't like`;
}
alert(`Hello, ${userName}! You are ${userAge} years old, you are from ${userLives}. Attitude towards JavaScript: ${userJslike}.`);