"use strict";

/* 1.1 - forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara']; */

let noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(myFunction);
 
function myFunction(item, index) {
  console.log ( index + ": " + item); 
}
