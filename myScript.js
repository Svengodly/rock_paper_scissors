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
        console.log(`Draw! Computer: ${computerChoice} Player: ${playerChoice}`);
        playerOutput.innerText = `Player: ${playerScore}`;
        computerOutput.innerText = `Computer: ${computerScore}`;
        result.innerText = `Draw!`;
        return null;
    }
    else if (computerChoice == 'Rock' && playerChoice == 'Scissors') {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        ++computerScore;
        playerOutput.innerText = `Player: ${playerScore}`;
        computerOutput.innerText = `Computer: ${computerScore}`;
        result.innerText = `You lose! ${computerChoice} beats ${playerChoice}`;
        return true;
    }
    else if (computerChoice == 'Rock' && playerChoice == 'Paper') {
        console.log(`You win! ${computerChoice} loses to ${playerChoice}`);
        ++playerScore;
        playerOutput.innerText = `Player: ${playerScore}`;
        computerOutput.innerText = `Computer: ${computerScore}`;
        result.innerText = `You win! ${computerChoice} loses to ${playerChoice}`;
        return false;
    }
    else if (computerChoice == 'Paper' && playerChoice == 'Rock') {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        ++computerScore;
        playerOutput.innerText = `Player: ${playerScore}`;
        computerOutput.innerText = `Computer: ${computerScore}`;
        result.innerText = `You lose! ${computerChoice} beats ${playerChoice}`;
        return true;
    }
    else if (computerChoice == 'Paper' && playerChoice == 'Scissors') {
        console.log(`You win! ${computerChoice} loses to ${playerChoice}`);
        ++playerScore;
        playerOutput.innerText = `Player: ${playerScore}`;
        computerOutput.innerText = `Computer: ${computerScore}`;
        result.innerText = `You win! ${computerChoice} loses to ${playerChoice}`;
        return false;
    }      
    else if (computerChoice == 'Scissors' && playerChoice == 'Paper') {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        ++computerScore;
        playerOutput.innerText = `Player: ${playerScore}`;
        computerOutput.innerText = `Computer: ${computerScore}`;
        result.innerText = `You lose! ${computerChoice} beats ${playerChoice}`;
        return true;
    }
    else if (computerChoice == 'Scissors' && playerChoice == 'Rock') {
        console.log(`You win! ${computerChoice} loses to ${playerChoice}`);
        ++playerScore;
        playerOutput.innerText = `Player: ${playerScore}`;
        computerOutput.innerText = `Computer: ${computerScore}`;
        result.innerText = `You win! ${computerChoice} loses to ${playerChoice}`;
        return false;
    }
}

function getPlayerChoice() {
        outcome = playGame(getComputerChoice(), event.currentTarget.name);//currentTarget.name retrieves the name attribute of the element that has the EV attached.
        if (outcome === null){
            console.log("NULLLL")
        } else if (outcome) {
            computerOutput.classList.add("win");
        } else if(!outcome) {
            playerOutput.classList.add("win");
        } 

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
    outcome = null;
}

let computerScore = 0;
let playerScore = 0;
let outcome = null;

const buttons = document.getElementsByTagName("button");
const outputDiv = document.querySelectorAll(".output");
const playerOutput = document.querySelector(".output.player");
const computerOutput = document.querySelector(".output.computer");
const result = document.querySelector(".result");

playerOutput.addEventListener("transitionend", () => {
    playerOutput.classList.remove("win");
})

computerOutput.addEventListener("transitionend", () => {
    computerOutput.classList.remove("win");
})

for(const x of outputDiv) {
    if(x.className == "output player"){
        x.innerText = `Player: ${playerScore}`;
        // x.innerText = `Computer: ${computerScore} Player: ${playerScore}`;
} else {
    x.innerText = `Computer: ${computerScore}`;
}
//outputDiv.innerText = `Computer: ${computerScore} Player: ${playerScore}`;

for (const button of buttons) {
    button.addEventListener("click", getPlayerChoice);
        }

    }

