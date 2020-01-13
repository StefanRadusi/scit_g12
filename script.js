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
const fieldName = document.getElementById("fieldName");
function addNewField() {
  const fieldNameValue = fieldName.value;
  fieldName.value = "";
  fieldName.style.borderColor = "lightgray"; 

// 2.
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
    fieldName.style.borderColor = "red";
  }
}

document.getElementById("addFiled").addEventListener("click", addNewField);