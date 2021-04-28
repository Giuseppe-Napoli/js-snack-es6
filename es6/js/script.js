/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */


let lettere = ["A","B"];
let numeri = [1,2,3,4,5]




const numberRandom = (min,max) =>  Math.floor(Math.random() * (max - min + 1)) + min;

function generatoreLettere (){
  let code = "";
  let lettere = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

  code = code + lettere[numberRandom(0,lettere.length-1)];
  return code;
}

while (numeri.length != lettere.length){

  if(numeri.length<lettere.length){
    numeri.push(numberRandom(1,9))
  }else{
    lettere.push(generatoreLettere ())
  }
}
console.log(lettere.sort());