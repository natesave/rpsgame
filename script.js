function computerPlay() { //randomly chooses rock, paper or scissors for computer selection
    let computerChoices = ["rock", "paper", "scissors"]
    const randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return randomChoice;
}

let playerWin = document.querySelector('#wins');
let computerWin = document.querySelector('#losses');

function playRound(playerSelection, ) { //checks computer selection against player selection for one round
    
    let computerSelection = computerPlay();

    if (Number(playerWin.textContent) < 5 && Number(computerWin.textContent) < 5) {  
        console.log("The computer chose the weapon " + computerSelection + ".");
        console.log("You chose the weapon " + playerSelection + ".");

        if (playerSelection == "rock" && computerSelection == "scissors") {
            playerWin.textContent = Number(playerWin.textContent) + 1;
            console.log("You win this round! Rock beats scissors.");
        }  else if (playerSelection == "paper" && computerSelection == "rock") {
            playerWin.textContent = Number(playerWin.textContent) + 1;
            console.log("You win this round! Paper beats rock.");
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerWin.textContent = Number(playerWin.textContent) + 1;
            console.log("You win this round! Scissors beats paper.");
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            computerWin.textContent = Number(computerWin.textContent) + 1;
            console.log("You lose this round. Rock loses to paper.");
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerWin.textContent = Number(computerWin.textContent) + 1;
            console.log("You lose this round. Paper loses to scissors.");
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerWin.textContent = Number(computerWin.textContent) + 1;
            console.log("You lose this round. Scissors loses to rock.");
        } else {
            console.log("It\'s a draw! Try again.");
        } 
    } else if (Number(playerWin.textContent) == 5) {
        console.log("Congratulations, you won! You're the best!");
        return;
    } else {
        console.log("Game over. You lost.");
        return;
    }
}

let rock = document.getElementById('rockBtn');
rock.addEventListener('click', () => playRound("rock", ));

let paper = document.getElementById('paperBtn');
paper.addEventListener('click', () => playRound("paper", ));

let scissors = document.getElementById('scissorsBtn');
scissors.addEventListener('click', () => playRound("scissors", ));

//the code below is for the reset button
let resetBtn = document.querySelector('#reset');

function reset() {
    playerWin.textContent = 0;
    computerWin.textContent = 0;
}

resetBtn.addEventListener('click', reset);