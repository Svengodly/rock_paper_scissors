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
    playerInput = prompt("Rock, Paper or Scissors?");
    if (playerInput == "") {
        alert("You must enter something!");
        getPlayerChoice();
    }
    else {
        inputValidation(playerInput);
    }
}

function inputValidation(input) {
    //A RegEx can be used to check if the player's input is all letters. /^[a-zA-Z]+$/
    //Below removes all spaces
    input = input.replace(/\s/g, "");
    input = `${input[0].toUpperCase()}${input.substring(1).toLowerCase()}`;
    console.log(input, "Before conditional.");
    if (!(/^[a-zA-Z]+$/.test(input))) {
        console.log(input, "Not valid");
        getPlayerChoice();
    }
    else if (/^[a-zA-Z]+$/.test(input) && (!['Rock', 'Paper', 'Scissors'].includes(input))) {
        console.log(`${input} is not in ${['Rock', 'Paper', 'Sciccors']}`);
        getPlayerChoice();
    }
    else if (/^[a-zA-Z]+$/.test(input) && ['Rock', 'Paper', 'Scissors'].includes(input)) {
    //Spaces must me removed from input because these are not inlcuded in the RegEx. A 'null' value (If user clicks Cancel) will result in true block running.
        console.log(input, "Inside inputVal");
        return input;
    }
}

// function checkRockPaperScissors(validatedInput, choices) {
//     if (choices.includes(validatedInput)) {

//     }
// }

computerChoice = getComputerChoice();
// console.log(x);

playerChoice = getPlayerChoice();
//console.log(x);

// validated = inputValidation(playerChoice, computerChoice);
