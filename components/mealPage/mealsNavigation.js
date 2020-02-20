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
  leftButton.style.opacity = 0.3;
  leftButton.addEventListener("click", () => {
    
    if (currentIndexMeal > 0){
    currentIndexMeal--;
    renderMealsElements(meals[currentIndexMeal], letter, container);
    leftButton.style.opacity = 1;
    
    }else {
      
      leftButton.style.opacity = 0.3;
    }

  });

  rightButton.addEventListener("click", () => {
    
    if (currentIndexMeal + 1 < meals.length){
      currentIndexMeal++;
      renderMealsElements(meals[currentIndexMeal], letter, container);
    } else {
      rightButton.disable = true;
      rightButton.style.opacity = 0.3;
    }
  });
  
}
