# EserciziJavascript 2602

## NOTE DI SVOLGIMENTO
le funzioni di callback degli esercizi 3, 4, 5, 7 possono limitarsi a ricevere in input solamente l'elemento corrente dell'array e l'indice dell'elemento corrente dell'array

### ESERCIZI

1. Svolgere nel file `range.js` l'esercizio "Sum of a Range". La generazione del range deve avvenire utilizzando la funzione `Array.from` prevedendo anche la possibilità di generare range con step diversi. La funzione `range` che genererà l'array deve essere scritta in due versioni:
  - La prima versione deve usare i parametri posizionali `start, stop, step` con valori di default scelti a piacere
  - La seconda versione deve usare anzichè i posizionali, i parametri nominali con valori di default come quelli del punto 1
  - Il chaining dei metodi è una tecnica di programmazione per cui dato l'output di un metodo di un oggetto se questa ritorna un oggetto di uno stesso tipo, la chiamata ad un metodo successivo può essere concatenata al seguente.
  Ad esempio
  ```
  const A = [1, 2, 3, 4, 5, 6, 7, 8] 
  const evenSummed = A.map(x => x * 2).filter(x => x %2)
  ```
  ritorna un array di numeri pari precedentemente moltiplicati per 2.
  Utilizzare lo stesso metodo per concatenare la funzione range con la reduce che applica la somma al range

2. Scrivere nel file `generator.js` una funzione che dato un numero indefinito di parametri generi un array contenente il valore dei parametri passato in input alla funzione

3. Scrivere nel file `some.js` le funzioni `someBase` e `someReduce` che presi in input un array e una funzione di callback ri-producano il comporamento dell metodo `Array.some` di Javascript
   - la versione `someBase` deve essere implementata in modo imperativo "Come è fatta?"
   - la versione `someReduce` deve implementare la funzione utilizzando il metodo `Array.reduce`
   
4. Scrivere nel file `filter.js` le funzioni `filterBase` e `filterReduce` che presi in input un array e una funzione di callback ri-producano il comporamento dell metodo `Array.filter` di Javascript
   - la versione `filterBase` deve essere implementata in modo imperativo "Come è fatta?"
   - la versione `filterReduce` deve implementare la funzione utilizzando il metodo `Array.reduce`
   
5. Scrivere nel file `every.js` le funzioni `everyBase` e `everyReduce` che presi in input un array e una funzione di callback ri-producano il comporamento dell metodo `Array.every` di Javascript
   - la versione `everyBase` deve essere implementata in modo imperativo "Come è fatta?"
   - la versione `everyReduce` deve implementare la funzione utilizzando il metodo `Array.reduce`
   
6. Svolgere nel file `list.js` l'esercizio 3 del capitolo 4 di eloquentJS "A list"

7. Scrivere nel file `reduce.js` la funzione `reduceBase` che preso in input un'array, una funzione di callback e un parametro opzionale di inizializzazione dell'accumulatore ri-produca il comportamento del metoto `Array.reduce`. Scrivere la funzione solamente in versione imperativa cioè "Come è fatta?"
