'use strict';

/**
 * Вызывает переданную функцию с указанным контекстом и аргументами через запятую.
 *
 * @param {Function} fn - Функция, которую нужно вызвать.
 * @param {Object|null|undefined} context - Контекст (this) для вызова функции.
 *        Если null или undefined, используется глобальный объект.
 * @param {...*} args - Аргументы, передаваемые в функцию.
 * @returns {*} Результат вызова функции `fn`.
 *
 * @example
 * function sayHello(age) { return `Hello, I am ${this.name}, ${age}`; }
 * const user = { name: 'Dima' };
 * myCall(sayHello, user, 25); // → "Hello, I am Dima, 25"
 */
// Используем стрелочную функцию т.к. нет this внутри
const myCall = (fn, context, ...args) => {

    // Проверяем контекст
    context = context ?? globalThis;

    // Кладём функцию как временное свойство объекта
    context.tempFn = fn;

    // Вызываем функцию и передаём ей аругменты
    const result = context.tempFn(...args);

    // Удаляем функцию из объекта
    delete context.tempFn;

    // Возвращаем результат
    return result;
}

// Используем function для корректной работы this внутри функции
function sayHello(age) {
    return `Hello, I am ${this.name}, ${age}`;
}

console.log(myCall(sayHello, user, 25));
