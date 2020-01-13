console.log("start");

function addContainer () {
  const divContainer = document.createElement("div");
  divContainer.className = "field"; 
  const newH1 = document.createElement("h1");
  const newP = document.createElement("p");
  const addImput = document.createElement("input");
  addImput.className = "textBox";

  const imputTextField = document.getElementById("fieldName").value;
  addImput.id = imputTextField; 
  newP.innerHTML = imputTextField; 
  divContainer.appendChild(newH1);
  divContainer.appendChild(newP);
  divContainer.appendChild(addImput);
  

  document.getElementsByClassName("form-fields")[0].appendChild(divContainer);

  if (imputTextField === "") {
    document.getElementById("fieldName").style.borderColor = "red"; 
    document.getElementsByClassName("form-fields")[0].removeChild(divContainer);
  }
  
}
// example of reacting to button click
const addFiled = document.getElementById("addFiled");
// we attached a function to click event triggered by send button
addFiled.addEventListener("click", onClickAddFieldButton);
// this the function that will be called when click event is triggered
function onClickAddFieldButton() {
 
  addContainer();
}

const sendButton = document.getElementById("send");
sendButton.addEventListener("click", onClickSendButton); 
function onClickSendButton () {
    const nameImput = document.getElementById("name").value
    console.log(nameImput);
    if (nameImput==="") {
        document.getElementById("name").style.borderColor = "red";

        const surnameImput = document.getElementById("surname").value
    console.log(surnameImput);
    if (surnameImput==="") {
        document.getElementById("surname").style.borderColor = "red";}

        const mobileImput = document.getElementById("mobile").value
    console.log(mobileImput);
    if (mobileImput==="") {
        document.getElementById("mobile").style.borderColor = "red";}

    }
}
sendButton.addEventListener("click", function() {
    let addInput = document.getElementsByClassName("textBox");
    for (let i=0; i<=addInput.length; i++) {
      if (addInput[i].value == "") {
      addInput[i].style.borderColor = "red";
    } else {
      addInput[i].style.borderColor = "lightgrey";
    }
  }
  });