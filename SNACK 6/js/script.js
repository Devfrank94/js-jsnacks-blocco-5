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
    nome: 'Juve',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Samp',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Roma',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Bari',
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

const container = document.querySelector(".falli");

for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = Math.floor(Math.random() * 10);
  squadre[i].falliSubiti = Math.floor(Math.random() * 10);
};

const arrayNomiFalliSubiti = squadre.map(({ nome, falliSubiti }) => ({nome, falliSubiti,
}));
  
  console.log('Nuovo Array', arrayNomiFalliSubiti);
  
  squadre.forEach(squadra => {
  const {nome, falliSubiti,} = squadra;

container.innerHTML +=`
<div class="card shadow-sm" style="width: 20rem;">
  <div class="card-body">
  <h3>Snack-6</h3>
    <h4 class="card-title">Nome: ${nome}</h4>
    <p class="card-text">Falli subiti: ${falliSubiti}</p>
  </div>
</div>
`
});
