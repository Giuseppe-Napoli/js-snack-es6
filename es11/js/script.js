
$(function(){
/*   Esercizio (oggetti, array, forEach con splice oppure filter)
  Un oggetto rappresenta una finestra di un browser e contiene due campi: 
  un array di tab aperte
  un numero che indica l’indice della tab aperta nell’array:
  {
      “tab”: [“Facebook”, “GitHub”, “Gmail”],
      “activeTab”: 0
  }
  Il software deve guardare se c’è un social aperto ed eliminarlo dalle tab.
  Nel caso la tab fosse attiva, deve attivare la successiva. */

  const browser = [
    {
      'tab': ['Facebook', 'GitHub', 'Gmail'],
      'activeTab': 0
    }
  ]

  const social = ['Facebook','Twitter','Instagram','Tik-Tok','YouTube']

  browser.forEach((page)=>{
    let {tab} = page;
    let newtab = tab.filter((sociale) => !social.includes(sociale));
    console.log(newtab);
    page.tab = newtab;

  })
  
  console.log(browser);
})


  
