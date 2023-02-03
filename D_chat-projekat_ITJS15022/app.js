import{Chat }from "./chat.js";
import{ChatUI }from "./ui.js";

let ul = document.querySelector('#ul');
let formaMsg = document.getElementById("formaMsg");
let formaUpdate=document.getElementById('formaUpdate');
let div=document.getElementById('obavestenje');
let nav=document.getElementById('nav');

let username;
 if(localStorage.username){
  username = localStorage.getItem("username");
  }
  else {
    username = "Anonymous"
  }

let chat = new Chat("#js", username)
let chatUI = new ChatUI(ul);

 formaMsg.addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById('audio').play();
       let poruka= document.getElementById('inputM').value;
        chat.addChat(poruka)
       .then( ()  =>{
        formaMsg.reset();  
        console.log("Poruka uspesno dodata");
      })
      .catch(e=> {
        console.log(e);
      })
})

 
 formaUpdate.addEventListener( "click", function(e) {
      e.preventDefault();
      let newUsername = document.getElementById('inputU').value;
      chat.username= newUsername;
      localStorage.setItem('username', newUsername);
      let notification= document.createElement('span');
      notification.innerHTML = newUsername;
      notification.setAttribute('class', 'show');
      div.appendChild(notification);
      div.classList.toggle("show")
      setTimeout(() =>{
          notification.remove()
      }, 3000);
      formaUpdate.reset();
  })

 let prevButton = null;
 nav.addEventListener("click", function (e) {
     if(e.target.tagName === 'BUTTON'){
        let newRoom= e.target.textContent;
        chat.updateRoom(newRoom);
        console.log(newRoom);
        const isButton = e.target.nodeName === 'BUTTON';
        if (!isButton) {
          return;
        }
        e.target.classList.add('active'); 
      if(prevButton !== null) {
          prevButton.classList.remove('active');  
      }
      prevButton = e.target;
    }
    chatUI.clearUL(); 
    chat.getChats(data =>  { 
        chatUI.templateLI(data)
    });
  });

    
 
 