// Declare initial message
let message = "Hey there! Are you ready to play a game of Rock-Paper-Scissors?";

// Declare the options of the user and the machine
let personOptionInput = prompt("Select your move: ");
let plays = ["Rock", "Paper", "Scissors"];
let machineOption;
let str;

//Create function for computer's option, it should be random.

function computerPlay() {
    let machineOption = plays[Math.floor(Math.random() * plays.length)];
    return machineOption;    
}

//Create function for the user to insert it's option. Restrict the options to Rock, Paper or Scissors, and allow
//Upper/Lower case answers, all should return the first case Upper and the rest Lower.

let firstChar = personOptionInput.slice(0, 1);
let restWord = personOptionInput.slice(1);
let playerOption = firstChar.toUpperCase() + restWord.toLowerCase();

//Create function which takes as parameters the personOption and the machineOption, which plays the game and 
//compares the results

function playGame(playerOption, machineOption) {
    if ((playerOption === "Rock" && machineOption === "Rock") || (playerOption === "Paper" && machineOption === "Paper") || (playerOption === "Scissors" && machineOption === "Scissors")) {
        str = "It's a Tie! Play again to see who wins.";
    } else if ((playerOption === "Rock" && machineOption === "Scissors") || (playerOption === "Paper" && machineOption === "Rock") || (playerOption === "Scissors" && machineOption === "Paper")) {
        str = `${playerOption} beats ${machineOption}. You win!`;
    } else if ((playerOption === "Rock" && machineOption === "Paper") || (playerOption === "Paper" && machineOption === "Scissors") || (playerOption === "Scissors" && machineOption === "Rock")) {
        str = `${machineOption} beats ${playerOption}. You lose!`;
    } else {
        str = "Enter a valid option to play the game";
    }
    return console.log(str);
}

playGame(playerOption, computerPlay());