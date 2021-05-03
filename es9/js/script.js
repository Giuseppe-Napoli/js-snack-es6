
$(function(){
/*   Esercizio (array, oggetti, filter)
  Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
  [
	{ nome: 'leone’, famiglia: 'felidi’, classe: 'mammiferi’ },
	{ nome: 'cane’, ’famiglia: 'canidi’, classe: 'mammiferi’ },
	{ nome: 'gallina’, famiglia: 'fasianidi’, classe: 'uccelli’ },
  ]
  Crea un nuovo array con la lista dei mammiferi. */

  const animali = [
    { nome: 'leone',
      famiglia: 'felidi', 
      classe: 'mammiferi' 
    },

    { nome: 'cane', 
      famiglia: 'canidi',
      classe: 'mammiferi' 
    },

    { nome: 'gallina',
      famiglia: 'fasianidi', 
      classe: 'uccelli' 
    }
  ]

 // devo creare un array che mi filtri i mammiferi del array 'animali' per sapere quali sono i mammiferi, quale miglior modo se non un .filter?
  const mammiferi = animali.filter((animale)=> animale.classe === 'mammiferi');
  console.log('Gli animali mammiferi sono: ',mammiferi);
})


  
