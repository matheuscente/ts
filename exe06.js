"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function data(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    });
}
function showInDom(data) {
    return document.body.innerHTML = `
    <div>
    <p>nome: ${data.nome}</p>
    <p>preco: ${data.preco}</p>
    <p>descricao: ${data.descricao}</p>
    <p>garantia: ${data.garantia}</p>
    <p>Possui seguro?: ${data.seguroAcidentes === true ? 'sim' : 'não'}</p>
    <p>Nome da fabricante: ${data.empresaFabricante.nome}</p>
    </div>
    `;
}
data('https://api.origamid.dev/json/notebook.json').then(data => {
    showInDom(data);
});
