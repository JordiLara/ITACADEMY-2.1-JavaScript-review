"use strict";

/* 1.1 - Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.*/

function potConduir(edat) {
    return edat >= 18 ? 'Pots conduir' : 'No pots conduir'
};

console.log(potConduir(43));

/* 1.2 - Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.*/

let num1 = 18;
let num2 = 22;

const comparar = num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';

console.log(comparar);


