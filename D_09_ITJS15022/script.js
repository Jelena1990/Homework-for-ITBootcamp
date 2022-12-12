//1.zadatak-1. Zadatak
/*Dodati na stranicu n puta jednu siku. Slikama koje su na parnim pozicijama postavljati crveni okvir, 
slikama koje su na neparnim pozicijama postavljati plavi okvir.*/
let n=7;
for( i=1; i<=n; i=i+1){
  if(i%2==0){
    document.write(`<img  src="slike/slika.jpg" width="250" class="parni_broj"/>`)
  }
  else{
    document.write(`<img src="slike/slika.jpg" width="250" class="neparni_broj"/>`)
  }
}
//2.zadatak
/*For petljom odrediti da li je dati prirodan broj n prost.
Broj je prost ako je deljiv samo sa jedinicom i sa samim sobom.*/
n=4;
let brojilac= 0;
for(i=1; i<=n; i= i+1){
  if(n % i==0){
  brojilac= brojilac +1;
}}
if (brojilac > 2){
  console.log("nije prost broj ");}
else{
  console.log("prost je broj")
}

