function setText(item) {
    if (item instanceof HTMLElement) {
        item.innerText = 'este é meu texto';
    }
    else {
        console.log('este não é um elemento html');
    }
}
var btn = document.querySelectorAll('.link')[2];
setText(btn);
setText('aoba');
