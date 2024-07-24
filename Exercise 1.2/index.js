"use strict";

/* 1.1 - Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.*/

function potConduir(edat) {
    return edat >= 18 ? 'Pots conduir' : 'No pots conduir'
};

console.log(potConduir(43));

