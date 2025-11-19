
let randomNumber = parseInt(Math.random()*100+1);
 
let submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessfield");
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");
let p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if ( playGame) {
    submit.addEventListener('click', function( e) {
        e.preventDefault();
         let guess = parseInt(userInput.value);
          
         validateGuess(guess);
    });
    
}


function validateGuess( guess) {
if ( isNaN(guess)) {
    alert('Please enter a valid number');
} else if( guess < 1){
    alert('Please enter number greater then 0');
}else if( guess > 100){
    alert('Please enter a number less than 100');
}else {
    prevGuess.push(guess);
    if ( numGuess === 10 ) {
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
  }
 }
}


function  checkGuess( guess) {
    if ( guess === randomNumber) {
        displayMessage(`Congrats you guessed it right number`);
        endGame();
    } else if ( guess < randomNumber ) {
        displayMessage(`Number is Too low `);
    } else if ( guess > randomNumber ) {
        displayMessage(`Number is Too high `);
    }
}

function  displayGuess( guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function  displayMessage( mesagge) {
    lowOrHi.innerHTML =`<h2>${mesagge}</h2>`;
}



function  endGame( ) {
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame" >Start a new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function  newGame() {
   let newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click' , function(e) {
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess =[];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
   });
}






 