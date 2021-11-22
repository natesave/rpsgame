function computerPlay() { //randomly chooses rock, paper or scissors for computer selection
    let computerChoices = ["rock", "paper", "scissors"]
    const randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return randomChoice;
}

//score counter for each round
let playerWin = document.querySelector('#wins');
let computerWin = document.querySelector('#losses');

function playRound(playerSelection, ) { //checks computer selection against player selection for one round
    
    let computerSelection = computerPlay();
    let gametext = document.querySelector('#gameResult');

    if (Number(playerWin.textContent) < 5 && Number(computerWin.textContent) < 5) {  
        let comptext = document.querySelector('#npcWeapon'); //shows what the computer played
        comptext.textContent = "The computer's weapon: " + computerSelection;
        let playertext = document.querySelector('#pWeapon'); //shows what player played
        playertext.textContent = "Your weapon: " + playerSelection;
        let resulttext = document.querySelector('#roundResults'); //shows result of round

        if (playerSelection == "rock" && computerSelection == "scissors") {
            playerWin.textContent = Number(playerWin.textContent) + 1;
            resulttext.textContent = "You win this round! Rock beats scissors.";
            document.getElementById('rockBtn').style.backgroundColor = "red";
            document.getElementById('img3').style.backgroundColor = "red";
        }  else if (playerSelection == "paper" && computerSelection == "rock") {
            playerWin.textContent = Number(playerWin.textContent) + 1;
            resulttext.textContent = "You win this round! Paper beats rock.";
            document.getElementById('paperBtn').style.backgroundColor = "red";
            document.getElementById('img1').style.backgroundColor = "red";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerWin.textContent = Number(playerWin.textContent) + 1;
            resulttext.textContent = "You win this round! Scissors beats paper.";
            document.getElementById('scissorsBtn').style.backgroundColor = "red";
            document.getElementById('img2').style.backgroundColor = "red";
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            computerWin.textContent = Number(computerWin.textContent) + 1;
            resulttext.textContent = "You lose this round. Rock loses to paper.";
            document.getElementById('rockBtn').style.backgroundColor = "red";
            document.getElementById('img2').style.backgroundColor = "red";
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerWin.textContent = Number(computerWin.textContent) + 1;
            resulttext.textContent = "You lose this round. Paper loses to scissors.";
            document.getElementById('paperBtn').style.backgroundColor = "red";
            document.getElementById('img3').style.backgroundColor = "red";
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerWin.textContent = Number(computerWin.textContent) + 1;
            resulttext.textContent = "You lose this round. Scissors loses to rock.";
            document.getElementById('scissorsBtn').style.backgroundColor = "red";
            document.getElementById('img1').style.backgroundColor = "red";
        } else {
            resulttext.textContent = "It\'s a draw! Try again.";
        } 
    } else if (Number(playerWin.textContent) == 5) { //shows result of game, best out of 5
        gametext.textContent = "Congratulations, you won! You're the best!";
        return;
    } else {
        gametext.textContent = "Game over. You lost.";
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
let resetBtn = document.querySelector('#resetB');

function reset() {
    playerWin.textContent = 0;
    computerWin.textContent = 0;
}

resetBtn.addEventListener('click', reset);