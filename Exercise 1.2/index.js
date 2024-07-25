"use strict";

/* 1.1 - Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.*/

function potConduir(edat) {
    return edat >= 18 ? 'Pots conduir' : 'No pots conduir'
}

console.log(potConduir(43));

/* 1.2 - Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.*/

let num1 = 18;
let num2 = 22;

const comparar = num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';
console.log(comparar);

// 2 Estrellas

/* 1.3 - Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim. */

let num = -23;

const checkNum = num > 0 ? 'positiu' : num < 0 ? 'negatiu' : 'zero';
console.log(checkNum);

const trobarMaxim = (a, b, c) => {
    const maxim = a > b ? (a > c ? a : c) : (b > c ? b : c);
    return maxim;
};
console.log(trobarMaxim(11, 22, 33));

// 3 Estrellas

/* 1.4 - Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell. */

const parOImpar = (numeros) => {
    
    for (let i = 0; i < numeros.length; i++) {
        const averiguaNumeros = numeros[i] % 2 === 0 ? 'par' : 'impar';
        console.log(averiguaNumeros);
    }
};

const numeros = [11, 22, 33, 44, 55, 66, 77, 88, 99];
parOImpar(numeros);