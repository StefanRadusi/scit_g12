function HangMan() {
  const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  this.w = words;
  this.word = words[Math.floor(Math.random() * words.length)];
  this.lettersDOM = [];
  this.mistakes = 0;
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
    let c = 0;
    for (let i=0; i< this.lettersDOM.length; i++){
      if (this.lettersDOM[i].innerText === "_"){
        c++; 
      }
    }
    if(c === 0){
      this.handleWinner();
    }
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
  if (currentMistake < 3) {
  this.mistakes = this.mistakes + 1;
  const mistakes = document.getElementById("mistakes");
  const currentText = mistakes.innerText;
  const newText = currentText.replace(currentMistake, this.mistakes);
  mistakes.innerText = newText;
  }else{
    this.handleLoser(); 
  }
};

HangMan.prototype.handleLoser = function(){
  mistakes.innerText = "You lose";
  for (const [index, wordLetter] of this.word.split("").entries()) {
    const p = this.lettersDOM[index];
    p.innerText = wordLetter;

    console.log(p.innerText);
  }
};

// homework 1+2
HangMan.prototype.resetWord = function(){
  this.mistakes = 0;
  document.getElementById("mistakes").innerText = "You have 0 mistakes";
  document.getElementById("input").disabled = false;
  this.lettersDOM = [];
  const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  this.word = words[Math.floor(Math.random() * words.length)]; 
  document.getElementById("letters").innerHTML = "";
  this.renderUnderScores();
};

document.getElementById("reset").addEventListener("click", function(){
  hangMan.resetWord()
  console.log(hangMan)
});

HangMan.prototype.handleWinner = function(){
  document.getElementById("input").disabled = true;
  mistakes.innerText = "You win";
}

let hangMan = new HangMan();
hangMan.renderUnderScores();
hangMan.getInputFromUser();
console.log(hangMan);
