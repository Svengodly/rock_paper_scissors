//Function to randomly select from 'Rock', 'Paper', or 'Scissors' as the computer's choice.
function getComputerChoice() {
    //This can be accomplished by making a list containing Rock, Paper, and Scissors.
    const computerChoice = ["Rock", "Paper", "Scissors"];
    //Need to return a random value. This can be accomplished by obtaining a random index number.
    computerOutcome = (computerChoice[Math.floor(Math.random() * computerChoice.length)]);
    return computerOutcome;
} 

//I need a function that prompts and cleans up user input. Input should only allow characters and should have its case modified to match that of the computer's.
function getPlayerChoice() {
    //Prompt for input
    let playerInput = prompt("Rock, Paper or Scissors?");
    if (playerInput == "") {
        alert("You must enter something!");
        getPlayerChoice();
    }
    else {
        console.log(playerInput);
        return inputValidation(playerInput);
    }
}

function inputValidation(input) {
    //A RegEx can be used to check if the player's input is all letters. /^[a-zA-Z]+$/
    //Below removes all spaces
    input = input.replace(/\s/g, "");
    input = `${input[0].toUpperCase()}${input.substring(1).toLowerCase()}`;
    if (!(/^[a-zA-Z]+$/.test(input))) {
        console.log(input, "Not valid");
        input = getPlayerChoice();
        return input;
    }
    else if (/^[a-zA-Z]+$/.test(input) && (!['Rock', 'Paper', 'Scissors'].includes(input))) {
        console.log(`${input} is not in ${['Rock', 'Paper', 'Sciccors']}`);
        //Reasigning 'input' here solves an issue where this function returns the incorrect input.
        input = getPlayerChoice();
        return input;
    }
    else if (/^[a-zA-Z]+$/.test(input) && ['Rock', 'Paper', 'Scissors'].includes(input)) {
    //Spaces must me removed from input because these are not inlcuded in the RegEx. A 'null' value (If user clicks Cancel) will result in true block running.
        playerChoice = input
        return input;
    }
}

function playGame(computerChoice, playerChoice) {
    //This fucntion needs to return a value, which will be used to track points.
    if (computerChoice == playerChoice) {
        console.log(`Draw! Computer: ${computerChoice} Player: ${playerChoice}`)
    }
    else if (computerChoice == 'Rock' && playerChoice == 'Scissors') {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        return true;
    }
    else if (computerChoice == 'Rock' && playerChoice == 'Paper') {
        console.log(`You win! ${computerChoice} loses to ${playerChoice}`);
        return false;
    }
    else if (computerChoice == 'Paper' && playerChoice == 'Rock') {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        return true;
    }
    else if (computerChoice == 'Paper' && playerChoice == 'Scissors') {
        console.log(`You win! ${computerChoice} loses to ${playerChoice}`);
        return false;
    }      
    else if (computerChoice == 'Scissors' && playerChoice == 'Paper') {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        return true;
    }
    else if (computerChoice == 'Scissors' && playerChoice == 'Rock') {
        console.log(`You win! ${computerChoice} loses to ${playerChoice}`);
        return false;
    }
        
}

function game() {
    for (let i = 1; i <= 5; i++) {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        console.log(`Round ${i}`);
        result = playGame(computerChoice, playerChoice);
        // console.log(playerChoice);
        if (result == true) {
            computerScore += 1;
        } else if (result == false) {
            playerScore += 1;
        }
        else {
            console.log("No points added.");
        }
        console.log(`Computer: ${computerScore} Player: ${playerScore}`);
    }
    console.log(`Final Score - Computer: ${computerScore} Player: ${playerScore}`);
    switch (true) {
        case (computerScore > playerScore):
            console.log("You lost the game! Better luck next time!");
            break;
        case (computerScore < playerScore):
            console.log("You won the game!");
            break;
        case (computer == playerScore):
            console.log("Looks like we have a tie!")
            break;
    }
}

let computerChoice = getComputerChoice();

let playerChoice;

//Time to play the game

let computerScore = 0;
let playerScore = 0;

game();


