console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

const newFieldData = document.getElementById("fieldName")
newFieldData.addEventListener("click", onClickAddFields);

function onClickAddFields() {
  const newData = document.getElementById("fieldName").value;
  console.log(newData)
  if(newData === "" ){
    document.getElementById("fieldName").style.borderColor = "red";
  }
  
}
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
sendButton.addEventListener("click", onClickAddFields);
