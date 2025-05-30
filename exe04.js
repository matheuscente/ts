"use strict";
function toNumber(number) {
    if (typeof number === "number") {
        return number;
    }
    else if (typeof number === "string") {
        if (isNaN(Number(number))) {
            throw "if string, value must be a alphanumeric";
        }
        else {
            return Number(number);
        }
    }
    else {
        throw "value must be a number | string";
    }
}
console.log(toNumber("true"));
