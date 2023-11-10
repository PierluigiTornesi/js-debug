/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//é un ciclo for che dovrebbe restituire il valore di i ad ogni iterazione
//l'errore é nel >, perché cosi non entrerá mai nel for
//va messo il <


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
//questa é una funzione che restituisce il numero passato come parametro
//sommandogli 5 se é pari
//altrienti restituisce il numero uguale a prima
//l'errore sta nel = , cosi facendo assegna il valore
//per il confronto serve ===


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}
loopToFive();
//é una funzione che ha un ciclo for dove restituisce il valore di i
//per ogni iterazione che fa, come nell'esercizio 1
//gli errori sono nelle , dopo i primi due valori
//bisogna mettere il ; e bisogna mettere l'= nella condizione cosi da stampare anche il 5


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length ; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]
//funzione che mostra solo i numeri pari dentro un nuovo array
//il primo errore sta nel ; dopo l'incremento di i nel ciclo for, quest'ultimo va tolto
//il secondo errore sta nell'if, bisogna togliere il ; dopo le parentesi
//il terzo sta nella condizione dell'if, per il confronto va usato === e non =
//il quarto errore sta nell'if, e riguarda il valore da confrontare, perché cosi facendo non 
//confronta un valore, ma l'arrey , perció va scritto numbers[i]
//il quinto errore sta nel return, va messo fuori dal ciclo for
//il sesto errore sta nel push dentro il secondo array, va pushato number[i] e non i
//il settimo errore é nel -1 dentro il for, va tolto