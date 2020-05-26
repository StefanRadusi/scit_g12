function HangMan() {
  this.lettersDOM = [];
  this.mistakes = 0;
  this.okLetter = 0;
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
    this.updateMistakes(letter);
  }
};

// this method is responsible for rendering the user choice of letter in the correct paragraph which normally has a underscore
HangMan.prototype.matchLetter = function(letter) {
  // this.correctLetterCounter = this.correctLetterCounter +1;
  
  // the for loop will iterate through all the letters of the computer chosen word 
  // when the user letter match the letter in the computer word we use previously stored array of paragraphs to render the found letter correctly
  for (const [index, wordLetter] of this.word.split("").entries()) {
    const obj = this;
    const pa = this.lettersDOM[index];
    if (wordLetter === letter) {
      const p = this.lettersDOM[index];
      p.innerText = letter;
      obj.okLetter ++
    }
    if(this.word.length === obj.okLetter){
      const inputField = document.getElementById("input")
      document.getElementById("mistakes").innerText = "You won!"
      inputField.disabled = true;
    }
  }
 
  console.log(this.okLetter)

};

// this method updates the text regarding how many mistakes the user has done
HangMan.prototype.updateMistakes = function(letter) {
  // "this.mistakes" is like a counter
  // every time the "updateMistakes" is called "this.mistakes" is incremented
  const currentMistake = this.mistakes;
  this.mistakes = this.mistakes + 1;

  // it not enough to keep track of the mistakes internally, 
  // we need to render to the browser by changing the "innerText" of the paragraph with the info about the mistakes 
  const mistakes = document.getElementById("mistakes");
  const currentText = mistakes.innerText;
  const newText = currentText.replace(currentMistake, this.mistakes);
  mistakes.innerText = newText;

  if(currentMistake === 2){
    const mistsakeText = document.getElementById("mistakes");
    const inputField = document.getElementById("input")
    mistsakeText.innerText = "You Lost!";
    inputField.disabled = true;
    for (const [index, wordLetter] of this.word.split("").entries()) {
        const p = this.lettersDOM[index];
        p.innerText = wordLetter;
    }
  }
};
HangMan.prototype.deleteButton = function(){
  const obj = this;
  const resetButton = document.getElementById("reset");
resetButton.addEventListener("click",function(){
  document.getElementById("letters").innerHTML = "";

  const inputField = document.getElementById("input")
  obj.randomWord();
  this.lettersDOM = [];
  this.mistakes = 0;
  this.goodChoices = 0;
  obj.renderUnderScores();
  document.getElementById("mistakes").innerText = "You have 0 mistakes"
  inputField.disabled = false;
  

})
}

// this is called the instantiation of object from "HangMan" class
// a class is a blue print it will be useless with we do not create on abject from it
const hangMan = new HangMan();
// this is a method call check the above what functionality it has
hangMan.randomWord();
hangMan.renderUnderScores();
hangMan.getInputFromUser();
hangMan.deleteButton();
console.log(hangMan);

