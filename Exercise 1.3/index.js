"use strict";

/* 1.1 - Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.*/

function processar (nombre, callbackOne) {
    callbackOne(nombre);
}

function callbackOne (nombre) {
    console.log('El nombre es ' + nombre);
}
processar(23, callbackOne);

/* 1.2 - Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres. */

function calculadora (num1, num2, callbackTwo) {
    callbackTwo(num1, num2);
}

function callbackTwo (num1, num2) {
    console.log(`La suma de ${num1} i ${num2} es `, num1 + num2);
}
calculadora(2, 3, callbackTwo);

/* 1.3 - Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.*/

function esperarISaludar(nom, callback) {
    setTimeout(function(){
      callback(nom);
    }, 2000); 
  }
  
// Exemple:
 
esperarISaludar('Don José', function(nomSaludo){
console.log('Hola ' + nomSaludo)
});

// 2 Estrellas

/* 1.4 - Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array. */

function processarElements(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function myArray(element) {
    console.log('Processing element: ' + element);
}

const array = ['pato', 'perro', 'mono', 'gato', 'pez'];
processarElements(array, myArray);