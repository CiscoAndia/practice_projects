// Declare initial message
let message = "Hey there! Are you ready to play a game of Rock-Paper-Scissors?";

// Declare the options of the user and the machine
let personOptionInput = prompt("Select your move: ");
let plays = ["Rock", "Paper", "Scissors"];
let machineOption;
let str;
let firstChar;
let restWord;
let playerOption;
//Create function for computer's option, it should be random.

function computerPlay() {
    let machineOption = plays[Math.floor(Math.random() * plays.length)];
    return machineOption;    
}

//Create function for the user to insert it's option. Restrict the options to Rock, Paper or Scissors, and allow
//Upper/Lower case answers, all should return the first case Upper and the rest Lower.
function correctedWord() {
firstChar = personOptionInput.slice(0, 1);
restWord = personOptionInput.slice(1);
return playerOption = firstChar.toUpperCase() + restWord.toLowerCase();
}

playerOption = correctedWord();
//Create function which takes as parameters the personOption and the machineOption, which plays the game and 
//compares the results


function playRound(playerOption, machineOption) {
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

machineOption = computerPlay();

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerOption, machineOption);
        console.log(i + " round, " + 5-i + " more to go!")
        personOptionInput = prompt("Select your move: ");
        playerOption = correctedWord();
        machineOption = computerPlay();
    }
}

game();