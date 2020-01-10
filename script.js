console.log("start");

function addContainer () {
  const divContainer = document.createElement("div");
  divContainer.className = "field"; 
  const newH1 = document.createElement("h1");
  const newP = document.createElement("p");
  const addImput = document.createElement("input"); 

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
const sendButton = document.getElementById("addFiled");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", addContainer);
  addContainer();
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);
