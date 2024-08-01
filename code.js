let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
   let compChoice = Math.floor(Math.random() * 3)
    if(compChoice === 0) {
        return "rock"
    } else if (compChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// getComputerChoice()

function getHumanChoice(){
    let playerChoice = prompt("Select: Rock, Paper or Scissors")
   return playerChoice.toLowerCase();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound (humanChoice, computerChoice) {
if(humanChoice === "rock"  && computerChoice === "rock"){
    console.log('Draw! Rock vs Rock.');
} else if( humanChoice ==="rock" && computerChoice === "paper"){
    console.log("You lose!! Paper beats rock!");
    return computerScore++;
} else if(humanChoice === "rock" && computerChoice === "scissors"){
    console.log('You win! Rock beats scissors!');
    return humanScore++;
} else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log('You win! Paper beats rock!');
    return humanScore++;
} else if(humanChoice === "paper" && computerChoice === "paper"){
    console.log("Draw! Paper vs Paper");
} else if( humanChoice === "paper" && computerChoice === "scissors") {
    console.log('You lose! Scissors beats paper!');
    return computerScore++;
} else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log('You lose! Rock beats scissors!');
    return computerScore++;
} else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log('You win! Scissors beats paper!');
    return humanScore++;
} else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log('Draw! Scissors vs Scissors!');
}
}

playRound(humanSelection, computerSelection);