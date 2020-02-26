function generateUrl(text){
    return `https://en.wikipedia.org/wiki/${text.replace(" ","_")}`;
}
export function generateWikiButton(container, meal){
  const button = document.createElement("button");
  button.classList.add("wiki-button");
  button.innerText="wiki";
  button.addEventListener("click", ()=>{
      const url = generateUrl(meal);
      window.open(url);
  });
  container.appendChild(button);
}