
const mealsContainer = document.getElementById("meals-container");

const input = document.getElementById("meal-name");

document.getElementById("get-meal").addEventListener("click", function() {
  const url = generateRateUrl(input.value);

  if (url) {
    clearMealContainer();
    hitServer(url);
  }
});

function generateRateUrl(inputValue) {
  if (inputValue) {
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  }
}

function clearMealContainer() {
  mealsContainer.innerHTML = "Loading";
}

function hitServer(url) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      renderMeals(json.meals);
    });
}

function renderMeals(meals) {
  mealsContainer.innerHTML = "";
  for (const meal of meals) {
    const mealContainer = document.createElement("div");
    mealContainer.style.marginBottom = "20px";

    const mealTitle = document.createElement("h3");
    mealTitle.innerText = meal.strMeal;
    mealContainer.appendChild(mealTitle);

    const mealContent = document.createElement("p");
    mealContent.innerText = meal.strInstructions;
    mealContainer.appendChild(mealContent);

    mealsContainer.appendChild(mealContainer);
  }
}
const menuLettersList = document.getElementsByTagName("p");


for (const char of menuLettersList) {
    char.addEventListener("click", function(a) {
        let url = generateRateUrl(a.target.innerText);
        hitServer(url)
        });
    }
    function generateRateUrl(pContent){
        return `https://www.themealdb.com/api/json/v1/1/search.php?f=${pContent}`
    };