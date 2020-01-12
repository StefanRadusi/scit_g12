console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);





function AddNewField(){
  let newDiv = document.createElement('div');
  let textValue = document.querySelector("#fieldName").value.trim();
  let newParagraph = document.createElement('p');
  let NewparagraphName = document.createTextNode(textValue);
  let newInput = document.createElement('input');
  let FieldContainer = document.querySelector('.form-fields')

  if (textValue) {
  newDiv.className = 'field';
  newParagraph.appendChild(NewparagraphName);
  newInput.id = 'fieldNames';
  newInput.className = 'inputclass';
  FieldContainer.appendChild(newDiv);
  newDiv.appendChild(newParagraph);
  newDiv.appendChild(newInput);
  } else {  
    let inputDefault = document.querySelector("#fieldName")
    inputDefault.className = 'redBorder';
  }
}

let inputDefault = document.querySelector("#fieldName")

function resetColor() {
  inputDefault.className = 'notBorder';
}

inputDefault.addEventListener('keypress', resetColor)


let FieldButton = document.querySelector('#addFiled')


FieldButton.addEventListener('click', AddNewField);

sendButton.addEventListener('click', sendFormData)


function sendFormData() {
  let getInputs = document.getElementsByClassName('inputclass');
  let counter = 0;
  let InputStorage = '';
  for(let i = 0; i < getInputs.length; i++) {
    if(getInputs[i].value.trim()){
      getInputs[i].classList.add('notBorder') 
      counter++;
      InputStorage += getInputs[i].value + ' ';
      continue;
    }    
      getInputs[i].classList.add('redBorder')
  }
  if(counter >= getInputs.length) {
    document.body.innerHTML = InputStorage;
  } 
}