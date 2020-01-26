const mealsContainer = document.getElementById("mealsContainer");
const input = document.getElementById("meal-name");

document.getElementById("get-meal").addEventListener("click", function() {

    const url = generateRateUrl(input.value);

    if(url) {
        hitServer(url);
    }
});

function ClearMealContainer() {
    mealsContainer.innerHTML = "Loading"
}
function generateRateUrl(pContent) {
if(inputValue) {
    return `https://www.themealdb.com/api/json/v1/1/search.php?f=${pContent}`;
}
};

function hitServer(url) {
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
    Meals(json.meals);
    });
}

 
function Meals(meals) {

    mealsContainer.innerHTML = "";
    for (const meal of meals) {
        const mealContainer = document.createElement("div");
        mealContainer.style.marginBottom = "20px";

        const mealTitle = document.createElement( "h3" );
        mealTitle.innerText = meal.strMeal;
        mealContainer.appendChild(mealTitle);

        mealContent = document.createElement("p");
        mealContainer.innerText = meal.strInstructions;
        mealContainer.appendChild(mealContent);

        mealsContainer.appendChild(mealContainer);
    }
    }

const menuLettersList = document.getElementsByTagName("p");


for (const char of menuLettersList) {
    char.addEventListener("click", function(a) {
        console.log(a.target.innerText + " cliecked ");
        let url = generateRateUrl(a.target.innerText);
        hitServer(url)
        });
    }
    function generateRateUrl(pContent){
        return `https://www.themealdb.com/api/json/v1/1/search.php?f=${pContent}`
    };
