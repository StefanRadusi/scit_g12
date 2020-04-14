export function generateHomeButton() {
  const button = document.createElement("button");
  button.classList.add("home-button");
  button.classList.add("selected");
  button.id = "home-button";
  button.innerText = "Home";
  return button;
}
