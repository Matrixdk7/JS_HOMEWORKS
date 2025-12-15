'use strict';

/**
 * Reverses the elements of the array in place.
 * The first element becomes the last, and the last becomes the first.
 * Modifies the original array.
 *
 * @param {Array} arr - The array to reverse.
 * @returns {Array} The same array, reversed.
 */
const reverse = (arr) => {
    let first = 0;
    let last = arr.length - 1;

    while (first < last) {
        const temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        first += 1;
        last -= 1;
    }

    return arr;
};

console.log(reverse(arr));