//Pari e Dispari
//L’utente sceglie pari o dispari 
let pariODispari = (prompt ("Pari o Dispari?"));
console.log(pariODispari);

//e inserisce un numero da 1 a 5:
let numeroUtente = (prompt ("Scegli un numero da 1 a 5"));
console.log(numeroUtente);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione):

function generaNumeroRandom (min, max){
    const newRandomNumLocal = Math.floor(Math.random() * (max - min)) + min;
    return newRandomNumLocal;
};

let numeroRandom = generaNumeroRandom (1, 5);
console.log(numeroRandom);

//Sommiamo i due numeri 
let somma = parseInt (numeroUtente + numeroRandom);
console.log(somma);


//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
function stabilisciSomma (){

}



//Dichiariamo chi ha vinto.