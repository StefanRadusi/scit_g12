
function HangMan() {
  this.lettersDOM = [];
  this.mistakes = 0;
  this.goodChoices = 0;
}

HangMan.prototype.randomWord = function() {
  const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  this.word = words[Math.floor(Math.random() * words.length)];
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
      this.goodChoices++;
    }
  }
};

HangMan.prototype.winState = function() {
  

};


HangMan.prototype.resetGame = function() {
  const obj = this;
  document.getElementById("input").addEventListener("click", function() {
    obj.randomWord();
    obj.lettersDOM = [];
    obj.mistakes = 0;
    obj.goodChoices = 0;
  })
};


HangMan.prototype.updateMistakes = function() {
  const currentMistake = this.mistakes;
  this.mistakes = this.mistakes + 1;
 
  const mistakes = document.getElementById("mistakes");
  const currentText = mistakes.innerText;
  const newText = currentText.replace(currentMistake, this.mistakes);
  mistakes.innerText = newText;

  this.handleMistakes();
};

HangMan.prototype.handleMistakes = function() {
  if (this.mistakes === 3) {
    mistakes.innerText = "You lose";
    for (const [index, wordLetter] of this.word.split("").entries()) {
      const p = this.lettersDOM[index];
      p.innerText = wordLetter;
    }
    this.disableInput();
  }
};


HangMan.prototype.disableInput = function() {
  const input = document.getElementById("input"); 
  input.disabled = true;
};


const hangMan = new HangMan();

hangMan.randomWord();
hangMan.renderUnderScores();
hangMan.getInputFromUser();
console.log(hangMan);
