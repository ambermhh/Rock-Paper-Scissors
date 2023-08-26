const score = {
  wins: 0,
  losses: 0,
  ties: 0
}
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "✊🏻";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "🖐🏻";
  } else {
    computerMove = "✌🏻";
  }
  return computerMove;
}

let result = "";

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  if (playerMove === "✌🏻") {
    if (computerMove === "✊🏻") {
      result = "You Lose";
    } else if (computerMove === "🖐🏻") {
      result = "You Win";
    } else if (computerMove === "✌🏻") {
      result = "Tie";
    }
  }
  if (playerMove === "✊🏻") {
    if (computerMove === "✊🏻") {
      result = "Tie";
    } else if (computerMove === "🖐🏻") {
      result = "You Lose";
    } else if (computerMove === "✌🏻") {
      result = "You Win";
    }
  }

  if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scssiors") {
      result = "You Lose";
    }
  }

  if (result === "You Win") {
    score.wins += 1;
  } else if (result === "You Lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties +=1;
  }

  document.getElementById('movesDisplay').textContent = ` ${computerMove}  Computer ---- You  ${playerMove}`;
  document.getElementById('wins').textContent = `Wins: ${score.wins}`;
  document.getElementById('losses').textContent = `Losses: ${score.losses}`;
  document.getElementById('ties').textContent = `Ties: ${score.ties}`;
}



