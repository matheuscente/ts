//types

//São uma maneira de construir um novo tipo
//conversão: primeira letra em maiúscula
//pode ser de mais de um tipo

type Administradores = "vicente" | "joão"
type Administrador = {
    nome: string;
    idade: number
}

const adm: Administrador = {
    nome: 'vicente',
    idade: 15
}

const admName: Administradores = 'vicente'

//interfaces
//são semelhantes aos types, usaremos mais que os types mais pra frente, principalmente com objetos

interface Convidado {
    nome: string;
    idade: number
}

const usuario: Convidado = {
    nome: 'vicente',
    idade: 15
}

//fazendo de uma forma diferente!!
type Role = 'guest' | 'admin'
interface Pessoa {
    nome: string,
    idade: number,
    regra: Role
}

const newUser: Pessoa = {
    nome: 'vicente',
    idade: 15,
    regra: 'admin'
}
