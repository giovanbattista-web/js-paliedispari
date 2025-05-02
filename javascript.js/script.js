 // FUNZIONE DA ESEGUIRE PER CONTROLLARE SE LA PAROLA INSERITA E' PALINDROMA
 function checkPalindroma(string){
    let check = string.split('').reverse().join('');
if (string.toLowerCase() === check.toLowerCase()){
    return true;
}
else { 
    return false;
}
}

// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA
let word = prompt('Inserisci la parola');

// CHIAMATA DI FUNZIONE : ESEGUO LA FUNZIONE
let check = checkPalindroma(word);

// SE LA CONDIZIONE E' VERIFICATA LA PAROLA INSERITA E' PALINDROMA
if (check === true){
    console.log('La parola è palindroma');
}

// ALTRIMENTI SE LA CONDIZIONE E' NON VERIFICATA LA PAROLA INSERITA NON E' PALINDROMA
else {
    console.log('La parola non è palindroma');
}


// FUNZIONE DA ESEGUIRE PER GENERARE UN NUMERO RANDOM DA 1 A 5
function generateRandomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

// FUNZIONE DA ESEGUIRE PER STABILIRE SE SI TRATTA DI UN NUMERO PARI O DI UN NUMERO DISPARI 
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

// SE IL VALORE FINALE E' UGUALE A QUELLO INSERITO ALLORA HO VINTO 
if (checkWinner === userChoice){
    console.log ('Hai vinto');
}
    // SE IL VALORE FINALE NON E' UGUALE A QUELLO INSERITO ALLORA HO PERSO
    else {
        console.log ('Hai perso');
    }



