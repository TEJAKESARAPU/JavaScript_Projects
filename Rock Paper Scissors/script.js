const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;


while (true) {
    const playerChoice = prompt("Enter rock, paper, scissors (or q to quit): ")
    if (playerChoice.toLowerCase() === "q") {
        break;
    }

    if (playerChoice.toLowerCase() !== "rock" &&
        playerChoice.toLowerCase() !== "paper" &&
        playerChoice.toLowerCase() !== "scissors"
        ) {
        console.log("Please enter a valid Choice.");
        continue;
    }

    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.round(Math.random() * 2 );
    const computerChoice = choices[randomIndex];

    console.log("The computer chose:", computerChoice);

    if (computerChoice === playerChoice) {
        console.log("Draw!");
        ties++;
    } else if (
        (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") || 
        (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") ||
        (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper")
    ) {
        console.log ("Won!");
        wins++;
    } else {
        console.log ("Lost!");
        losses++;
    }
}

console.log("Wins:", wins, "Losses: ", losses, "ties: ", ties);
