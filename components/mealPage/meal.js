import { hideHomePage } from "../homePage/home";
import { addMealsNavigation } from "./mealsNavigation";
import { highlightMealButton } from "../header/mealButton";
import { addWikiPage } from "./wikiButton";

export function generateMealPage(event) {
  console.log("generating meal page");
  highlightMealButton();
  hideHomePage(event.target.parentNode);
  getMealsFromServer(event.target.innerText);
}

function getMealsFromServer(letter) {
  const url = generateUrl(letter);
  fetch(url)
    .then(r => r.json())
    .then(json => {
      generateMeal(json, letter);
    });
  console.log(url);
}

function generateUrl(letter) {
  return `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
}

function generateMeal(json, letter) {
  const meals = json.meals;
  let mealIndex = 0;

  const container = document.createElement("div");
  container.classList.add("meal-page");
  document.body.appendChild(container);

  renderMealsElements(meals[mealIndex], letter, container);
  addMealsNavigation(meals, letter, container);
  addWikiPage(meals); 
}

export function renderMealsElements(mealData, letter, container) {
  container.innerHTML = null;

  const title = document.createElement("h1");
  title.innerText = `Meal that start with: ${letter}`;
  container.appendChild(title);

  const mealName = document.createElement("h2");
  mealName.innerText = `Name: ${mealData.strMeal}`;
  container.appendChild(mealName);

  const mealImg = document.createElement("img");
  mealImg.setAttribute("src", mealData.strMealThumb);
  mealImg.classList.add("meal-img");
  container.appendChild(mealImg);

  const mealDesc = document.createElement("p");
  mealDesc.innerText = mealData.strInstructions;
  container.appendChild(mealDesc);
}
