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
        playerChoice = playerChoice.toLowerCase();
        return 'You chose ' + playerChoice;
}

function game(playerChoice, computerChoice) {
    let result = ""
        if ((playerChoice == 'rock' && computerChoice == 'paper') ||
            (playerChoice == 'scissor' && computerChoice == 'rock') ||
            (playerChoice == 'paper' && computerChoice == 'scissor')) {
            result = 'You lose, ' + computerChoice + ' beats ' + playerChoice
            computerScore += 1;
        }

        else if (playerChoice == computerChoice) {
            result = 'Tie, ' + playerChoice + ' same as ' + computerChoice
    }

        else {
            result = 'You win, ' + playerChoice + ' beats ' + computerChoice
            playerScore += 1;
        }

        return result;
}
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore= 0;

for (let i = 0; i<5; i++) {
    console.log("I chose " + getComputerchoice());
    console.log(getPlayerChoice());
    console.log(game(playerChoice, computerChoice));
}

if (playerScore == computerScore) {
    console.log("It's a tie match! The score is " + playerScore + ":" + computerScore);
}
else if (playerScore > computerScore) {
    console.log("You won the computer! The score is " + playerScore + ":" + computerScore + " for you");
}
else {console.log("The computer defeats you!The score is " + computerScore + ":" + playerScore + " for the computer");}

       