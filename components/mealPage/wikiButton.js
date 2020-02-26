function generateUrl(text){
    return `https://en.wikipedia.org/wiki/${text.replace(" ", "_")}`;
}

export function addWikiPage(container, meals){
    const wiki = document.createElement("button");
    wiki.id = "wiki";
     wiki.innerText = "Wiki";
    wiki.addEventListener("click", (mealName) => {
    let url = generateUrl(meals)
    window.open(wikiurl);
  });
    container.appendChild(wiki);
}
