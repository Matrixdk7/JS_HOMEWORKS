'use strict';

const hasPromoCode = true;
const cartTotal = 500;
const isBlackFriday = false;
const isDiscountApplied = (cartTotal >= 100 && hasPromoCode || isBlackFriday);
// Если сумма корзины нужна и для чёрной пятницы
//const isDiscountApplied = (cartTotal >= 100 && hasPromoCode) || (cartTotal >= 100 && isBlackFriday);
if (isDiscountApplied === true) {
    console.log('Discount applied');
} else {
    console.log('Discount not applied');
}