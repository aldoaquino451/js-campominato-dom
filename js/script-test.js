/*
  3. al click sul quadrato controlliamo se il valore dell' ID è incluso nell'array bombs
  4. aggiungiamo la classe bomb e si colora di rosso
  5. se non è una bomba la prtita continua e si colora di blue 
  6. ogni volta che si colora di blue il counter auemnta di uno
*/

// Richiamiamo il container in js
// Dichiaro un array che conserva l'id numerico delle bombe 
// Resetto
const container = document.querySelector('.container');
let bombsArr = [];
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
  
  console.log(bombsArr); /* */
}


// Funzione che svuota l'elemento container e l'array delle bombe
function reset() {

  container.innerHTML = '';
  bombsArr = [];
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
    container.append(square);

    square.className = 'square';
    square._numberID = i;
    square.style.setProperty("--number-of-square", size);

    square.addEventListener('click', clicked);
  };
};


// Funzione che al click aggiunge/rimuove la classe
// Stampa all'interno del quadrato un numero che corrisponde all'indice i
function clicked() {

  this.classList.toggle('clicked');  
  this.innerHTML = `
  <span>${this._numberID}</span>
  `;

  console.log(this._numberID); 

};

// Funzione che genera 16 numeri random
// Creo un ciclo do while in cui il computer
//   1. sceglierà i numeri con la funzione random
//   2. saranno valori univoci
//   3. ogni numero viene pushato dentro un array BOMBS
function generateBomb(maxRandom) {
  for ( let i = 1; i <= bombNumb; i++ ) {
     
    let bombID;
    let numberValidation = false; 

    do { 
      bombID = randomizer(1, maxRandom);
      if (!bombsArr.includes(bombID)) numberValidation = true;
    } 
    while (!numberValidation);
    
    bombsArr.push(bombID);

  }
}


// Funzione numero randon con min e max
function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

