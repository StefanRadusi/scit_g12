console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");
const addButton = document.getElementById("addFiled");


// this the function that will be called when click event is triggered
function onClickSendButton() {
    console.log("click on", sendButton);
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
    }
}


// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);
addButton.addEventListener("click", addNewField);


