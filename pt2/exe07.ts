import * as module06 from "./exe06";


//aqui garanto que a interface só poderá receber itens que sejam iUser ou herdem da interface
interface iDatabase<T extends module06.iUser> {
    getAll(): T[],
    setItem(item: T): void
}

//aqui defino que T extende iUser, satisfazendo a interface iDatabase
//se tirar o extends, o ts apostará erro
class Database<T extends module06.iUser> implements iDatabase<T> {
    private db: Array<T>
    constructor() {
        this.db = [];
    }

    getAll(): T[] {
        return this.db
    }

    setItem(item: T): void {
        this.db.push(item)
}
}

const prodduct1: module06.iProduct = {
    name: 'tv',
    price: 937,
    type: module06.productType.eletronic
}

const user1: module06.iUser = {
    name: 'ketlyn',
    email: 'ppvz@',
    age: 25
}

const userdb = new Database<module06.iUser>()

userdb.setItem(user1)

console.log(userdb.getAll())
