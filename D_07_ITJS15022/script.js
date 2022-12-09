// zadatak 1-
/*Pera i Mika su kupili dva ista džempera. 
Pera je dao p dinara, Mika je dao m dinara i dobili su kusur od k dinara. Brojeve p, m i k odredite proizvoljno.
Na osnosvu unetih vrednosti, u konzoli ispisati koliki kusur treba da dobije Pera,
 a koliki kusur treba da dobije Mika, da bi jednako platili svako svoj džemper.*/

let p = 800; //Pera platio
let m = 700; //Mika platio
let k = 200; //zajednicki kusur
let cenaDzempera = (p + m - k) / 2; //650
let pkusur = p - cenaDzempera;
let mkusur = m - cenaDzempera;
console.log(`Perin kusur iznosi ${pkusur} a Mikin ${mkusur}`);

// zadatak 2
/*Knjiga ima n poglavlja (broj n unosite sami). 
Čitalac je prvog dana pročitao a poglavlja, a drugog dana dva poglavlja više nego prvog dana.
Na osnovu dodeljenih vrednosti, u konzoli ispisati koliko poglavlja je preostalo čitaocu da pročita do kraja knjige. 
Pretpostaviti da su vrednosti promenljivih n i a ispravno unete.
Ako je čitaocu ostalo da pročita manje od polovine ukupnog broja poglavlja, 
u konzoli ispisati poruku “Ostalo je da se procita još manje od polovine knjige”.*/

let n = 25;
let nPola = n / 2; //10
let a = 7;
let a1 = a + 2; //5
let ostalo = n - (a + a1);
console.log(` Ostalo je jos ${ostalo} poglavlja do kraja`);
if (a + a1 > nPola) {
  console.log("Ostalo je da se procita jos manje od polovine knjige.");
} else {
  console.log("Ostalo je jos vise od polovine knjige.");
}

// zadatak 3
/*Neka je u dnevni kalorijski unos neke osobe zadat u kilo džulima (kJ).
 Izvršiti konverziju te vrednosti u kalorije (kcal), ako se konverzija vrši po formuli: 1 kcal = 4.1868 kJ.
  Ukoliko je dobijena vrednost manja od 2000 kcal, ispisati u konzoli poruku 
  “​potrebno je povećati dnevni unos”. U suprotnom, ispisati u konzoli poruku  “​nije potrebno povećati dnevni unos”.*/

let u = 10000; //kJ
let kal = u / 4.1868; //1 kcal = 4.1868 kJ.
console.log(kal); //2388.4
if (kal < 2000) {
  console.log("Potrebno je povecati dnevni unos.");
} else {
  console.log("Nije potrebno povecati dnevni unos.");
}
