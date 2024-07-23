"use strict";

// 1.1 - 1st. Exemple function add(a, b) {return a + b;}.

let a = 7;
let b = 3;

let add = (a, b) => a + b;

console.log(add(a, b));

// 1.2 - 2nd. Funció fletxa que retorni numero aleatori

let randomNumber = () => Math.floor(Math.random() * 100);

console.log(randomNumber());