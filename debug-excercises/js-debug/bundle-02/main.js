/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message
}
console.log(checkAge());
//questa funzione dovrebbe restituire un mesaggio in base all'eta che ho
//il primo errore sta nel mettere const a message, va messo let
//il secondo errore é che manca il return del message

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();
//questa funzione dovrebbe scrivermi il numero di quanti colori ho nella palette
//l'errore sta nella scritta length


// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
//questa funzione dovrebbe sommare il numero inserito dall'utente e 12 e riportare il risultato
//l'errore sta nel fatto che all'inizio , viene si chiamato un numero, ma verrá salvato in una stringa e quindi verrá concatenato a 12
//per risolverlo basta scrivere parseInt prima del prompt


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
//questa funzione verifica se l'email che viene inserita dall'utente sia valida o meno
//in base all'array delle email su cui avviene la verifica
//l'errore sta nel fatto che la variabile grantAccess é inizializzata e poi cambiata in una stringa e non in un valore booleano
//perció o nella verifica si mette 'true' scritto come una stringa, altrimenti si cambia il valore della variabile e si imposta a false e true come booleani


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }

        }

    }
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
    checkAccessImproved();
    //questa funzione verifica se l'email inserita sia valida o meno
    // l'errore sta nel fatto che grantAccess non é un valore booleano, ma una stringa
    //inoltre se spostiamo l'if fuori dal ciclo ci stamperá solo una volta se l'accesso sia consentito o negato





























