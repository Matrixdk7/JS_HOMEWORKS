'use strict';

// Object
const user = {
    lockProfile() {
        Object.seal(this)
    },

    freezeProfile() {
        Object.freeze(this)
    }
}

// Services properties
Object.defineProperties(user, {
    _firstName: {
        value: null,
        writable: true,
        enumerable: false,
    },
    _lastName: {
        value: null,
        writable: true,
        enumerable: false,
    },
    createdAt: {
        value: new Date(),
        writable: false,
        enumerable: false,
        configurable: false
}
});

// Public properties
Object.defineProperties(user, {
    fullName: {
        enumerable: true,
        configurable: false,

        get() {
            return this._firstName + ' ' + this._lastName;
        },

        set(value) {
            const fullName = user.fullName;
            const parts = value.trim().split(' ');
            console.log(parts);

            if (parts.length !== 2) {
                throw new Error("Full name must contain exactly two words");
            }

            if (parts[0].length < 2 || parts[1].length < 2) {
                throw new Error("Each word must be at least 2 characters");
            }
            this._firstName = parts[0];
            this._lastName = parts[1];
        }
    }
});

// Example 1
user.fullName = "John Doe";
console.log(user);
console.log(Object.getOwnPropertyDescriptors(user));

// Seal
user.lockProfile();
console.log(Object.isSealed(user));
user.newString = 777;
console.log(user.newString);

// Freeze
// user.freezeProfile();
// console.log(Object.isFrozen(user));
// user.fullName = "Alice Cooper";
// console.log(user.fullName);

// Example 2
// user.createdAt = new Date(2000, 0, 1);
// console.log(user.createdAt);

// Example 3
// delete user.fullName;
// console.log(user.fullName);