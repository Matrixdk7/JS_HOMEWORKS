'use strict';

const price = +prompt(`Enter the price of the product`);
if (isNaN(price) || price < 0) {
    alert(`Input error`)
} else {
    const discount = +prompt(`Enter the discount amount as a percentage`);
    if (isNaN(discount) || discount < 0) {
        alert(`Input error`)
    } else {
        const discPrice = (price - (price * discount/100));
        alert(`Starting price: ${price}$, discount: ${discount}%. Discounted price: ${discPrice}$.`);
    }
}