

/*Kreirati kolekciju movies u kojoj svaki dokument sadrži sledeća polja:
Name (string),
Director (objekat koji se sastoji od imena i prezimena režisera),
Release_year (number),
Genres (niz stringova),
Rating (number – decimalni broj).
*/

/*Director (objekat koji se sastoji od imena i prezimena režisera)*/

/*Napisati skript koji: Dodaje nekoliko filmova u bazu */


// film 1
db.collection('movies')
.doc('film2') 
.set({    
    name: "Babylon",
   
    director:  {
      name: "Jelena" ,
      lastname: "Golubovic"
    },
    release_year: 2022,
    genres: ["comedy", "drama"],
    rating: 7.6
})
.then(() => {
  console.log("Movie added successfully");
})
.catch((err) => {
  console.log("Error: " + err);
});



// film 2
db.collection('movies')
.doc('film3') 
.set({    
    name: "Palm Springs",
    director:  {
      name: "Max" ,
      lastname: "Barbakow"
    },
    release_year: 2011,
    genres: ["romantic", "comedy"],
    rating: 7.4
})
.then(() => {
  console.log("Movie added successfully");
})
.catch((err) => {
  console.log("Error: " + err);
});

//// film 3

db.collection('movies')
.doc('film4') 
.set({    
    name: "Captain Fantastic",
    director:  {
      name: "Mat" ,
      lastname: "Ross"
    },
    release_year: 2016,
    genres: ["drama"],
    rating: 7.8
})
.then(() => {
  console.log("Movie added successfully");
})
.catch((err) => {
  console.log("Error: " + err);
});

/*Menja podatke o nekim filmovima u bazi*/

db.collection('movies')
.doc('film3')
.update({  
  release_year: 2020
})
.then(()  =>{   
  console.log("Year successfully changed")  
})
.catch((err)  =>  {
  console.log("Error" + err);
})

/*Dodaje žanr nekom filmu*/

let movie = db.doc('movies/film4');
movie.update({  
  genres: firebase.firestore.FieldValue.arrayUnion("indie")
})
.then(()  =>{
  console.log("Genre successfully added")  
})
.catch((err)  =>  {
  console.log("Error" + err);
})

/*Briše žanr nekom filmu*/

let movie2 =  db.doc('movies/film2');
movie2.update ({
  genres: firebase.firestore.FieldValue.arrayRemove("comedy")
})
.then(()  =>{
  console.log("Genre successfully deleted")  
})
.catch((err)  =>  {
  console.log("Error" + err);
})

//Menja ime ili prezime nekom režiseru.

let moviie = db.doc('movies/film2');
moviie.update({
  "director.name": "Damien",
  "director.lastname": "Chazelle"
})
.then(()  =>{
  console.log("Director successfully updated")  
})
.catch((err)  =>  {
  console.log("Error" + err);
})
