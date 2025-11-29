'use strict';

const email = `email`;
const password = 'password';
const isEmailVerified = true;
const canLogin = (email && password && isEmailVerified === true);
if (canLogin === true) {
    console.log('login accepted');
} else {
    console.log('login failed');
}