//Pari e Dispari
//L’utente sceglie pari o dispari 
let sceltaUtentePariODispari = (prompt ("pari o dispari?"));
console.log(sceltaUtentePariODispari);

//e inserisce un numero da 1 a 5:
let numeroUtente = parseInt(prompt ("Scegli un numero da 1 a 5"));
console.log(numeroUtente);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione):

function generaNumeroRandom (min, max){
    const newRandomNumLocal = Math.floor(Math.random() * (max - min)) + min;
    return newRandomNumLocal;
};

let numeroRandom = generaNumeroRandom (1, 5);
console.log(numeroRandom);

//Sommiamo i due numeri 
let somma = parseInt (numeroUtente) + parseInt (numeroRandom);
console.log(somma);


//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
function stabilisciSommaPariDispari (){
    
    if (somma % 2 === 0){
        console.log('pari'); 
    } else {
        console.log('dispari');
    };

    let risultato = 'pari' || 'dispari';

    return risultato;
};

//Stabiliscilo per davvero:

stabilisciSommaPariDispari(somma);


//Dichiariamo chi ha vinto:

if (sceltaUtentePariODispari === risultato){
    console.log('hai vinto');
} else {
    console.log('hai perso');
};