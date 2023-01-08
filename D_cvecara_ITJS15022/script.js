
let btnIzracunaj= document.querySelector('#izracunaj');
let btnResetuj= document.querySelector('#resetuj');

let ukupno = 0;
let ukupno2 = 0;


btnIzracunaj.addEventListener("click", () =>{
  let ruze = document.getElementById("ruze").value;
let ukupnoRuze = ruze * 150;

let ljiljani = document.getElementById("ljiljani").value;
let ukupnoLjiljani = ljiljani * 120;

let gerberi = document.getElementById("gerberi").value;
let ukupnoGerberi = gerberi* 70;

let bombonjera= document.querySelector('#bombonjera').checked;
let cenaBombonjere = 0;
 if(bombonjera==true){
  cenaBombonjere = 500;
 }
let cokolada= document.querySelector('#cokolada').checked;
let cenaCokolade = 0;
 if(cokolada==true){
  cenaCokolade = 500;
 }
let sampanjac= document.querySelector('#sampanjac').checked;
let cenaSampanjca = 0;
 if(sampanjac==true){
  cenaSampanjca = 500;
 }

let placanje= document.querySelector('input[name="placanje"]:checked').value;

ukupno = ukupnoRuze + ukupnoLjiljani + ukupnoGerberi + cenaBombonjere + cenaCokolade + cenaSampanjca;

if( placanje == 'kartica' && ukupno > 2000){
 ukupno2= ukupno- (ukupno/100)*10;
}
else{
  ukupno2=ukupno;}

 
for(let i=0; i<ruze; i=i+1){
  document.getElementById("ruzeCvetovi").innerHTML+="<img src=\"ruza.png\" width=\"50px\" height=\"50px\">";
}
for(let i=0; i<ljiljani; i=i+1){
  document.getElementById("ljiljaniCvetovi").innerHTML+="<img src=\"ljiljan.png\" width=\"50px\" height=\"50px\">";
}
for(let i=0; i<gerberi; i=i+1){
  document.getElementById("gerberiCvetovi").innerHTML+="<img src=\"gerber.png\" width=\"50px\" height=\"50px\">";
}
if(bombonjera ==true){
  document.getElementById("bombonjerapoklon").innerHTML = '<span style="font-size:20px" "font-weight: 600" > + bombonjera</span>';
  document.getElementById("bombonjerapoklon").innerHTML += "<img src=\"bombonjera.png\" width=\"60px\" height=\"60px\">";
}
if(cokolada ==true){
  document.getElementById("cokoladapoklon").innerHTML =  '<span style="font-size:20px" "font-weight: 600" > + čokolada</span>';
  document.getElementById("cokoladapoklon").innerHTML += "<img src=\"cokolada.png\" width=\"60px\" height=\"60px\">";
}
if(sampanjac ==true){
  document.getElementById("sampanjacpoklon").innerHTML =  '<span style="font-size:20px" "font-weight: 600" > + šampanjac</span>';
  document.getElementById("sampanjacpoklon").innerHTML += "<img src=\"sampanjac.png\" width=\"60px\" height=\"60px\">";
}




document.getElementById("cenasap").innerHTML = `<span style="font-size:20px" "font-weight: 600" "white-space: pre">Cena sa popustom je: ${ukupno2}</span>`;
document.getElementById("cenabezp").innerHTML = `<span style="font-size:20px" "font-weight: 600" "white-space: pre" >Cena bez popusta je: ${ukupno}</span>`;
});



