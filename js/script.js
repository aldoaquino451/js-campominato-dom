/*
  3. al click sul quadrato controlliamo se il valore dell' ID è incluso nell'array bombs
  4. aggiungiamo la classe bomb e si colora di rosso
  5. se non è una bomba la prtita continua e si colora di blue 
  6. ogni volta che si colora di blue il counter auemnta di uno
*/

const startsAgain = `
<div id="starts-again">

<h4>Per ricominciare clicca sul bottone START!</h4>

</div>
`;

/* VARIABILI */
const mainWrapper = document.querySelector('.main-wrapper')
const result = document.createElement('h3');
mainWrapper.append(result);

const container = document.querySelector('.container');
const gridSelected = document.getElementById('size-grid');
const btn = document.querySelector('.btn');
const numTotBombs = 16; 

let squareSize;

let counter = 0;
let bombsArr = [];
let squareArr = [];
let message = '';
let gameover = false;

/* INIT */

// reset();

btn.addEventListener('click', handleClick);



/* FUNCTION */

/* -------- INIT --------- */

function handleClick() {

  reset();

  squareSize = gridSelected.value;

  generateBomb(squareSize ** 2); 
  generateSquare(squareSize);
  
}


/* ----- INIT: RESET ----- */

function reset() {

  container.innerHTML = '';
  counter = 0;
  bombsArr = [];
  squareArr = [];
  message = '';
  gameover = false;

}


/* ------ INIT: BOMBS ------- */

function generateBomb(maxRandom) {
  for ( let i = 0; i < numTotBombs; i++ ) {

    while (bombsArr.length < numTotBombs) { 

      let bomb = randomizer(0, maxRandom - 1);
      
      if (!bombsArr.includes(bomb)) {
        bombsArr.push(bomb);
      }
      
    }; 
    
  };

  console.log(bombsArr);

};


function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


/* ----- INIT: SQUARE ----- */

function generateSquare(size) {
  
  for ( let i = 0; i < size ** 2; i++ ) {
    
    const square = document.createElement('div');

    square.style.setProperty("--number-of-square", size);
    container.append(square);

    square._numberID = i;    
    
    square.className = 'square';
    squareArr = document.getElementsByClassName('square');

    square.addEventListener('click', clicked);

  };

};


function clicked() {

  if (gameover === false)  {

    const numSquareFree = squareSize ** 2 - numTotBombs;

    if (!bombsArr.includes(this._numberID)) {

      this.classList.add('clicked'); 
      this.removeEventListener('click', clicked);
      
      counter++;
      console.log(counter);
      
      if (counter === numSquareFree) {
        
        message = 'Hai vinto! Sei riuscito a completare il gioco schivando tutte le bombe!';

        gameover = true;
        
      };
      
    }
    else {
      
      for ( let i = 0; i < numTotBombs; i++ ) {
        
        let bombPosition = bombsArr[i];
        
        squareArr[bombPosition].classList.add('bomb');
        squareArr[bombPosition].removeEventListener('click', clicked);
        
      }
      
      message = `
        Peccato, hai calpestato una bomba! <br> Hai totalizzato il punteggio di ${counter} su ${numSquareFree}
      `;

      gameover = true;

    };


  };

  if (gameover === true) {

    container.innerHTML += startsAgain;
    result.innerHTML = message;
    
  }
  

};
