console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);

//TASK1
document.getElementById("addFiled").addEventListener("click", function(createNewField) {
  let fieldNameByUser = document.getElementById('fieldName').value;
  const newDiv = document.createElement("div");
  newDiv.classList.add("field");
  const newParagraph = document.createElement("p");
  const newInput = document.createElement("input");
  newInput.setAttribute("class", "newInputFieldCreated");
  newDiv.appendChild(newParagraph);
  newDiv.appendChild(newInput);
  document.getElementById("form").appendChild(newDiv);
  newParagraph.innerText = fieldNameByUser;
});

//TASK2
sendButton.addEventListener("click", function() {
  const anyInputName = document.getElementById("name");
  const inputFieldValue = anyInputName.value;
  if (inputFieldValue === "") {
   anyInputName.style.borderColor = "red";
  }
});

sendButton.addEventListener("click", function() {
  const anyInputName = document.getElementById("surname");
  const inputFieldValue = anyInputName.value;
  if (inputFieldValue === "") {
   anyInputName.style.borderColor = "red";
  }
});

sendButton.addEventListener("click", function() {
  const anyInputName = document.getElementById("mobile");
  const inputFieldValue = anyInputName.value;
  if (inputFieldValue === "") {
   anyInputName.style.borderColor = "red";
  } 
});

//TASK3
sendButton.addEventListener("click", function() {
  let emptyInput = document.getElementsByClassName("newInputFieldCreated");
  for (let i=0; i<=emptyInput.length; i++) {
    if (emptyInput[i].value == "") {
    emptyInput[i].style.borderColor = "red";
  } else {
    emptyInput[i].style.borderColor = "lightgrey";
  }
}
});

//TASK4
var nameInputByUser = [];
var surnameInputByUser = [];
var mobileInputByUser = [];

sendButton.addEventListener("click", function () {
  let div = document.getElementById("newDiv");
  div.innerHTML = "";
  div.innerHTML += "Name: " + nameInputByUser.join(document.getElementById("name"));
  div.innerHTML += "Surname: " + surnameInputByUser.join(document.getElementById("surname"));
  div.innerHTML += "Mobile: " + mobileInputByUser.join(document.getElementById("mobile"));
});
