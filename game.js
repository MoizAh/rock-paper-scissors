let playerWin = 0;
let computerWin = 0;

const progressText = document.querySelector('.progress-text')
const r = document.querySelector('#r');
const p = document.querySelector('#p');
const s = document.querySelector('#s');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const reset = document.querySelector('.reset');


// User choice
function start() {
    r.addEventListener('click', function () {
        singleRound('rock')
    })
    p.addEventListener('click', function () {
        singleRound('paper')
    })
    s.addEventListener('click', function () {
        singleRound('scissors')
    })
}

// Random computer choice
function computerPlayer() {
    const randomNumber = (Math.floor(Math.random() * 3) + 1);
    var computerChoice = randomNumber;
    if (computerChoice % 3 === 0) {
        return computerChoice = "rock"
    } else if (computerChoice % 3 === 1) {
        return computerChoice = "paper"
    } else {
        return computerChoice = "scissors"
    }
}

// Single round of RPS
function singleRound(playerSelection, computerSelection) {
    computerSelection = computerPlayer();
    if (playerSelection === computerSelection) {
        progressText.textContent = 'It\'s a draw!'
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        progressText.textContent = "You lose! Paper beats rock!"
        computerWin += 1
        computerScore.dataset.value++;
        computerScore.innerHTML = computerScore.dataset.value;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        progressText.textContent = "You win! Rock beats scissors!"
        playerWin += 1
        playerScore.dataset.value++;
        playerScore.innerHTML = playerScore.dataset.value;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        progressText.textContent = "You win! Paper beats rock!"
        playerWin += 1
        playerScore.dataset.value++;
        playerScore.innerHTML = playerScore.dataset.value;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        progressText.textContent = "You lose! Scissor beats paper!"
        computerWin += 1
        computerScore.dataset.value++;
        computerScore.innerHTML = computerScore.dataset.value;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        progressText.textContent = "You lose! Rock beats scissors!"
        computerWin += 1
        computerScore.dataset.value++;
        computerScore.innerHTML = computerScore.dataset.value;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        progressText.textContent = "You win! Scissors beats paper!"
        playerWin += 1
        playerScore.dataset.value++;
        playerScore.innerHTML = playerScore.dataset.value;
    }
    endGame()
}

// Once a user hits 5 points
function endGame() {
    if (computerWin === 5) {
        document.getElementById('r').disabled = true
        document.getElementById('p').disabled = true
        document.getElementById('s').disabled = true
        progressText.textContent = "You lost the game, press Reset to try again!"
    } else if (playerWin === 5) {
        document.getElementById('r').disabled = true
        document.getElementById('p').disabled = true
        document.getElementById('s').disabled = true
        progressText.textContent = "You won the game, press Reset to start over!"
    }
}

// Reset Button
reset.addEventListener('click', () => {
    location.reload()
})


start()