'use strict';

const user = {
    name: 'John',
    age: 18,
    email: `email`,
    isSubscribed: true,
    balance: `777`,
    verified: `1`
}

let { name, age, email, isSubscribed, balance, verified } = user;
balance = Number(balance);
verified = Boolean(Number(verified));

const access = (age >= 18) && (verified) && (isSubscribed || balance > 0);

let accessRestricted = `Access approved`;
if (age < 18) {
    accessRestricted = `Access restricted due to age`;
}

// Результат зависит от проверки типов. True в первой переменной. False во второй из-за строгой проверки типа данных.
const ageAccess = (age == `18`);
const ageAccess2 = (age === `18`);

console.log(ageAccess);
console.log(ageAccess2);
console.log(access);
console.log(accessRestricted)

// Task 2

const order = {
    total: `950`,
    currency: `UAH`,
    isPaid: true,
    delivery: `yes`,
    priority: `1`
}

let { total, currency, isPaid, delivery, priority } = order;
delivery = (delivery === "yes");
priority = Boolean(Number(priority));

const totalSize = (Number(total) > 1000);
console.log(totalSize);

let deliveryDesc;
if (!isPaid) {
    deliveryDesc = `Order is not paid`;
} else if (totalSize && isPaid) {
    deliveryDesc = `High-value paid order`;
} else if (isPaid && delivery) {
    deliveryDesc = `Paid order with delivery`;
} else if (isPaid && !delivery) {
    deliveryDesc = `Paid order without delivery`;
}
if (Boolean(priority)) {
    deliveryDesc += " [PRIORITY]";
}
console.log(deliveryDesc);

// Результат аналогично первому заданию, зависит от проверки типов.
const totalVer = (total == Number(total));
const totalVer2 = (total === Number(total));
console.log(totalVer);
console.log(totalVer2);

// Task 2

const systemSettings = {
    darkMode: true,
    fontSize: `18`,
    language: `en`,
    betaAccess: `true`
}

let { darkMode, fontSize, language, betaAccess } = systemSettings;
fontSize = Number(fontSize);
betaAccess = (betaAccess === "true");

const isLargeFont  = (fontSize >= 18);
let systemSettingsMessage;
if (darkMode && isLargeFont) {
    systemSettingsMessage = `Dark mode + large font`;
} else if (darkMode) {
    systemSettingsMessage = `Dark mode`;
} else if (isLargeFont) {
    systemSettingsMessage = `Large font`;
} else {
    systemSettingsMessage = `Default settings`;
}
if (betaAccess) {
    systemSettingsMessage += ` (Beta tester)`;
}
console.log(systemSettingsMessage);


// Final task

const userAccess = access;
const orderAccess = isPaid || balance >= Number(total);
const systemAccess = fontSize > 12 && (language === "en" || language === "uk");
const finalAccess = userAccess && orderAccess && systemAccess;

let blockReason;
if (!userAccess) {
    blockReason = `User denied`;
} else if (!orderAccess) {
    blockReason = `Order not paid`;
} else if (!systemAccess) {
    blockReason = `Invalid system settings`;
}

if (finalAccess) {
    console.log(`Full access granted`);
} else {
    console.log(`Access denied`);
    console.log(blockReason);
}