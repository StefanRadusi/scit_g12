import { generateMealPage } from "../mealPage/meal";

function generateAlphabetLetters(homePage) {
  for (let i = 65; i < 91; i++) {
    const letter = String.fromCharCode(i);
    console.log(letter);
    const letterDOM = document.createElement("p");
    letterDOM.innerText = letter;
    homePage.appendChild(letterDOM);
    letterDOM.addEventListener("click", generateMealPage);
  }
}

export function generateHomePage() {
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");
  document.body.appendChild(homePage);

  generateAlphabetLetters(homePage);
}

export function hideHomePage(homePage) {
  homePage.style.display = "none";
}
