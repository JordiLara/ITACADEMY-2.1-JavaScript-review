"use strict";

/* 1.1 - Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2. */

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const array3 = [...array1, ...array2];

console.log(array3);

/* 1.2 - Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma. */

function suma(...args) { 
    console.log(args.reduce(function(accumulated, currentValue) {
        return accumulated + currentValue;
    }, 0));
}

suma(1, 3);
suma(1, 2, 3);

// 2 Estrellas

/* 1.3 - Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat. */

const objecte1 = {a : 1, b : 2, c : 3};
const objecte2 = {...objecte1, b : 5};

console.log(objecte1);
console.log(objecte2);

/* 1.4 - Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable. */

const array = [1, 2, 3, 4, 5];

let [variable1, variable2, ...variable3] = array;

console.log('variable 1: ' + variable1);
console.log('variable 2: ' + variable2);
console.log('variable 3: ' + variable3);

// 3 Estrellas

/* 1.5 - Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array. */

function myFunction(num1, num2, num3) {
    return num1 + num2 + num3;
}

const numeros = [1, 2, 3];
console.log(myFunction(...numeros));

