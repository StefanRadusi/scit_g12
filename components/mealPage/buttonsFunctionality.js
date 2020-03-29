import { generateHomeButton } from "../header/homeButton";
import { generateMealButton } from "../header/mealButton";
import { generateHomePage } from "../homePage/home";
import { displayMealPage } from "./meal";

export function setHomeButton(){
    const homeButton = document.getElementById("home-button");
    homeButton.addEventListener("click", ()=>{
        generateHomePage()});
}

export function setMealButton(){
    const mealButton = document.getElementById("meal-button");
    mealButton.addEventListener("click", ()=>{
        displayMealPage();
    })
}