export function generateMealButton() {
  const button = document.createElement("button");
  button.classList.add("meal-button");
  button.id = "meal-button";
  button.innerText = "Meal";
  return button;
}


export function highlightMealButton() {
  document.getElementById("meal-button").classList.add("selected");
  document.getElementById("home-button").classList.remove("selected");
}
