"use strict";

/* 1.1 - Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número. */

const arrayNum = [1, 2, 3, 4];
const quadrat = arrayNum.map(potencia);

function potencia (value) {
    return value * value;
}

console.log(quadrat);
