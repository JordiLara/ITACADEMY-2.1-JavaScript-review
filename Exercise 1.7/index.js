"use strict";

/* 1.1 - Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'. */

const delayMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hola, món');
        }, 2000);
    });
}
    
delayMessage()
.then((message) => console.log(message));


/* 1.2 - Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola. */

const delayMessage1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hola, món');
        }, 2000);
    });
}
    
delayMessage1()
.then((message) => console.log(message));

/* 1.3 - Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa. */

const delayMessage2 = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (message == 'Hola') {
                resolve('La promesa es aceptada. Hola!');
            } else {
                reject('La promesa ha sido rechazada.');
            }
        }, 2000);
    });
}

delayMessage2('Hello') // modificar aquí para que la promesa sea aceptada o rechazada.
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

/* 1.4 - Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola. */

async function funcionAsync() {
    let message = await delayMessage3();
    console.log(message);
}

const delayMessage3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hola, món');
        }, 2000);
    });
}

funcionAsync();

// 2 Estrelles

/* 1.5 - Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch. */

async function funcionAsync2(randomCondition) {

    try {
    let message = await delayMessage4(randomCondition);
        console.log(message);
    } catch (error) {
        console.log("se ha producido un error. ", error);
    }
}

const delayMessage4 = (randomCondition) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomCondition) {
                reject('Se produjo un error simulado');
            } else {
                resolve('Hola, món');
            }
        }, 2000);
    });
}

funcionAsync2(1 !== 1); // si la condición se cumple o no, pasará correctamente o dará error.

// 3 Estrelles 

/* 1.6 - Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola. */

const SayHiIn2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Se resuelve en 2 segundos')
    }, 2000);
});


const SayHiIn3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Se resuelve en 3 segundos')
    }, 3000);
});


Promise.all([SayHiIn2, SayHiIn3])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error(error);
    });