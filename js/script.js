// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let buttonP = document.getElementById('pari');
console.log(buttonP);
let buttonD = document.getElementById('dispari');
console.log(buttonD);
let numeroPari = document.getElementsByClassName('numero-pari');
let numeroDispari = document.getElementsByClassName('numero-dispari');


const evenBtn = document.getElementById("even");
const oddBtn = document.getElementById("odd");
evenBtn.addEventListener("click", even);
oddBtn.addEventListener("click", odd);
let userNumber;
let pcNumber;

function even () {
    userNumber = parseInt(Math.floor(prompt("inserisci un numero da 1 a 5")));
    if (userNumber < 1 || userNumber > 5) {
        alert("il numero inserito non è corretto. Riprova")
        return;
    }
    pcNumber = Math.floor(Math.random() * 5 + 1);
    alert("il computer ha scelto  " + pcNumber);
    let somma = userNumber + pcNumber;
    alert(`La somma dei vostri numeri è   ${somma}`)
    if (somma % 2 === 0) {
        alert("Hai vinto!");
    } else {
        alert("Hai perso!")
    }
}
function odd () {
    userNumber = parseInt(Math.floor(prompt("inserisci un numero da 1 a 5")));
    if (userNumber < 1 || userNumber > 5) {
        alert("il numero inserito non è corretto. Riprova")
        return;
    }
    pcNumber = Math.floor(Math.random() * 5 + 1);
    alert("il computer ha scelto  " + pcNumber);
    let somma = userNumber + pcNumber;
    alert(`La somma dei vostri numeri è   ${somma}`)
    if (somma % 2 === 0) {
        alert("Hai perso!");
    } else {
        alert("Hai vinto!");
    }
}