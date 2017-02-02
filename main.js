var guessBtn = document.getElementById('guess-btn');
var userInput = document.getElementById('input');
var lastGuess = document.getElementById('last-guess');
var clearBtn = document.getElementById('clear');
var gameResult = document.getElementById('result');
var resetBtn = document.getElementById('reset-btn');


// game users/players
var userGuess = parseInt(userInput.value, 10);
var compGuess = Math.floor(Math.random() * 100) + 1;


// GAME FUNCTION:
guessBtn.addEventListener('click', function() {
  checkNumber(userGuess);
  lastGuess.innerText = userInput.value;
  numberGuesser(userGuess, compGuess);
});


// NUMBER GUESSER
function numberGuesser(userGuess, compGuess) {

  var userGuess = parseInt(userInput.value, 10);

  if (userGuess > compGuess) {
      gameResult.innerText = "That is too high.";
  } else if (userGuess < compGuess) {
      gameResult.innerText = "That is too low.";
  } else if (userGuess === compGuess){
      gameResult.innerText = "BOOM!";
  } else {
      gameResult.innerText = "something went wrong...";
  }
};

// ERROR MESSAGES
function checkNumber(userGuess) {

  var userGuess = parseInt(userInput.value, 10);

  if (userGuess>100) {
    alert("Your number must be lower than 100.");
  } else if (userGuess<1){
    alert("Your number must be higher than 0.");
  } else if (isNaN(userGuess)) {
    alert ("You must enter a number");
  }
};


// clear button
clearBtn.addEventListener('click', function() {
  userInput.value = "";
});

// reset button
resetBtn.addEventListener('click', function() {
  userInput.value = "";
  lastGuess.innerText = "";
  gameResult.innerText = "";
});

// disabling 'clear' button
function disabledState() {
  if (userInput.value = "") {
    clearBtn.disabled = true;
  }
};
