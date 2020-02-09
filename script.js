function HangMan() {
  const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  // keep in mind even thou all the object will have this attribute, the value of the attribute will be different because of the "Random" implementation
  this.word = words[Math.floor(Math.random() * words.length)];
  this.lettersDOM = [];
  this.mistakes = 0;
  this.matching = 0;
}

HangMan.prototype.randomWord = function() {
  const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  this.word = words[Math.floor(Math.random() * words.length)];
};

HangMan.prototype.renderUnderScores = function() {
  for (let i = 0; i < this.word.length; i++) {
    const p = document.createElement("p");
    p.innerText = "_";
    p.classList.add("word");
    document.getElementById("letters").appendChild(p);

    // we store the new created dom object in in the objects attribute for latter use 
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

// this method contains the logic for deciding if the user has chose a correct letter or not
HangMan.prototype.checkForLetter = function(letter) {
  if (this.word.includes(letter)) {
    this.matchLetter(letter);
  } else {
    console.log("not includes");
    this.updateMistakes();
  }
};

// this method is responsible for rendering the user choice of letter in the correct paragraph which normally has a underscore
HangMan.prototype.matchLetter = function(letter) {
  for (const [index, wordLetter] of this.word.split("").entries()) {
    if (wordLetter === letter) {
      const p = this.lettersDOM[index];
      p.innerText = letter;
      this.matching = this.matching + 1;
    }
  }
  this.winGame();
};

HangMan.prototype.winGame = function(matchLetter) {
  if (this.word.length === this.matching) {
    mistakes.innerText = "CONGRATS! You won!"
    document.getElementById("input").disabled = true;
  }
}

// this method updates the text regarding how many mistakes the user has done
HangMan.prototype.updateMistakes = function() {
  const currentMistake = this.mistakes;
  this.mistakes = this.mistakes + 1;

  const mistakes = document.getElementById("mistakes");
  const currentText = mistakes.innerText;
  const newText = currentText.replace(currentMistake, this.mistakes);
  mistakes.innerText = newText;
  this.lostGame();
};

HangMan.prototype.lostGame = function() {
  if (this.mistakes === 3) {
    mistakes.innerText = "You lost."
    document.getElementById("input").disabled = true;

    for (const [index, wordLetter] of this.word.split("").entries()) {
      const p = this.lettersDOM[index];
      p.innerText = wordLetter;
    }
  }
}

HangMan.prototype.onClickResetButton = function() {
  const obj = this;
  document.getElementById("reset").addEventListener("click", function() {
  
    const mistakes = document.getElementById("mistakes");
    mistakes.innerText = "You have 0 mistakes";
    
    let removeElement = document.getElementById("letters");
    while (removeElement.firstChild) {
    removeElement.removeChild(removeElement.firstChild);
    }

    obj.randomWord();
    obj.renderUnderScores();
    obj.getInputFromUser();

    console.log(hangMan);
  })
  
};

const hangMan = new HangMan();

hangMan.onClickResetButton();
hangMan.renderUnderScores();
hangMan.getInputFromUser();
console.log(hangMan);
