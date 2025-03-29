 /*
 function checkPalindroma(string){
    let check = string.split('').reverse().join('');
if (string.toLowerCase() === check.toLowerCase()){
    return true;
}
else { 
    return false;
}
}

let word = prompt('Inserisci la parola');

// CHIAMATA DI FUNZIONE : ESEGUO LA FUNZIONE
let check = checkPalindroma(word);

if (check === true){
    console.log('La parola è palindroma');
}
else {
    console.log('La parola non è palindroma');
}
*/


function generateRandomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

function checkEverOrOdd(number){
   return number % 2 === 0 ? 'pari' : 'dispari';
}

let userNumber = parseInt(prompt('Inserisco il numero'));

let userChoice = prompt('Inserisco la parola pari o la parola dispari');

// GENERO IL NUMERO DEL COMPUTER : CHIAMO LA FUNZIONE GENERATE RANDOM NUMBER
let pcNumber = generateRandomNumber();

let sum = userNumber + pcNumber;
console.log(sum);

// CHIAMO LA FUNZIONE checkEverOdOdd PASSANDOGLI IL PARAMETRO sum
let checkWinner = checkEverOrOdd(sum);

if (checkWinner === userChoice){
    console.log ('Hai vinto');
}
    else {
        console.log ('Hai perso');
    }



