'use strict';

/**
 * Searches for a value in an array from right to left and returns
 * the index of the last matching element.
 * Supports searching by a specific object key if provided.
 *
 * @param {Array} arr - Массив, в котором выполняется поиск.
 * @param {*} value - Значение, которое нужно найти.
 * @param {string} [key] - Необязательное имя свойства объекта.
 *        Если указано — поиск идёт по arr[i][key] === value.
 * @returns {number} Индекс найденного элемента или -1, если ничего не найдено
 *                   или аргументы переданы некорректно.
 */
const lastIndexOf = (arr, value, key) => {
    if (!validate(arr, key)) return -1;

    for (let i = arr.length - 1; i >= 0; i -= 1) {
        if (key === undefined) {
            if (arr[i] === value) return i;
        } else {
            if (arr[i][key] === value) return i;
        }
    }
    return -1;
};

console.log(lastIndexOf(demoArray, false, `completed`));
console.log(lastIndexOf(demoArray, 5, `id`));