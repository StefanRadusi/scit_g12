console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);

//  MY SOLUTION

let userInputs = document.querySelectorAll(".form-fields input");

const AddFieldBtn = document.getElementById("addField");

sendButton.addEventListener("click", function() {
  let okToSend = true;
  let message = "Send too: ";
  userInputs.forEach(function(entry) {
    if (entry.value != "" || entry.value != entry.defaultValue) {
      entry.style.borderColor = "lightgrey";
    } else {
      entry.style.borderColor = "red";
      okToSend = false;
    }
    message = message + `${entry.id}:${entry.value} `;
  });

  if (okToSend) {
    document.getElementById("form").innerHTML = message;
  }
});

const userInput = document.getElementById("fieldName");

function createNewDiv() {
  const divContainer = document.createElement("div");
  divContainer.classList.add("field");

  const fieldN = document.createElement("p");
  const createInput = document.createElement("input");

  if (userInput.value == "" || userInput == userInput.defaultValue) {
    console.log("insert some text");
  } else {
    fieldN.innerText = userInput.value;

    createInput.setAttribute("id", userInput.value);
    divContainer.appendChild(fieldN);
    divContainer.appendChild(createInput);

    document.querySelector(".form-fields").appendChild(divContainer);
  }
}

AddFieldBtn.addEventListener("click", function() {
  createNewDiv();
  userInputs = document.querySelectorAll(".form-fields input");
  if (userInput.value == "" || userInput == userInput.defaultValue) {
    userInput.style.borderColor = "red";
  } else userInput.style.borderColor = "lightgrey";

  userInput.value = "";
});
