'use strict';

const newOrder = orders.find(order =>
    order.items.some(item => item.sku === "B2")
);

console.log(newOrder);