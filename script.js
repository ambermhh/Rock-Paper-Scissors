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
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "🖐🏻";
  } else {
    computerMove = "✌🏻";
  }
  return computerMove;
}


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "✌🏻") {
    if (computerMove === "✊🏻") {
      result = "You Lose";
    } else if (computerMove === "🖐🏻") {
      result = "You Win";
    } else if (computerMove === "✌🏻") {
      result = "Tie";
    }
  }else if (playerMove === "✊🏻") {
    if (computerMove === "✊🏻") {
      result = "Tie";
    } else if (computerMove === "🖐🏻") {
      result = "You Lose";
    } else if (computerMove === "✌🏻") {
      result = "You Win";
    }
  }else if (playerMove === "🖐🏻") {
    if (computerMove === "✊🏻") {
      result = "You Win";
    } else if (computerMove === "🖐🏻") {
      result = "Tie";
    } else if (computerMove === "✌🏻") {
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

function resetGame() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  document.getElementById('wins').textContent = `Wins: ${score.wins}`;
  document.getElementById('losses').textContent = `Losses: ${score.losses}`;
  document.getElementById('ties').textContent = `Ties: ${score.ties}`;
}


const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame);

