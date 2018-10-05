/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100

Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.
*/

function seatResult(){
  let colum = 1;
  let seat = 0;
  let newTab = [];

  for(let i = 0; i<26;i++){
    for(let j = 0; j<100;j++){
      seat ++;
      newTab.push(colum+" - "+seat);
    }
    colum++;
    seat=0;
  }
  return newTab;
}

console.log(seatResult());