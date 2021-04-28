/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */

let lettere = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
let min = parseInt(prompt('Inserisci un numero da 0 a ' + (lettere.length-2)))
let max = parseInt(prompt('Inserisci un numero da '+(min + 1)+' a' + (lettere.length-1)))
console.log(test (lettere,min,max));



function test (arr,min,max){
  const arrReturn = [];
  for(let i in lettere){
    if(i >= min && i<= max){
      arrReturn.push(arr[i])
    }
  }

  return arrReturn
}
