"use strict";
function subtractTwoNumbers(n1, n2) {
    return n1 - n2;
}
function divisionTwoNumbers(n1, n2) {
    return n1 / n2;
}
function doubleOfNumber(n1) {
    return n1 * 2;
}
function average(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
const number1 = 4;
const number2 = 2;
const number3 = 0;
const sub = subtractTwoNumbers(number1, number2);
const div = divisionTwoNumbers(number1, number2);
const double = doubleOfNumber(number1);
const averageOfThreeNumbers = average(number1, number2, number3);
console.log(`números: ${number1} e ${number2}`);
console.log(`${number1} - ${number2} = ${sub}`);
console.log(`${number1} / ${number2} = ${div}`);
console.log(`dobro de ${number1} = ${double}`);
console.log(`media entre ${number1}, ${number2}, ${number3} = ${averageOfThreeNumbers}`);
