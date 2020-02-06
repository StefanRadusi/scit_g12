function HangMan() {
  const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  this.word = words[Math.floor(Math.random() * words.length)];
  this.lettersDOM = [];
  this.mistakes = 0;
  this.matchNr = 0;
}

HangMan.prototype.renderUnderScores = function () {
  let lettersContainer = document.getElementById("letters");
  while (lettersContainer.firstChild) {
      lettersContainer.removeChild(lettersContainer.firstChild);
  }
  for (let i = 0; i < this.word.length; i++) {
      const p = document.createElement("p");
      p.innerText = "_";
      p.classList.add("word");
      lettersContainer.appendChild(p);
      this.lettersDOM.push(p);
  }
};

HangMan.prototype.getInputFromUser = function () {
  const obj = this;
  document.getElementById("input").addEventListener("keydown", function (event) {
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
          this.matchNr++;
      }
  }
  if(this.matchNr===this.lettersDOM.length)
  {
    let mistakes = document.getElementById("mistakes");
    mistakes.innerHTML = "YOU WIN!!";
  }
};

HangMan.prototype.updateMistakes = function () {
   const currentMistake = this.mistakes;
  this.mistakes = this.mistakes + 1;
  if (currentMistake < 3) {
      const mistakes = document.getElementById("mistakes");
      const currentText = mistakes.innerText;
      const newText = currentText.replace(currentMistake, this.mistakes);
      mistakes.innerText = newText;
  } else {
      this.showWord();
  }
};

HangMan.prototype.showWord = function () {
  let mistakes = document.getElementById("mistakes");
  mistakes.innerHTML = "You lose";
  for (const [index, wordLetter] of this.word.split("").entries()) {
      const p = this.lettersDOM[index];
      p.innerText = wordLetter;
  }
};

HangMan.prototype.resetHandler = function () {
  const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  this.word = words[Math.floor(Math.random() * words.length)];
  this.lettersDOM = [];
  this.mistakes = 0;
  this.matchNr = 0;
  this.renderUnderScores();
  document.getElementById("mistakes").innerHTML = 'You have 0 mistakes';
  console.log(this);
};

const hangMan = new HangMan();

hangMan.renderUnderScores();
hangMan.getInputFromUser();
console.log(hangMan);

 