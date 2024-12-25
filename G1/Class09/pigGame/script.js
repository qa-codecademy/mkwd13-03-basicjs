// GLOBAL VARIABLES

const gameWinningScore = 100;
let playerOneScore = 0; // total score
let playerTwoScore = 0; // total score
let roundScore = 0; // round score

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

    playerOneCurrentScoreElement.innerText = 0;
    playerTwoCurrentScoreElement.innerText = 0;
    playerOneTotalScoreElement.innerText = 0;
    playerTwoTotalScoreElement.innerText = 0;
}

function rollDice() {
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

// for(let i = 0; i < 20; i++) {
//     rollDice();
// }

newGameButton.addEventListener('click', newGame);

// rollButton.addEventListener('click', rollDice);

