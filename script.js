console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");
const addButton = document.getElementById("addFiled");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  let dataString = "Sent info: ";
  const divFields = document.getElementsByClassName("field");
  let error = false;
  for (let i = 0; i < divFields.length; i++) {
    let pElem = divFields[i].getElementsByTagName("p")[0];
    let inputElem = divFields[i].getElementsByTagName("input")[0];
    dataString += `${pElem.innerText} - ${inputElem.value},`;
    if (!inputElem.value) {
      inputElem.style.borderColor = "red";
      error = true;
    } else {
      inputElem.style.borderColor = null;
    }
  }

  if (!error) {
    document.getElementsByClassName("form-container")[0].innerHTML = dataString;
  }
}

document.getElementById("fieldName").oninput = function() {
  this.style.borderColor = null;
};

function addNewField() {
  const inputField = document.getElementById("fieldName");
  const fieldName = inputField.value;
  if (!fieldName) {
    inputField.style.borderColor = "red";
  } else {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "field");
    const form = document.getElementsByClassName("form-fields")[0];
    form.appendChild(newDiv);

    const newP = document.createElement("p");
    newP.innerText = fieldName;
    newDiv.appendChild(newP);

    const newInput = document.createElement("input");
    newInput.id = fieldName;
    newDiv.appendChild(newInput);
    inputField.value = null;
  }
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);
addButton.addEventListener("click", addNewField);
