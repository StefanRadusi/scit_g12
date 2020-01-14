const fieldName = document.getElementById("fieldName");

function addNewField () {
    const fieldNameValue = fieldName.value;
    fieldName.value = "";
    fieldName.value.style.borderColor = "lightgray";

    if(fieldName) {

        const div = document.getElementById("div")
        div.classList.add("field")

        const p = document.getElementById("p")
        p.innerText = fieldNameValue;
        div.appendChild(p);

        const input = document.getElementById("input");
        input.id = fieldNameValue;
        input.classList.add("field-input");
        div.appendChild(input);

        document.getElementById("form-fields").appendChild(div);

    } else { 

        fieldName.style.borderColor = "red"

    }
}

document.getElementById("addFiled").addEventListener("click", addNewField);

const sendButton = document.getElementById("send");

function onClickSendButton() {
    console.log("click on", sendButton);
  
let validInput = true;
let sendText = "Sended info";

for (const elements of document.getElementsByClassName("field-input")) {
    if(!element .value) {
        style.borderColor = "red";
        validInput = false;
    } else {
        sendText = sendText + element.id "- " + elements.value + ", " ;
    }
}

if(validInput) {
    document.getElementById("form-container"). innerHTML = sendText;
}

sendButton.addEventListener("click", onClickSendButton);

console.log("this is my solution at last...")