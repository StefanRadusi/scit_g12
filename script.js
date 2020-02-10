function HangMan() {
  const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  this.word = words[Math.floor(Math.random() * words.length)];
  this.lettersDOM = [];
  this.mistakes = 0;
  this.winner = 0;
}

HangMan.prototype.renderUnderScores = function() {
  for (let i = 0; i < this.word.length; i++) {
    const p = document.createElement("p");
    p.innerText = "_";
    p.classList.add("word");
    document.getElementById("letters").appendChild(p);
    this.lettersDOM.push(p);
  }
};

HangMan.prototype.getInputFromUser = function() {
  const obj = this;
  document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const text = event.target.value;

      if (text.length === 1) {
        console.log(text);
        obj.checkForLetter(text);
      }

      event.target.value = "";
    }
  });
};

HangMan.prototype.checkForLetter = function(letter) {
  if (this.word.includes(letter)) {
    this.matchLetter(letter);
    this.winner++;
    this.winSituation();
  } else {
    console.log("not includes");
    this.updateMistakes();
  }
};

HangMan.prototype.matchLetter = function(letter) {
  for (const [index, wordLetter] of this.word.split("").entries()) {
    if (wordLetter === letter) {
      const p = this.lettersDOM[index];
      p.innerText = letter;
    }
  }
};

HangMan.prototype.updateMistakes = function() {
  const currentMistake = this.mistakes;
  this.mistakes = this.mistakes + 1;

  const mistakes = document.getElementById("mistakes");
  const currentText = mistakes.innerText;
  const newText = currentText.replace(currentMistake, this.mistakes);
  mistakes.innerText = newText;
  this.maxMistakes();
};

//mistakes task
HangMan.prototype.maxMistakes = function() {
  if (this.mistakes === 3) {
    for (const [index, wordMistake] of this.word.split("").entries()) {
      const p = this.lettersDOM[index];
      p.innerText = wordMistake;
      document.getElementById("mistakes").innerHTML = "You lost!";
      document.getElementById("input").disabled = true;
    }
  }
};

//winner task
let winner = 0;
HangMan.prototype.winSituation = function() {
  if (this.winner === this.lettersDOM.length) {
    document.getElementById("mistakes").innerHTML = "You won!";
    document.getElementById("input").disabled = true;
  }
};

//reset task. i have an error, it is NOT DONE YET
/*document.getElementById("reset").addEventListener("click", function() {
  hangMan.resetTheGame();
}); */

HangMan.prototype.resetTheGame = function() {
  let obj = this;
  obj.mistakes = 0;
  document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("mistakes").innerHTML = "You have 0 mistakes.";
    document.getElementById("input").disabled = false;
    document.getElementById("letters").innerHTML = "";
    const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
    obj.word = words[Math.floor(Math.random() * words.length)];
    obj.lettersDOM = [];
    obj.winner = 0;
    obj.renderUnderScores();
    obj.matchLetter();
  });
};

const hangMan = new HangMan();
hangMan.renderUnderScores();
hangMan.getInputFromUser();
hangMan.resetTheGame();
console.log(hangMan);
