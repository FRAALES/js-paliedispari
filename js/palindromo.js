//Chiedere all’utente di inserire una parola

let parolaUtente = prompt('Inserisci una parola:');

// cerco di capire se la parola è palindroma:

//capisco quanto è lunga la parola (quante lettere ha, con .length)
let lunghezzaParolaUtente = parolaUtente.length;
console.log(lunghezzaParolaUtente);

//Se la prima parte della parola contiene le stesse identiche lettere della seconda parte della parola rigirate allora la parola è palindroma.


//Creare una funzione per capire se la parola inserita è palindroma

function stabilisciSePalindromo (parolaUtente){
    //cicla attraverso metà parola
    for (let i = 0; i < lunghezzaParolaUtente / 2; i++){
        //controlla se la prima e la seconda metà sono uguali
        if (parolaUtente[i] !== parolaUtente[lunghezzaParolaUtente - 1 - i]){
            return 'non è un palindromo';
        }else{
            return 'è un palindromo';
        }
    }
    
}


//Dichiara il valore della funzione
let parolaPalindromaONo = stabilisciSePalindromo (parolaUtente);
console.log(parolaPalindromaONo);
