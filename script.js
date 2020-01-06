console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);



function newField() {

  if (document.getElementById("fieldName").value === "") {
    document.getElementById("fieldName").style.borderColor = "red";
  } else {
    document.getElementById("fieldName").style.borderColor = "lightgrey";
    const newDiv = document.createElement("div");
    newDiv.className = "field";

    const pContent = document.createElement("p");
    pContent.innerText = document.getElementById("fieldName").value;
    newDiv.appendChild(pContent);

    const input = document.createElement("input");
    newDiv.appendChild(input);

    document.getElementById("form-fields").appendChild(newDiv);
  }
  document.getElementById("fieldName").value = "";

}

