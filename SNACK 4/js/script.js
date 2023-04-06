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

console.log('-------------------------Inizio Snack 5------------------------------');


/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const biciDaCorsa = [
  {
    nome: 'Fast',
    peso: 8.5,
  },
  {
    nome: 'Fast2',
    peso: 7.8,
  },
  {
    nome: 'Trek', 
    peso: 9.4,
  },
  {
    nome: 'Giant',
    peso: 8.2,
  },
  {
    nome: 'Scott',
    peso: 7.4,
  }
];

let minPeso = biciDaCorsa.reduce((min, current) => {
  return current.peso < min.peso ? current : min
  
});
console.log(minPeso);


let {nome, peso} = minPeso;
console.log(`La bici più leggera è ${nome} con un peso di ${peso} kg`);

const container = document.querySelector(".container-fluid");

container.innerHTML =`
<div class="card shadow-sm" style="width: 20rem;">
  <div class="card-body">
  <h3>Snack-5</h3>
  <h3>Bicicletta leggera</h3>
    <h5 class="card-title">Nome: ${nome}</h5>
    <p class="card-text">Peso: ${peso}kg</p>
  </div>
</div>
`
console.log('-------------------------Fine Snack 5--------------------------------');

console.log('-------------------------Inizio Snack 6------------------------------');


/*

*SNACK 6*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà : nome,
punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e
falli subiti e stampiamo tutto in console.

*/

const squadre = [
  {
    squadra: 'Juve',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    squadra: 'Samp',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    squadra: 'Roma',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    squadra: 'Milan',
    puntiFatti: 0,
    falliSubiti: 0,
  },
];
const containerFalli = document.querySelector(".falli");

for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = Math.floor(Math.random() * 10);
  squadre[i].falliSubiti = Math.floor(Math.random() * 10);
}

const arrayNomiFalliSubiti = squadre.map(({ squadra, falliSubiti }) => ({squadra, falliSubiti,}));

console.log('Nuovo Array', arrayNomiFalliSubiti);


const {squadra, puntiFatti, falliSubiti} = arrayNomiFalliSubiti;
console.log(falliSubiti)

containerFalli.innerHTML =`
<div class="card shadow-sm" style="width: 20rem;">
  <div class="card-body">
  <h3>Snack-6</h3>
    <h4 class="card-title">Nome squadra: ${squadra}</h4>
    <p class="card-text">Falli subiti: ${falliSubiti}</p>
  </div>
</div>
`
console.log('-------------------------Fine Snack 6--------------------------------');