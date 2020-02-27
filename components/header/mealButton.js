import {generateMealPage} from "../mealPage/meal"
import {generateAlphabetLetters} from "../homePage/home"

export function generateMealButton() {
  const button = document.createElement("button");
  button.classList.add("meal-button");
  button.id = "meal-button";
  button.innerText = "Meal";
  return button;
}

export function highlightMealButton() {
  let meal = document.getElementById("meal-button")
  meal.addEventListener("click", function(e) {
    document.getElementById("meal-button").classList.add("selected");
    document.getElementById("home-button").classList.remove("selected");
    meal.style.outline = "none";
   
  })

}
