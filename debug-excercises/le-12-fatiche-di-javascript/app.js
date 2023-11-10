const input = document.querySelector('input');
const array = [];
//il primo errore sta nell'inizializzazione dell'array
//non va messo a null ma scritto array = []

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == '') return;

    array.push(input.value);
    //il secondo errore sta nella funzione add, va usata push per inserire un valore dentro un array

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.text = input.value;
    document.querySelector('ul').append(li);
    //il terzo errore sta in push, non é un metodo per aggiungere un elemento dell'html, in questo caso li, dentro ul. Va usato append
    

    let counter = '';
    let item    = array[0];
    const max   = 1;
    const elems = [];

    for (let i = 0; i < array; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; i++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter)
                max  = counter;
                item = array[i];
            }
        }

        counter = 0;
    }

    const alert = document.getElementsByClassName('alert');

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log('${item} trovato ${max} volte');
});