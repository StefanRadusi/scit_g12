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

// function createParagraph(text) {
//   console.log(text);
//   const p = document.createElement("p");
//   p.innerText = text;

//   document.getElementById("body").appendChild(p);

//   return p;
// }

// function updateParagraphText(text, p) {
//   console.log(p);
//   p.innerText = text;
// }

// function handleInput(event) {
//   if (event.key === "Enter") {
//     const inputValue = event.target.value;

//     setTimeout(function() {
//       createParagraph(inputValue);
//     }, 2000);
//   }
// }

// document.getElementById("text").addEventListener("keydown", handleInput);

// const p = createParagraph(0);
// let a = 0;
// function handleInput(event) {
//   if (event.key === "Enter") {
//     a = a + 1;
//     console.log(a);
//     updateParagraphText(a, p);
//   }
// }

// setInterval(function() {
//   console.log("run interval function");
// }, 1000);


let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(function() {
  seconds = seconds + 1;
  // minutes = minutes + 1;
  // hours = hours + 1;
  if (seconds < 10) {
    document.getElementById("seconds").innerText = "0" + seconds;
  } else if (seconds < 60) {
    document.getElementById("seconds").innerText = seconds;
  } else if (seconds === 60) {
    seconds = 0;
    minutes = minutes + 1;
    document.getElementById("minutes").innerText = "0" + minutes;
  } else if (minutes >= 10) {
    document.getElementById("minutes").innerText = minutes;
  } else if (minutes === 60) {
    minutes = 0;
    hours = hours + 1;
    document.getElementById("hours").innerText = "0" + hours;
  }

}, 10); 