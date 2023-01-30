let playerSelection;
let computerSelection;
var result;

console.log(game());

function computerPlay(){
    var number = Math.floor(Math.random()*3);

    if(number == 0){
        computerSelection = "rock";
    }else if (number == 1){
        computerSelection = "paper";
    }else{
        computerSelection = "scissors";
    }
    return computerSelection;
}

function userPlay(){
    playerSelection = '';
    do{
        playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
            return playerSelection;
        }else{
            alert("Please choose again.");
        }
    }while (playerSelection !== 'rock'|| playerSelection !== 'paper'|| playerSelection !== 'scissors');
}

function playRound(playerSelection, computerSelection){
    const tie = 0,
        win = 1,
        lose = 2;
  
    if(playerSelection === computerSelection){
        result = tie;
    }else if (playerSelection === 'rock'){
        if (computerSelection === 'paper') result = lose;
        if (computerSelection === 'scissors') result = win;
    }else if (playerSelection === 'paper'){
        if (computerSelection === 'scissors') result = lose;
        if (computerSelection === 'rock') result = win;
    }else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock') result = lose;
        if (computerSelection === 'paper') result = win;
    }

    switch(result){
        case 0:
            alert("It's a tie! Both used: " + playerSelection);
            break;
        case 1:
            alert("You Win! " + playerSelection + " beats " + computerSelection);
            break;
        case 2:
            alert("You Lose! " + computerSelection + " beats " + playerSelection);
            break;
    }
}

function game(){
    let userScore = 0,
    computerScore = 0;
    alert("Let's play rock, paper, scissors!");
    for(let round=0; round<5; round ++){
        computerPlay();
        userPlay();
        playRound(playerSelection, computerSelection);

        if(result == 1){
            userScore ++;
        }else if(result == 2){
            computerScore ++;
        }else{
            round --;
        }
    }
    if(userScore>computerScore){
        alert("You won the game! " + userScore + " to " + computerScore);
    }else if(userScore<computerScore) alert("You lost the game! " + userScore + " to " + computerScore);
    
    var again = prompt("Press 's' to start a new game.")
    if(again == 's') game();
}
