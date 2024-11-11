/*
Start game, round = 1
For (1 =< round =< 5) {
    Ask player for rock, paper, or scissors
    Randomly generate computer choice
    Determine winner 
    Winner score +1
}
*/
let scorePlayer = 0;
let scoreComputer = 0;
let playerChoice = null;
let computerChoice = null;

for (let round = 1; round < 6; round++) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    //scoreRound(playerChoice, computerChoice);
    roundLogging(round, playerChoice, computerChoice, scorePlayer, scoreComputer);
}

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

function getPlayerChoice() {
    let goodChoice = false;     //state variable that tracks validity of player's choice
    let playerChoice = prompt(`Please select one of the following:
        -Rock
        -Paper
        -Scissors`);
    playerChoice = playerChoice.toLowerCase();
    while(!goodChoice){
        goodChoice = validateChoice(playerChoice);
        console.log("goodChoice: " + goodChoice);
        if (!goodChoice) {
            playerChoice = prompt(`Invalid selection, please input one of the following:
                -Rock
                -Paper
                -Scissors`);
            playerChoice = playerChoice.toLowerCase();    
        }
    }
    return playerChoice;
}

function roundLogging(round, playerChoice, computerChoice, scorePlayer, scoreComputer) {
    console.log("round: " + round);
    console.log("playerChoice: " + playerChoice);
    console.log("computerChoice: " + computerChoice);
    console.log("scorePlayer: " + scorePlayer);
    console.log("scoreComputer: " + scoreComputer);
}

function validateChoice(choice) {
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        return true;
    } else {
        return false;
    }
}