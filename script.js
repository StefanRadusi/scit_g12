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

let hours=0;
let minutes=0;
let seconds=0;
const secondP = document.getElementById("seconds");
const minutesP = document.getElementById("minutes");
const hoursP = document.getElementById("hours");

setInterval(function(){
  seconds++;
 let s =document.getElementById("seconds");
 console.log(s.innerText);
 if (seconds>59)
 {
   seconds=0;
   minutes++;
   
 }
 if(minutes>59)
 {
   minutes=0;
   hours++;
 }
 if(hours>24){
   hours=0;
 }
 console.log(hours,minutes,seconds);
 secondP.innerText=seconds < 10 ? "0" + seconds : seconds;
 minutesP.innerText=minutes < 10 ? "0" + minutes : minutes;
 hoursP.innerText=hours < 10 ? "0" + hours : hours;

}, 1);