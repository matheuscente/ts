"use strict";
function borderAndColorUpdate(element) {
    element.style.borderColor = 'black';
    element.style.color = 'yellow';
}
const elementsList = document.querySelectorAll('.link');
console.log(elementsList);
elementsList.forEach((item) => {
    if (item instanceof HTMLElement) {
        if (item.tagName === 'A') {
            item.style.margin = '2rem';
        }
        borderAndColorUpdate(item);
    }
});
