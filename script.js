function HangMan() {
  const words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  this.word = words[Math.floor(Math.random() * words.length)];
  this.lettersDOM = [];
  this.mistakes = 0;
}

HangMan.prototype.renderUnderScores = function() {
  for (let i = 0; i < this.word.length; i++) {
    const p = document.createElement("p");
    p.innerText = "_";
    p.classList.add("word");
    document.getElementById( "letters").appendChild(p);
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
  
  this.loser();

  

};

HangMan.prototype.winner = function() {
        
        const wins = document.getElementById("wins")
        par.innerText = "You win!"
        document.getElementById("body").appendChild(wins);   
      } 
  

HangMan.prototype.loser = function() {
  if(this.mistakes === 3) {
      const para = document.createElement("p");
     para.innerText = "You died!!"
     document.getElementById("body").appendChild(para);
   
  for (const [index, wordLetter] of this.word.split("").entries()) {
      const p = this.lettersDOM[index];
      p.innerText = wordLetter;
        } 
      }
  }

HangMan.prototype.resetAll = function() {
   
  const reset = document.getElementById("reset").addEventListener("click", function(event){

})
  }
const hangMan = new HangMan();
hangMan.renderUnderScores();
hangMan.getInputFromUser();
// hangMan.winner()

console.log(hangMan);


