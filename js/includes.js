'use strict';

/**
 * Checks whether a given array contains the specified value.
 *
 * Performs a strict equality comparison (`===`) between each element of the array
 * and the provided value. If at least one match is found, the function returns `true`.
 * If no match is found, it returns `false`.
 *
 * @param {Array} arr - The array to search in.
 * @param {*} key - The value to search for inside the array.
 * @returns {boolean} `true` if the value is found, otherwise `false`.
 */
const includes = (arr, key) => {
    if (!validate(arr, key)) return false;

    for (const arrElement of arr) {
        if (arrElement === key) return true;
    }
    return false;
};

console.log(includes(demoArray, demoArray[0]));
console.log(includes(demoArray, { id: 1 }));
