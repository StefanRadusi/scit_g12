// class constructor
// this function is called when you instantiate a object with key word "new"
function HangMan() {
  this.words = ["cars", "cat", "donkey", "star", "africa", "jaggermeister"];
  // this is a attribute which all instantiated object with this class will have
  // keep in mind even thou all the object will have this attribute, the value of the attribute will be different because of the "Random" implementation
  this.word = this.words[Math.floor(Math.random() * this.words.length)];
  this.lettersDOM = [];
  this.mistakes = 0;
  this.checkedLetter = 0;
}

// "renderUnderScores" is a method off the HangMan class
// a method is a functionality of an object, and is a function
HangMan.prototype.renderUnderScores = function() {
  // "this" key word represents the current object
  // we need "this" so we can define general function which can apply on all different instances of the class
  // the "for" loop is used to create paragraphs to render for every letter in the computer chosen word  
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
  // we use this technic because "this" inside off all callback is NOT the current object; 
  const obj = this;
  document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const text = event.target.value;

      if (text.length === 1) {
        console.log(text);
        // "obj" contains "this" and this is HangMan class, so we can call "checkForLetter" method
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
    this.checkedLetter ++;
    if (this.checkedLetter === this.word.length) {
      this.winningSituation();
    }
  } else {
    console.log("not includes");
    this.updateMistakes();
  }
};

// this method is responsible for rendering the user choice of letter in the correct paragraph which normally has a underscore
HangMan.prototype.matchLetter = function(letter) {
  // the for loop will iterate through all the letters of the computer chosen word 
  // when the user letter match the letter in the computer word we use previously stored array of paragraphs to render the found letter correctly
  for (const [index, wordLetter] of this.word.split("").entries()) {
    if (wordLetter === letter) {
      const p = this.lettersDOM[index];
      p.innerText = letter;
    }
  }
}

// this method updates the text regarding how many mistakes the user has done
HangMan.prototype.updateMistakes = function() {
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
  if (this.mistakes === 3) {
    this.losingSituation();
  };
};

HangMan.prototype.losingSituation = function() {
  mistakes.innerText = "You lost!"
  document.getElementById("input").disabled = true;
  this.word.split("").forEach(letter => {
  this.matchLetter(letter);
  });
}

HangMan.prototype.winningSituation = () => {
  this.mistakes.innerText = "You Win!";
  document.getElementById("input").disabled = true;
}

HangMan.prototype.resetBtn = function() {
  const resetBtn = document.getElementById("reset");
  const input = document.getElementById("input");

  console.log(this);

  resetBtn.addEventListener("click", function() {
    input.disabled = false;
  })
}

// this is called the instantiation of object from "HangMan" class
// a class is a blue print it will be useless with we do not create on abject from it
const hangMan = new HangMan();

// this is a method call check the above what functionality it has
hangMan.renderUnderScores();
hangMan.getInputFromUser();
hangMan.resetBtn();
console.log(hangMan);
