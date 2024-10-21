/*funzione per generare il numero randomico da indovinare */
function genRandNum(min = 0,  max = 100){
            let numGen = Math.random();
            numGen = numGen * (max - min) + min;
            return Math.floor(numGen);
        }
/*funzione per il sanitize l'input */
function sanitize(variabile){
    let sanificate
    if (!isNaN(variabile)){
        sanificate = parseInt(variabile.trim());
    } else {
        sanificate = NaN;
    }
    return sanificate
}
//funzione che crea un evento e alla variabile numUtente fa il sanitize con la classe document usando il suo oggetto queryselector he seleziona l'attributo value
function handleClick(event){
    let inpt = document.querySelector("#guess").value;
    let numeroInserito= sanitize(inpt);
    let ele1 = document.querySelector("#messaggio1");
    let ele2 = document.querySelector("#messaggio2");

    if(isNaN(numeroInserito)) {
        console.log("inserisci un numero valido");
        ele1.innerHTML= `non hai ancora inserito nessun numero`;
        ele2.innerHTML=`inserisci un numero valido`;
    } else {
        if(numeroInserito > numGen){
            console.log("il numero " + numeroInserito + "è troppo grande");
            tentativi -= 1;
            index += 1;
            console.log("hai ancora " + tentativi + "tentativi");
            ele1.innerHTML = `il numero <strong>${numeroInserito}</strong> è troppo piccolo`
            ele2.innerHTML=`hai ancora a disposizione <strong>${tentativi}</strong> tentativi`
        }else if(numeroInserito === numGen){
            console.log("bravo, hai vinto");
            ele1.innerHTML=`bravo hai vinto! hai usato <strong>${index + 1}</strong>`
            ele2.innerHTML=`il numero è effetivamente <strong>${numeroInserito}</strong>.`
            indovinato = true;
            document.querySelector("#guess").disabled = true;
            document.querySelector("#guessBtn").disabled = true;
        }
    }
    if (tentativi === 0 && !indovinato){
    console.log("mi dispiace hai perso. il numero era" + numGen);
    ele1.innerHTML=`mi dispiace hai perso`;
    ele2.innerHTML=`il numero era <strong>${numGen}</strong>`
    document.querySelector("#guess").disabled = true;
    document.querySelector("#guessBtn").disabled=true;
    }
}
/*creazione della costante del numero da 1 a 100 e la variabile che conta i tentativi */
console.log("benvenuto a 'INDOVINA IL NUMERO!'");

const numGen = genRandNum(1, 100);
let tentativi = 5;
let index = 0;
let indovinato = false;
let btn = document.querySelector("#guessBtn");
btn.addEventListener("click", handleClick);