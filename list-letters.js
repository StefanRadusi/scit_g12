let alphabetContainer = document.getElementById("alphabet-container");

let alphabet = document.getElementsByTagName("p");
let pContent = alphabet.innerText;


for (let letter of alphabet) {
  letter.addEventListener("click", function() {
    let letters = letter.innerText;
    let urlLetter = generateUrlByLetter(letters);

    if (urlLetter) {
        clearMealContainer();
        hitServer(urlLetter);
    }
  });
};

function generateUrlByLetter(pContent) {
  return `https://www.themealdb.com/api/json/v1/1/search.php?f=${pContent}`;
}








