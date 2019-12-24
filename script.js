console.log("start");

// 1. add new fields
const fieldName = document.getElementById("fieldName");
function addNewField() {
  const fieldNameValue = fieldName.value;
  fieldName.value = "";
  fieldName.style.borderColor = "lightgray";

  // 2. add fields only when fieldName input is not empty
  if (fieldNameValue) {
    const div = document.createElement("div");
    div.classList.add("field");

    const p = document.createElement("p");
    p.innerText = fieldNameValue;
    div.appendChild(p);

    const input = document.createElement("input");
    input.id = fieldNameValue;
    input.classList.add("field-input");
    div.appendChild(input);

    document.getElementById("form-fields").appendChild(div);
  } else {
    // 2. when field name is empty make the border color red
    fieldName.style.borderColor = "red";
  }
}

document.getElementById("addFiled").addEventListener("click", addNewField);

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);

  let validInput = true;
  let sendText = "Sended info: ";

  // when info fields are empty color them with the border red
  for (const element of document.getElementsByClassName("field-input")) {
    if (!element.value) {
      element.style.borderColor = "red";
      validInput = false;
    } else {
      sendText = sendText + element.id + " - " + element.value + ",";
    }
  }

  // if all the input are not empty then show a send info;
  if (validInput) {
    document.getElementById("form-container").innerHTML = sendText;
  }
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);
