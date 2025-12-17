'use strict';

let filteredUsers = users.filter(user =>
    user.active === true &&
    (user.age >= 18 && user.age <= 35) &&
    !user.email.endsWith("@spam.com")
);

console.log(filteredUsers);