/*
let utente = prompt("Inserisci una parola");
let risultato = "";
for (let i = utente.length - 1; i >= 0; i--) {
    risultato += utente[i];
}

if (utente == risultato) {
    console.log("la parola è palindroma");
}
else {
    console.log("la parola non è palindroma");
}
    */


let pariDispariNumero = parseInt(prompt("pari o dispari"));
let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
let computer = Math.floor(Math.random() * 5) + 1;
console.log(computer);
let result;
result= numeroUtente + computer;
console.log(result);
if(result %2 === 0){
    console.log("numero pari");
}
    else 
    {
        console.log("numero dispari");
}


