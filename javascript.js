const fieldName = document.getElementById("fieldName");

function addNewField () {
    const fieldNameValue = fieldName.value;
    fieldName.value = "";
    fieldName.style.borderColor = "lightgray";

    if(fieldNameValue) {

        const div = document.createElement("div");
        div.classList.add("field");

        const p = document.createElement("p")
        p.innerText = fieldNameValue;
        div.appendChild(p);

        const input = document.createElement("input");
        input.id = fieldNameValue;
        input.classList.add("field-input");
        div.appendChild(input);

        document.getElementById("form-fields").appendChild(div);

    } else { 

        fieldName.style.borderColor = "red";

    }
}

document.getElementById("addFiled").addEventListener("click", addNewField);

const sendButton = document.getElementById("send");

function onClickSendButton() {
    console.log("click on", sendButton);
  
let validInput = true;
let sendText = "Sended info";

for (const element of document.getElementsByClassName("field-input")) {
    if(!element.value) {
       element.style.borderColor = "red";
        validInput = false;
    } else {
        sendText = sendText + element.id + " _ " + element.value + " , " ;
    }
}
if(validInput) {
    document.getElementById("form-container").innerHTML = sendText; 
    }
}

sendButton.addEventListener("click", onClickSendButton);

