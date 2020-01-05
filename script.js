console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");
const addButton = document.getElementById("addFiled");

// this the function that will be called when click event is triggered
function onClickSendButton() {
  console.log("click on", sendButton);
  const fields = document.getElementsByClassName("field");
  let empty = 0;
  for (let i = 0; i < fields.length; i++){
     const v = fields[i].getElementsByTagName("input")[0].value;
     if (v === ""){
      fields[i].getElementsByTagName("input")[0].style.borderColor = "red";
      empty = empty + 1;
     }
  } 
  if (empty === 0){
    let info = "";
    for (let i = 0; i < fields.length; i++){
      const f = fields[i].getElementsByTagName("p")[0].innerText;
      const v = fields[i].getElementsByTagName("input")[0].value;
      info = info + f + " - " + v + "; ";
    }
    const infoContent = document.createElement("h1");
    infoContent.innerText = info;
    document.getElementsByClassName("form-container")[0].replaceWith(infoContent);
  }
}

function onClickAddButton() {
  console.log("click on", addButton);
  const fieldName = document.getElementById("fieldName").value;
  const newfield = document.createElement("div");
  newfield.className = "field";
  const p = document.createElement("p");
  p.innerText = fieldName;
  newfield.appendChild(p);
  const input = document.createElement("input");
  input.id = fieldName;
  newfield.appendChild(input);
  document.getElementById("fff").appendChild(newfield);
}


// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);
addButton.addEventListener("click", onClickAddButton);
