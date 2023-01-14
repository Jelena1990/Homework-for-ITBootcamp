/* Napraviti klasu Knjiga koja sadrži polja naslov, autor, godIzdanja, brojStrana i cena. 
Od metoda klasa sadrži:
Konstruktor koji postavlja sva polja
Getere i setere za sva polja
Metodu stampaj koja štampa sve podatke o knjizi (proizvoljno odaberite format štampanja podataka i da li ćete ih štampati u konzoli ili na stranici)
Metodu obimna koja vraća true ukoliko je knjiga obimna (broj strana veći od 600), u suprotnom vraća false.
Metodu skupa koja vraća true ukoliko je knjiga skupa (knjiga je skupa, ukoliko je njena cena veća od 8000),  u suprotnom vraća false.
Metodu dugackoIme koja ispituje da li je ime autora dugačko (ukoliko je broj karaktera u autorovom imenu veći od 18 ime se smatra dugačkim). Ukoliko je ime dugačko vraća true, u suprotnom vraća false.*/

class Knjiga{

constructor(naslov, autor, godIzdanja, brojStrana, cena){
this.naslov = naslov;
this.autor = autor;
this.godIzdanja = godIzdanja;
this.brojStrana = brojStrana;
this.cena = cena;
}
//seteri
set naslov(n){
  if(n.length > 0){
    this._naslov = n;
  }
  else{
    this._naslov = "Nema naslova";
  }
}
set autor(a){
  if(a.length > 0){
    this._autor= a;
  }
  else{
    this._autor = "John Doe";
  }
}
set godIzdanja(gi){
  if(gi > 1800){
    this._godIzdanja = gi;
  }
  else{
    this._godIzdanja = 1800;
  }
}
set brojStrana(b){
  if(b > 0){
    this._brojStrana= b;
  }
  else{
    this._brojStrana = 10;
  }
}
set cena(c){
  if(c > 0){
    this._cena= c;
  }
  else{
    this._cena = 100;
  }
}
//geteri
get naslov (){
  return this._naslov;
}
get autor (){
  return this._autor;
}
get godIzdanja (){
  return this._godIzdanja;
}
get brojStrana (){
  return this._brojStrana;
}
get cena (){
  return this._cena;
}
// metode
stampaj(){
  console.log(`${this}`);
}
obimna(){
  let x = false;
  if(this.brojStrana > 600){
    x = true;
  }
  return x;
}
skupa(){
  let y = false;
  if(this.cena > 8000){
    y = true;
  }
  return y;
}
dugackoIme(){
  let z = false
  if(this.autor.length > 18){
    z = true;
  }
  return z;
}
}

export{ Knjiga };