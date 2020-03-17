import { generateMealPage } from "../mealPage/meal";

export function generateHomePage() {
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");
  homePage.id = "home-page";
  document.body.appendChild(homePage);

  addExplanationText(homePage);
  generateAlphabetLetters(homePage);
}

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



export function hideHomePage() {
  document.getElementById("home-page").style.display = "none";
}

export function showHomePage() {
  document.getElementById("home-page").style.display = "block";
  document.getElementById("meal-page-id").remove();
  document.getElementById("meal-navigation-id").remove();
  highlightHomeButton();
}

export function highlightHomeButton() {
  document.getElementById("meal-button").classList.remove("selected");
  document.getElementById("home-button").classList.add("selected");
}

function addExplanationText(homePage) {
  const explanation = document.createElement("h2");
  explanation.classList.add("explanation");
  explanation.innerText = "Choose a letter to find meals:";
  homePage.appendChild(explanation);
}