 function genrateUrl (text) {
     return `https://en.wikipedia.org/wiki/${text.replace(" ","_")}`;
 }

 
 export function generateWikiButton (container, meal) {
    let buttonWiki = document.createElement("button")
    buttonWiki.classList.add("wiki-button");
    buttonWiki.innerText = "Wiki";
    buttonWiki.addEventListener("click", ()=>
    {
        const url = genrateUrl(meal);
        window.open(url);
    });
    container.appendChild(buttonWiki);
}

