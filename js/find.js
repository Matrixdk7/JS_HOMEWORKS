'use strict';

/**
 * Searches for the first element in the array that matches the given value.
 * Supports searching by a specific object key if provided.
 *
 * @param {Array} arr - Массив, в котором выполняется поиск.
 * @param {*} value - Значение, которое нужно найти.
 * @param {string} [key] - Необязательный ключ объекта.
 *        Если указан — поиск идёт по item[key] === value.
 * @returns {*} Найденный элемент или undefined, если совпадений нет
 *              или данные не прошли проверку.
 */
const find = (arr, value, key) => {
    if (!validate(arr, key)) return undefined;

    let result;
    let found = false;

    forEach(arr, (item, index) => {
        if (found) return;

        if (key === undefined) {
            if (item === value) {
                result = item;
                found = true;
            }
        } else {
            if (item[key] === value) {
                result = item;
                found = true;
            }
        }
    });
    return result;
}

console.log(find(demoArray, 10, 'id'));
console.log(find(demoArray, false, 'completed'));