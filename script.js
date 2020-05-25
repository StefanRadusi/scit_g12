console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

const InputField =document.getElementById("fieldName").addEventListener('keypress', onClickSendButton);

function createNewField() {

 

}
// this the function that will be called when click event is triggered
function onClickSendButton() {
  
  const newDiv = document.createElement("div");
  const newfieldName = document.createElement("p");
  const newinputField = document.createElement("input");
  newfieldName.appendChild(newinputField);
  newDiv.appendChild(newfieldName);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);
