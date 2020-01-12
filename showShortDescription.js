const showDescList = document.getElementsByClassName("showDesc");

for (const showDesc of showDescList) {
  showDesc.addEventListener("click", function(event) {
    event.stopPropagation();

    const articleBody = event.target.parentNode.parentNode.parentNode.getElementsByClassName(
      "article-short-description"
    )[0];

    if (articleBody.classList.contains("show")) {
      articleBody.classList.remove("show");
      event.target.innerText = "show desc";
    } else {
      articleBody.classList.add("show");
      event.target.innerText = "hide desc";
    }
  });
}
