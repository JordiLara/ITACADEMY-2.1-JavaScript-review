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

/* 1.3 - Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10. */

const numbers = [1, 10, 8, 11];
const bigOne = numbers.find(big);

function big (value) {
    return value > 10;
}

console.log(bigOne);

/* 1.4 - Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números. */

const nombres = [13, 7, 8, 21];

const suma = nombres.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(suma);

// 2 Estrelles 

/* 1.5 - Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

- Filtra els nombres majors o iguals a 10.

- Multiplica cada nombre filtrat per 2.

- Calcula la suma dels nombres filtrats i multiplicats per 2.

- La funció ha de retornar el resultat de la suma. */

const numsArray =  [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

const arrayTransform = numsArray.filter(value => value > 10).map(value => value * 2).reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(arrayTransform);