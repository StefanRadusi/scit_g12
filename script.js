console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");


  // var input = document.getElementById("fieldName").addEventListener('keypress',onClickSendButton);

// this the function that will be called when click event is triggered
function onClickSendButton() {

  var formContainer = document.getElementById("form-container")
  var div = document.createElement("div");

  var paragraph = document.createElement("p").addEventListener('keypress')
  
  var text = document.createTextNode("Hello World");
  div.appendChild(paragraph);
  paragraph.appendChild(text)
  document.body.appendChild(h);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);
