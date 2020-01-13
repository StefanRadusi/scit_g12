console.log("start");

// let a = 1;

// function afterSomeTime() {
//   a = a + 1;
//   console.log(a);
// }

// console.log(a);

// setTimeout(function() {
//   console.log(a);
//   setTimeout(afterSomeTime, 2000);
// }, 2000);

// console.log(a);

function createParagraph(text) {
  console.log(text);
  const p = document.createElement("p");
  p.innerText = text;

  document.getElementById("body").appendChild(p);

  return p;
}

function updateParagraphText(text, p) {
  console.log(p);
  p.innerText = text;
}

// function handleInput(event) {
//   if (event.key === "Enter") {
//     const inputValue = event.target.value;

//     setTimeout(function() {
//       createParagraph(inputValue);
//     }, 2000);
//   }
// }

document.getElementById("text").addEventListener("keydown", handleInput);

const p = createParagraph(0);
let a = 0;
function handleInput(event) {
  if (event.key === "Enter") {
    a = a + 1;
    console.log(a);
    updateParagraphText(a, p);
  }
}

setInterval(function() {
  console.log("run interval function");
}, 1000);
