/*
Start game, round = 1
For (1 =< round =< 5) {
    Ask player for rock, paper, or scissors
    Randomly generate computer choice
    Determine winner 
    Winner score +1
}
*/
getPlayerChoice();

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
        console.log("playerChoice: " + playerChoice);
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

function validateChoice(choice) {
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        return true;
    } else {
        return false;
    }
}