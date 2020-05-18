function HangMan() {
  const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  this.word = words[Math.floor(Math.random() * words.length)];
  this.mistakesDOM = document.getElementById("mistakes");

  this.lettersDOM = [];
  this.mistakes = 0;
}

HangMan.prototype.renderUnderScores = function () {
  document.getElementById("letters").innerHTML = null;
  for (let i = 0; i < this.word.length; i++) {
    const p = document.createElement("p");
    p.innerText = "_";
    p.classList.add("word");
    document.getElementById("letters").appendChild(p);
    this.lettersDOM.push(p);
  }
};

HangMan.prototype.getInputFromUser = function () {
  const obj = this;
  document
    .getElementById("input")
    .addEventListener("keydown", function (event) {
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

HangMan.prototype.checkForLetter = function (letter) {
  if (this.word.includes(letter)) {
    this.matchLetter(letter);
  } else {
    console.log("not includes");
    this.updateMistakes();
  }
};

HangMan.prototype.matchLetter = function (letter) {
  for (const [index, wordLetter] of this.word.split("").entries()) {
    if (wordLetter === letter) {
      const p = this.lettersDOM[index];
      p.innerText = letter;
    }
  }

  if (this.checkIfWin()) {
    this.youWinBlockInput();
  }
};

HangMan.prototype.updateMistakes = function () {
  const currentMistake = this.mistakes;
  this.mistakes = this.mistakes + 1;

  const currentText = this.mistakesDOM.innerText;
  const newText = currentText.replace(currentMistake, this.mistakes);
  this.mistakesDOM.innerText = newText;

  this.showDeathText();
};

const hangMan = new HangMan();

HangMan.prototype.blockInputIfLose = function () {
  for (const [index, wordLetter] of this.word.split("").entries()) {
    const p = this.lettersDOM[index];
    p.innerText = wordLetter;
    document.getElementById("input").disabled = true;
    this.mistakesDOM.innerHTML = "You lose!";
  }
};

HangMan.prototype.checkIfWin = function () {
  for (const p of this.lettersDOM) {
    if (p.innerText === "_") return false;
  }

  return true;
};

HangMan.prototype.youWinBlockInput = function () {
  document.getElementById("input").disabled = true;
  this.mistakesDOM.innerHTML = "You Win!";
  for (const [index, wordLetter] of this.word.split("").entries()) {
    const p = this.lettersDOM[index];
    p.innerText = wordLetter;
  }
};

HangMan.prototype.showDeathText = function () {
  if (this.mistakes === 3) {
    this.blockInputIfLose();
  }
};

HangMan.prototype.resetGame = function () {
  const obj = this;
  document.getElementById("reset").addEventListener("click", function () {
    obj.mistakesDOM.innerHTML = "You have 0 mistakes";
    document.getElementById("input").disabled = false;
    const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
    obj.word = words[Math.floor(Math.random() * words.length)];
    obj.lettersDOM = [];
    obj.mistakes = 0;
    obj.renderUnderScores();
  });
};

hangMan.renderUnderScores();
hangMan.getInputFromUser();
console.log(hangMan);
hangMan.resetGame();
