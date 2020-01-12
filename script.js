console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);

//Add button reacting to button click
const addButton = document.getElementById("addField");
function onAddButton() {
  console.log("click on", addButton);
}
addButton.addEventListener("click", onAddButton);

//create new field
function createNewField(fieldName) {
const Field = document.createElement("div");
document.getElementById("user").appendChild(Field);

const pContent = document.createElement("p");
pContent.innerText = {fieldName};
Field.appendChild(pContent);

const fieldNameInput = document.createElement("input");

Field.appendChild(fieldNameInput);

}


document.getElementById("send").addEventListener("click" , function() {
  const nameInput = document.getElementById("name-field");
  const nameInputValue = nameInput.value;

  if (nameInputValue === "") {
    nameInputValue.style.borderColor = "red";
  }

  const surnameInput = document.getElementById("surname-field");
  const surnameInputValue = surnameInput.value;

  if (surnameInputValue === "") {
    surnameInputValue.style.borderColor = "red";
  }

  const mobileInput = document.getElementById("mobile-field");
  const mobileInputValue = mobileInput.value;

  if (mobileInputValue === "") {
    mobileInputValue.style.borderColor = "red";
  }
}