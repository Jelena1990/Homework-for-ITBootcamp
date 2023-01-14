//Napraviti niz od barem tri knjige
//Napraviti sledeće funkicje kojima se prosleđuje niz knjiga: /*


import { Knjiga } from "./knjiga.js";

let knjiga1 = new Knjiga("Put", "Kormak Makarti",2016, 259, 799);
let knjiga2 = new Knjiga("Kradljivica knjiga", "Mark Zusak",2008, 533, 1099);
let knjiga3 = new Knjiga("San u crvenom paviljonu", "Cao Hsuecin",1791, 2500, 8500);
let knjiga4 = new Knjiga("Mali princ", "Antoan de Sent Egziperi",2016, 112, 499);

let knjige = [knjiga1, knjiga2, knjiga3, knjiga4];

//Ispisati sve autore kojima je ime dugačko.

for(let i = 0; i< knjige.length; i++){
  if(knjige[i].dugackoIme() == true){
   console.log( knjige[i].autor);
}
 }

//Ispisati sve one knjige koje su istovremeno i skupe i obimne.
for(let i = 0; i< knjige.length; i++){
  if(knjige[i].skupa() == true && knjige[i].obimna() == true){
   console.log( knjige[i]);
}
 }

//ukupnaCena - Određuje i vraća koliko ukupno koštaju sve knjge u nizu knjiga

let ukupnaCena = niz =>{
  let suma= 0;
  for(let i = 0; i < niz.length; i++){
    suma = suma + niz[i].cena;
  }
  return suma;
}

console.log(ukupnaCena(knjige));

//prosecnaCena - Određuje i vraća kolika je prosečna cena knjige

let prosecnaCena = niz =>{
  let cenaSvihKnjiga = ukupnaCena(niz);
  let brojilac = niz.length;
  let rezultat= cenaSvihKnjiga / brojilac;
  return rezultat;
}

console.log(prosecnaCena(knjige));

//prosecnaStranica - Određuje i vraća kolika je prosečna cena jedne stranice knjige 

let prosecnaStranica = niz =>{
  let cenaSvihKnjiga = ukupnaCena(niz);
  let ukupanBrojstrana = 0;
  for(let i = 0; i < niz.length; i++){
    ukupanBrojstrana = ukupanBrojstrana + niz[i].brojStrana;
  }
  return cenaSvihKnjiga / ukupanBrojstrana;
}

console.log(prosecnaStranica(knjige));