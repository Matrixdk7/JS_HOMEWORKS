'use strict';

const userName = prompt('What is your name?');
const welcomeMes = confirm(`Hello, ${userName}! Would you like to receive welcome messages in the future?`);
if (welcomeMes) {
    alert("You will continue to receive welcome messages!");
} else {
    alert("You will no longer receive welcome messages.");
}