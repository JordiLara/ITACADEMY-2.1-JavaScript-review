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