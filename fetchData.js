class FetchData {
  constructor(carousel) {
    this.createInput();
    this.setOnEnter();
    this.carousel = carousel;
    this.url = "";
  }

  createInput() {
    const input = document.createElement("input");
    document.body.prepend(input);
    this.inputRef = input;
  }

  setOnEnter() {
    this.inputRef.addEventListener("keydown", this.handleEnter.bind(this));
  }

  handleEnter(event) {
    if (event.key === "Enter") {
      this.fetchRecipes();
    }
  }

  fetchRecipes() {
    const newUrl = this.generateUrl();

    // at first this.url will be empty and the fetch will take place
    // but after first fetch we store the url for later comparison
    // on a second fetch if the newUrl will be the same as this.url which is the old url the fetch will NOT take place
    // this is an optimization in order for us no to make unnecessary calls
    if (newUrl !== this.url) {
      this.url = newUrl;
      fetch(this.url)
        .then(function(response) {
          return response.json();
        })
        .then(this.generateImgUrl.bind(this));
    }
  }


  // this method is called only after the fetch is done
  generateImgUrl(json) {
    
    this.imgUrls = json.meals.map(function(element) {
      return element.strMealThumb;
    });

    // this.carousel is the object responsible for drawing the images, and it has a method for setting the urls
    // check the class Carousel for how is it implemented;
    this.carousel.setImgUrls(this.imgUrls);
  }

  generateUrl() {
    const value = this.inputRef.value;
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  }
}
