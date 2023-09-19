/*

  0. Alla funzione generate inserisco il comando che assegna un ID numerico ad ogni quadrato
  1. Costruisco una Funzione random con intervallo - 1 - e - valore massimo delle celle - (va quindi inserita dopo la scelta delle dimensioni della griglia e deve partire al click del button dello start)
  2. Creo un ciclo do while in cui il computer
      1. sceglierà 16 valori casuali
      2. saranno valori univoci
      3. ogni numero viene pushato dentro un array BOMBS
  3. al click sul quadrato controlliamo se il valore dell' ID è incluso nell'array bombs
  4. aggiungiamo la classe bomb e si colora di rosso
  5. se non è una bomba la prtita continua e si colora di blue 
  6. ogni volta che si colora di blue il counter auemnta di uno

*/

// Richiamiamo il container in js
// Dichiaro un array che conserva l'id numerico delle bombe 
// Resetto
const container = document.querySelector('.container');
let bombArr = [];
reset();

// Dichiare in una variabile il numero di bombe, sarà uguale per ogni griglia
const bombNumb = 16; 


// Salvo in una costante l'elemento select e l'elemento button
const gridSelected = document.getElementById('size-grid');
const btn = document.querySelector('.btn')


// Dichiaro la variabile che determinerà la dimensione della griglia
let squareSize;


// Al click parte la funzione handleclick
btn.addEventListener('click', handleClick);


// Funzione che resette il container 
// generata la griglia in base all'opzione scelta
function handleClick() {

  reset();

  squareSize = gridSelected.value;

  generateSquare(squareSize);
  
  generateBomb(squareSize ** 2); 
  
  console.log(bombArr);
}


// Funzione che svuota l'elemento container e l'arrey delle bombe
function reset() {

  container.innerHTML = '';
  bombArr = [];
}


// Funzione per la creazione della griglia con ciclo for
// Creo un elemento con classe square 
// Lo collego al container
// Imposto la dimensione 
// Inserisco il comando che assegna un ID numerico ad ogni quadrato
// Parte la funzione toggleClicked
function generateSquare(size) {
  
  for ( let i = 1; i <= size ** 2; i++ ) {

    const square = document.createElement('div');
    square.className = 'square';

    container.append(square);
    
    square.style.setProperty("--number-of-square", size);
    
    square._numberID = i;

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

    console.log(element)
    
  });
};


// Funzione che genera 16 numeri random
// Creo un ciclo do while in cui il computer
//   1. sceglierà i numeri con la funzione random
//   2. saranno valori univoci
//   3. ogni numero viene pushato dentro un array BOMBS
function generateBomb(maxRandom) {

  for ( let i = 1; i <= bombNumb; i++ ) {
     
    let bombID = i;
    let numberValidation = false; 

    do {
      
      bombID = randomizer(1, maxRandom);

      if (!bombArr.includes(bombID)) numberValidation = true;

    } 
    while (!numberValidation);
    
    bombArr.push(bombID)

  }

}


// Funzione numero randon con min e max
function randomizer(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);
}

