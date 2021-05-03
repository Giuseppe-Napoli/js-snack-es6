//Crea un array composto da 10 oggetti che rappresentano un’automobile.
/* $(document).ready(function(){
}) */
$(function(){

  const automobili = [
    {
      marca: 'bmw',
      modello: 'serie 1',
      alimentazione: 'benzina'
    },
    {
      marca: 'mercedes',
      modello: 'classe A',
      alimentazione: 'benzina'
    },
    {
      marca: 'audi',
      modello: 'A3',
      alimentazione: 'diesel'
    },
    {
      marca: 'ford',
      modello: 'fiesta',
      alimentazione: 'elettrico'
    },
    {
      marca: 'lancia',
      modello: 'y',
      alimentazione: ' gpl'
    },
    {
      marca: 'opel',
      modello: 'corsa',
      alimentazione: 'benzina'
    },
    {
      marca: 'pegeout',
      modello: '206',
      alimentazione: 'metano'
    },
    {
      marca: 'volkswagen',
      modello: 'golf',
      alimentazione: 'diesel'
    },
    {
      marca: 'toyota',
      modello: 'yaris',
      alimentazione: 'elettrico'
    },
    {
      marca: 'seat',
      modello: 'ibiza',
      alimentazione: ' gpl'
    },
  ];
  
  //Dividi le automobili in 3 array separati: inserisci nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
  
  const benzina = automobili.filter((auto) => auto.alimentazione === 'benzina');
  
  const diesel = automobili.filter((auto) => auto.alimentazione === 'diesel');
  
  const altreAuto = automobili.filter((auto) => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel');

  let benzinaList = $('#benzina');
  let dieselList = $('#diesel');
  let varieList =  $('#varie');

  printCar(benzina, benzinaList);
  printCar(diesel, dieselList);
  printCar(altreAuto, varieList);


  function printCar(arr, target){
    arr.forEach((car)=>{
      let {marca,modello,alimentazione} = car;
  
      let html =
       `
      <li>
        Marca: ${marca} <br>
        Modello: ${modello} <br>
        Alimentazione: ${alimentazione} 
      </li>
      <br>
      `
      target.append(html)
    })
  }
})


  
