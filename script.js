
function computerPlay() {
    let computerChoices = ["rock", "paper", "scissor"]
    const randomComputer = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return randomComputer;
}

let computerSelection = computerPlay();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissor") {
        return "You win! Rock beats scissor";
    }  else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock";
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        return "You win! Scissor beats paper";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose. Rock loses to paper";
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        return "You lose. Paper loses to scissor";
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        return "You lose. Scissor loses to rock";
    } else {
        return "It\'s a draw! Try again.";
    }
}

const playerSelection = "paper";
console.log(playRound(playerSelection, computerSelection));