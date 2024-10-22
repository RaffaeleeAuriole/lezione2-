/* Funzione per generare il numero randomico da indovinare */
function genRandNum(min = 0, max = 100) {
    let num = Math.floor(Math.random() * (max - min) + min);
    return num;
}

/* Funzione per il sanitize dell'input */
function sanitize(Var) {
    let sanificata;
    if (!isNaN(Var)) {
        sanificata = parseInt(Var.trim());
    } else {
        sanificata = NaN;
    }
    return sanificata;
}

/* Funzione che crea un evento e alla variabile numUtente fa il sanitize con la classe document usando il suo oggetto queryselector he seleziona l'attributo value */
function handleClick(event) {
    let input = document.querySelector("#guess").value;
    let numeroInserito = sanitize(input);
    let ele1 = document.querySelector("#messaggio1");
    let ele2 = document.querySelector("#messaggio2");

    if (isNaN(numeroInserito)) {
        ele1.innerHTML = "Non hai ancora inserito nessun numero";
        ele2.innerHTML = "Inserisci un numero valido";
    } else {
        if (numeroInserito > numGenerato) {
            ele1.innerHTML = "Il numero <strong>" + numeroInserito + "</strong> è troppo grande";
            tentativi -= 1;
            index += 1;
            ele2.innerHTML = "Hai ancora a disposizione <strong>" + tentativi + "</strong> tentativi";
        } else if (numeroInserito < numGenerato) {
            ele1.innerHTML = "Il numero <strong>" + numeroInserito + "</strong> è troppo piccolo";
            tentativi -= 1;
            index += 1;
            ele2.innerHTML = "Hai ancora a disposizione <strong>" + tentativi + "</strong> tentativi";
        } else {
            ele1.innerHTML = "Bravo, hai vinto! Hai usato <strong>" + (index + 1) + "</strong> tentativi";
            ele2.innerHTML = "Il numero è effettivamente <strong>" + numeroInserito + "</strong>";
            indovinato = true;
            document.querySelector("#guess").disabled = true;
            document.querySelector("#guessBtn").disabled = true;
        }
    }

    if (tentativi === 0 && !indovinato) {
        ele1.innerHTML = "Mi dispiace, hai perso.";
        ele2.innerHTML = "Il numero era <strong>" + numGenerato + "</strong>";
        document.querySelector("#guess").disabled = true;
        document.querySelector("#guessBtn").disabled = true;
    }
}

/* Creazione della costante del numero da 1 a 100 e la variabile che conta i tentativi */
const numGenerato = genRandNum(1, 100);
let tentativi = 5;
let index = 0;
let indovinato = false;
let btn = document.querySelector("#guessBtn");
btn.addEventListener("click", handleClick);
