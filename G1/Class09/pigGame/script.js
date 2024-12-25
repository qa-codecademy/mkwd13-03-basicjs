// GLOBAL VARIABLES

const gameWinningScore = 30;
let playerOneScore = 0; // total score
let playerTwoScore = 0; // total score
let roundScore = 0; // round score

let isGameActive = false;

let activePlayer = 0; // 0 is playerOne 1 is playerTwo

// SCORE ELEMENTS
let playerOneTotalScoreElement = document.getElementById('score-0');
let playerTwoTotalScoreElement = document.getElementById('score-1');
let playerOneCurrentScoreElement = document.getElementById('current-0');
let playerTwoCurrentScoreElement = document.getElementById('current-1');
// BUTTONS
let newGameButton = document.querySelector('.btn-new');
let rollButton = document.querySelector('.btn-roll');
let holdButton = document.querySelector('.btn-hold');


function newGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    roundScore = 0;
    activePlayer = 0;

    // isGameActive = true;

    playerOneCurrentScoreElement.innerText = 0;
    playerTwoCurrentScoreElement.innerText = 0;
    playerOneTotalScoreElement.innerText = 0;
    playerTwoTotalScoreElement.innerText = 0;

    rollButton.addEventListener('click', rollDice);
    holdButton.addEventListener('click', holdScore);
}

function rollDice() {
    // if (!isGameActive) {
    //     return;
    // }

    let diceOne = Math.floor(Math.random() * 6 + 1);
    let diceTwo = Math.floor(Math.random() * 6 + 1);

    document.querySelector('.dice').src = './dice/dice-' + diceOne + '.png';
    document.querySelector('.dice2').src = `./dice/dice-${diceTwo}.png`;

    if (diceOne !== 1 && diceTwo !== 1) {
        roundScore += diceOne + diceTwo;

        if (activePlayer === 0) {
            playerOneCurrentScoreElement.innerText = roundScore;
        } else {
            playerTwoCurrentScoreElement.innerText = roundScore;
        }
    } else {
        nextPlayer();
    }
}

function holdScore() {
    // if (!isGameActive) {
    //     return;
    // }

    if (activePlayer === 0) {
        playerOneScore += roundScore;
        playerOneTotalScoreElement.innerText = playerOneScore;
        nextPlayer();
    } else {
        playerTwoScore += roundScore;
        playerTwoTotalScoreElement.innerText = playerTwoScore;
        nextPlayer();
    }
    checkForWinner();
}

function nextPlayer() {
    // roundscore set to zero
    roundScore = 0;
    // change round score in html
    if (activePlayer === 0) {
        playerOneCurrentScoreElement.innerText = roundScore;
    } else {
        playerTwoCurrentScoreElement.innerText = roundScore;
    }
    // change active player in html
    document.querySelector(`.player-${activePlayer}-panel`)
            .classList.remove('active');

    // change active player
    // activePlayer = activePlayer === 0 ? 1 : 0;
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    
    // add active player class
    document.querySelector('.player-' + activePlayer + '-panel')
            .classList.add('active');
    
}

function checkForWinner() {
    if (playerOneScore >= gameWinningScore) {
        //isGameActive = false;
        rollButton.removeEventListener('click', rollDice);
        holdButton.removeEventListener('click', holdScore);
        alert('Player one is the Winner');
    } else if (playerTwoScore >= gameWinningScore) {
        //isGameActive = false;
        rollButton.removeEventListener('click', rollDice);
        holdButton.removeEventListener('click', holdScore);
        alert('Player two is the Winner');
    }
}

newGameButton.addEventListener('click', newGame);

