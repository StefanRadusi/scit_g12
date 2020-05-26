console.log("start");

// example of reacting to button click
// const sendButton = document.getElementById("send");

const newFieldData = document.getElementById("addFiled")
newFieldData.addEventListener("click", onClickAddFields);

function onClickAddFields() {
  const InputData = document.getElementById("fieldName").value;
  console.log(InputData)
  if(InputData === "" ){
    document.getElementById("fieldName").style.borderColor = "red";
  }else{
    document.getElementById("fieldName").style.borderColor = "1px solid lightgray";

    const newDivContainer = document.createElement("div");
    newDivContainer.className = "field";

    const newParagraph = document.createElement("p");
    newParagraph.innerText = InputData;
    // console.log(newParagraph)

    const newInputField = document.createElement("input")
    // console.log(newInputField)
    newInputField.innerText = InputData;

    const mainDivContainer = document.getElementById("form-fields")
    newDivContainer.appendChild(newParagraph);
    newDivContainer.appendChild(newInputField);
    mainDivContainer.appendChild(newDivContainer);
    document.getElementById("fieldName").innerText = "";

    console.log(newDivContainer)

  }
  
}


// function onClickSendButton() {

//   var formContainer = document.getElementById("form-container")
//   var div = document.createElement("div");

//   var paragraph = document.createElement("p").addEventListener('keypress')
  
//   var text = document.createTextNode("Hello World");
//   div.appendChild(paragraph);
//   paragraph.appendChild(text)
//   document.body.appendChild(h);
// }

// // we attached a function to click event triggered by send button
// sendButton.addEventListener("click", onClickAddFields);
