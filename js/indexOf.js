'use strict';

/**
 * Searches for a value in an array and returns the index of the first matching element.
 * Supports searching by a specific object key if provided.
 *
 * @param {Array} arr - Массив, в котором выполняется поиск.
 * @param {*} value - Значение, которое нужно найти.
 * @param {string} [key] - Необязательное имя свойства объекта.
 *        Если указано — поиск идёт по item[key] === value.
 * @returns {number} Индекс найденного элемента или -1, если совпадений нет
 *                   или входные параметры некорректны.
 */
const indexOf = (arr, value, key) => {
    if (!validate(arr, key)) return -1;

    let result = -1;

    forEach(arr, (item, index) => {
        if (result !== -1) return;

        if (key === undefined) {
            if (item === value) result = index;
        } else {
            if (item[key] === value) result = index;
        }
    });
    return result;
};

console.log(indexOf(demoArray, true, `completed`));
console.log(indexOf(demoArray, 10, `id`));