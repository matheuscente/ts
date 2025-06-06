
/*
typeof com union de tipos primitivos
Crie uma função formatValue que aceita string | number e:

retorna a string em caixa alta se for string;

retorna o número com duas casas decimais se for number.
*/
console.log('exercicio 1')

function formatValue(data: string|number): string|number {
    if(typeof data === 'string') {
        return data.toUpperCase()
    } 
    return data.toFixed(2)
}

console.log(formatValue(5))
console.log(formatValue('vicente'))

console.log('\n')

/*
in para distinguir objetos com propriedades diferentes
Crie dois tipos: EmailUser = { email: string } e PhoneUser = { phone: string }.
Depois, escreva uma função getContactInfo(user) que retorne o e-mail ou telefone.
*/
console.log('exercicio 2')

type EmailUser = {
    email: string
}

type PhoneUser = {
    phone: string
}

type User = {
    nome: string,
    contact: PhoneUser | EmailUser
}

function getContactInfo(user: User)  {
    if('email' in user.contact) {
        return user.contact.email
    } else if('phone' in user.contact) {
        return user.contact.phone
    }
}

const user: User = {
    nome: 'cente',
    contact: {
        phone: '4444'
    }
}
const user2: User = {
    nome: 'pedro',
    contact: {
        email: "teste@teste"
    }
}

console.log(getContactInfo(user))
console.log(getContactInfo(user2))



console.log('\n')

/*
Defina type Dog = { bark: () => void } e type Cat = { meow: () => void }.
Crie a função isDog(pet): pet is Dog e use em interactWithPet(pet).
*/
console.log('exercicio 3')
type Dog = { 
    bark: () => string
 }
type Cat = {
    meow: () => string 
}
function isDog(animal: Pet): animal is Dog {
    if('bark' in animal) {
        return true
    }
    return false
}

function isCat(animal: Pet): animal is Cat {
    if('meow' in animal) {
        return true
    }
    return false
}

function interactWithPet(pet: Pet): void {
    if(isCat(pet)) console.log(pet.meow())
    else if(isDog(pet)) console.log(pet.bark())
}

type Pet = Dog | Cat

const gato: Cat = {
    meow() {
        return 'miau'
    }
}

interactWithPet(gato)

console.log('\n')








