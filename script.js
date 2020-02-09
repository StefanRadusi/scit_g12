function HangMan() {
  this.counter = 0;
  this.word;
  this.lettersDOM = [];
  this.mistakes = 0;
}

HangMan.prototype.randomWord = function(){
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

 HangMan.prototype.resetButton = function() {
  const resetHangman = this;
  document.getElementById("reset").addEventListener("click",function(){ 
  document.getElementById("input").disabled = false;
  resetHangman.counter = 0;
  resetHangman.lettersDOM = [];
  resetHangman.mistakes = 0;
  resetHangman.randomWord()
  
  let element = document.getElementById("letters");
  while (element.firstChild) {
  element.removeChild(element.firstChild);
  }
  const mistakes = document.getElementById("mistakes");
  mistakes.innerText = "You have 0 mistakes";
  
  resetHangman.renderUnderScores();
  resetHangman.getInputFromUser();
 
 
  });
    
}

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
    this.verifyWin();
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
      this.counter ++;
    }
  }
 
};

HangMan.prototype.updateMistakes = function() {
  if (this.mistakes < 2 ){
  const currentMistake = this.mistakes;
  this.mistakes = this.mistakes + 1;

  const mistakes = document.getElementById("mistakes");
  const currentText = mistakes.innerText;
  const newText = currentText.replace(currentMistake, this.mistakes);
  mistakes.innerText = newText;
  } else {
  document.getElementById("mistakes").innerText ="You lose";
  document.getElementById("input").disabled = true;

  let correctWord = hangMan.word.split("");
  for (const [index, letter] of correctWord.entries()){
    hangMan.lettersDOM[index].innerText = letter;
  }
  }
};

HangMan.prototype.verifyWin = function(){
  if (this.counter === this.lettersDOM.length){
    document.getElementById("mistakes").innerText ="You win";
    document.getElementById("input").disabled = true;
    
  }
}


const hangMan = new HangMan();
hangMan.randomWord();
hangMan.renderUnderScores();
hangMan.getInputFromUser();
hangMan.resetButton();
    

console.log(hangMan);

