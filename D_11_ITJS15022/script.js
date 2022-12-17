//1. Zadatak
/*Napisati funkciju koja vraća aritmetičku sredinu brojeva koji nisu deljivi sa 3 u intervalu od n do m. 
Brojeve n i m proslediti kao parametre funkciji.*/

function sredina(n,m){
    let zbir=0;
    let brojilac=0;
    for(n; n<=m; n=n+1){
      if(n%3 !=0){
        zbir=zbir+n;
        brojilac=brojilac+1;  
    }
    }return (zbir/brojilac);   
}

let asredina= sredina(10,30);
console.log(asredina);

//arrow

let ars=(n ,m ) =>{
  let zbir=0;
  let brojilac=0;
  for(n; n<=m; n=n+1){
    if(n%3 !=0){
      zbir=zbir+n;
    brojilac=brojilac+1;  
    }
}return (zbir/brojilac);
}

let promenljiva= ars(30, 80);
console.log(promenljiva);

//2.zadatak
/*Napisati funkciju kojoj se prosleđuje ceo broj i string, a ona ispisuje taj string u paragrafu koji ima prosleđenu veličinu fonta.*/

function mojaFunkcija(a,tekst){
document.write(`<p style="font-size:${a}px;">  ${tekst} </p>`);
}


let mojaPromenljiva= mojaFunkcija(70, "Ovo je neki tekst");

//arrow

let promenljivaA=( y , paragraf )  =>{
  document.write(`<p style="font-size:${y}px;">  ${paragraf} </p>`);
}


promenljivaA(18, "Ispisivanje paragrafa koriscenjem ARROW funkcije");