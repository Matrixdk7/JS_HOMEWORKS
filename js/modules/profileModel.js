import { validateMinLength, validateEmail } from './validators.js';

// Profile Model
const profileModel = {};

// Service properties
Object.defineProperties(profileModel, {
    _firstName: {
        value: '',
        writable: true,
        enumerable: false
    },
    _lastName: {
        value: '',
        writable: true,
        enumerable: false
    },
    _email: {
        value: '',
        writable: true,
        enumerable: false
    }
});

// Public properties
Object.defineProperties(profileModel, {
    firstName: {
        enumerable: true,
        configurable: true,
        get() {
            return this._firstName;
        },
        set(value) {
            ensureNotFrozen(this);
            this._firstName = validateMinLength(value, 2, 'First name');
        }
    },

    lastName: {
        enumerable: true,
        configurable: true,
        get() {
            return this._lastName;
        },
        set(value) {
            ensureNotFrozen(this);
            this._lastName = validateMinLength(value, 2, 'Last name');
        }

    },

    email: {
        enumerable: true,
        configurable: true,
        get() {
            return this._email;
        },
        set(value) {
            ensureNotFrozen(this);
            this._email = validateEmail(value);
        }
    },

    fullName: {
        enumerable: false,
        configurable: false,
        get() {
            return `${this._firstName} ${this._lastName}`;
        }
    }
});

// Frozen State
function ensureNotFrozen(model) {
    if (Object.isFrozen(model)) throw new Error('Profile model is frozen');
}

export { profileModel, ensureNotFrozen };