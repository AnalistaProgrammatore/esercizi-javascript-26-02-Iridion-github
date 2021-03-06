/**
* 1) Scrivere qui il codice dell'esercizio 1 del capitolo 4 di eloquentJS.
----------------------------------------------------------------------
Svolgere nel file `range.js` l'esercizio "Sum of a Range".
La generazione del range deve avvenire utilizzando la funzione `Array.from` prevedendo anche la possibilità di generare range con step diversi.
La funzione `range` che genererà l'array deve essere scritta in due versioni:
  - La prima versione deve usare i parametri posizionali `start, stop, step` con valori di default scelti a piacere
  - La seconda versione deve usare anzichè i posizionali, i parametri nominali con valori di default come quelli del punto 1
  Il chaining dei metodi è una tecnica di programmazione per cui dato l'output di un metodo di un oggetto
  se questa ritorna un oggetto di uno stesso tipo, la chiamata ad un metodo successivo può essere concatenata al seguente.
    Ad esempio
    ```
    const A = [1, 2, 3, 4, 5, 6, 7, 8]
    const evenSummed = A.map(x => x * 2).filter(x => x %2)
    ```
  ritorna un array di numeri pari precedentemente moltiplicati per 2.
  Utilizzare lo stesso metodo per concatenare la funzione range con la reduce che applica la somma al range
**/

const range1 = (start, stop, step = 1) => Array.from({ length: Math.floor((stop - start) / step + 1) }, (x, i) => start + (step * i))
const sum1 = (arr) => arr.reduce((acc, cur) => acc + cur)
console.log('range1 call returns:', range1(10, 0, -2)) //[ 10, 8, 6, 4, 2, 0 ]
console.log('sum1 call returns:', sum1(range1(10, 0, -2))) //[ 10, 8, 6, 4, 2, 0 ]

const range2 = ({ start, stop, step = 1 } = {}) => Array.from({ length: Math.floor((stop - start) / step + 1) }, (x, i) => start + (step * i))
const sum2 = (arr) => arr.reduce((acc, cur) => acc + cur)
console.log('range2 call returns:', range2({ start: 10, stop: 0, step: -2 })) //[ 10, 8, 6, 4, 2, 0 ]
console.log('sum2 call returns:', sum2(range1(10, 0, -2))) //[ 10, 8, 6, 4, 2, 0 ]


