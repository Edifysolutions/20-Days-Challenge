// Define an array of options so that
// 0 is rock, 1 is paper and 2 is scissors
var options = ["rock", "paper", "scissors"];
// Returns true if a beats b
// Rock (0) beats scissors (2), 
// paper (1) beats rock (0)
// and scissors (2) beat paper (1)
function isGreater(a, b) {
	if (a == 0 && b == 2) {
		return true;
	} else if (a == 1 && b == 0) {
		return true;
	} else if (a == 2 && b == 1) {
		return false;
	}
	return false;
}

// Returns true if a and b are the same
function isEqual(a, b) {
	return a == b;
}

// Returns "rock" and "paper" with 33.33% probability
// each and "scissors" with 33.34% probability
function getComputerChoice() {
	return options[Math.min(Math.floor((Math.random() * 3)), 2)];
}

// Returns "It's a tie!", "You win!" or "I win!"
// based on player's choice and random computer choice
function getWinner(playerChoice, computerChoice) {
	if (isEqual(playerChoice, computerChoice)) {
		return "It's a tie!";
	} else if (isGreater(playerChoice, computerChoice)) {
		return "You win!";
	}
	return "I win!";
}

// Given player's choice determines a winner and shows
// option to play again
function play(playerChoice) {
	// Hide "rock", "paper", "scissors" option buttons
	document.getElementById("buttons").style.display = "none";
	var pImg = document.getElementById("player");
	var cImg = document.getElementById("computer");
	var result = document.getElementById("result");

	// Show computer's hand
	cImg.style.display = "block";
	// Get randomized computer choice
	var computerChoice = getComputerChoice();
	// Wait for some time
	setTimeout(function() {
		// Sets the player hand to player choice image and
		// computer hand to computer choice image
		pImg.src = "" + playerChoice + ".png";
		cImg.src = "" + computerChoice + ".png";
		// Wait for some time
		setTimeout(function() {
			// Displays the result of the game
			result.innerHTML =
				"<h1>" + getWinner(playerChoice, computerChoice) + "</h1>";
			// Offers the choice to play again
			document.getElementById("playAgain").style.display = "block";
		}, 1000);
	}, 1000);
}

// Reopen the game window
function playAgain() {
	// Set both player and computer hands back to shuffling gif
	var pImg = document.getElementById("player");
	pImg.src = "";
	var cImg = document.getElementById("computer");
	cImg.src = "";
	// Hide play again window
	document.getElementById("playAgain").style.display = "none";
	// Show play option buttons
	document.getElementById("buttons").style.display = "block";
	result.innerHTML = "";
	waitPlayerDecision();
}

// Begin the game
function start() {
	// Hide start window
	document.getElementById("start").style.display = "none";
	// Show play option buttons
	document.getElementById("buttons").style.display = "block";
	waitPlayerDecision();
}

// Hide computer hand
function waitPlayerDecision() {
	var cImg = document.getElementById("computer");
	cImg.style.display = "none";
}