
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function getComputerChoice() {
    const play = ["Rock", "Scissors", "Paper"];
    const rndInt = randomIntFromInterval(0 , 2);
    
    return play[rndInt];
}

function playRound(playerSelection, computerSelection ) {
    
}



for (let i = 0; i < 5; i++) {
    console.log("Computer's choice:", getComputerChoice());
}