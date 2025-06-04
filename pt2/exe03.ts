function arrayOrLike(item: any): boolean {
    if(item instanceof Array) {
        return true
    }
    return false
}

const itens: NodeListOf<Element> = document.querySelectorAll('.link')

console.log(arrayOrLike(itens))

const arrayFromItens: Array<Element> = Array.from(itens)

console.log(arrayOrLike(arrayFromItens))
