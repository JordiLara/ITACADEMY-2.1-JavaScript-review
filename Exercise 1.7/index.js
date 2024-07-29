"use strict";

/* 1.1 - Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'. */

const delayMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hola, món');
        }, 2000);
    });
};
    
delayMessage()
.then((message) => console.log(message));


/* 1.2 - Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola. */

const delayMessage1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hola, món');
        }, 2000);
    });
};
    
delayMessage1()
.then((message) => console.log(message));

