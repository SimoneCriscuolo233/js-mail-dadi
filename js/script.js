//-----MAIL-----

//definisco un array contenente le mail delle persone invitate
const guests = [`mario.bros@gmail.com`, `luigi.bros@libero.it`, `princess.peach@gmail.com`, `princess.daisy@yahoo.it`, `toad.mushroom@alice.it`];
console.log(guests)
//definisco una variabile per l`inserimento di una mail da parte dell'utente 
const userMail = prompt(`Inserisci la tua mail`);
//definisco una variabile di base falsa che viene modificata solo nel caso ci sia una mail gia' presente in guests 
let found = false;
//Creo un ciclo per verificare che la mail inserita  dall'utente sia presente in guests
for (let i = 0; i < guests.length && !found; i++) {
  if (guests[i] === userMail) {
    found = true;
  }
}
//Stampo l'esito
if (found) {
  console.log(`Sei nella lista degli invitati`)
} else {
  console.log(`Non sei nella lista degli invitati`)
}

//-----DADI-----
//Creo delle variabili per tenere il punteggio del user e del computer  
let pcPoints = 0;
let userPoints = 0;
//Creo un sistema di generazione randomico di numeri sia per il computer che per l'utente
const pcNumber = Math.floor(Math.random() * 6) + 1;
const userNumber = Math.floor(Math.random() * 6) + 1;
//Controllo quale dei due numeri sia piu' grande e a seconda del risultato stampo un messaggio
//Vince il computer
if (pcNumber > userNumber) {
  pcPoints++;
  console.log(`Il numero del computer ${pcNumber} e' piu' grande del numero del utente ${userNumber}. Vince il computer. ${userPoints} ${pcPoints}`)
} 
//Vince l'utente
else if (userNumber > pcNumber) {
  userPoints++;
  console.log(`Il numero del computer ${pcNumber} e' piu' piccolo del numero del utente ${userNumber}. Hai Vinto. ${userPoints} ${pcPoints}`)
} 
//Pareggio
else {
  console.log(`I numeri del compunter ${pcNumber} e dell'utente ${userNumber} sono uguali
    Hai pareggiato. ${userPoints} ${pcPoints}`)
}

