console.log("start");

const mealsContainer = document.getElementById ("meals-container");
const input = document.getElementById("meal-name");

document.getElementById("get-meal").addEventListener("click", function() {

    const url = generateRateUrl(input.value);

    if(url) {
        hitServer(url);
    }
});

function generateRateUrl(inputValue) {
if(inputValue) {
    return `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`;
}
};

function hitServer(url) {
    fetch(url)
    .then(function(response){
    return response.json();
})

.then(function(json){
    renderMeals(json.meals);
});

const menuLettersList = document 
.getElementById("menuLetters")
.getElementsByTagName("p");

for (const char of menuLettersList) {
    console.log(char);
    char.addEventListener("click", function() {
        hitServer ( 
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${char.id}`
            );
        }