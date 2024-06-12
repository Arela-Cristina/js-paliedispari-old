// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// 3. partite sempre semplici con log e prompt, passerete semmai successivamente all’input/output in pagina.


let userChoice = prompt('Escegli Pari o dispari');
let userChoiceNumber = parseInt(prompt('Sceglie un numero dal 1 al 5'));
console.log(userChoice, userChoiceNumber);

let pcChoice = randomNumber();
console.log('Scelta pc', pcChoice);

let somma = userChoiceNumber + pcChoice;
console.log(somma);

let resultato = pariODispari(somma);
console.log('Sono il risultato', resultato);

if(userChoice === resultato){
    console.log('Hai vinto')
} else {
    console.log('Hai perso')
}

//funzione # 1 al 5 pc
function randomNumber() {
    let x = Math.floor((Math.random() * 5) + 1);
    return x;
}
//funzione pari o dispari
function pariODispari(numero) {
    if (numero % 2 === 0) {
        return 'pari';

    } else
        return 'dispari'
}