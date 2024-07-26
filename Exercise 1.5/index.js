"use strict";

/* 1.1 - Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número. */

const arrayNum = [1, 2, 3, 4];
const quadrat = arrayNum.map(potencia);

function potencia (value) {
    return value * value;
}

console.log(quadrat);

/* 1.2 - Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells. */

const numeros = [1, 2, 3, 4];
const parells = numeros.filter(par);

function par (value) {
    return value % 2 === 0;
}

console.log(parells);