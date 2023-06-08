let userInput = [document.getElementById('rock'), document.getElementById('paper'), document.getElementById('scissors')];
let playerScore = document.getElementById('player-score');
let playerCounter = 0;
let computerScore = document.getElementById('computer-score');
let computerCounter = 0;
let playAgain = document.getElementById('play-again');
let rounds = 0;
let roundsPlayed = document.getElementById('rounds-played');
let roundsPlayedText = document.getElementById('rounds-played-text');

playAgain.hidden = true;

for (let i = 0; i < userInput.length; i++) {
    let input = userInput[i];
    input.onclick = function() {
        let computerChoice = Math.floor(Math.random() * 3);
        rounds++;
        roundsPlayed.innerHTML = rounds + 1;
        if (i === 0 && computerChoice === 0) {
         document.getElementById('computer-value').innerHTML = "Computer choose: Rock";
         document.getElementById('final-result').innerHTML = "Its a tie!";
        } else if (i === 0 && computerChoice === 1) {
            document.getElementById('computer-value').innerHTML = "Computer choose: Paper";
            document.getElementById('final-result').innerHTML = "Computer won!";
            computerCounter++;
            computerScore.innerHTML = computerCounter;
        } else if (i === 0 && computerChoice === 2) {
            document.getElementById('computer-value').innerHTML = "Computer choose: Scissors";
            document.getElementById('final-result').innerHTML = "You won!";
            playerCounter++;
            playerScore.innerHTML = playerCounter;
        } else if (i === 1 && computerChoice === 0) {
            document.getElementById('computer-value').innerHTML = "Computer choose: Rock";
            document.getElementById('final-result').innerHTML = "You won!";
            playerCounter++;
            playerScore.innerHTML = playerCounter;
        } else if (i === 1 && computerChoice === 1) {
            document.getElementById('computer-value').innerHTML = "Computer choose: Paper";
            document.getElementById('final-result').innerHTML = "Its a tie!";
        } else if (i === 1 && computerChoice === 2) {
            document.getElementById('computer-value').innerHTML = "Computer choose: Scissors";
            document.getElementById('final-result').innerHTML = "Computer won!";
            computerCounter++;
            computerScore.innerHTML = computerCounter;
        } else if (i === 2 && computerChoice === 0) {
            document.getElementById('computer-value').innerHTML = "Computer choose: Rock";
            document.getElementById('final-result').innerHTML = "Computer won!";
            computerCounter++;
            computerScore.innerHTML = computerCounter;
        } else if (i === 2 && computerChoice === 1) {
            document.getElementById('computer-value').innerHTML = "Computer choose: Paper";
            document.getElementById('final-result').innerHTML = "You won!";
            playerCounter++;
            playerScore.innerHTML = playerCounter;
        } else if (i === 2 && computerChoice === 2) {
            document.getElementById('computer-value').innerHTML = "Computer choose: Scissors";
            document.getElementById('final-result').innerHTML = "Its a tie!";
        }
        if (rounds === 10) {
            playAgain.hidden = false;
            userInput[0].hidden = true;
            userInput[1].hidden = true;
            userInput[2].hidden = true;
            roundsPlayedText.innerHTML = "Game Over";
            roundsPlayed.hidden = true;

        }
        if (playerCounter > computerCounter && rounds === 10) {
            document.getElementById('computer-value').innerHTML = "Winner Winner - Chicken Dinner";
            document.getElementById('final-result').innerHTML = "Human beats the machine!";
        } else if (playerCounter < computerCounter && rounds === 10) {
            document.getElementById('computer-value').innerHTML = "Booooh you lost";
            document.getElementById('final-result').innerHTML = "Machines rule the world!";
        } else if (playerCounter === computerCounter && rounds === 10) {
            document.getElementById('computer-value').innerHTML = "It's a tie";
            document.getElementById('final-result').innerHTML = "Better luck next time";
        }
    };
}

playAgain.onclick = function() {
    document.getElementById('computer-value').innerHTML = "Computer Choice";
    document.getElementById('final-result').innerHTML = "Result";
    playerCounter = 0;
    computerCounter = 0;
    computerScore.innerHTML = 0;
    playerScore.innerHTML = 0;
    rounds = 0;
    roundsPlayed.innerHTML = 1;
    roundsPlayed.hidden = false;
    roundsPlayedText.innerHTML = "Round:";
    userInput[0].hidden = false;
    userInput[1].hidden = false;
    userInput[2].hidden = false;
    playAgain.hidden = true;
}
