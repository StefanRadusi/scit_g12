
export function generateHomeButton() {
  const button = document.createElement("button");
  button.classList.add("home-button");
  button.classList.add("selected");
  button.id = "home-button";
  button.innerText = "Home";
  return button;
}

export function highlightHomeButton() {
  let home = document.getElementById("home-button")
  home.addEventListener("click", function(e) {
  document.getElementById("home-button").classList.add("selected");
  document.getElementById("meal-button").classList.remove("selected");
  home.style.outline = "none"
  })
}
