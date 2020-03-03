/*
2) Scrivere nel file `generator.js` una funzione che dato un numero indefinito di parametri generi
un array contenente il valore dei parametri passato in input alla funzione.
*/

const generator = (...params) => params
console.log(generator(["Cosa", "sarebbe", "questo"], "abominio", "di", { lastWord: "funzione" }))