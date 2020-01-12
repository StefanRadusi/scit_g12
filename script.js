console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);

document
  .getElementById("addFiled")
  .addEventListener("click", function(createNewField) {
    document.getElementById("fieldName").style.borderColor = "lightgrey";
    let fieldNameByUser = document.getElementById("fieldName").value;
    if (fieldNameByUser === "") {
      document.getElementById("fieldName").style.borderColor = "red";
    } else {
      const newDiv = document.createElement("div");
      newDiv.classList.add("field");
      const newParagraph = document.createElement("p");
      const newInput = document.createElement("input");
      newDiv.appendChild(newParagraph);
      newDiv.appendChild(newInput);
      document.getElementById("form").appendChild(newDiv);
      newParagraph.innerText = fieldNameByUser;
      document.getElementById("fieldName").value = "";
    }
  });

/* function redBorder() {
  if(getElementsByClassName("field").value.length == "")
    document.getElementByClassName("field").style.BorderColor="red";
} */
