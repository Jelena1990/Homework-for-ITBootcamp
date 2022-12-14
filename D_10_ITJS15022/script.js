/*Kreirati 64 span elemenata i rasporediti ih kao na slici, tako da elementi izgledaju kao polja šahovske table. 
U realizaciji ovog zadatka koristiti for petlju.*/

let el=64;
for(i=1; i<= el; i=i+1){
    if(i<=8 ||(i>=17 && i<= 24) ||(i>=33 && i<= 40)  ||(i>=49 && i<= 56)) {
      if(i% 2== 0){
       document.write(`<span class="black">${i}</span>`);
      }
      else{
        document.write(`<span class="white">${i}</span>`);
      }
    }else if((i>=9 && i<=16) ||(i>=25 && i<= 32) ||(i>=41 && i<= 48)  ||(i>=57 && i<= 64)){
      if( i% 2==1){
        document.write(`<span class="black">${i}</span>`);
      }
      else{
        document.write(`<span class="white">${i}</span>`);
      }}}

