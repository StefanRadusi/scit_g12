import { generateHomeButton } from "./homeButton";
import { generateMealButton } from "./mealButton";

export function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  header.appendChild(generateHomeButton());
  header.appendChild(generateMealButton());
  document.body.appendChild(header);
}
