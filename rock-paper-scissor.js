function getComputerChoice () {
    let number = Math.floor(Math.random() * 3)
    switch (number) {
        case 0: return 'rock' 
        break;
        case 1: return 'paper' 
        break;
        case 2: return 'scissors' 
        break;
    }
}
let playerScore = 0;
let computerScore = 0;
function playRound(e) {

    let result = ''
    if (this.className == getComputerChoice()) {
        result = "Tie<br> Player: " + playerScore + "<br>Computer: " + computerScore;
    }
    else if ((this.className == 'rock' & getComputerChoice() == 'scissors') ||
                (this.className == 'scissors' & getComputerChoice() == 'paper') ||
                (this.className == 'paper' & getComputerChoice() == 'rock')) {
        playerScore += 1;
        result = "You win!<br> Player: " + playerScore + "<br>Computer: " + computerScore;
        }  
    else {
        computerScore += 1
        result = "You lose!<br> Player: " + playerScore + "<br>Computer: " + computerScore;
    }

    document.getElementById('text').innerHTML = result;
    return
    
}
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', playRound)
})  