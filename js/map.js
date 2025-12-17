'use strict';

let newProducts = products.map(product => {
    let newProduct = `${product.name}: ${product.price}`;
    if (product.inStock === false) {
        newProduct = newProduct + ` (out of stock)`;
    }
    return newProduct;
});

console.log(newProducts);