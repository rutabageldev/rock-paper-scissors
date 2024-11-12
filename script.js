const computerDisplay = document.querySelector (".computer-choice");
const newGameButton = document.querySelector(".new-game");
const paperButton = document.querySelector("#paper");
const playerDisplay = document.querySelector (".player-choice");
const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");
const scoreDisplay = document.querySelector(".score");
const statusDisplay = document.querySelector(".status-bar");

paperButton.addEventListener("click", playRound);
rockButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);
newGameButton.addEventListener("click", newGame);

let gameState = 'new';
let scorePlayer = 0;
let scoreComputer = 0;
let round = 1;
let playerChoice = null;
let computerChoice = null;
let roundState = null;

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3)) + 1;
    switch (choice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

function newGame(e) {
    console.log(e);
    console.log(e.target.id);
    gameState = 'new';
    scorePlayer = 0;
    scoreComputer = 0;
    round = 1;
    roundState = null;
    playerChoice = null;
    computerChoice = null;
    roundLogging(round, playerChoice, computerChoice, roundState, scorePlayer, scoreComputer, gameState);
    updateInfo();

}

function playRound(e) {
    switch (gameState) {
        case ('new'):
            gameState = 'active';
            break;
        case ('active'):
            break;
        case ('over'):
            return;
    }
    console.log(e);
    console.log(e.target.id);
    playerChoice = e.target.id;
    computerChoice = getComputerChoice();
    roundState = scoreRound(playerChoice, computerChoice);
    roundLogging(round, playerChoice, computerChoice, roundState, scorePlayer, scoreComputer, gameState);
    round++;
    if(scorePlayer == 5 || scoreComputer ==5) {
        gameState = 'over';
    }
    updateInfo();
}  

function roundLogging(round, playerChoice, computerChoice, roundState, scorePlayer, scoreComputer) {
    console.log("round: " + round);
    console.log("playerChoice: " + playerChoice);
    console.log("computerChoice: " + computerChoice);
    console.log("roundState: " + roundState);
    console.log("scorePlayer: " + scorePlayer);
    console.log("scoreComputer: " + scoreComputer);
    console.log("gameState: " + gameState);
}

function scoreRound(playerChoice, computerChoice) {
    switch (playerChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    return 'tie';
                case 'paper':
                    scoreComputer++;
                    return 'winComputer';
                case 'scissors':
                    scorePlayer++;
                    return 'winPlayer';
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    scorePlayer++;
                    return 'winPlayer';    
                case 'paper':
                    return 'tie';
                case 'scissors':
                    scoreComputer++;
                    return 'winComputer';
            }
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    scoreComputer++;
                    return 'winComputer';   
                case 'paper':
                    scorePlayer++;
                    return 'winPlayer';
                case 'scissors':
                    return 'tie';
            }
    }
}

function updateInfo() {
    // Update score display
    scoreDisplay.textContent = `${scorePlayer}:${scoreComputer}`;
    // Update display to show last player and computer choice
    playerDisplay.textContent = displayUpdate(playerChoice);
    computerDisplay.textContent = displayUpdate(computerChoice);
    // Display who won the last round or new game message
    statusDisplay.textContent = statusUpdate();


}

function displayUpdate(choice) {
    switch(choice) {
        case('rock'):
            return 'R';
        case('paper'):
            return 'P';
        case('scissors'):
            return 'S';
        case(null):
            return '?';
    }
}

function statusUpdate() {
    switch (gameState) {
        case ('over'):
            if (scorePlayer > scoreComputer) {
                return "Player wins, game over!"
            } else {
                return "Computer wins, game over"
            }
        case ('new'):
            return "Waiting for player's choice";
        case ('active') :
            switch (roundState){
                case ('winPlayer'):
                    return `Player wins, ${playerChoice} beats ${computerChoice}`
                case ('winComputer'):
                    return `Computer wins, ${computerChoice} beats ${playerChoice}`
                case('tie'):
                    return `Tie, you both chose ${playerChoice}`
            }
    }
}