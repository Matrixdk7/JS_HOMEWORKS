'use strict';

/**
 * Вызывает переданную функцию с указанным контекстом и массивом аргументов.
 *
 * @param {Function} fn - Функция, которую нужно вызвать.
 * @param {Object|null|undefined} context - Контекст (this) для вызова функции.
 *        Если null или undefined, используется глобальный объект.
 * @param {Array} array - Массив аргументов, которые передаются в функцию.
 * @returns {*} Результат вызова функции `fn`.
 *
 * @example
 * function sum(a, b, c) { return this.x + a + b + c; }
 * const obj = { x: 10 };
 * myApply(sum, obj, [1, 2, 3]); // вернёт 16
 */
const myApply = (fn, context, array) => {
    if (typeof fn !== 'function') return `Not A function`;
    context = context ?? globalThis;
    context.tempFn = fn;

    let result;
    if (array === undefined) {
        result = context.tempFn();
    } else if (Array.isArray(array)) {
        result = context.tempFn(...array);
    } else {
        return `Not a array`;
    }

    delete context.tempFn;
    return result;
}

function sum(a, b, c) {
    return this.x + a + b + c;
}

console.log(myApply(sum, obj, [1, 2, 3]));
