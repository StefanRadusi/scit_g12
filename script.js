function HangMan() {
  const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  this.word = words[Math.floor(Math.random() * words.length)];
  this.lettersDOM = [];
  this.mistakes = 0;
  this.lettersFound = 0;
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
      this.lettersFound++;
    }
  }

  if (this.lettersFound === this.word.length) {
    this.handleWin();
  }
};

HangMan.prototype.updateMistakes = function() {
  const currentMistake = this.mistakes;
  this.mistakes = this.mistakes + 1; 

  const mistakes = document.getElementById("mistakes");
  const currentText = mistakes.innerText;
  const newText = currentText.replace(currentMistake, this.mistakes);
  mistakes.innerText = newText;
  this.handelLost(this.mistakes, mistakes);
};

HangMan.prototype.handelLost = function(mistake, mistakes) {
  if (mistake === 3) {
    mistakes.innerText = "You lost"
    for (const [index, wordLetter] of this.word.split("").entries()) {
      const p = this.lettersDOM[index];
        p.innerText = wordLetter;
    }
  }}

  HangMan.prototype.handleWin = function() {
    const mistakes = document.getElementById("mistakes");
    mistakes.innerText = "You win";
    document.getElementById("input").disabled = true;
  }
  

  HangMan.prototype.resetGame = function() {
    const obj = this;
    document.getElementById("reset").addEventListener("click",function(){ 
    document.getElementById("input").disabled = false;
    obj.counter = 0;
    obj.lettersDOM = [];
    obj.mistakes = 0;
    
    let element = document.getElementById("letters");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
    const mistakes = document.getElementById("mistakes");
    mistakes.innerText = "You have 0 mistakes";
    obj.renderUnderScores();
    obj.getInputFromUser();
    });
      
  }
  


const hangMan = new HangMan();
hangMan.renderUnderScores();
hangMan.getInputFromUser();
hangMan.resetGame();
console.log(hangMan); 
