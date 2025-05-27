function subtractTwoNumbers(n1: number, n2: number): number {
    return n1 - n2
}

function divisionTwoNumbers(n1: number, n2: number): number {
    return n1 / n2
}

function doubleOfNumber(n1: number): number {
    return n1 * 2
}

function average(n1: number, n2: number, n3: number): number {
    return (n1 + n2 + n3) / 3
}

const number1: number = 4
const number2: number = 2
const number3: number = 0

const sub: number = subtractTwoNumbers(number1, number2)
const div: number = divisionTwoNumbers(number1, number2)
const double: number = doubleOfNumber(number1)
const averageOfThreeNumbers: number = average(number1, number2, number3)

console.log(`números: ${number1} e ${number2}`)
console.log(`${number1} - ${number2} = ${sub}`)
console.log(`${number1} / ${number2} = ${div}`)
console.log(`dobro de ${number1} = ${double}`)
console.log(`media entre ${number1}, ${number2}, ${number3} = ${averageOfThreeNumbers}`)