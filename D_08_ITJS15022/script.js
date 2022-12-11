/*1. Zadatak
Da bi gosti kafića mogli na distanci da sede tokom pandemije, 
ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2 
površine lokala. Za posmatrani kafić su dati podaci da ima v m2 i da je u njemu trenutno n gostiju.
 Brojeve v i n određujete sami. 
Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić 
prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava 
propisane mere. 
Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti 
lokal da bi mera bila zadovoljena. **/

let d = 3; //m po osobi
let v = 30; //m povrsine lokala
let n = 11; // broj gostiju
let broj = (n * d - v) / 3;
broj = Math.ceil(broj);

if (n * d <= v) {
  document.write("<p style='color:green;'>DA</p>");
} else {
  document.write("<p style='color:red;'>NE</p>");
  document.write(
    `<p style='color:red;'>Treba da napuste: ${broj} osoba lokal!</p>`
  );
}

/*2.zadatak-Odredi zbir brojeva od n do m koji su deljivi sa 3 a nisu sa 7.
Rezultat ispisati u konzoli.*/
n = 1;
let m = 10;
let zbir = 0;

while (n <= m) {
  if (n % 3 == 0 && n % 7 != 0) {
    zbir = zbir + n;
  }
  n = n + 1;
}
console.log(zbir);

/*3.zadatak-Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.
Npr. za broj 15, delioci su 1, 3, 5 i 15, što znači da ima 2 delioca koji su deljivi brojem 3 i
 neparni su (to su brojevi 3 i 15)
Npr. za broj 6, delioci su 1, 2, 3, 6, što znači da ima 2 delioca koji su deljivi brojem 3 (3 i 6), 
ali samo jedan od njih je neparan (broj 3), te je rešenje ovog primera 1.*/
let k = 15;
let i = 1;
let broj_delioca = 0;
while (i <= k) {
  if (i % 3 == 0 && i % 2 == 1 && k % i == 0) {
    // 0 % 3= 0     3,

    broj_delioca = broj_delioca + 1;
  }
  i = i + 1;
}
console.log(broj_delioca);
