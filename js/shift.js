'use strict';

/**
 * Removes the first element from the array and returns it.
 * Shifts all remaining elements one position to the left.
 * Modifies the original array.
 *
 * @param {Array} arr - The array from which the first element will be removed.
 * @returns {*} The removed first element, or `undefined` if the array is empty.
 */
const shift = (arr) => {
    if (arr.length === 0) return undefined;

    const removedElement = arr[0];

    for (let i = 0; i < arr.length - 1; i += 1) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return removedElement;
}

console.log(shift(arr));
console.log(arr);