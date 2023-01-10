let pitanje = {
  tekst:  "Koja je najveca riba u okeanu?",
  odgovori: ["raza" ,"kit ajkula", "morski pas" ],
  indexKorektnogOdgovora: 1,
};
let pitanje1 = {
  tekst:  "Koja je najcesca krvna grupa na svetu?",
  odgovori: ["nulta" ,"A", "B" ],
  indexKorektnogOdgovora: 0,
};

let pitanje2 = {
  tekst:  "Sa koje je planete Supermen?",
  odgovori: ["Kripton" ,"Jupiter", "Zemlja" ],
  indexKorektnogOdgovora: 0,
};
let pitanje3 = {
  tekst:  "Koliko kostiju ukupno ima ljudsko telo?",
  odgovori: ["351" ,"206", "402" ],
  indexKorektnogOdgovora: 1,
};
let pitanje4 = {
  tekst:  "Koliki procenat ljudi u svetu je levoruko?",
  odgovori: ["5" ,"10", "25" ],
  indexKorektnogOdgovora: 1,
};
let pitanje5 = {
  tekst:  "Kada je rodjen Nikola Tesla?",
  odgovori: ["1856" ,"1880", "1955" ],
  indexKorektnogOdgovora: 0,
};
let pitanje6 = {
  tekst:  "Ko se prema Danteu nalazu u devetom krugu pakla?",
  odgovori: ["Varalice" ,"Izdajnici", "Pijanci" ],
  indexKorektnogOdgovora: 1,
};
let pitanje7 = {
  tekst:  "Sa koliko godina je preminuo cuveni kompozitor Volfgang Amadeus Mocart?",
  odgovori: ["38" ,"29", "35" ],
  indexKorektnogOdgovora: 2,
};
let pitanje8 = {
  tekst:  "Gde se nalazi vulkan Etna?",
  odgovori: ["U Grckoj" ,"U Spaniji", "U Italiji" ],
  indexKorektnogOdgovora: 2,
};
let pitanje9 = {
  tekst:  "Koliko dana prosecna osoba provede spavajuci u toku jedne godine?",
  odgovori: ["105" ,"160", "122" ],
  indexKorektnogOdgovora: 2,
};

let niz= [pitanje,pitanje1,pitanje2,pitanje3,pitanje4,pitanje5,pitanje6,pitanje7,pitanje8,pitanje9];

 let randomNiz = niz.sort((a,b) => 0.5 - Math.random());
 randomNiz = randomNiz.slice(0, 6);

for(let i=1; i< randomNiz.length; i=i+1){
  document.getElementById(i).innerHTML=   '<p>' + i + "." + ' ' +  randomNiz[i].tekst   +   '</p>'  +
  '<input type="radio"  id="myRadio'+i+'"    name="pit'+ i +'"    value="0" checked>'  + randomNiz[i].odgovori[0] + ' <br>'  +
  '<input type="radio"  id="myRadio1'+i+'"   name="pit'+ i +'"    value="1">'          + randomNiz[i].odgovori[1] + ' <br>'  +
  '<input type="radio"  id="myRadio2'+i+'"   name="pit'+ i +'"    value="2">'          + randomNiz[i].odgovori[2] + '<br>'   +
  '<input type="hidden"    name="indextacanodgovor'+ i +'" value ="' + randomNiz[i].indexKorektnogOdgovora +'">';
}

    
let btnPosalji= document.querySelector('#posalji');
let brojacTacno = 0;
let brojacNetacno = 0;


btnPosalji.addEventListener("click", () =>{
  
  let odgovor1 = document.querySelector('input[name="pit1"]:checked').value;
  let tacanodgovor1 = document.querySelector('input[name="indextacanodgovor1"]').value;
  if(odgovor1 == tacanodgovor1){
    brojacTacno= brojacTacno + 1;
    document.getElementById("resenje1").innerHTML= '<p style="color:green">Tacno ste odgovorili na 1.pitanje</p>';
  }else{
    brojacNetacno = brojacNetacno + 1;
    document.getElementById("resenje1").innerHTML= '<p style="color:red">Niste tacno odgovorili na 1.pitanje</p>';
  }

  let odgovor2 = document.querySelector('input[name="pit2"]:checked').value;
  let tacanodgovor2 = document.querySelector('input[name="indextacanodgovor2"]').value;
  if(odgovor2 == tacanodgovor2){
    brojacTacno= brojacTacno + 1;
    document.getElementById("resenje2").innerHTML= '<p style="color:green">Tacno ste odgovorili na 2.pitanje</p>';
  }else{
    brojacNetacno = brojacNetacno + 1;
    document.getElementById("resenje2").innerHTML= '<p style="color:red">Niste tacno odgovorili na 2.pitanje</p>';
  }

  let odgovor3 = document.querySelector('input[name="pit3"]:checked').value;
  let tacanodgovor3 = document.querySelector('input[name="indextacanodgovor3"]').value;
  if(odgovor3 == tacanodgovor3){
    brojacTacno= brojacTacno + 1;
    document.getElementById("resenje3").innerHTML= '<p style="color:green">Tacno ste odgovorili na 3.pitanje</p>';
  }else{
    brojacNetacno = brojacNetacno + 1;
    document.getElementById("resenje3").innerHTML= '<p style="color:red">Niste tacno odgovorili na 3.pitanje</p>';
  }

  let odgovor4 = document.querySelector('input[name="pit4"]:checked').value;
  let tacanodgovor4 = document.querySelector('input[name="indextacanodgovor4"]').value;
  if(odgovor4 == tacanodgovor4){
    brojacTacno= brojacTacno + 1;
    document.getElementById("resenje4").innerHTML= '<p style="color:green">Tacno ste odgovorili na 4.pitanje</p>';
  }else{
    brojacNetacno = brojacNetacno + 1;
    document.getElementById("resenje4").innerHTML= '<p style="color:red">Niste tacno odgovorili na 4.pitanje</p>';
  }

  let odgovor5 = document.querySelector('input[name="pit5"]:checked').value;
  let tacanodgovor5 = document.querySelector('input[name="indextacanodgovor5"]').value;
  if(odgovor5 == tacanodgovor5){
    brojacTacno= brojacTacno + 1;
    document.getElementById("resenje5").innerHTML= '<p style="color:green">Tacno ste odgovorili na 5.pitanje</p>';
  }else{
    brojacNetacno = brojacNetacno + 1;
    document.getElementById("resenje5").innerHTML= '<p style="color:red">Niste tacno odgovorili na 5.pitanje</p>';
  }
  document.getElementById("tacnih").innerHTML= '<p style="color:blue"> Tacno ste odgovorili na: '+ brojacTacno +' pitanja.</p>';
  document.getElementById("netacnih").innerHTML= '<p style="color:purple">Niste tacno odgovorili na:  '+  brojacNetacno +' pitanja.</p>';
 
  for(let i=1; i< randomNiz.length; i=i+1){
    document.getElementById('myRadio' + i + '').disabled = true;
    document.getElementById('myRadio1' + i + '').disabled = true;
    document.getElementById('myRadio2' + i + '').disabled = true;
  }
});
