/* 
jSnack 1
Abbiamo un elenco utenti (nome, cognome, età).
Trovare i minorenni e gli over 65

jSnack 2
Abbiamo un elenco degli studenti di una facoltà
Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti.
Dobbiamo creare un nuovo elenco dove ogni studente ha un nome-cognome, matricola e media voti

*/

const students = [
  {
    firstName : "Francesco",
    lastName : "Rossi",
    age : 24,
    matricola : getRandomNumbers(1000,9000),
    voti : votiRandom(),
  },
  {
    firstName : "Giuseppe",
    lastName : "Verdi",
    age : 56,
    matricola : getRandomNumbers(1000,9000),
    voti : votiRandom(),
  },
  {
    firstName : "Carlo",
    lastName : "De Girolamo",
    age : 66,
    matricola : getRandomNumbers(1000,9000),
    voti : votiRandom(),
  },
  {
    firstName : "Giro",
    lastName : "La trottola",
    age : 46,
    matricola : getRandomNumbers(1000,9000),
    voti : votiRandom(),
  },
  {
    firstName : "Guido",
    lastName : "La vespa",
    age : 26,
    matricola : getRandomNumbers(1000,9000),
    voti : votiRandom(),
  },
  {
    firstName : "Luca",
    lastName : "Bellini",
    age : 17,
    matricola : getRandomNumbers(1000,9000),
    voti : votiRandom(),
  },
]

// Js Snack 1
const studentiMinorenni = students.filter( (student) => student.age < 18 )
console.log(studentiMinorenni)

const studentiMaggiorenni = students.filter( (student) => student.age >= 18 && student.age <= 65 )
console.log(studentiMaggiorenni)

const studentiOver = students.filter( (student) => student.age > 65 )
console.log(studentiOver)


//Js Snack 2

















/******* Funzioni ******/


/*Funzione per calcolo media voto studente*/
function calculateMedia(studente){
  
  let sommaVoti = 0; 

  const mediaStudente = studente.voti.forEach((voti) => {
    const votoSingolo = voti;
    
    sommaVoti += votoSingolo;
  }) ;

  //Per scoprire la media somma dei voti diviso quanti voti assegnati
  mediaVoti = (sommaVoti / studente.voti.length).toFixed(1);

  return mediaVoti
}


// Funzione per ricevere Numeri randomici
function getRandomNumbers(max,min){
  return numbers = Math.floor(Math.random()* (max - min + 1)) + min;
}



//Funzione per assegnare Voti Random allo studente
function votiRandom(){

  const votiStudente = [];
  for (let i = 0; i < getRandomNumbers(1,7); i++) {
  const voto = getRandomNumbers(1,10)
  votiStudente.push(voto)
  
  }
  return votiStudente;
}

