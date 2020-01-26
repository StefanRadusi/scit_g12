function loading() {
    let content = document.querySelector("#meals");
    content.innerHTML = "";
    let p = document.createElement("p");
    p.innerHTML = "looooading....";
    content.appendChild(p);
}

function noRecipe(word) {
    let content = document.querySelector("#meals");
    content.innerHTML = "";
    let div = document.createElement("p");
    div.innerText = `There is no recipe with: ${word}`;
    content.appendChild(div);
}


let addMeals = function addMeal(word, meals) {
    let mealsList = document.querySelector("#meals ");
    mealsList.innerHTML = null;
    if (meals === null) {
        noRecipe(word);
    } else {
        meals.forEach((meal) => {
            let mealElem = document.createElement('div');
            let mealTitleElem = document.createElement('h2');
            mealTitleElem.textContent = meal.strMeal;
            mealElem.appendChild(mealTitleElem);

            let mealDescriptionElem = document.createElement('div');
            mealDescriptionElem.textContent = meal.strInstructions;
            mealElem.appendChild(mealDescriptionElem);

            let mealCategoryElem = document.createElement('h3');
            mealCategoryElem.textContent = meal.strCategory;
            mealElem.appendChild(mealCategoryElem);

            mealsList.appendChild(mealElem);
        });
    }
};

let getByFirstLetter = function getByFirstLetter() {
    let firstLetter = this.id;
    loading();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            addMeals(firstLetter, json.meals);
        });
};

document.querySelectorAll("#alphabet p").forEach(elem => {
    elem.addEventListener("click", getByFirstLetter)
});

let getByWord = function getByWord() {
    let word = document.getElementById("input").value;
    loading();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            addMeals(word, json.meals);
        });
};

document.getElementById("getMeal").addEventListener("click", getByWord);

