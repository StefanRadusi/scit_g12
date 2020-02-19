export function generateMealButton() {
  const button = document.createElement("button");
  button.classList.add("meal-button");
  button.innerText = "Meal";
  return button;
}
