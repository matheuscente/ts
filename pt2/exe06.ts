export interface iApiResponse<T> {
    status: number,
    data: T
}

export interface iProduct {
    name: string,
    price: number,
    type: productType
}

export interface iPeople {
    name: string,
    age: number
}

export interface iUser extends iPeople {
    email: string
}


export enum productType {
    "book"= "book",
    "eletronic" = "eletronic",
    "clothes" = "clothes"
}

function returnData<T> (db:{}, itemType: string): T[] {
    return db[`${itemType}`]
}

function main(): void {
    const dataBase: {users: iUser[], products: iProduct[]} = {
    users: [],
    products: []
}



dataBase.users.push({name: 'vicente', email: "teste@teste", age: 23})
dataBase.products.push({name: 'redmi note 7', price: 1000, type: productType.eletronic})


    console.log(returnData<iUser>(dataBase, 'users'))

    console.log(returnData<iProduct>(dataBase, 'products'))
}



