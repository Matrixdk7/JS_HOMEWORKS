'use strict';

const userAge = +prompt(`What is your age?`);
if (!userAge) {
    alert(`Age not specified`);
} else if (userAge < 18) {
    const userAdult = confirm(`Is there an adult with you?`);
    const accesAllowed = userAdult ? `Access is permitted with the presence of an adult.` : `Access denied!`;
    alert(`${accesAllowed}`);
} else {
    alert(`Access allowed, enjoy watching!`);
}