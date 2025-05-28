

const choices = ["rock", "paper", "scissors"];
let playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let playerScoreNum = document.getElementById("playerScoreNum");
let computerScoreNum = document.getElementById("computerScoreNum");

let pScore = 0;
let cScore = 0;
let result = "";

function playGame(playerChoice){
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === computerChoice){
    result = "IT'S A TIE!"
  }
  else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN! :D" : "YOU LOSE! :(";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "YOU WIN! :D" : "YOU LOSE! :(";
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "YOU WIN! :D" : "YOU LOSE! :(";
        break;
    }
  }

  resultDisplay.classList.remove("greenText", "redText");

  if(result === "YOU WIN! :D"){
    pScore++;
    playerScoreNum.textContent = pScore;
    playerScoreNum.classList.add("greenText");
    resultDisplay.classList.add("greenText");
  }
  else if(result === "YOU LOSE! :("){
    cScore++;
    computerScoreNum.textContent = cScore;
    computerScoreNum.classList.add("redText");
    resultDisplay.classList.add("redText");
  }

  resultDisplay.textContent = result;
  playerDisplay.textContent = `PLAYER (You): ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
}