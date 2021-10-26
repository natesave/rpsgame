
let playerInput = prompt("Let's play rock, paper, scissors!");
let playerChoice = playerInput.toLowerCase();

function playerPlay(playerChoice) {
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return playerChoice;
    } else {
        return "Invalid play";
    }
}

let playerSelection = playerPlay(playerChoice);
console.log("You played: " + playerPlay(playerChoice));

function computerPlay() {
    let computerChoices = ["rock", "paper", "scissors"]
    const randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return randomChoice;
}

let computerSelection = computerPlay();
console.log("The computer played: " + computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors";
    }  else if (playerSelection == "paper" && computerSelection == "rock") {
         return "You win! Paper beats rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose. Rock loses to paper";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose. Paper loses to scissors";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose. Scissors loses to rock";
    } else {
        return "It\'s a draw! Try again.";
    }
}

console.log(playRound(playerSelection, computerSelection));

