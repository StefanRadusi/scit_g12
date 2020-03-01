import Cookie from "cookies-js";
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
  // because it is easier to use and external library when dealing with browser cookies, we will use "cookies-js" which is imported at the start of the file
  // check the cookie in the browser to see how it is stored
  Cookie.set(`meal_${letter}`, currentIndexMeal);
}

function setNavigationFunctionality(
  meals,
  leftButton,
  rightButton,
  letter,
  container
) {
  // before we start navigate through meal of a letter we check if we stored previously the index were we left off
  // "getIndexMealFromCookie" deals with cookies and retrieves the last index used
  // check "meal.js" file for how this function is defined
  let currentIndexMeal = getIndexMealFromCookie(letter);

  leftButton.addEventListener("click", () => {
    if (currentIndexMeal > 0) {
      currentIndexMeal--;
      renderMealsElements(meals[currentIndexMeal], letter, container);
      rightButton.style.opacity = 1;
      // we store our last meal index by letter so that we we hit refresh and go the a letter we can pick the navigation were we left off
      // we use a dedicated function that deals with cookie object of the browser
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

      // the same explanation like before
      setLastPageCookie(letter, currentIndexMeal);
    }

    if (currentIndexMeal === meals.length - 1) {
      rightButton.style.opacity = 0.5;
    }
  });
}
