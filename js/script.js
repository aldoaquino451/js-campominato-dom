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
const bombNumb = 16; 

let counter = 0;
let bombsArr = [];
let squareSize;


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
  
  console.log(bombsArr); /* */
}


/* ----- INIT: RESET ----- */

function reset() {

  container.innerHTML = '';
  bombsArr = [];
}


/* ----- INIT: SQUARE ----- */

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

function clicked() {
  
  // console.log(this._numberID); 


  if ( bombsArr.includes(this._numberID) ) {
    this.classList.add('bomb')
  }
  else {
    this.classList.add('clicked');  
    counter++;
  }
  
  /* this.innerHTML = `
  <span>${this._numberID}</span>
  `; */

  console.log(counter);

};


/* ------ INIT: BOMBS ------- */

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

  // return bombsArr;
}


function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

