

export function generateHomeButton() {
  const button = document.createElement("button");
  button.classList.add("home-button");
  button.classList.add("select");
  button.id = "home-button";
  button.innerText = "Home";
  return button;
}


export function highlightHomeButton() {
 document.getElementById("home-button").addEventListener("click", highlightHomeButton)
  document.getElementById("home-button").classList.add("selected");
  document.getElementById("meal-button").classList.remove("selected");
  document.getElementById("home-button").classList.add("meal-button");
  document.getElementById("meal-button").classList.remove("home-button");

}