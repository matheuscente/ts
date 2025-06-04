"use strict";
function arrayOrLike(item) {
    if (item instanceof Array) {
        return true;
    }
    return false;
}
const itens = document.querySelectorAll('.link');
console.log(arrayOrLike(itens));
const arrayFromItens = Array.from(itens);
console.log(arrayOrLike(arrayFromItens));
