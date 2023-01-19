
let input = document.getElementById("input");
let ul = document.getElementById("ul");
let pocetak = document.getElementById("pocetak");
let kraj = document.getElementById("kraj");
let lista = [];
let niz = [];


let funkcijaLista = () => {
  niz = [];
  for(let i =0; i< lista.length; i++){
    niz.push(lista[i].innerHTML);
  }                                    
  localStorage.setItem("lista", JSON.stringify(niz));
};


let vratiuListu = () => {

  let listaStringova = JSON.parse(localStorage.getItem("lista"));
  if (listaStringova == null) return; 

    for(let i = 0; i < listaStringova.length; i++){
    let li = document.createElement("li");
    li.textContent = listaStringova[i];
    if (pocetak.checked == true) {
      ul.prepend(li);
    } else {
      ul.append(li);
    }
  };
};
vratiuListu();


input.addEventListener("keydown", (e) => {
  if (input.value != "") {
    if (e.key === "Enter") {
      let li = document.createElement("li");
      if (pocetak.checked == true) {
        ul.prepend(li);
        li.textContent = input.value;
        input.value = "";
        lista.push(li);
        funkcijaLista();
      } else {
        ul.appendChild(li);
        li.textContent = input.value;
        input.value = "";
        lista.push(li);
        funkcijaLista();
      }
    }
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.remove();
    niz = JSON.parse(localStorage.getItem("lista"));
    for (i = 0; i < niz.length; i++) {
      if (e.target.textContent == niz[i]) {
        niz.splice(i, 1);
        lista.splice(i, 1);
      }
    }
    localStorage.setItem("lista", JSON.stringify(niz));
  }})