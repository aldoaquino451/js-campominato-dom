/*
  3. al click sul quadrato controlliamo se il valore dell' ID è incluso nell'array bombs
  4. aggiungiamo la classe bomb e si colora di rosso
  5. se non è una bomba la prtita continua e si colora di blue 
  6. ogni volta che si colora di blue il counter auemnta di uno
*/


/* VARIABILI */
const container = document.querySelector('.container');
const gridSelected = document.getElementById('size-grid');
const btn = document.querySelector('.btn')
const bombNumb = 7; 

let counter = 0;
let squareSize;
let bombsArr = [];
let squareArr = [];


let bombID;
let gameover = false;



/* INIT */
reset();

btn.addEventListener('click', handleClick);










/* FUNCTION */

/* -------- INIT --------- */

function handleClick() {

  reset();

  squareSize = gridSelected.value;

  generateBomb(squareSize ** 2); 
  generateSquare(squareSize);
  
  console.log(bombsArr);
  console.log(bombsArr.length);
  console.log(squareArr);
  console.log(squareArr.length);
}


/* ----- INIT: RESET ----- */

function reset() {

  container.innerHTML = '';
  bombsArr = [];
}


/* ------ INIT: BOMBS ------- */

function generateBomb(maxRandom) {
  for ( let i = 1; i <= bombNumb; i++ ) {
     
    let numberValidation = false; 

    do { 
      bombID = randomizer(1, maxRandom);
      if (!bombsArr.includes(bombID)) numberValidation = true;
    } 
    while (numberValidation === false);
    
    bombsArr.push(bombID);

  }

  // return bombsArr;
}


function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


/* ----- INIT: SQUARE ----- */

function generateSquare(size) {
  
  for ( let i = 1; i <= size ** 2; i++ ) {

    const square = document.createElement('div');
    container.append(square);

    square._numberID = i;
    square.style.setProperty("--number-of-square", size);
    
    square.className = 'square';
    squareArr = document.getElementsByClassName('square');
        
    square.addEventListener('click', clicked);

  };

};


/**
 * 
 */
function clicked() {
  
  // totSquareClicked = squareSize ** 2 - bombNumb;

  if ( gameover === false )  {

    if (bombsArr.includes(this._numberID)) {

      gameover = true;

      for ( let i = 0; i < bombNumb + 1; i++ ) {

        
        squareArr[bombsArr[i] - 1].classList.add('bomb');
        
      }

      return console.log('Hai perso!');

      
    }
    else {
      
      this.classList.add('clicked'); 
      this.removeEventListener('click', clicked);
      
      counter++;
      console.log(counter);

      if ( counter === 18 ) {

        console.log('Vittoria');
        gameover = true;

      };

    };

  };

 

};

/*
  if clicco su la bomba 
    gameover
    colora tutte le bombe
  else 
    si continua
      if sono finiti i quadrati blu
        gameove



*/





// salva in una varibile il numero totale di quadrati cliccabili, che ho dichiarato nella funzione inziale handleclick
// dichiaro un varibile flag di game over per verificare quando terminare il gioco
// devo inserire la condizione di game over ovvero click sulla bomba (elemento del bombsArr) 
// stampo il messaggio di game over con scritto il numero di quadrati azzurri cliccati (counter) su un totale di quadrati cliccabili
// oppure quella di vittoria se ho cliccato tutti i bottoni cliccabili 
