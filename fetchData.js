class FetchData {
  constructor(carousel) {
    this.createInput();
    this.setOnEnter();
    this.carousel = carousel;
  }

  createInput() {
    const input = document.createElement("input");
    document.body.prepend(input);
    this.inputRef = input; //retinem elementul DOM pentru a optimizia, adica sa nu tot facem getElementByID
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
    const url = this.generateUrl();
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(this.generateImgUrl.bind(this));
  }

  generateImgUrl(json) {
    this.imgUrls = json.meals.map(function(element) {
      return element.strMealThumb;
    });

    this.carousel.setImgUrls(this.imgUrls);
  }

  generateUrl() {
    const value = this.inputRef.value;
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  }
}

    // generateButtons: cel din stanga din primma sa fie disabled- startpoint lenght of list urls-3 
    // la apasare pe dreapta imaginea 2 in loc la 1 si 3 in loc la 2 si la 3 apare una noua-alta metoda
    // scimbam src corect cu imageDOMElements
    // trebuie sa setam start point cu zero si la apasare devine 1- 
    // cu un for iteram prin cele 3 si returnezdi din lista de urluri pornind de la list.startpoint[3]
    // la stanga startpointul se decrementam(incepem de tot de la 3) 