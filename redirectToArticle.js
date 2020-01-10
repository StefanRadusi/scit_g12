const listOfArticles = document.getElementsByClassName("article");

for (const article of listOfArticles) {
  article.addEventListener("click", function() {
    const articleId = article.id;
    location.href = articleId + ".html";
  });
}
