// zadatak 1

let p = 800; //Pera platio
let m = 700; //Mika platio
let k = 200; //zajednicki kusur
let cenaDzempera = (800 + 700 - 200) / 2; //650
let pkusur = p - cenaDzempera;
let mkusur = m - cenaDzempera;
console.log(`Perin kusur iznosi ${pkusur} a Mikin ${mkusur}`);

// zadatak 2
let n = 20;
let nPola = n / 2; //10
let a = 3;
a1 = a + 2; //5
if (a + a1 > nPola) {
  console.log("Ostalo je da se procita jos manje od polovine knjige.");
} else {
  console.log("Ostalo je jos vise od polovine knjige.");
}

// zadatak 3
let u = 10000; //kJ
let kal = u / 4.1868; //1 kcal = 4.1868 kJ.
console.log(kal); //2388.4
if (kal < 2000) {
  console.log("Potrebno je povecati dnevni unos.");
} else {
  console.log("Nije potrebno povecati dnevni unos.");
}
