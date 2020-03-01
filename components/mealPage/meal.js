import Cookie from "cookies-js";

import { hideHomePage } from "../homePage/home";
import { addMealsNavigation } from "./mealsNavigation";
import { highlightMealButton } from "../header/mealButton";
import { generateWikiButton } from "./wikiButton";

export function generateMealPage(event) {
  console.log("generating meal page");
  highlightMealButton();
  hideHomePage();
  getMealsFromServer(event.target.innerText);
}

function cacheData(letter, json) {
  // in order for caching some data we need a persistent method by using local storage
  // local save data in a string format so we need to transform our js object in a string which we can latter retrieve parse back into an object
  // we use letter a key for storing the data so that we can cache data for more then just one call to the server
  const stringData = JSON.stringify(json);
  localStorage.setItem(letter, stringData);
}

function getDataFromCache(letter) {
  // we retrieve what is in the local storage a a give key by the letter
  const data = localStorage.getItem(letter);
  // if we found that there is something stored then we must transform it back from string into an JS object
  if (data) {
    return JSON.parse(data);
  }
}

function getMealsFromServer(letter) {
  // before making the call to the server for data we check if we cache it on another call
  // "getDataFromCache" function retrieves what data is at the letter value key in the local storage
  const json = getDataFromCache(letter);
  if (json) {
    generateMeal(json, letter);
  } else {
    const url = generateUrl(letter);
    fetch(url)
      .then(r => r.json())
      .then(json => {
        // cache the data using dedicated function
        cacheData(letter, json);
        generateMeal(json, letter);
      });
  }
}

function generateUrl(letter) {
  return `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
}

export function getIndexMealFromCookie(letter) {
  if (Cookie(`meal_${letter}`)) return Cookie(`meal_${letter}`);

  return 0;
}

function generateMeal(json, letter) {
  const meals = json.meals;
  let mealIndex = getIndexMealFromCookie(letter);

  const container = document.createElement("div");
  container.classList.add("meal-page");
  container.id = "meal-page";
  document.body.appendChild(container);

  renderMealsElements(meals[mealIndex], letter, container);
  addMealsNavigation(meals, letter, container);
}

export function renderMealsElements(mealData, letter, container) {
  container.innerHTML = null;

  const title = document.createElement("h1");
  title.innerText = `Meal that start with: ${letter}`;
  container.appendChild(title);

  const mealName = document.createElement("h2");
  mealName.innerText = `Name: ${mealData.strMeal}`;
  mealName.classList.add("meal-name");
  container.appendChild(mealName);

  generateWikiButton(mealName, mealData.strMeal);

  const mealImg = document.createElement("img");
  mealImg.setAttribute("src", mealData.strMealThumb);
  mealImg.classList.add("meal-img");
  container.appendChild(mealImg);

  const mealDesc = document.createElement("p");
  mealDesc.innerText = mealData.strInstructions;
  container.appendChild(mealDesc);
}

export function generateMealPageFromHeader() {
  console.log("generating meal page");
  highlightMealButton();
  const homePage = document.getElementById("home-page");
  hideHomePage(homePage);
  getMealsFromServer("a");
}
