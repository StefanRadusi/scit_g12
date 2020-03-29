import { generateMealPage } from "../mealPage/meal";
import { hideMealPage } from "../mealPage/meal";
import { highlightHomeButton } from "../header/homeButton";
import { hideNavigation } from "../mealPage/mealsNavigation";

function generateAlphabetLetters(homePage) {
  const letterContainer = document.createElement("div");
  letterContainer.classList.add("letters-container");
  for (let i = 65; i < 91; i++) {
    const letter = String.fromCharCode(i);
    const letterDOM = document.createElement("p");
    letterDOM.innerText = letter;
    letterContainer.appendChild(letterDOM);
    letterDOM.addEventListener("click", generateMealPage);
  }
  homePage.appendChild(letterContainer);
}

export function generateHomePage() {
  highlightHomeButton();
  hideMealPage();
  hideHomePage();
  hideNavigation();
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");
  document.body.appendChild(homePage);
  addExplanationText(homePage);
  generateAlphabetLetters(homePage);
}

export function hideHomePage() {
  const homePage=document.getElementsByClassName('home-page')[0];
  if (homePage!=undefined){
    homePage.remove();
  }
    
}

function addExplanationText(homePage) {
  const explanation = document.createElement("h2");
  explanation.classList.add("explanation");
  explanation.innerText = "Choose a letter to find meals:";
  homePage.appendChild(explanation);
}
