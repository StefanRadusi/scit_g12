import cookie from "cookies-js";
import { renderMealsElements, getIndexMealFromCookie } from "./meal";

export function addMealsNavigation(meals, letter, container) {
  const navigation = document.createElement("div");
  navigation.id = "meal-navigation";
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

function setLastPageCookie(letter, currentIndexMeal) {
  //document.cookie = `meal_${letter}=${currentIndexMeal}`;
  cookie.set
}

function setNavigationFunctionality(
  meals,
  leftButton,
  rightButton,
  letter,
  container
) {
  let currentIndexMeal = getIndexMealFromCookie(letter);

  leftButton.addEventListener("click", () => {
    if (currentIndexMeal > 0) {
      currentIndexMeal--;
      renderMealsElements(meals[currentIndexMeal], letter, container);
      rightButton.style.opacity = 1;
      setLastPageCookie(letter, currentIndexMeal);
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
      setLastPageCookie(letter, currentIndexMeal);
    }

    if (currentIndexMeal === meals.length - 1) {
      rightButton.style.opacity = 0.5;
    }
  });
}
