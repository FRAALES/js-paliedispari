//Chiedere all’utente di inserire una parola

let parolaUtente = prompt('Inserisci una parola:');

// cerco di capire se la parola è palindroma:

//capisco quanto è lunga la parola (quante lettere ha, con .length)
let lunghezzaParolaUtente = parolaUtente.length;
console.log(lunghezzaParolaUtente);

//scompongo la parola a metà;
let metaParola = lunghezzaParolaUtente / 2;
console.log(metaParola);

//Estraggo la prima metà della parola:
let primaMetaParolaUtente = parolaUtente.substr(0, metaParola);
console.log(primaMetaParolaUtente);


//Estraggo la seconda metà della parola:
let secondaMetaParolaUtente = parolaUtente.substr(-metaParola, metaParola);
console.log(secondaMetaParolaUtente);


//Creare una funzione per capire se la parola inserita è palindroma





//Funzioni
