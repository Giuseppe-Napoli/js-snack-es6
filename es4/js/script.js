/* Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole:
il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
la media punti fatti per partita deve essere compresa tra 0 e 50
la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100 */

///////ESERCIZIO RIFATTO DA ZERO DOPO LA SPIEGAZIONE CON ES6 /////

const squadra = [
  {
    name: 'Giuseppe'
  },
  {
    name: 'Giovanni'
  },
  {
    name: 'Luca'
  },
  {
    name: 'Paolo'
  },
  {
    name: 'Umberto'
  },
];



const numberRandom = (min,max) =>  Math.floor(Math.random() * (max - min + 1)) + min;


function generatoreLettere (){
  
  let code = "";
  let lettere = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
  
  while(code.length < 3){
    code = code + lettere[numberRandom(0,lettere.length-1)];
  }
  code = code + numberRandom(100,999);
  
  return code;
}
//console.log(generatoreLettere());


for( let player of squadra){
    player.id = generatoreLettere(),
    player.media = numberRandom (0,50),
    player.percentuale = numberRandom (0,100)
}
console.log(squadra);