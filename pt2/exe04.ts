function borderAndColorUpdate(element: HTMLElement): void {
    element.style.borderColor = 'black'
    element.style.color = 'yellow'
}

const elementsList: NodeListOf<Element> = document.querySelectorAll('.link')
console.log(elementsList)

elementsList.forEach((item: Element) => {
    if(item instanceof HTMLElement) {
            if(item.tagName === 'A') {
                item.style.margin = '2rem'
            }
        borderAndColorUpdate(item)
    }

})