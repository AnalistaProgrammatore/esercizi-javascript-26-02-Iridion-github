/*
5) Scrivere nel file `every.js` le funzioni `everyBase` e `everyReduce` che presi in input un array e una funzione di callback
ri-producano il comporamento dell metodo `Array.every` di Javascript.
   - la versione `everyBase` deve essere implementata in modo imperativo "Come è fatta?"
   - la versione `everyReduce` deve implementare la funzione utilizzando il metodo `Array.reduce`
*/

//Normal Version
const everyBase = (arr, func, results = [], limiter) => {
   limiter = limiter ? limiter : arr.length
   let result = func(arr[arr.length - 1])
   results.push(result)
   let shortened = arr.slice(0, -1)
   return shortened.length > 0 ? everyBase(shortened, func, results) : !results.includes(false)
}

console.log('everyBase false call returns', everyBase([1, 2, 3, 4, 5], x => x % 4 === 0)) //false
console.log('everyBase true call returns', everyBase([4, 8, 12, 16, 20], x => x % 4 === 0)) //true


//Reduce Version
const everyReduce = (arr, func) => arr.reduce(func)
console.log('everyReduce false call returns:', everyReduce([1, 2, 3, 4, 5], (acc, cur) => acc === false ? false : cur % 4 === 0)) //false
console.log('everyReduce true call returns:', everyReduce([4, 8, 12, 16, 20], (acc, cur) => acc === false ? false : cur % 4 === 0)) //true