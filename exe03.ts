//O typescrit deduz o tipo das variaveis

let nome = 'vicente'

//não pode pois ele entende que nome é um número
nome = 5
const idade = 15

let maiorIdade = idade >= 18 ? true : "menor"

//nao pode pois maiorIdade deve ser boolean ou string
maiorIdade = 2

//objetos

const pessoa = {
    nome: '3',
    idade: 18
}

//nao pode pois pessoa.nome é implicitamente uma string
pessoa.nome = 5


//forma explicita de objetos
const pessoa2: {nome: string; idade: number} = {
    nome: 'vicente',
    idade: 15
}
