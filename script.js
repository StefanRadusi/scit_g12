console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);

const addButton = document.getElementById("addFiled");
addButton.addEventListener("click", onClickAddButton);

function onClickAddButton() {
  console.log("Adding a new field...");

  const inputTextField = document.getElementById("fieldName");
  const inputText = inputTextField.value;

  if (!inputText) {
    console.log("Empty text");
    // make the field borders red
    inputTextField.style.border = "1px solid red";
  } else {
    inputTextField.style.border = "1px solid lightgray";
    addNewInputField(inputText);
    inputTextField.value = "";
  } 
}

function addNewInputField(inuputText) {
  // create div element
  const newDiv = document.createElement("div");
  newDiv.className = "field";

  // create paragraph element and add it to div
  const newP = document.createElement("p");
  newP.innerText = inuputText;
  newDiv.appendChild(newP);

  // create input element and add it to div
  const newInput = document.createElement("input");
  newInput.id = inuputText;
  newDiv.appendChild(newInput);

  document.getElementsByClassName("form-fields")[0].appendChild(newDiv);
}