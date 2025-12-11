'use strict';

/**
 * Executes a provided callback function once for each element in the array.
 *
 * @param {Array} arr - Массив, элементы которого нужно перебрать.
 * @param {function(*, number, Array): void} callback - Функция, вызываемая для каждого элемента.
 *        Первый параметр — значение элемента,
 *        второй — его индекс,
 *        третий — исходный массив.
 */
const forEach = (arr, callback) => {
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index], index, arr);
    }
};

/**
 * Validates that the first argument is an array and,
 * if provided, that the key is a string.
 *
 * @param {*} arr - Значение, которое должно быть массивом.
 * @param {string} [key] - Необязательный ключ, который должен быть строкой.
 * @returns {boolean} true, если данные корректны; иначе false.
 */
const validate = (arr, key) => {
    if (!Array.isArray(arr)) return false;
    if (key !== undefined && typeof key !== 'string') return false;
    return true;
}

/**
 * Перебирает массив и вызывает callback для каждого элемента.
 * Позволяет остановить перебор досрочно, если callback вернёт `false`.
 *
 * @param {Array} arr - Массив, элементы которого нужно перебрать.
 * @param {function(*, number, Array): boolean} callback - Функция, вызываемая для каждого элемента.
 *        Должна вернуть `true`, чтобы продолжить перебор, или `false`, чтобы остановить его.
 *
 * @returns {void}
 */
const iterate = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const shouldContinue = callback(arr[i], i, arr);
        if (!shouldContinue) break;
    }
};