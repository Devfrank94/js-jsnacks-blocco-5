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
    firstName : "Francesca",
    lastName : "Rossi",
    age : 24,
    matricola : getRandomNumbers(1000,9000),
    voti : votiRandom(),
    image: "student1.jpg",
  },
  {
    firstName : "Virginia",
    lastName : "Verdi",
    age : 56,
    matricola : getRandomNumbers(1000,9000),
    voti : votiRandom(),
    image: "student2.jpg",
  },
  {
    firstName : "Carla",
    lastName : "De Girolamo",
    age : 66,
    matricola : getRandomNumbers(1000,9000),
    voti : votiRandom(),
    image: "student3.jpg",
  },
  {
    firstName : "Giro",
    lastName : "La trottola",
    age : 46,
    matricola : getRandomNumbers(1000,9000),
    voti : votiRandom(),
    image: "student4.jpg",
  },
  {
    firstName : "Guido",
    lastName : "La vespa",
    age : 26,
    matricola : getRandomNumbers(1000,9000),
    voti : votiRandom(),
    image: "student5.jpg",
  },
  {
    firstName : "Luca",
    lastName : "Bellini",
    age : 17,
    matricola : getRandomNumbers(1000,9000),
    voti : votiRandom(),
    image: "student6.jpg",
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


for ( let i = 0; i < students.length ; i++){
  const student = students[i];
  console.log('Singolo studente',student);
  
  const mediaVoti = calculateMedia(student) //Media dei voti
  console.log(mediaVoti)
  
}

//Funzione che disegna struttura nell HTML

const containerStudent = document.querySelector(".students");
drawStudent();

function drawStudent(){
  containerStudent.innerHTML += '';

  for(let student of students) drawTeamStud(student);

}

function drawTeamStud(student){

  const cardStud =`
  <div class="stud-card">
      <div class="card-image">
        <img src="img/${student.image}" alt="">
      </div>
      <div class="card-text">
        <h3>Nome: ${student.firstName}</h3>
        <h3>Cognome: ${student.lastName}</h3>
        <h4>Età: ${student.age}</h4>
        <h4>N° Matricola: ${student.matricola}</h4>
        <h4>Voti: ${student.voti}</h4>
      </div>
    </div>
  `
  containerStudent.innerHTML += cardStud;

}







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

