import { generateMealPage } from "../mealPage/meal";

export function generateHomeButton() {
  const button = document.createElement("button");
  button.classList.add("home-button");
  button.classList.add("selected");
  button.id = "home-button";
  button.innerText = "Home";
  return button;
}


export function highlightHomeButton() {
  document.addEventListener("click",generateMealPage )
  document.getElementById("meal-button").classList.add("selected");
  document.getElementById("home-button").classList.remove("select");
}