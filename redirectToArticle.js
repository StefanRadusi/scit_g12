const listOfArticles = document.getElementsByClassName("article");
console.log(listOfArticles);

for (const article of listOfArticles) {
  console.log(article);

  article.addEventListener("click", function() {
    location.href = "Art1.html";
  });
}
