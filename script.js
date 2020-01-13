// console.log("start");

// // let a = 1;

// // function afterSomeTime() {
// //   a = a + 1;
// //   console.log(a);
// // }

// // console.log(a);

// // setTimeout(function() {
// //   console.log(a);
// //   setTimeout(afterSomeTime, 2000);
// // }, 2000);

// // console.log(a);

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

// // function handleInput(event) {
// //   if (event.key === "Enter") {
// //     const inputValue = event.target.value;

// //     setTimeout(function() {
// //       createParagraph(inputValue);
// //     }, 2000);
// //   }
// // }

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


let seconds = 0;
let minutes = 0;
let hours = 0;


const seconds = document.getElementById("seconds");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");



setInterval(function() {
  console.log("tick");
  seconds ++;

  if (seconds > 59){
    seconds = 0;
    minutes ++;
  }

    if (minutes > 59){
    minutes = 0;
    hours ++;
}

    if (hours > 23){
    hours = 0;
}

    console.log(hours, minutes, seconds);

    secondsP.innerText = seconds < 10 ? "0" +secondes : seconds;
    minutesP.innerText = minutes < 10 ? "0" +minutes : sminutes;
    hoursP.innerText = hours < 10 ? "0" + hours : hours;

}, 1000);

// let hour = 0;
// let minutes = 0;
// let second = 0;

// let seconds = document.getElementById("seconds").innerText;
// console.log(seconds);
// setInterval(function() {
//   seconds++;
//     if (seconds >= 59){
//       seconds = 0;
//       minutes = 1;

   
//    seconds.innerText = seconds;
//    console.log(seconds.innerText);
//   } 1000;})

