let Sportisti = (resolve, reject)  =>{
    //1.
    let request = new XMLHttpRequest();   
    //2.
    request.open("GET", "../json/sportisti.json"); 
    //3.
    request.send();  

    request.addEventListener("readystatechange", ()  =>{ 
    
        if (request.readyState === 4 && request.status ===200) {  
          let data =JSON.parse(request.responseText);
            resolve(data)
        }
        else if (request.readyState === 4) {
            reject("Desila se greska");
        }
    })  
}

 let ispisKonzola = poruka => {
  console.log(poruka);
 }

let visina = niz =>{
  let suma = 0;
  let brojilac = 0;
  for(let i = 0; i < niz.length; i++){
    suma = suma + niz[i].visina;
    brojilac= brojilac + 1;
  }
   console.log(suma/brojilac);
}
Sportisti(visina, ispisKonzola);

let najmanjeTransfera = niz =>{
  let najmanje = niz[0];
  let ime = niz[0].imePrezime;
  for(let i = 1; i < niz.length; i++){
    let sportista = niz[i];
    if(sportista.timovi.length < najmanje.timovi.length){
      najmanje = sportista.timovi.length
      ime = sportista.imePrezime;
    }
  }
  console.log(ime);
}
Sportisti(najmanjeTransfera, ispisKonzola);

let timovi = (niz) => {

 for( let i = 0; i < niz.length; i++){
    let sportista = niz[i];
    let timovi = sportista.timovi;
    for(let j = 0; j < timovi.length; j++){
        if(timovi[j]== ("Los Angeles Lakers")){
          console.log(niz[i].imePrezime)
        }
    }
 }
}
Sportisti(timovi, ispisKonzola);