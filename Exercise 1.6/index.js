"use strict";

/* 1.1 - forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara']; */

let noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(myFunction);
 
function myFunction(item, index) {
  console.log ( index + ": " + item); 
}

/* 1.2 - for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara']; */

let noms1 = ['Anna', 'Bernat', 'Clara'];

for (let x of noms1) {
    console.log(x);
}

/* 1.3 - filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6]; */

let numeros = [1, 2, 3, 4, 5, 6];

const parells = numeros.filter(value => value % 2 === 0);

console.log(parells);

// 2 Estrelles

/* 1.4 - for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.*/

let obj = { 
    nom: 'Ona', 
    edat: 25, 
    ciutat: 'Barcelona' 
};

for (let clau in obj) {
    console.log(clau);
    console.log(obj[clau]);
  }