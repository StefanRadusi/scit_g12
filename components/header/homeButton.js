export function generateHomeButton() {
  const button = document.createElement("button");
  button.classList.add("home-button");
  button.classList.add("selected");
  button.id = "home-button";
  button.innerText = "Home";

  button.addEventListener("click", pressHomeButton);
  return button;
}

function pressHomeButton() {
  

  const homePage = document.getElementById("home-page-id");
  homePage.style.display = "block";

  const mealsMapge = document.getElementById("meal-page-id");
  mealsMapge.style.display = "none";

  const mealsNavigation = document.getElementById("meal-navigation-id");
  mealsNavigation.style.display = "none";
  
}