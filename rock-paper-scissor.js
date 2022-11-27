function getComputerchoice() {
    let number = Math.floor(Math.random() * 3)
    switch (number) {
        case 0: 
        return computerChoice = 'rock';
        break;
        case 1:
        return computerChoice = 'paper';
        break;
        case 2: 
        return computerChoice = 'scissor';
        break;
    }
}

function getPlayerChoice() {
        playerChoice = prompt('What is your choice? ')
        return playerChoice = playerChoice.toLowerCase();
}

function game(playerChoice, computerChoice) {
    let result = ""
        if ((playerChoice == 'rock' && computerChoice == 'paper') ||
            (playerChoice == 'scissor' && computerChoice == 'rock') ||
            (playerChoice == 'paper' && computerChoice == 'scissor')) {
            result = 'You lose, ' + computerChoice + ' beats ' + playerChoice
        }

        else if (playerChoice == computerChoice) {
            result = 'Tie, ' + playerChoice + ' same as ' + computerChoice
    }

        else {result = 'You win, ' + playerChoice + ' beats ' + computerChoice}
        return result;
}
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore= 0;

for (let i = 0; i<5; i++) {
    console.log(getComputerchoice());
    console.log(getPlayerChoice());
    console.log(game(playerChoice, computerChoice));
}

       