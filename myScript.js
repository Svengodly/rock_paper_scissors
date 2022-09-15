//Function to randomly select from 'Rock', 'Paper', or 'Scissors' as the computer's choice.
function getComputerChoice() {
    //This can be accomplished by making a list containing Rock, Paper, and Scissors.
    const computerChoice = ["Rock", "Paper", "Scissors"];
    //Need to return a random value. This can be accomplished by obtaining a random index number.
    computerOutcome = (computerChoice[Math.floor(Math.random() * computerChoice.length)]);
    return computerOutcome;
} 

function playGame(computerChoice, playerChoice) {
    //This fucntion needs to return a value, which will be used to track points.
    if (computerChoice == playerChoice) {
        console.log(`Draw! Computer: ${computerChoice} Player: ${playerChoice}`)
        outputDiv.innerText = `Draw! Computer: ${computerChoice} Player: ${playerChoice}\nComputer: ${computerScore} Player: ${playerScore}`;
    }
    else if (computerChoice == 'Rock' && playerChoice == 'Scissors') {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        ++computerScore;
        outputDiv.innerText = `You lose! ${computerChoice} beats ${playerChoice}\nComputer: ${computerScore} Player: ${playerScore}`;
    }
    else if (computerChoice == 'Rock' && playerChoice == 'Paper') {
        console.log(`You win! ${computerChoice} loses to ${playerChoice}`);
        ++playerScore;
        outputDiv.innerText = `You win! ${computerChoice} loses to ${playerChoice}\nComputer: ${computerScore} Player: ${playerScore}`;
    }
    else if (computerChoice == 'Paper' && playerChoice == 'Rock') {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        ++computerScore;
        outputDiv.innerText = `You lose! ${computerChoice} beats ${playerChoice}\nComputer: ${computerScore} Player: ${playerScore}`;
    }
    else if (computerChoice == 'Paper' && playerChoice == 'Scissors') {
        console.log(`You win! ${computerChoice} loses to ${playerChoice}`);
        ++playerScore;
        outputDiv.innerText = `You win! ${computerChoice} loses to ${playerChoice}\nComputer: ${computerScore} Player: ${playerScore}`;
    }      
    else if (computerChoice == 'Scissors' && playerChoice == 'Paper') {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        ++computerScore;
        outputDiv.innerText = `You lose! ${computerChoice} beats ${playerChoice}\nComputer: ${computerScore} Player: ${playerScore}`;
    }
    else if (computerChoice == 'Scissors' && playerChoice == 'Rock') {
        console.log(`You win! ${computerChoice} loses to ${playerChoice}`);
        ++playerScore;
        outputDiv.innerText = `You win! ${computerChoice} loses to ${playerChoice}\nComputer: ${computerScore} Player: ${playerScore}`;
    }
}

function getPlayerChoice() {
        playGame(getComputerChoice(), event.currentTarget.name);//currentTarget.name retrieves the name attribute of the element that has the EV attached.
        if (playerScore == 5 || computerScore == 5) {
            end = document.createElement('div');
            end.innerText = `Game Over! ${(playerScore > computerScore) ? "You Win!" : "Computer Wins!"}`;
            document.querySelector('.main').appendChild(end);
            for (const button of buttons) {
                button.disabled = true;
            }
            playerScore = 0;
            computerScore = 0;
    }
}
let computerScore = 0;
let playerScore = 0;

const buttons = document.getElementsByTagName("button");
const outputDiv = document.querySelector(".output");
outputDiv.innerText = `Computer: ${computerScore} Player: ${playerScore}`;

for (const button of buttons) {
    button.addEventListener("click", getPlayerChoice);
        }



