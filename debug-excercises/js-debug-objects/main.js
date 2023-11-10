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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'benzina'
    },
];
//il primo errore sta nella virgola mancante dopo la }
//il quinto errore sta nella scrittura di Diesel, ha la d maiuscola
//il sesto errore sta nella scrittura di Benzina, ha la B maiuscola


const gasolineCars = cars.filter( (auto) => auto.type === 'benzina');
//il secondo errore sta nella scrittura di >=, vanno invertiti
const dieselCars = cars.filter( (auto) => {
    return auto.type === 'diesel';
});
//il terzo errore sta nella mancanza del return

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' && auto.type !== 'diesel';
});
//il quarto errore sta nell'|| , va messo un &&


//questo codice restituisce in tre scritte differenti, tutte le auto di un certo tipo
console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);
//in questo log verranno scritte tutte le auto a benzina

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);
//in questo log verranno scritte tutte le auto a diesel


console.log('Tutte le altre auto');
console.log(otherCars);
//in questo log verranno scritte tutte le altre auto diverse da quelle prima



