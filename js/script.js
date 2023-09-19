
// Richiamiamo il container in js e lo resetto 
const container = document.querySelector('.container');
reset();


// Salvo in una costante l'opzione scelta e il button
const selectSize = document.getElementById('size-container');
const btn = document.querySelector('button')


// Dichiaro la variabile che determinerà la dimensione della griglia
let squareSize;


// Al click parte la funzione handleclick
btn.addEventListener('click', handleClick);


// Funzione che resette il container e viene generata la griglia in base all'opzione scelta
function handleClick() {

  reset();

  squareSize = selectSize.value;

  generate(squareSize);
}


// Funzione che svuota l'elemento container
function reset() {

  container.innerHTML = '';
}


// Funzione per la creazione della griglia con ciclo for
// Creo un elemento con classe square che collego al container
// Modifico la variabile custom css che determina width e height dei quadrati 
// Parte la funzione toggleClicked
function generate(size) {
  
  for ( let i = 1; i <= size * size; i++ ) {

    const square = document.createElement('div');
    square.className = 'square';
    container.append(square);
    
    square.style.setProperty("--number-of-square", size);

    toggleClicked(square, i);  

  };
};


// Funzione che al click aggiunge/rimuove la classe
// Stampa all'interno del quadrato un numero che corrisponde all'indice i
function toggleClicked(element, index) {  
 
  element.addEventListener('click', function() {

    element.classList.toggle('clicked');  

    element.innerHTML = `
    <span>${index}</span>
    `;
    
  });
};

