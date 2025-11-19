let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

 const genCompChoice = () => {
   const option = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random()*3);
   return option [randIdx];
 };

 const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = " #081b31";
 }

 const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin){ 
        // console.log("You win !");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        // console.log("You lose ");
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 };
 const playGame = (userChoice) => {
// console.log("user choice = ", userChoice);
const compChoice = genCompChoice();
// console.log("computer choice = ", compChoice)
 
if(userChoice === compChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if ( userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
    }else {
       userWin = compChoice === "rock" ? false : true   }
       showWinner(userWin , userChoice, compChoice);
}
 
 }; 

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener( "click" , () => {
        const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked" , userId );
    playGame(userChoice);
    });
});