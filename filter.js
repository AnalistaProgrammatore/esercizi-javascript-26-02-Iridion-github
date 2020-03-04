/*
4) Scrivere nel file `filter.js` le funzioni `filterBase` e `filterReduce` che presi in input un array e una funzione di callback
ri-producano il comporamento del metodo `Array.filter` di Javascript.
   - la versione `filterBase` deve essere implementata in modo imperativo "Come è fatta?"
   - la versione `filterReduce` deve implementare la funzione utilizzando il metodo `Array.reduce`
*/

//Human Version, for loop
const filterBase = (arr, func, result = []) => {
   for (let x = 0; x < arr.length; x++) {
      if (func(arr[x])) {
         result = result.concat(arr[x])
      }
   }
   return result
}
console.log('filterBase call returns:', filterBase([1, 2, 3, 4, 5], x => x !== 4)) //[1,2,3,5]

//Marcoski's Version: his favourite, a recursive oneliner, aw yeah baby. Absolutely leggibile, boyz.
const filterBaseMonster = (arr, func, result = [], cycle = 0) => cycle < arr.length ? func(arr[cycle]) ? filterBaseMonster(arr, func, [...result, arr[cycle]], cycle + 1) : filterBaseMonster(arr, func, result, cycle + 1) : result
console.log('filterBaseMonster call returns:', filterBaseMonster([1, 2, 3, 4, 5], x => x !== 4))//[1,2,3,5]

//Reduce Version. Probabilmente ricominciando da zero ci metterei un botto a riscriverla, il reduce ed io non andiamo minimamente d'accordo.
const reduce = (arr, func, start = []) => {
   let cur = start
   for (let x = 0; x < arr.length; x++) {
      cur = func(cur, arr[x])
   }
   return cur
}

const filterReduce = (oldArr, testFunc) => {
   const execFunc = (newArr, x) => {
      if (testFunc(x)) newArr.push(x)
      return newArr
   }
   return reduce(oldArr, execFunc)
}

console.log('filterReduce call returns:', filterReduce([1, 2, 3, 4, 5], x => x !== 4)) //[1,2,3,5]

//Simpler Version, dopo averci dormito sopra. Era MOLTO piú semplice senza ricorsione, che cazzo avevo in mente ieri?
const filterReduceLoop = (arr, filterFunc) => {
   let result = []
   for (let x = 0; x < arr.length; x++) {
      if (filterFunc(arr[x])) result.push(arr[x])
   }
   return result
}

console.log('filterReduceLoop call returns:', filterReduce([1, 2, 3, 4, 5], x => x !== 4)) //[1,2,3,5]



