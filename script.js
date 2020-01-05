console.log("start");

document.getElementById("addFiled").addEventListener("click", function(e) {
  e.preventDefault();

  const addNewFieldValue = document.getElementById("fieldName").value;

  const newDiv = document.createElement("div");
  newDiv.classList.add("field");
  
  const p = document.createElement("p");
  p.innerText = addNewFieldValue;
  newDiv.appendChild(p);
  
  const input = document.createElement("input");
  input.id = addNewFieldValue;
  newDiv.appendChild(input);
  
  document.getElementById("field-container").appendChild(newDiv);
});