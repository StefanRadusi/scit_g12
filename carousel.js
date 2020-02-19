class Carousel {
  constructor(nextButton, previousButton) {
    this.generateContainer();
    this.imgDomList = [];
    this.startPoint = 0;
    this.nextButton = nextButton;
    this.previousButton = previousButton;
  }

  generateContainer() {
    this.container = document.createElement("div");
    this.container.classList.add("carousel-container");

    this.containerImgs = document.createElement("div");
    this.containerImgs.classList.add("carousel-img-container");

    document.body.appendChild(this.container);
    this.container.appendChild(this.containerImgs);
  }

  setImgUrls(urls) {
    this.urls = urls;
    this.generateImgDom();
    this.generateButtons();
  }

  generateImgDom() {
    this.cleanImgsContainer();
    
    for (let url of this.urls.slice(this.startPoint, this.startPoint + 3)) {
      if (url) {
        const img = document.createElement("img");
        img.setAttribute("src", url);
        img.classList.add("img-carousel");
        this.containerImgs.appendChild(img);
        this.imgDomList.push(img);  
      }
    }
  }

  cleanImgsContainer() {
    this.imgDomList = [];
    this.containerImgs.innerHTML = null;
  }

  generateButtons() {
    this.removeButtons();

    this.previousButton = document.createElement("button");
    this.previousButton.innerText = "<";
    this.previousButton.id = "previousButton";
    this.previousButton.disabled = true;

    this.nextButton = document.createElement("button");
    this.nextButton.innerText = ">";
    this.nextButton.id = "nextButton";
    if (this.urls.length <= 3) this.nextButton.disabled = true;

    this.container.prepend(this.previousButton);
    this.container.appendChild(this.nextButton);

    this.handleNextButton();
    this.handlePreviousButton();
  }

  handleNextButton() {
    this.nextButton.addEventListener("click", () => {
      this.startPoint++;
      
      if (this.urls.length > 3) this.previousButton.disabled = false;
      if (this.startPoint === this.urls.length - 3) this.nextButton.disabled = true; 
      
      this.generateImgDom(this.startPoint);
    })
  }

  handlePreviousButton() {
    this.previousButton.addEventListener("click", () => {
      this.startPoint--;
      
      if (this.startPoint <= 3) this.previousButton.disabled = true;
      
      this.generateImgDom(this.startPoint);
    })
  }

  removeButtons() {
    if (this.previousButton || this.nextButton) {
      this.previousButton.remove();
      this.nextButton.remove();
    }
  }
}
