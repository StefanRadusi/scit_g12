console.log("start");


//My solution
//1 & 2

const newField = document.getElementById("addField");
newField.addEventListener("click", onClickAddField);

function onClickAddField() {
  const newData = document.getElementById("fieldName").value;

  if (newData === ""){
    document.getElementById("fieldName").style.borderColor = "red";
  } else {
    document.getElementById("fieldName").style.borderColor = "1px solid lightgrey";

    const newDiv = document.createElement("div");
    newDiv.className = "field";
    
    const newParagraph = document.createElement("p");
    newParagraph.innerText = newData;
    
    const newInput = document.createElement("input");
    
    newDiv.appendChild(newParagraph);
    newDiv.appendChild(newInput);
    document.getElementById("form-fields").appendChild(newDiv);
    document.getElementById("fieldName").value = "";

    // checking the generated HTML structure
    // console.log(newDiv);
  }
}


// 3 (& 4, but not completed)
const sendButton = document.getElementById("send");
sendButton.addEventListener("click", onClickSendButton);

function onClickSendButton() {
  const fields = document.getElementsByTagName('input');
  for (i = 0; i < fields.length; i++) {
    if (fields[i].value === "") {
      fields[i].style.borderColor = "red";
      document.getElementById("fieldName").style.borderColor = "lightgrey";
    }
  }

  //4 - I will try to finish this one also
  let name = "Name - " + document.getElementById("name").value;
  let surname = "Surname - " + document.getElementById("surname").value;
  let mobile = "Mobile - " + document.getElementById("mobile").value;
  
  const form = [name, surname, mobile];
  // console.log(form);
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = "Sended data: " + form; 
}
