// import {generateAlphabetLetters} from "../homePage/home"

export function generateMealButton() {
  const button = document.createElement("button");
  button.classList.add("meal-button");
  button.classList.add("selected");
  button.id = "meal-button";
  button.innerText = "Meal";
  return button;
}


export function highlightMealButton() {
  document.getElementById("meal-button").addEventListener("click", highlightMealButton)
  document.getElementById("meal-button").classList.add("selected");
  document.getElementById("home-button").classList.remove("selected");
  document.getElementById("meal-button").classList.add("home-button");
  document.getElementById("home-button").classList.remove("home-button");
}
