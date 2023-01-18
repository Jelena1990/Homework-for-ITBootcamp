
let ul=document.getElementById('ul'); 
let input = document.getElementById('input');  

input.addEventListener("keyup", e =>{ 
  e.preventDefault();  

      if(e.key == "Enter"){ 
        input = document.getElementById('input').value;  
        if (input == "") {       
          alert("Morate uneti vrednost");
          return false;
        }

      let niz =JSON.parse(localStorage.getItem("data"));
      if(niz == null)
        { 
          niz = [];       
        }
      niz.push(input);
      const myJSON = JSON.stringify(niz);
      localStorage.setItem('data', myJSON);

      let li=document.createElement('li'); 
      li.textContent= `${input}`;         
      let radio= document.querySelector('input[name="izaberi"]:checked').value  
      if(radio == 'pocetak'){  
        ul.prepend(li);   
      }else {
        ul.append(li);
      }
    }
  }
);

let array =JSON.parse(localStorage.getItem("data"))

for(let i = 0; i < array.length; i++){  
    let li=document.createElement('li');  
    li.textContent= array[i];   
    ul.append(li);             
}
  
ul.addEventListener("click", e =>{   

    if(e.target.tagName == "LI"){ 
    e.target.remove(); 
    }
});




