import { generateMealPage } from "../mealPage/meal";

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
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");
  document.body.appendChild(homePage);

  addExplanationText(homePage);
  generateAlphabetLetters(homePage);
}

export function hideHomePage(homePage) {
  homePage.style.display = "none";
}

function addExplanationText(homePage) {
  const explanation = document.createElement("h2");
  explanation.classList.add("explanation");
  explanation.innerText = "Choose a letter to find meals:";
  homePage.appendChild(explanation);
}
