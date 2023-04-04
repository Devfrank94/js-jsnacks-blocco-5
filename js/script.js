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
    age : 24
  },
  {
    firstName : "Giuseppe",
    lastName : "Verdi",
    age : 56
  },
  {
    firstName : "Carlo",
    lastName : "De Girolamo",
    age : 66
  },
  {
    firstName : "Giro",
    lastName : "La trottola",
    age : 46
  },
  {
    firstName : "Guido",
    lastName : "La vespa",
    age : 26
  },
  {
    firstName : "Luca",
    lastName : "Bellini",
    age : 17
  },
]

// Js Snack 1
const utentiMinorenni = students.filter( (student) => student.age < 18 )
console.log(utentiMinorenni)

const utentiOver = students.filter( (student) => student.age > 65 )
console.log(utentiOver)


//Js Snack 2

