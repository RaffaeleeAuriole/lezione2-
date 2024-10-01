/*funzione per generare il numero randomico da indovinare */function genRandNum(min,max){
    return Math.floor(Math.random() * (max - min + 1))+ min;
}

/*funzione per il sanitize l'input */
function sanitize{

}

/*creazione della costante del numero da 1 a 100 e la variabile che conta i tentativi */
const numGen = genRandNum(1, 100);
let tentativi = 5

console.log("benvenuto al gioco 'indovina il numero'! hai 5 tentativi per indovinare il numero compreso tra 1 a 100 ");

while(tentativi > 0){
    let input = prompt("inserisci un numero da 1 a 100");
}

/*iniziamo il sanitize*/
let numUtente = sanitize(input);
if (isNaN(numUtente) || numUtente < 1 || numUtente > 100){
    console.log("input non valido. inserisci un numero tra 1 e 100");
}

/*creazione dei vari segnali da dare all'utente per fargli indovinare il numero */

if(numUtente > numGen){
    
}

