"use strict";

/* 1.1 - Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.*/

let a = 7;
let b = 3;

/*function add (a, b) { 
    return a + b;
}
*/

let add = (a, b) => a + b; 

console.log(add(a, b));

/* 1.2 - Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.*/

let randomNumber = () => Math.floor(Math.random() * 100); // genera un número aleatori entre 0 i 100.

console.log(randomNumber());

/* 1.3 - Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.*/

class Person { // Crea classe Person

    constructor(name) { 
        this.name = name; // Propietat name
    }

    greet = () => { // Funció fletxa anomenada greet
        console.log(`Hola, `+ this.name);
    }
}

const personOne = new Person(`Pepito`);
personOne.greet(); /* Crida a la funció greet i imprimeix la salutació de la propietat name a la nova persona, que inclou el seu nom.*/



