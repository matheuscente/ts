function setText<t> (item: t) {
    if(item instanceof HTMLElement) {
        item.innerText = 'este é meu texto'
    } else {
        console.log('este não é um elemento html')
    }
}

const btn = document.querySelectorAll('.link')[2]

setText<Element> (btn)

setText<string> ('aoba')