//1.zadatak-
/*Dat je niz stavki za kupovinu (članovi niza su stringovi). 
Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.*/


let spisak=[ "mleko", "jaja", "keks", "slag"];

let torta = niz =>{
    let lista= "<ul>"
    for(let i=0; i< niz.length; i=i+1 ){
        lista=  lista +  `<li> ${niz[i]}   </li>`;
    }
    lista= lista +"</ul>";
    return lista;

}

document.write( torta(spisak));

//2.zadatak
/*Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu gde svaki od redova 
ima ćeliju u kojoj se nalazo naziv tima. 
Tabelu ispisati u html dokument.*/


let tim=["Nikola Jokic", "Nikola Jovic", "Vasilije Micic", "Nemanja Dangubic"]

let kosarkasi = niz =>{
    let table= `<table border="1">`;
    for(let i=0; i< niz.length; i=i+1 ){
        table=  table +  `<tr> <td> ${niz[i]} </td>  </tr> `;
    }
    table= table + `</table>`;
    return table;

}

document.write( kosarkasi(tim));

//3.zadatak-
/*Dat je niz stringova čiji su članovi putanje do slika. 
Prikazati sve slike u html dokumentu, pri čemu su putanje da slika one putanje koje su navedene u nizu.*/

let adrese=["winter1.jpg","winter2.jpg","winter3.jpg","winter4.jpg"];

let slike = niz =>{
  for (let i=0; i<niz.length; i=i+1){
      document.write(`<img  src= ${niz[i]} width="200">`);
    }

}

slike(adrese);

