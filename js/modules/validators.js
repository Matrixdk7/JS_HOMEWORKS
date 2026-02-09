// Name validation
function validateMinLength(value, min, fieldName) {
    if (typeof value !== 'string') {
        throw new Error(`${fieldName} must be a string`);
    }

    value = value.trim();

    if (value.length < min) {
        throw new Error(`${fieldName} must be at least ${min} characters`);
    }

    return value;
}

// Email validation
function validateEmail(value) {
    value = value.trim();
    if (!value.includes('@') || !value.includes('.')) throw new Error('Email is not valid');
    return value;
}

export { validateEmail, validateMinLength };