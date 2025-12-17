'use strict';

let newTx = tx.reduce((acc, transaction) => {
    const category = transaction.category;
    if (acc[category]) {
        acc[category] += transaction.amount;
    } else {
        acc[category] = transaction.amount;
    }
    return acc;
},{})

console.log(newTx);