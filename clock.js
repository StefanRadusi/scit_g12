let hours = 0;
let minutes = 0;
let seconds = 0;

const secondP = document.getElementById("seconds");
const minutesP = document.getElementById("minutes");
const hoursP = document.getElementById("hours");

setInterval(function () {
  clock();
}, 1)

function clock() {
  seconds++;
  if (seconds > 59) {
    seconds = 0;
    minutes++;
  }

  if (minutes > 59) {
    minutes = 0;
    hours++;
  }

  if (hours > 59) {
    hours = 0;
  }
  secondP.innerText = seconds < 10 ? "0" + seconds : seconds;
  minutesP.innerText = minutes <  10 ? "0" + minutes : minutes;
  hoursP.innerText = hours <  10 ? "0" + hours : hours; 
}