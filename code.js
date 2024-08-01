let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
   let compChoice = Math.floor(Math.random() * 3)
    if(compChoice === 0) {
        return "Rock"
    } else if (compChoice === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// getComputerChoice()

function getHumanChoice(){
    let playerChoice = prompt("Select: Rock, Paper or Scissors")
   return playerChoice.toLowerCase();
}


