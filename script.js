console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);
}

// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);

let form = document.getElementById("addFiled");
// console.log (form);
let field = document.getElementById("fields");
// console.log (fields);

form.addEventListener("click", functionAdd);

function functionAdd(e) {
  e.preventDefault();
  // console.log (1);
  let newItem = document.getElementById("fieldName").value;
  let div = document.createElement("div");
  div.className = "field";
  let p = document.createElement("p");
  // console.log (div);

  p.appendChild(document.createTextNode(newItem));
  div.appendChild(p);

  let newInput = document.createElement("input");
  newInput.setAttribute("type", "text");
  div.appendChild(newInput);

  field.appendChild(div);

  //the request was that in the moment of clicking the add filed  button the border will be red if the input is empty
  // just had to move the code from the global scope to this function scope
  if (document.getElementById("fieldName").value == "") {
    document.getElementById("fieldName").style.borderColor = "red";
  }
}
