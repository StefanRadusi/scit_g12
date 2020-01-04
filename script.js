console.log("start");

// example of reacting to button click
const sendButton = document.getElementById("send");
let dictionary =new Object();
let message =" ";
// this the function that will be called when click event is triggered
function onClickSendButton() {
  let counter = 0;
  console.log("click on", sendButton);
  const all_fields=document.getElementsByTagName('input');
  for(let field=0;field<all_fields.length;field++){
    if (all_fields[field].id!="fieldName"){
      if (all_fields[field].value==""){
        all_fields[field].style.borderColor="red";
      } 
      else {
        counter++;
      }
    }
  }
  if (counter == all_fields.length-1) {
    dict=messageToDisplay();
    
    for (let key in dictionary) {
      message=key+'-'+dictionary[key]+','+message;
    }
    final_message='Sended Info: '+message;
    document.getElementsByClassName("form-container")[0].innerHTML = final_message;
    }
  
  
  
  }

  function messageToDisplay(){
    let all_elements = document.getElementsByClassName("field");
    for (let i=0;i<all_elements.length;i++){
      let key=all_elements[i].children[0].innerText;
      let value=all_elements[i].children[1].value;
      dictionary[key]=value;

    }
    return dictionary;
  }  


// we attached a function to click event triggered by send button
sendButton.addEventListener("click", onClickSendButton);

const addFiledButton = document.getElementById("addFiled");


function addNewField(){
  const fieldName = document.getElementById("fieldName");
  if (fieldName.value =="") {
    fieldName.style.borderColor="red";
  } 

  else {
  const mainDiv =document.getElementsByClassName("form-fields")[0];
  const divContainer = document.createElement("div");
  divContainer.className='field';
  const newParagraph=document.createElement('p');
  newParagraph.innerText = fieldName.value;
  const newTextBox=document.createElement('input');
  
 
  divContainer.appendChild(newParagraph);
  divContainer.appendChild(newTextBox);
  mainDiv.appendChild(divContainer);
  
  fieldName.value="";
  if (fieldName.style.borderColor=="red"){
    fieldName.style.borderColor = 'lightgrey';
  }
  }
  
}

addFiledButton.addEventListener("click",addNewField);



