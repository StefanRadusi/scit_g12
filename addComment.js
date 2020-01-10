document.getElementById("submit").addEventListener("click", function() {
  const userNameValue = document.getElementById("user-name").value;
  if (userNameValue === "") {
    document.getElementById("user-name").style.borderColor = "red";
  }

  const commentAreaValue = document.getElementById("comment-area").value;
  if (commentAreaValue === "") {
    document.getElementById("comment-area").style.borderColor = "red";
  }

  if (userNameValue && commentAreaValue) {
    showReadSection();
    createComment(userNameValue, commentAreaValue);
  }
});

function createComment(userNameValue, commentAreaValue) {
  const commentContainer = document.createElement("div");
  commentContainer.className = "comment";
  document.getElementById("read-section").appendChild(commentContainer);

  const commentHeader = document.createElement("div");
  commentHeader.className = "comment-header";
  commentContainer.appendChild(commentHeader);

  const commentTitle = document.createElement("h3");
  commentTitle.className = "comment-title";
  commentTitle.innerText = userNameValue;
  commentHeader.appendChild(commentTitle);

  const commentDate = document.createElement("p");
  commentDate.className = "comment-date";
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

{
  /* <div class="comment">
<div class="comment-header">
  <h3 class="comment-title">Art 3</h3>
  <p class="comment-date">10.11.2019</p>
</div>

<p class="comment-content">
  Contrary to popular belief, Lorem Ipsum is not simply random
  text. It has roots in a piece of classical Latin literature
  from 45 BC, making it over 2000 years old. Richard McClintock
</p>
</div> */
}
