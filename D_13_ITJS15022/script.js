let dan=  {
  kisa:  true,
  sunce: true,
  oblacno: true,
  vrednost_temperature: [5, 5,20],

//1. zadatak
/*Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. 
Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.*/

tropskidan: function(){
  let rezultat;
  for(i=0; i<this.vrednost_temperature.length; i=i+1){
      if(this.vrednost_temperature[i] < 24){
           rezultat=false;
           break;
      }else{
           rezultat=true;
      }
  }
  return rezultat;
},

//2.zadatak
/*Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. 
Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.*/

nepovoljandan: function () {
  let rezultat= false; 
  for(i=0; i<this.vrednost_temperature.length-1; i=i+1){
      if(this.vrednost_temperature[i] - this.vrednost_temperature[i+1] > 8 || this.vrednost_temperature[i] - this.vrednost_temperature[i+1] < -8 ){
         rezultat= true;
      }
  }
  return rezultat;
},

//3.zadatak
/*Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, 
ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. 
Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.*/

neuobicajandan: function (){
  let temperatura;
  let rezultat= false;
  for(i=0; i<this.vrednost_temperature.length; i=i+1){
      if (this.vrednost_temperature[i] < -5 && this.kisa== true  ){
          rezultat=true;
      }else if (this.vrednost_temperature[i] > 25 && this.oblacno== true  ){
          rezultat=true;
      }else if(this.kisa ==true && this.sunce==true && this.oblacno == true){
          rezultat = true;
      }
  }
  return rezultat;
}
}

console.log(dan.tropskidan());
console.log(dan.nepovoljandan());
console.log(dan.neuobicajandan());


