console.log("start");

//document object is the interface between JavaScript and html object
console.log(document);

// store in a variable the html object paragraph;
// "getElementById" is a function on document which help us retrieve an existing html object
const p = document.getElementById("paragraph");
console.log(p);

// once we have the reference of a html object stored in a variable we can use its attribute to change the html properties
// the "innerText" property, when is set will change the inner text of html object
p.innerText = "modified";

// with document we can create new elements
const newParagraph = document.createElement("p");

// a new html object has the some properties as one that already exists and we can change its properties similar with line 13
newParagraph.innerText = "new paragraph";
console.log(newParagraph);

// a created html object will be rendered by the browser ONLY when that object is appended to an existing html object.
document.getElementById("body").appendChild(newParagraph);

// ------------------------------

// Class exercise
// Render 3 boxes the have as title: Title 1, Title 2, Title 3 and have as background a random color from the following array: ['red', 'yellow', 'blue']
// The boxes have the following html structure:
// <div>
//    <h1> Title {title number} </h1>
//    <p> This is content <p>
// </div>

// Solution

// declare the colors option in a 3 element array
const colors = ["red", "yellow", "blue"];

// function that create the box html structure and append to body
function creteDiv(counter, randomColor) {
  const divContainer = document.createElement("div");
  divContainer.style.background = randomColor;

  const h1 = document.createElement("h1");

  // we use the parameter counter to modify each box title on each function call
  h1.innerText = "Title " + (counter + 1);
  divContainer.appendChild(h1);

  const pContent = document.createElement("p");
  pContent.innerText = "This is the content";
  divContainer.appendChild(pContent);

  document.getElementById("body").appendChild(divContainer);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// we use for to repeat the html object creation 3 times
for (let index = 0; index < 3; index++) {
  // on every for iteration "getRandomColor" function will return a different color string from the colors array
  const randomColor = getRandomColor();
  creteDiv(index, randomColor);
}
