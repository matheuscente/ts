"use strict";
//array é uma lista de elementos do mesmo tipo
//o array abaixo é um array de números
const array = [];
array.push(2);
//console.log(array)
//tupla é um array que definimos o tipo do dado para uma posição específica.
const tuple = [1, 2, 'teste'];
//console.log(tuple)
//Um enum (abreviação de enumeration) é uma forma de nomear um conjunto de valores constantes, podendo ter valores numéricos ou string associados automaticamente ou definidos manualmente.
//definidos manualmente
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["ter\u00E7a"] = 2] = "ter\u00E7a";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
//associados automaticamente
var diasManual;
(function (diasManual) {
    diasManual[diasManual["domingo"] = 0] = "domingo";
    diasManual[diasManual["segunda"] = 1] = "segunda";
    diasManual[diasManual["ter\u00E7a"] = 2] = "ter\u00E7a";
    diasManual[diasManual["quarta"] = 3] = "quarta";
    diasManual[diasManual["quinta"] = 4] = "quinta";
    diasManual[diasManual["sexta"] = 5] = "sexta";
    diasManual[diasManual["sabado"] = 6] = "sabado";
})(diasManual || (diasManual = {}));
//Enums podem ser iterados, mas não são coleções ordenadas no mesmo sentido que uma lista.
//Enums com valores numéricos têm um mapeamento reverso (de valor para nome).
var userType;
(function (userType) {
    userType["admin"] = "admin";
    userType["guest"] = "guest";
})(userType || (userType = {}));
const user = {
    nome: "vicente",
    role: userType.admin
};
console.log(user);
