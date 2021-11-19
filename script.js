function computerPlay() { //randomly chooses rock, paper or scissors for computer selection
    let computerChoices = ["rock", "paper", "scissors"]
    const randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    console.log("The computer chose the weapon " + randomChoice + ".");
    return randomChoice;
}

let playerWin = 0;
let computerWin = 0;

function playRound(playerSelection, ) { //checks computer selection against player selection for one round
    
    let computerSelection = computerPlay();

    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerWin++;
        console.log("You win this round! Rock beats scissors");
    }  else if (playerSelection == "paper" && computerSelection == "rock") {
        playerWin++;
        console.log("You win this round! Paper beats rock");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerWin++;
        console.log("You win this round! Scissors beats paper");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerWin++;
        console.log("You lose this round. Rock loses to paper");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerWin++;
        console.log("You lose this round. Paper loses to scissors");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerWin++;
        console.log("You lose this round. Scissors loses to rock");
    } else {
        console.log("It\'s a draw! Try again.");
    } 
}

let rock = document.getElementById('rockBtn');
rock.addEventListener('click', () => playRound("rock", ));

let paper = document.getElementById('paperBtn');
paper.addEventListener('click', () => playRound("paper", ));

let scissors = document.getElementById('scissorsBtn');
scissors.addEventListener('click', () => playRound("scissors", ));


