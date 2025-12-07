'use strict';

const padStringValidator = (str, length, symbol, side) => {
    if (typeof str !== 'string') return `Incorrect string ${str}`;
    if (typeof length !== 'number') return `Incorrect length ${length}`;
    if (typeof symbol !== 'string' || symbol.length !== 1) return `Incorrect symbol ${symbol}`;
    if (side === undefined) {
        side = true;
    } else if (typeof side !== 'boolean') {
        return `Incorrect side ${side}`;
    }
    return { str, length, symbol, side };
}

const padString = (str, length, symbol, side) => {
    const validator = padStringValidator(str, length, symbol, side);
    if (typeof validator === 'string') return validator;
    const { str: validStr, length: validLength, symbol: validSymbol, side: validSide } = validator;
    if (validStr.length > validLength) {
        return validStr.substring(0, validLength);
    }
    const missing = validLength - validStr.length;
    let strokeResult = ``;
    for (let i = 0; i < missing; i += 1) {
        strokeResult = strokeResult + validSymbol;
    }
    if (validSide) {
        return validStr + strokeResult;
    } else {
        return strokeResult + validStr;
    }
}

const strResult = padString('hello', 8, '*');
const strResult2 = padString('hello', 6, '*', false);
console.log(strResult);
console.log(strResult2)