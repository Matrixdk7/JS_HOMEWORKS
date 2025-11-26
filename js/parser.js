'use strict';

const price1 = "120.50$";
const price2 = "UAH 999";
const height = "180cm";
const broken = "abc123";

// Возвращает число потому, что строка начинается с цифр, но parseInt не может выводить дробные значения после точки.
const price1Int = parseInt(price1);
const price1Float = parseFloat(price1);
console.log(`"120.50$" -> parseInt: ${price1Int}, parseFloat: ${price1Float}`);

// Возвращает NaN потому, что строка начинается с буквы. Встретив букву в строке полностью игнорирует дальнейшие символы.
const price2Int = parseInt(price2);
const price2Float = parseFloat(price2);
console.log(`"UAH 999" -> parseInt: ${price2Int}, parseFloat: ${price2Float}`);

// Аналогично первой строке
const heightInt = parseInt(height);
const heightFloat = parseFloat(height);
console.log(`"180cm" -> parseInt: ${heightInt}, parseFloat: ${heightFloat}`);

// Аналогично второй строке
const brokenInt = parseInt(broken);
const brokenFloat = parseInt(broken);
console.log(`"abc123" -> parseInt: ${brokenInt}, parseFloat: ${brokenFloat}`);