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
const addFiled = document.getElementById("addFiled");
// we attached a function to click event triggered by send button
addFiled.addEventListener("click", onClickAddFieldButton);
// this the function that will be called when click event is triggered
function onClickAddFieldButton() {
 
  addContainer();
}



