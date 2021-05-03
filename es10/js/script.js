
$(function(){
/*   Esercizio (array, oggetti, map, interpolazione delle stringhe)
  Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
  Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
  Es:
  [
	  { nome: ‘Mario’, cognome: ‘Rossi’, eta: 60 },
	  { nome: ‘Luigi’, cognome: ‘Verdi’, eta: 12 },
	  { nome: ‘Silvia’, cognome: ‘Neri’, eta: 25 },
  ]
  [
	‘Mario Rossi può guidare’,
	‘Luigi Verdi non può guidare’,
	‘Silvia Neri può guidare’,
  ] */

  const persone = [
    { nome: 'Mario', 
      cognome: 'Rossi', 
      eta: 60 
    },
	  { 
      nome: 'Luigi', 
      cognome: 'Verdi', 
      eta: 12 
    },
	  { 
      nome: 'Silvia', 
      cognome: 'Neri', 
      eta: 25 
    }
  ];

  //faccio un .map del array persone 
  const maggiorenni = persone.map((utente)=>{
    // destrutturo gli elementi del array per ricavarne gli valori di ogni proprietà
    let {nome, cognome, eta} = utente;
    // creo una condizione per la quale, se l'utente è maggiorenne allora può guidare altrimenti no
    if (eta >= 18) {
      return `${nome} ${cognome} può guidare.`
    } else {
      return `${nome} ${cognome} non può guidare.`
    }
  })
  console.log(maggiorenni);
})


  
