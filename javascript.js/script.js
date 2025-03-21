let utente = prompt("Inserisci una parola");
let parola;
let controllo = false;
function palindroma(parola) {

    let risultato =[];
    for (let i = parola.length - 1 && controllo ===false; i = 0; i--) {
        risultato += parola[i];
    }
    return risultato;
}

if (utente == palindroma) {
    controllo = true;
}
if (utente == palindroma) {
    console.log("la parola è palindroma");
}
else {
    console.log("la parola non è palindroma");
}