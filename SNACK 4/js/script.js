/*
SNACK 4*
Abbiamo un elenco degli studenti di una facoltà , identificati da _id_, _Nome_ e _somma totale_
dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti:
creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id
superiore a 120
Questo è l’elenco degli studenti:
Id    Name                    Grades
213   Marco della Rovere       78
110   Paola Cortellessa        96
250   Andrea Mantegna 	       48
145   Gaia Borromini           74
196   Luigi Grimaldello 	     68
102   Piero della Francesca    50
120   Francesca da Polenta     84
*/

const students = [
    {
      Name:   'Marco della Rovere',
      id:         213,
      grades:     78,
    },
    {
      Name:   'Paola Cortellesa',
      id:         110,
      grades:     96,
    },
    {
      Name:   'Andrea Mantegna',
      id:         250,
      grades:     48,
    },
    {
      Name:   'Gaia Borromini',
      id:         145,
      grades:     74,
    },
    {
      Name:   'Luigi Grimaldello',
      id:         196,
      grades:     68,
    },
    {
      Name:   'Piero della Francesca',
      id:         102,
      grades:     50,
    },
    {
      Name:   'Francesca da Polenta',
      id:         120,
      grades:     84,
    },
]
    console.log('array', students);


// Nuovo array mappato
const newStudents = students.map((student) => {

  const studUpCase = {
    Name: student.Name.toUpperCase()
  }
  return studUpCase;
});
  console.log('Targhe nomi in maiuscolo', newStudents);


// Estrapoliamo studenti la cui somma voti è superiore a 70
const studOv70 = students.filter((student) => {
  if (student.grades > 70) return true;
});

console.log('Studenti con somma voti più alta di 70', studOv70);

// Estrapoliamo studenti la cui somma voti è superiore a 70 e id superiore a 120
const studOvId120 = studOv70.filter((student) => {

  if (student.id > 120) return true;
});

console.log('Studenti con somma voti più alta di 70 e id superiore a 120', studOvId120);

console.log('-------------------------Fine Snack 4--------------------------------');

console.log('-------------------------Inizio Snack 5--------------------------------');


/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const biciDaCorsa = [
  {
    nome: 'Fast',
    peso: 8.5
  },
  {
    nome: 'Fast2',
    peso: 7.8},
  {
    nome: 'Trek', 
    peso: 9.4
  },
  {
    nome: 'Giant',
    peso: 8.2
  },
  {
    nome: 'Scott',
    peso: 7.4
  }
];


