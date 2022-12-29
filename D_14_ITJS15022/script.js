/*Formirati niz objekata knjiga, pri čemu svaki objekat sadrži:
Naziv knige,
Autora knjige,
Putanja do sličice,
Polje – indikator da li je knjiga pročitana ili ne (true ili false).*/

let knjiga1 = {
  naziv: "Hiljadu cudesnih sunaca",
  autor: "- Haled Hoseini",
  link: "/slike/hiljadu-cudesnih-sunaca.jpg",
  procitana: false,
};

let knjiga2 = {
  naziv: "Druga strana ljubavi",
  autor: "- Sali Boman",
  link: "/slike/druga-strana-ljubavi.jpg",
  procitana: true
};

let knjiga3 = {
  naziv: "Kleopatra",
  autor: "- Stejsi Sif",
  link: "/slike/kleopatra.jpg",
  procitana: true,
};
let knjiga4 = {
  naziv: "Kad je Nice plakao",
  autor: "- Irvin Jalom",
  link: "/slike/kad-je-nice-plakao.jpg",
  procitana: true,
};

nizKnjiga = [knjiga1, knjiga2, knjiga3, knjiga4];
 tabela = document.createElement("table");


document.body.appendChild(tabela);
tabela.style.border = `2px solid red`;
for (let i = 0; i < nizKnjiga.length; i=i+1) {
  let row = document.createElement("tr");
  let data = document.createElement("td");
  let data2 = document.createElement("td");
  let paragraph = document.createElement("p");
  let img = document.createElement("img");
  tabela.appendChild(row);
  row.appendChild(data);
  row.appendChild(data2);
  data.appendChild(img);
  img.src = `${nizKnjiga[i].link}`;
  img.style.width = `100px`;
  img.style.height = `100px`;
  img.style.objectFit = `contain`;
  data2.appendChild(paragraph);
  data2.textContent = `${nizKnjiga[i].naziv}`;
  data2.textContent += nizKnjiga[i].autor;
  data.style.border = `2px solid red`;
  data2.style.border = `2px solid red`;
  if (nizKnjiga[i].procitana == true) {
    data2.style.color = `blue`;
  } else {
    data2.style.color = `gray`;
  }
 if(i%2==0){
  row.style.backgroundColor =`white`;
 }else{
  row.style.backgroundColor =`oldlace`;
 }
}


 





