console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);


// 1. 
const newField = document.getElementById("addField");

const fields = document.getElementsByClassName("form-fields");

function onClickAddField() {
  const newDiv = document.createElement("div");
  document.getElementById("field").appendChild(newDiv);

  const newParagraph = document.createElement("p");
  newDiv.appendChild(newParagraph);

  const newInput = document.createElement("input");
  newInput.id = "fieldName";
  newDiv.appendChild(newInput);
  console.log(newDiv);
}

newField.addEventListener("click", onClickAddField);


