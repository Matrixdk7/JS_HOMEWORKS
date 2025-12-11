'use strict';

/**
 * Проверяет, удовлетворяют ли ВСЕ элементы массива условию тестовой функции.
 * Останавливает проверку при первом элементе, который не проходит тест.
 *
 * @param {Array} arr - Массив для проверки.
 * @param {function(*, number, Array): boolean} test - Функция-предикат, вызываемая для каждого элемента.
 *        Должна вернуть `true`, если элемент соответствует условию, или `false` — если нет.
 *
 * @returns {boolean} Возвращает `true`, если все элементы прошли проверку, иначе `false`.
 */
const every = (arr, test) => {
    let result = true;

    iterate(arr, (item, i) => {
        if (!test(item, i, arr)) {
            result = false;
            return false;
        }
        return true;
    });

    return result;
};


console.log(every(demoArray, item => item.completed === false));
console.log(every(demoArray, item => item.userId === 1));