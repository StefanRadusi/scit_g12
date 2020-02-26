import { generateHomeButton } from "../header/homeButton";
import { generateMealButton } from "../header/mealButton";
import { generateHomePage } from "../homePage/home";
import { generateMealPage } from "./meal";

export function setHomeButton(){
    // const homeButton = generateHomeButton();
    const homeButton = document.getElementById("home-button");
    homeButton.addEventListener("click", ()=>{
        generateHomePage()});
}

export function setMealButton(){
    const buttonForMeal = generateMealButton();
    buttonForMeal.addEventListener("click", ()=>{
        generateMealPage(onload);
    })
}