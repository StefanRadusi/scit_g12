import { renderMealsElements } from "./meal";

export function addMealsNavigation(meals, letter, container) {
  const navigation = document.createElement("div");
  navigation.classList.add("meal-navigation");

  const leftButton = document.createElement("div");
  leftButton.innerText = "<";

  const rightButton = document.createElement("div");
  rightButton.innerText = ">";

  navigation.appendChild(leftButton);
  navigation.appendChild(rightButton);

  document.body.appendChild(navigation);

  setNavigationFunctionality(meals, leftButton, rightButton, letter, container);
}

function setNavigationFunctionality(
  meals,
  leftButton,
  rightButton,
  letter,
  container
) {
  let currentIndexMeal = 0;

  leftButton.addEventListener("click", () => {
    
   if(currentIndexMeal > 0) {
     currentIndexMeal--;

    renderMealsElements(meals[currentIndexMeal], letter, container);

    if(currentIndexMeal >= -1) {
      leftButton.style.opacity = "0.5";
  
    }
   }
    
  });

  rightButton.addEventListener("click", () => {
    if(currentIndexMeal < meals.length-1)
    currentIndexMeal++;
    renderMealsElements(meals[currentIndexMeal], letter, container);

    if(currentIndexMeal >= 0) {
      

    }

  });

}
