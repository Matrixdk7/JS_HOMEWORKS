'use strict';

const form = document.querySelector('[data-form]');

// Валидатор
const validateField = (input) => {
    let result;
    clearError(input);

    // Проверяем required
    result = required(input);
    if (result !== true) return result;

    // Проверяем email
    if (input.type === 'email') {
        result = emailFormat(input);
        if (result !== true) return result;
    }

    // Проверяем пароль
    if ('originalPassword' in input.dataset) {
        for (let validator of passwordValidators) {
            result = validator(input);
            if (result !== true) return result;
        }
    }

    // Подтверждаем пароль
    if ('confirmPassword' in input.dataset) {
        const originalPassword = form.querySelector('[data-original-password]');
        result = confirmPassword(input, originalPassword.value);
        if (result !== true) return result;
    }

    // Проверяем возраст
    if ('age' in input.dataset) {
        result = ageValidator(input);
        if (result !== true) return result;
    }

    return true;
};


// Проверка поля
const required = (input) => {
    if (input.type === 'checkbox') return input.checked ? true : "Потрібно відмітити поле";
    return input.value ? true : "Поле обов’язкове";
};

// Формат эмейла
const emailFormat = (input) => input.validity.typeMismatch ? "Некоректний email" : true;

// Проверка пароля
const minLength = (input, min = 8) => input.value.length >= min ? true : `Мінімум ${min} символів`;
const hasDigit = (input) => /\d/.test(input.value) ? true : "Повинна бути хоча б одна цифра";
const hasLetter = (input) => /[a-zA-Z]/.test(input.value) ? true : "Повинна бути хоча б одна літера";
let passwordValidators = [minLength, hasDigit, hasLetter];

// Подтверждение пароля
const confirmPassword = (input, originalPassword) => input.value === originalPassword ? true : "Паролі не співпадають";

// Проверка возраста
const ageValidator = (input, min = 16, max = 120) => {
    if (!input.value) return "Поле обов’язкове";
    const age = Number(input.value);
    if (isNaN(age) || age < min || age > max) return `Вік має бути від ${min} до ${max}`;
    return true;
};