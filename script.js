function HangMan() {
  const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  this.word = words[Math.floor(Math.random() * words.length)];
  this.lettersDOM = [];
  this.mistakes = 0;
}

HangMan.prototype.renderUnderScores = function () {
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
      this.youWin();
    }
  }
};

HangMan.prototype.youWin = function () {
  const char = [];
  for (i = 0; i < this.lettersDOM.length; i++) {
    char[i] = this.lettersDOM[i].innerText;
  }
  const underscore = "_";
  if (char.includes(underscore)) {
    console.log("true");
  } else {
    console.log("false");
    mistakes.innerText = "You won";
    document.getElementById("input").disabled = true;
  }

}



HangMan.prototype.updateMistakes = function () {
  const currentMistake = this.mistakes;
  this.mistakes = this.mistakes + 1;

  const mistakes = document.getElementById("mistakes");
  const currentText = mistakes.innerText;
  const newText = currentText.replace(currentMistake, this.mistakes);
  mistakes.innerText = newText;

  if (this.mistakes >= 3) {
    this.youLost();
  }
};

HangMan.prototype.youLost = function () {
  mistakes.innerText = "You lost";
  document.getElementById("input").disabled = true;
  var element = document.getElementById("letters").getElementsByTagName("p"), index;

  for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
  }

  for (let i = 0; i < this.word.length; i++) {
    const p = document.createElement("p");
    p.innerText = this.word[i];
    p.classList.add("word");
    document.getElementById("letters").appendChild(p);
  }
}


HangMan.prototype.reset = function () {
  let newObject = this;
  document.getElementById("reset").addEventListener("click", function () {

    document.getElementById("input").disabled = false;
    document.getElementById("mistakes").innerText = "You have 0 mistakes";

    var element = document.getElementById("letters").getElementsByTagName("p"), index;
    for (index = element.length - 1; index >= 0; index--) {
      element[index].parentNode.removeChild(element[index]);
    }

    const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
    newObject.word = words[Math.floor(Math.random() * words.length)];
    newObject.lettersDOM = [];
    newObject.mistakes = 0;

    hangMan.renderUnderScores();
    console.log(newObject);
    // window.location.reload(false);
  })

}


const hangMan = new HangMan();
hangMan.renderUnderScores();
hangMan.getInputFromUser();
hangMan.reset();

console.log(hangMan);

