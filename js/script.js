'use strict';

// Live-валидация
form.addEventListener('input', (e) => {
    const input = e.target;
    const result = validateField(input);
    if (result !== true) showError(input, result);
    if (input.name) {
        if (input.type === 'checkbox') {
            localStorage.setItem(input.name, input.checked);
        } else {
            localStorage.setItem(input.name, input.value);
        }
    }
});

// Submit-валидация
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input, select, textarea');

    for (let input of inputs) {
        const result = validateField(input);
        if (result !== true) {
            showError(input, result);
            input.focus();
            return;
        }
    }

    // Собираем объект
    const data = {};
    inputs.forEach(input => {
        data[input.name] = input.type === 'checkbox' ? input.checked : input.value;
    });

    // Отправляем его в JSON
    document.getElementById('result').textContent = JSON.stringify(data, null, 2);
});

// Очистка формы
form.addEventListener('click', (e) => {
    if (e.target.matches('[data-clear-btn]')) {
        form.reset(); // Очищаем форму
        form.querySelectorAll('.is-invalid').forEach(input => input.classList.remove('is-invalid')); // Очищаем ошибки
        document.getElementById('result').textContent = ''; // Очищаем json

        // удаляем все сохранённые данные этой формы
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => localStorage.removeItem(input.name));
    }
});

// Показать ошибку
const showError = (input, message) => {
    input.classList.add('is-invalid');

    let feedback = input.nextElementSibling;

    if (!feedback || !feedback.classList.contains('invalid-feedback')) {
        feedback = document.createElement('div');
        feedback.className = 'invalid-feedback';
        input.insertAdjacentElement('afterend', feedback);
    }

    feedback.textContent = message;
};

// Убрать ошибку
const clearError = (input) => {
    input.classList.remove('is-invalid');

    // Скрываем или удаляем блок ошибки
    const feedback = input.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.remove();
    }
};

// Заполняем страницу сохранёнными данными из localStorage
window.addEventListener('DOMContentLoaded', () => {
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        const savedValue = localStorage.getItem(input.name);
        if (savedValue !== null) {
            if (input.type === 'checkbox') {
                input.checked = savedValue === 'true';
            } else {
                input.value = savedValue;
            }
        }
    });
});