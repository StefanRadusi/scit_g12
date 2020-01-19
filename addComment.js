// we react to click on submit button
document.getElementById("submit").addEventListener("click", function() {
  const userNameInputDOM = document.getElementById("user-name");
  const userNameValue = userNameInputDOM.value;


  if (userNameValue === "") {
    userNameInputDOM.style.borderColor = "red";
  }

  const commentAreaDOM = document.getElementById("comment-area");
  const commentAreaValue = commentAreaDOM.value;

  if (commentAreaValue === "") {
    commentAreaDOM.style.borderColor = "red";
  }

  if (userNameValue && commentAreaValue) {
    showReadSection();
    createComment(userNameValue, commentAreaValue);
    resetInput();
  }
});

function createComment(userNameValue, commentAreaValue) {
  const commentContainer = document.createElement("div");
  commentContainer.className = "comment";
  document.getElementById("read-section").prepend(commentContainer);

  const commentHeader = document.createElement("div");
  commentHeader.className = "comment-header";
  commentContainer.appendChild(commentHeader);

  const commentTitle = document.createElement("h3");
  commentTitle.className = "comment-title";
  commentTitle.innerText = userNameValue;
  commentHeader.appendChild(commentTitle);

  const commentDate = document.createElement("p");
  commentDate.className = "comment-date";

  // the date field of the comment is created automatically using the native JavaScript object "Date"
  // when we created the object the current date and hour will be stored
  // we need "formatDate" function in order to bring the "new Date()" result to the format we need
  commentDate.innerText = formatDate(new Date());
  commentHeader.appendChild(commentDate);

  const commentContent = document.createElement("p");
  commentContent.className = "comment-content";
  commentContent.innerText = commentAreaValue;
  commentContainer.appendChild(commentContent);
}

function formatDate(date) {
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + "." + (monthIndex + 1) + "." + year;
}

function resetInput () {
  let userNameInputValue = document.getElementById("user-name");
  let commentAreaValue = document.getElementById("comment-area");

    userNameInputValue.value = "";
    commentAreaValue.value = "";

}
