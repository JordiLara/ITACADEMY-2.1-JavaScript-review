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
