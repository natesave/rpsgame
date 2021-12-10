function computerPlay() { //randomly chooses rock, paper or scissors for computer selection
    let computerChoices = ["rock", "paper", "scissors"]
    const randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return randomChoice;
}

let rock = document.getElementById('rockBtn');
let paper = document.getElementById('paperBtn');
let scissors = document.getElementById('scissorsBtn');

let pcRock = document.getElementById('rock');
let pcPaper = document.getElementById('paper');
let pcScissors = document.getElementById('scissors');

function animatePC(x) {
    if (x == "rock") {
        pcRock.style.backgroundColor = "rgb(124, 165, 255)";
        pcPaper.style.backgroundColor = "rgb(239, 239, 239)";
        pcScissors.style.backgroundColor = "rgb(239, 239, 239)";
    } else if (x == "paper") {
        pcRock.style.backgroundColor = "rgb(239, 239, 239)";
        pcPaper.style.backgroundColor = "rgb(124, 165, 255)";
        pcScissors.style.backgroundColor = "rgb(239, 239, 239)";
    } else if (x == "scissors") {
        pcRock.style.backgroundColor = "rgb(239, 239, 239)";
        pcPaper.style.backgroundColor = "rgb(239, 239, 239)";
        pcScissors.style.backgroundColor = "rgb(124, 165, 255)";
    };
};

//score counter for each round
let playerWin = document.querySelector('#wins');
let computerWin = document.querySelector('#losses');

let comptext = document.querySelector('#npcWeapon'); //shows what the computer played
let playertext = document.querySelector('#pWeapon'); //shows what player played
let gametext = document.querySelector('#roundResults'); //shows result of round

//Player round with player's selection after click and animates selection
let playerSelection = "";

rock.addEventListener('click', () => {
    playRound('rock');
    rock.style.backgroundColor = "rgb(124, 165, 255)";
    paper.style.backgroundColor = "rgb(239, 239, 239)";
    scissors.style.backgroundColor = "rgb(239, 239, 239)";
});

paper.addEventListener('click', () => {
    playRound('paper');
    rock.style.backgroundColor = "rgb(239, 239, 239)";
    paper.style.backgroundColor = "rgb(124, 165, 255)";
    scissors.style.backgroundColor = "rgb(239, 239, 239)";
});

scissors.addEventListener('click', () => {
    playRound('scissors');
    rock.style.backgroundColor = "rgb(239, 239, 239)";
    paper.style.backgroundColor = "rgb(239, 239, 239)";
    scissors.style.backgroundColor = "rgb(124, 165, 255)";
});

function checkScore() {
    if (Number(playerWin.textContent) == 5) { //shows result of game, best out of 5
        win();
    } else if (Number(computerWin.textContent) == 5){
        lose();
    };
};

let pTrophy = document.getElementById("playerWin");
let pFlag = document.getElementById("playerLose");
let pcTrophy = document.getElementById("pcWin");
let pcFlag = document.getElementById("pcLose");

function win() {
    gametext.textContent = "Congratulations, you won! You're the best!";
    gametext.style.color = "green";
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    pcRock.style.display = "none";
    pcPaper.style.display = "none";
    pcScissors.style.display = "none";
    pTrophy.style.display = "block";
    pcFlag.style.display = "block";
}

function lose() {
    gametext.textContent = "Game over. You lost.";
    gametext.style.color = "red";
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    pcRock.style.display = "none";
    pcPaper.style.display = "none";
    pcScissors.style.display = "none";
    pFlag.style.display = "block";
    pcTrophy.style.display = "block";
}

function playRound(playerSelection, ) { //checks computer selection against player selection for one round
    let computerSelection = computerPlay();
    animatePC(computerSelection);
    comptext.textContent = "The computer's weapon: " + computerSelection;
    playertext.textContent = "Your weapon: " + playerSelection;
            if (playerSelection == "rock" && computerSelection == "scissors") {
                playerWin.textContent = Number(playerWin.textContent) + 1;
                gametext.textContent = "You win this round! Rock beats scissors.";
                checkScore();
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                playerWin.textContent = Number(playerWin.textContent) + 1;
                gametext.textContent = "You win this round! Paper beats rock.";
                checkScore();
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                playerWin.textContent = Number(playerWin.textContent) + 1;
                gametext.textContent = "You win this round! Scissors beats paper.";
                checkScore();
            } else if (playerSelection == "rock" && computerSelection == "paper") {
                computerWin.textContent = Number(computerWin.textContent) + 1;
                gametext.textContent = "You lose this round. Rock loses to paper.";
                checkScore();
            } else if (playerSelection == "paper" && computerSelection == "scissors") {
                computerWin.textContent = Number(computerWin.textContent) + 1;
                gametext.textContent = "You lose this round. Paper loses to scissors.";
                checkScore();
            } else if (playerSelection == "scissors" && computerSelection == "rock") {
                computerWin.textContent = Number(computerWin.textContent) + 1;
                gametext.textContent = "You lose this round. Scissors loses to rock.";
                checkScore();
            } else {
                gametext.textContent = "It\'s a draw! Try again.";
            };
};

//the code below is for the reset button
let resetBtn = document.querySelector('#resetB');
function reset() {
    playerWin.textContent = 0;
    computerWin.textContent = 0;
    gametext.textContent = "Best out of 5";
    gametext.style.color = "black";
    rock.style.backgroundColor = "rgb(239, 239, 239)";
    paper.style.backgroundColor = "rgb(239, 239, 239)";
    scissors.style.backgroundColor = "rgb(239, 239, 239)";
    pcRock.style.backgroundColor = "rgb(239, 239, 239)";
    pcPaper.style.backgroundColor = "rgb(239, 239, 239)";
    pcScissors.style.backgroundColor = "rgb(239, 239, 239)";
    rock.style.display = "block";
    paper.style.display = "block";
    scissors.style.display = "block";
    pcRock.style.display = "block";
    pcPaper.style.display = "block";
    pcScissors.style.display = "block";
    pFlag.style.display = "none";
    pTrophy.style.display = "none";
    pcFlag.style.display = "none";
    pcTrophy.style.display = "none";
}

resetBtn.addEventListener('click', reset);