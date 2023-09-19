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

// Richiamiamo il container in js e lo resetto 
const container = document.querySelector('.container');
reset();


// Salvo in una costante l'opzione scelta e il button
const selectSize = document.getElementById('size-container');
const btn = document.querySelector('button')


// Dichiaro la variabile che determinerà la dimensione della griglia
let squareSize;

// Dichiaro un array che conserva l'id numerico delle bombe
const bombArr = [];
generateBomb(selectSize.value ** 2) ; 
console.log(bombArr);


// Al click parte la funzione handleclick
btn.addEventListener('click', handleClick);


// Funzione che resette il container 
// 
// generata la griglia in base all'opzione scelta
function handleClick() {

  reset();

  squareSize = selectSize.value;

  generateSquare(squareSize);

}


// Funzione che svuota l'elemento container
function reset() {

  container.innerHTML = '';
}


// Funzione per la creazione della griglia con ciclo for
// Creo un elemento con classe square 
// Lo collego al container
// Imposto la dimensione 
// Inserisco il comando che assegna un ID numerico ad ogni quadrato
// Parte la funzione toggleClicked
function generateSquare(size) {
  
  for ( let i = 1; i <= size * size; i++ ) {

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

  for ( let i = 1; i <= 10; i++ ) {
     
    let bombNumb;

    do {
      
      bombNumb = randomizer(1, maxRandom);

      // if ( !bombArr.includes(bombNumb) ) bombArr.push(bombNumb);
      // else bombNumb = randomizer(1, maxRandom)


      // console.log(bombNumb) /* */
      // console.log(bombArr) /* */
      
    }
    while (!bombArr.includes(bombNumb));

    bombArr.push(bombNumb)

  }

}


// Funzione numero randon con min e max
function randomizer(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);
}

