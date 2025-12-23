'use strict';

/**
 * Возвращает новую функцию с зафиксированным контекстом и аргументами.
 *
 * @param {Function} fn - Функция, которую нужно привязать.
 * @param {Object|null|undefined} context - Контекст (this) для вызова функции.
 *        Если null или undefined, используется глобальный объект.
 * @param {...*} bindArgs - Аргументы, которые будут зафиксированы при привязке.
 * @returns {Function} Новая функция, которая при вызове объединяет bindArgs и переданные при вызове аргументы и вызывает `fn`.
 *
 * @example
 * function greet(greeting, punctuation) {
 *   return `${greeting}, I am ${this.name}${punctuation}`;
 * }
 * const user = { name: 'Dima' };
 * const boundGreet = myBind(greet, user, 'Hello');
 * boundGreet('!'); // → "Hello, I am Dima!"
 */
const myBind = (fn, context, ...bindArgs) => {
    return (...callArgs) => {
        const allArgs = [...bindArgs, ...callArgs];
        return myApply(fn, context, allArgs);
    };
};

function greet(greeting, punctuation) {
    return `${greeting}, I am ${this.name}${punctuation}`;
}

const boundGreet = myBind(greet, user, 'Hello');
console.log(boundGreet('!'));
