console.log("start");

// ----- example 1: rendering a text after a number o seconds set by user ------

//this function is called inside the callback function of the timer
function renderText(nrOfSeconds) {
  const p = document.createElement("p");

  // text a string concatenation with the parameter of the function
  // when this function is called the parameter passed is the value of the input
  // we use ternary  operator "?" produce the correct text in case we have just 1 second delay
  p.innerText = `This text is render after ${nrOfSeconds} ${
    nrOfSeconds > 1 ? "seconds" : "second"
  }`;

  document.getElementById("text-container").appendChild(p);
}

// this function will start a timer
// function startTimer(value) {
//   // the value from input is a string an we need to transform in number
//   // because timeout function has as second parameter milliseconds
//   const delay = Number(value) * 1000;
//   console.log(delay);

//   // in case the value from the input is not convertible to a number t6he result of "Number(value)" will be "NaN";
//   // in the case of "NaN" we don't want to call setTimeout because the delay parameter is not valid
//   if (delay != NaN && delay > 0) {
//     setTimeout(function() {
//       renderText(Number(value));
//     }, delay);
//   }
// }

function handleRejection(text) {
  const p = document.createElement("p");
  p.innerText = text;

  document.getElementById("text-container").appendChild(p);
}

function startTimer(value) {
  const delay = Number(value) * 1000;
  console.log(delay);
  return new Promise(function(resolve, reject) {
    if (delay != NaN && delay > 0) {
      setTimeout(function() {
        resolve(Number(value));
      }, delay);
    } else {
      reject("Please enter valid number");
    }
  });
}

function handleEnterOnInput() {
  return new Promise(function(resolve, reject) {
    document
      .getElementById("text")
      .addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          resolve(event.currentTarget.value);
        }
      });
  });
}

handleEnterOnInput()
  .then(startTimer)
  .then(renderText)
  .catch(handleRejection);

// we react to enter key on input

// ----- example 2: Create a timer with "setInterval" builtin function ------

// we need to create a variable for every field in the timer
// this is we we store the current value of the the timer fields
let seconds = 0;
let minutes = 0;
let hours = 0;

// we need the DOM objects of the timer fields so we can update the inner text of them
const secondsP = document.getElementById("seconds");
const minutesP = document.getElementById("minutes");
const hoursP = document.getElementById("hours");

// setInterval is a function  that will take as a first argument a callback function and call it again and again a time interval set in the second parameter.
setInterval(function() {
  // every time this callback function is called we increment the seconds
  seconds++;

  if (seconds > 59) {
    // when we reach the maximum value of the seconds, we increment the minutes and reset the seconds
    seconds = 0;
    minutes++;
  }

  if (minutes > 59) {
    // when we reach the maximum value of the minutes, we increment the hours and reset the minutes
    minutes = 0;
    hours++;
  }

  if (hours > 24) {
    // when we reach the maximum value of hours we reset them
    hours = 0;
  }

  // because the timer has 2 digits for every field we use "?" to check if we need to add a "0" at the final text of the field
  secondsP.innerText = seconds < 10 ? "0" + seconds : seconds;
  minutesP.innerText = minutes < 10 ? "0" + minutes : minutes;
  hoursP.innerText = hours < 10 ? "0" + hours : hours;

  //the timer tracks seconds, so in order for the callback function to be called every second we need to set "setInterval" to 1000 milliseconds
}, 1000);

function handleClickToFetch() {
  return new Promise(function(resolve) {
    document.getElementById("fetch-meal").addEventListener("click", function() {
      resolve();
    });
  });
}

function parseBody(response) {
  return response.json();
}

function fetchData() {
  console.log("fetch");

  return new Promise(function(resolve, reject) {
    showMealTitle("loading");
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
      .then(parseBody)
      .then(function(json) {
        console.log(json);
        resolve(json.meals[0].strMeal);
      })
      .catch(function() {
        reject("Something went wrong");
      });
  });
}

function showMealTitle(mealTitle) {
  document.getElementById("meal").innerText = mealTitle;
}

handleClickToFetch()
  .then(fetchData)
  .then(showMealTitle)
  .catch(showMealTitle);

document.getElementById("fetch-meal").addEventListener("click", function() {
  showMealTitle("loading");
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      showMealTitle(json.meals[0].strMeal);
    })
    .catch(function() {
      showMealTitle("Something went wrong");
    });
});
