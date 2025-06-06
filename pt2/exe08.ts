
//neste exercício, aprendo function overload
//Assim o typescript sabe exatamente qual tipo de dado a função está retornando
function valueRounder(value: string): string
function valueRounder(value: number): number
function valueRounder(value: string | number): string | number {
    if(typeof value === 'string') {
        const toNumber = Number(value)
        if(isNaN(toNumber)) {
            return 'não é um número'
        }
        return Math.ceil(toNumber).toString()
    }

    return Math.ceil(value)
}

console.log(valueRounder(2.6))
console.log(valueRounder('2.6'))
console.log(valueRounder('2w.5'))