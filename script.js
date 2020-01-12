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
const pContent = document.createElement("p");
pContent.innerText = {fieldName};
Field.appendChild(pContent);
const fieldNameInput = document.createElement("input");
Field.appendChild(fieldNameInput);
document.getElementById("user").appendChild(Field);
}



document.getElementById("addField").addEventListener("click", createNewField(fieldName));
