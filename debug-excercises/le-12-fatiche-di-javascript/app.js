const input = document.querySelector('input');
const array = [];
//il primo errore sta nell'inizializzazione dell'array
//non va messo a null ma scritto array = []

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == 0) return;//la condizione con lenght deve controllare rispetto a un numero e non ad una stringa

    array.push(input.value);
    //il secondo errore sta nella funzione add, va usata push per inserire un valore dentro un array

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = input.value;//qui non é text ma innerHTML
    document.querySelector('ul').append(li);
    //il terzo errore sta in push, non é un metodo per aggiungere un elemento dell'html, in questo caso li, dentro ul. Va usato append
    

    let counter = 0;//va settato come un numero
    let item    = array[0];
    let max   = 1;//qui max va messa let
    const elems = [];

    for (let i = 0; i < array.length; i++) {//qui mancava il .lenght 
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) {//qui va incrementato j e non i
            if (array[i] == array[j]) {
                counter++;
                if (max < counter){//qui mancavano le {} per chiudere l'if
                    max  = counter;
                    item = array[i];
                }
            }
        }

        counter = 0;
    }

    const alert = document.querySelector('.alert');//qui va messo il queryselector

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`);//bisogna togliere gli apici e mettere il ``
});