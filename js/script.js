'use strict';

/**
 * Flattens a multidimensional array into a new one-dimensional array.
 *
 * @param {Array} arr The array to flatten. Can contain nested arrays of any depth.
 * @returns {Array} A new flattened array.
 * @throws {Error} Throws an error if more than one argument is passed to the function.
 */
function myFlat(arr) {
    if (arguments.length > 1) throw new Error('Function accepts only 1 argument, too much arguments provided');

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const arrResult = myFlat(arr[i]);
            result.push(...arrResult);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(myFlat([1, [2, [3, 4]], 5]));