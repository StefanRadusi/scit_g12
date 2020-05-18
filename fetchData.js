class FetchData {
  constructor(carousel) {
    this.createInput();
    this.setOnEnter();
    this.carousel = carousel;
    this.url = "";
  }

  createInput() {
    let inputContainer = document.createElement("inputContainer");
    inputContainer.id = "inputContainer";
    const input = document.createElement("input");
    input.id = "main-input";
    document.body.appendChild(inputContainer);
    this.inputRef = input;
    inputContainer.appendChild(input);
  }

  setOnEnter() {
    this.inputRef.addEventListener("keydown", this.handleEnter);
  }

  handleEnter = (event) => {
    if (event.key === "Enter") {
      this.fetchRecipes();
    }
  };

  fetchRecipes() {
    // at first this.url will be empty and the fetch will take place
    // but after first fetch we store the url for later comparison
    // on a second fetch if the newUrl will be the same as this.url which is the old url the fetch will NOT take place
    // this is an optimization in order for us no to make unnecessary calls
    if (this.url !== this.generateUrl()) {
      this.url = this.generateUrl();
      fetch(this.url)
        .then((response) => response.json())
        .then(this.generateImgUrl);
    }
  }

  // this method is called only after the fetch is done
  generateImgUrl = (json) => {
    if (json.meals) {
      this.imgUrls = json.meals.map(function (element) {
        return element.strMealThumb;
      });

      // this.carousel is the object responsible for drawing the images, and it has a method for setting the urls
      // check the class Carousel for how is it implemented;
      this.carousel.setImgUrls(this.imgUrls);
    }
  };

  generateUrl = () =>
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.inputRef.value}`;
}
