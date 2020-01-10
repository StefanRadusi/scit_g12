document.getElementById("search").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    // console.log(event);

    const searchValue = event.target.value;
    console.log(searchValue);

    const articleTitles = document.getElementsByClassName("article-title");
    // console.log(articleTitles);

    for (let article of articleTitles) {
      const articleTitleText = article.innerText;
      const articleId = article.parentNode.parentNode.id;
      console.log(articleTitleText);

      if (articleTitleText.includes(searchValue)) {
        console.log("inn");
        return (location.href = articleId + ".html");
      }
    }
  }
});
