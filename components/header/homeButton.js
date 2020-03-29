import {generateHomePage} from "../homePage/home";
import { showHomeMenue } from "../homePage/home";

export function generateHomeButton() {
  const button = document.createElement("button");
  button.classList.add("home-button");
  button.classList.add("selected");
  button.id = "home-button";
  button.innerText = "Home";
  button.addEventListener("click", showHomeMenue);
  return button;
}
export function highlightHomeButton() {
  document.getElementById("home-button").classList.add("selected");
  document.getElementById("meal-button").classList.remove("selected");
}
