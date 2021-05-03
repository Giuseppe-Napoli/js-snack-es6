
$(function(){
/*   Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
  A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
  Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

  const arrString = ['pippo', 'PLUTO', 'Paperino','Topolino','TOM','jerry']  
  
  const secondArray = arrString.map((element)=>{
    //.toLowerCase per trasformare gli elementi in minuscolo
    let low = element.toLowerCase()
    // ritorno la funzione citata sotto che trasofrma in maiuscolo la prima lettera di ogni parola
    return capitalizeFirstLetter(low)
  })
  console.log(secondArray); 
  
  

  function capitalizeFirstLetter(string) {
    //in questa funzione vado a prendere la prima lettera con .charAt la trasformo in maiuscola con .toUpperCase
    // e vado a sommare la restante parte della parola con .slice partendo pero dalla posizione 1
    return string.charAt(0).toUpperCase() +  string.slice(1);
    
  }

})


  
