function computerPlay() {
	
	let threeChoices = ['Rock', 'Paper', 'Scissors'];
	
	let randomComputerChoice = Math.floor(Math.random()*threeChoices.length);
	
	let computerChoice = threeChoices[randomComputerChoice];
	
	return computerChoice;
}

function winRound() {
	userScore++;
	userScoreSpan.innerHTML = userScore;
}

function loseRound() {
	compScore++;
	compScoreSpan.innerHTML = compScore;
}

function playRound(playerSelection) {
	
	let playerSelectionLower = playerSelection.toLowerCase();

	let playerFinalChoice = playerSelectionLower.charAt(0).toUpperCase() + playerSelectionLower.slice(1);
	
	let computerSelection = computerPlay();
	let computerSelectionLower = computerSelection.toLowerCase();
	
	let winnerStatement = "Player Wins!";
	let loserStatement = "Computer Wins!";
	let tieStatement = "Its a Tie!";
	
	if (playerSelectionLower == 'rock') {
		if (computerSelectionLower == 'scissors') {
			winRound();
			roundStatementDiv.innerHTML = winnerStatement;
			return winnerStatement;
		} else if (computerSelectionLower == 'rock') {
			roundStatementDiv.innerHTML = tieStatement;
			return tieStatement;
		} else {
			loseRound();
			roundStatementDiv.innerHTML = loserStatement;
			return loserStatement;
		}
	} else if (playerSelectionLower == 'paper') {
		if (computerSelectionLower == 'rock') {
			winRound();
			roundStatementDiv.innerHTML = winnerStatement;
			return winnerStatement;
		} else if (computerSelectionLower == 'paper') {
			roundStatementDiv.innerHTML = tieStatement;
			return tieStatement;
		} else {
			loseRound();
			roundStatementDiv.innerHTML = loserStatement;
			return loserStatement;
		}
	} else if (playerSelectionLower == 'scissors') {
		if (computerSelectionLower == 'paper') {
			winRound();
			roundStatementDiv.innerHTML = winnerStatement;
			return winnerStatement;
		} else if (computerSelectionLower == 'scissors') {
			roundStatementDiv.innerHTML = tieStatement;
			return tieStatement;
		} else {
			loseRound();
			roundStatementDiv.innerHTML = loserStatement;
			return loserStatement;
		}
	} else {
		return 'Player\'s Selection is not Rock, Paper, or Scissors.';
	} 
}

function gameWinner(playerCount, computerCount) {
	
	let winningScore;
	let endStatement;
	
	if (playerCount > computerCount) {
		winningScore = playerCount + ":" + computerCount + "."; 
		endStatement = "Over Five Games, Player Defeats Computer by a Score of " + winningScore;
		gameStatementDiv.innerHTML = endStatement;
		gameStatementDiv.style.textDecoration = "underline";
		return endStatement;
	} else {
		winningScore = computerCount + ":" + playerCount + ".";
		endStatement = "Over Five Games, Computer Defeats Player by a Score of " + winningScore;
		gameStatementDiv.innerHTML = endStatement;
		gameStatementDiv.style.textDecoration = "underline";
		return endStatement;
	}
}

function gameWon() {
	if (userScore == 5 || compScore == 5) {
		gameWinner(userScore, compScore);
	}
	return;
}

function reset() {
	if (userScore == FIVE || compScore == FIVE) {
		setTimeout(function() {
			location.reload();
		}, 500);
	}
	return false;
}

const FIVE = 5;
let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById("rgs");
const compScoreSpan = document.getElementById("lgs");

const scoreboardDiv = document.querySelector(".scoreboard");
const roundStatementDiv = document.querySelector(".round-statement");
const gameStatementDiv = document.querySelector(".game-statement");

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

function main() {

	rockDiv.addEventListener('click', function() {
		if (!reset()) {
			playRound('rock');
			gameWon();
		}
	})
	
	paperDiv.addEventListener('click', function() {
		if (!reset()) {
			playRound('paper');
			gameWon();
		}
	})
	
	scissorsDiv.addEventListener('click', function() {
		if (!reset()) {
			playRound('scissors');
			gameWon();
		}
	}) 

}

main();
