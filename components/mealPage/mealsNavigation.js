import { renderMealsElements } from "./meal";

export function addMealsNavigation(meals, letter, container) {
  const navigation = document.createElement("div");
  navigation.classList.add("meal-navigation");

  const leftButton = document.createElement("div");
  leftButton.innerText = "<";
  leftButton.style.opacity = "0.5";

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
    if (currentIndexMeal > 0) {
      currentIndexMeal--;
      renderMealsElements(meals[currentIndexMeal], letter, container);
      rightButton.style.opacity = 1;
    }

    if (currentIndexMeal === 0) {
      leftButton.style.opacity = 0.5;
    }
  });

  rightButton.addEventListener("click", () => {
    if (currentIndexMeal + 1 < meals.length) {
      currentIndexMeal++;
      renderMealsElements(meals[currentIndexMeal], letter, container);
      leftButton.style.opacity = 1;
    }

    if (currentIndexMeal === meals.length - 1) {
      rightButton.style.opacity = 0.5;
    }
  });
}
export function hideNavigation() {
  const hideNavigation=document.getElementsByClassName('meal-navigation')[0];
  if (hideNavigation!=undefined){
    hideNavigation.remove();
  }
    
}