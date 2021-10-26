function computerPlay() {
    let computerChoices = ["rock", "paper", "scissors"]
    const randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return randomChoice;
}

let computerSelection = computerPlay();
console.log("The computer played: " + computerSelection);

var playerWin = 0
var computerWin = 0



function game() {

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
    
    if (playerWin < 5 || computerWin < 5) {
        playRound(playerSelection, computerSelection);
    } else {
        return "Game over.";
    }

        function playRound(playerSelection, computerSelection) {
            if (playerSelection == "rock" && computerSelection == "scissors") {
                playerWin++;
                return "You win! Rock beats scissors";
            }  else if (playerSelection == "paper" && computerSelection == "rock") {
                playerWin++;
                return "You win! Paper beats rock";
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                playerWin++;
                return "You win! Scissors beats paper";
            } else if (playerSelection == "rock" && computerSelection == "paper") {
                computerWin++;
                return "You lose. Rock loses to paper";
            } else if (playerSelection == "paper" && computerSelection == "scissors") {
                computerWin++;
                return "You lose. Paper loses to scissors";
            } else if (playerSelection == "scissors" && computerSelection == "rock") {
                computerWin++;
                return "You lose. Scissors loses to rock";
            } else {
                return "It\'s a draw! Try again.";
            } 
        }
    }

console.log(game());
console.log("Wins: " + playerWin + ", Losses:" + computerWin);

console.log(game());
console.log("Wins: " + playerWin + ", Losses:" + computerWin);

console.log(game());
console.log("Wins: " + playerWin + ", Losses:" + computerWin);

console.log(game());
console.log("Wins: " + playerWin + ", Losses:" + computerWin);
console.log(game());
console.log("Wins: " + playerWin + ", Losses:" + computerWin);