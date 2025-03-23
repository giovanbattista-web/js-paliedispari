let utente = prompt("Inserisci una parola");
    let risultato = '';
    for (let i = utente.length - 1; i >= 0; i--) {
        risultato += utente[i];
    }

    if (utente == risultato) {
        console.log("la parola è palindroma");
    }
    else {
        console.log("la parola non è palindroma");
    }
   

