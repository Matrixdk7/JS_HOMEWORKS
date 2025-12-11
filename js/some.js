'use strict';

/**
 * Проверяет, удовлетворяет ли ХОТЯ БЫ ОДИН элемент массива условию тестовой функции.
 * Останавливает перебор при первом элементе, который проходит тест.
 *
 * @param {Array} arr - Массив для проверки.
 * @param {function(*, number, Array): boolean} test - Функция-предикат, вызываемая для каждого элемента.
 *        Должна вернуть `true`, если элемент удовлетворяет условию, или `false` — если нет.
 *
 * @returns {boolean} Возвращает `true`, если хотя бы один элемент прошёл проверку, иначе `false`.
 */
const some = (arr, test) => {
    let result = false;

    iterate(arr, (item, i) => {
        if (test(item, i, arr)) {
            result = true;
            return false;
        }
        return true;
    });

    return result;
};

console.log(some(demoArray, item => item.completed === true));
console.log(some(demoArray, item => item.id > 9));
