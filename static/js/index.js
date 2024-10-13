/*funzione per generare il numero randomico da indovinare */
function genRandNum(min = 0,  max = 100){
            numGen = Math.random()
            numGen = numGen * (max - min) + min
            return Math.floor(numGen)
        }
/*funzione per il sanitize l'input */
function sanitize(input){
    /*rimuove spazi bianchi e converte in  numero*/
    return parseInt(input.trim(), 10);
}
//funzione che crea un evento e alla variabile numUtente fa il sanitize con la classe document usando il suo oggetto queryselector he seleziona l'attributo value
function handleClick(event){
    numUtente = sanitize(document.querySelector("#guess").value);
    console.log(userNumber);
    /*creazione dei vari segnali da dare all'utente per fargli indovinare il numero */
    if(numUtente > numGen){
        console.log("troppo grande, riprova");
        tentativi--;  
    }else if (numUtente < numGen){
        console.log("troppo piccolo, riprova");
        tentativi--;
    }else{
        console.log("bravo, hai vinto!")
    }
    if (tentativi === 0){
        console.log("hai esaurito i tentativi, il numero corretto era: " + numGen);
    }
}
/*creazione della costante del numero da 1 a 100 e la variabile che conta i tentativi */
const numGen = genRandNum(1, 100);
let tentativi = 5
console.log(randomNumber)
let button = document.querySelector("#guessButton")
button.addEventListener("click", handleClick);