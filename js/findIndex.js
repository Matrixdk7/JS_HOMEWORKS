'use strict';

/**
 * Searches for the first element in the array that matches the given value
 * and returns its index. Supports searching by a specific object key if provided.
 *
 * @param {Array} arr - Массив, в котором выполняется поиск.
 * @param {*} value - Значение, которое нужно найти.
 * @param {string} [key] - Необязательное имя свойства объекта.
 *        Если указано — сравнение идёт по arr[i][key] === value.
 * @returns {number} Индекс найденного элемента или -1, если ничего не найдено
 *                   или входные данные некорректны.
 */
const findIndex = (arr, value, key) => {
    if (!validate(arr, key)) return -1;

    for (let i = 0; i < arr.length; i++) {
        if (key === undefined) {
            if (arr[i] === value) return i;
        } else {
            if (arr[i][key] === value) return i;
        }
    }
    return -1;
};

console.log(findIndex(demoArray, 5, 'id'));
console.log(findIndex(demoArray, false, 'completed'));