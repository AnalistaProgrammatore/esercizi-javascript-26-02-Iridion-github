/*
7) Scrivere nel file `reduce.js` la funzione `reduceBase` che preso in input un'array,
una funzione di callback e un parametro opzionale di inizializzazione dell'accumulatore ri-produca
il comportamento del metodo `Array.reduce`.
Scrivere la funzione solamente in versione imperativa cioè "Come è fatta?"
*/

const reduceBase = (arr, func, start) => {
  let copy = start ? [start, ...arr] : [...arr]
  let accumulator = start ? start : copy[0]
  copy = copy.slice(1, copy.length)
  return copy.length > 1 ? func(accumulator, reduceBase(copy, func)) : func(accumulator, copy[0])
}

console.log('normal sum reduce returns:', [1, 2, 3, 4, 5].reduce((acc, cur) => acc + cur))
console.log('reduceBase with sum function returns:', reduceBase([1, 2, 3, 4, 5], (acc, cur) => acc + cur))
console.log('normal factor reduce returns:', [1, 2, 3, 4, 5].reduce((acc, cur) => acc * cur))
console.log('reduceBase with factor function returns:', reduceBase([1, 2, 3, 4, 5], (acc, cur) => acc * cur))
//Not truly identical yet: for example setting [] as start value returns: 12345, through normal reduce; but with the same start value reduceBase returns: 15
