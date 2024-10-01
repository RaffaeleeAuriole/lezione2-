/*funzione per generare il numero randomico da indovinare */function genRandNum(min,max){
    return Math.floor(Math.random() * (max - min + 1))+ min;
}

/*funzione per il sanitize l'input */
function sanitize(input){
    /*rimuove spazi bianchi econverte in  numero*/
    return parseInt(input.trim(), 10);
}

/*creazione della costante del numero da 1 a 100 e la variabile che conta i tentativi */
const numGen = genRandNum(1, 100);
let tentativi = 5

//inizio del gioco
console.log("---------------------------------------------------------------");
console.log("benvenuto al gioco 'indovina il numero'!\nhai 5 tentativi per indovinare il numero compreso tra 1 a 100 ");
console.log("---------------------------------------------------------------");

//inizio while
while(tentativi > 0){
    let input = prompt("inserisci un numero da 1 a 100:  ");

    /*iniziamo il sanitize*/
    let numUtente = sanitize(input);

    //controllo dell'input dell'utente
    if (isNaN(numUtente) || numUtente < 1 || numUtente > 100){
        console.log("input non valido. inserisci un numero tra 1 e 100:  ");
    }

    /*creazione dei vari segnali da dare all'utente per fargli indovinare il numero */
    if(numUtente > numGen){
        console.log("troppo grande, riprova");
    }else if (numUtente < numGen){
        console.log("troppo piccolo, riprova");
    }else{
        console.log("bravo, hai vinto!")
    }

    //decremento dei tentativi da 5 a 0
    tentativi--;
    console.log("ti restano: " + tentativi ,"tentativi");

}//fine while

//se l'utente esaurisce i tentativi
if (tentativi === 0){
    console.log("hai esaurito i tentativi, il numero corretto era: " + numGen);
}