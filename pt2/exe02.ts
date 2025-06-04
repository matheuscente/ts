
//array é uma lista de elementos do mesmo tipo
//o array abaixo é um array de números
const array: number[] = []
array.push(2)



//console.log(array)

//tupla é um array que definimos o tipo do dado para uma posição específica.
const tuple: [number, number, string] = [1,2,'teste']

//console.log(tuple)


//Um enum (abreviação de enumeration) é uma forma de nomear um conjunto de valores constantes, podendo ter valores numéricos ou string associados automaticamente ou definidos manualmente.

//definidos manualmente
enum dias {
    domingo,
    segunda,
    terça,
    quarta,
    quinta,
    sexta,
    sabado
}

//associados automaticamente
enum diasManual {
    domingo = 0,
    segunda = 1,
    terça = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
}

//Enums podem ser iterados, mas não são coleções ordenadas no mesmo sentido que uma lista.
//Enums com valores numéricos têm um mapeamento reverso (de valor para nome).

enum userType {
    admin = "admin",
    guest = "guest"
}

interface user{
    nome: string,
    role: userType
}

const user1: user = {
    nome: "vicente",
    role: userType.admin
}

console.log(user1)




