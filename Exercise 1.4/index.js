"use strict";

/* 1.1 - Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2. */

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const array3 = [...array1, ...array2];

console.log(array3);

