// Store the words to be guessed in an array
const words = ["javascript", "html", "css", "node", "react"];

// Select the necessary elements from the HTML document
const startButton = document.querySelector(".start-button");
const resetButton = document.querySelector(".reset-button");
const wordBlanks = document.querySelector(".word-blanks");
const timerCount = document.querySelector(".timer-count");
const winCount = document.querySelector(".win");
const loseCount = document.querySelector(".lose");

let chosenWord = "";
let remainingGuesses = 10;
let timer;
let gameStarted = false;

// Function to initialize the game and select a random word from the array
function initializeGame() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  remainingGuesses = chosenWord.length;
  timerCount.textContent = remainingGuesses;
  wordBlanks.textContent = chosenWord.split("").map(() => "_").join(" ");
  gameStarted = true;
  startTimer();
}

// Function to start the game timer
function startTimer() {
  timer = setInterval(() => {
    remainingGuesses--;
    timerCount.textContent = remainingGuesses;
    if (remainingGuesses === 0) {
      endGame("lose");
    }
  }, 1000);
}

// Function to check if a guessed letter is correct and update the word blanks
function checkGuess(letter) {
  let guessedWord = wordBlanks.textContent.split(" ");
  chosenWord.split("").forEach((character, index) => {
    if (character === letter) {
      guessedWord[index] = letter;
      remainingGuesses++;
    }
  });
  wordBlanks.textContent = guessedWord.join(" ");
  if (wordBlanks.textContent.indexOf("_") === -1) {
    endGame("win");
  }
}

// Function to end the game and display the appropriate message
function endGame(outcome) {
  clearInterval(timer);
  gameStarted = false;
  if (outcome === "win") {
    alert("Congratulations! You won the game.");
    winCount.textContent = parseInt(winCount.textContent) + 1;
  } else {
    alert("Sorry, you lost the game.");
    loseCount.textContent = parseInt(loseCount.textContent) + 1;
  }
}

// Add event listeners to the start and reset buttons
startButton.addEventListener("click", () => {
  if (!gameStarted) {
    initializeGame();
  }
});

resetButton.addEventListener("click", () => {
  winCount.textContent = 0;
  loseCount.textContent = 0;
});

// Add event listener to capture user guesses
document.addEventListener("keydown", (event) => {
  if (gameStarted && event.keyCode >= 65 && event.keyCode <= 90) {
    checkGuess(event.key.toLowerCase());
  }
});
