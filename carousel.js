class Carousel {
  constructor() {
    this.generateContainer();
    this.imgDomList = [];
    this.startPoint = 0;
    this.nextButton;
    this.previousButton;
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
    // this.removeButtons();
  }

  generateButtons() {
    this.previousButton = document.createElement("button");
    this.previousButton.innerText = "<";
    this.previousButton.id = "previousButton";
    this.previousButton.disabled = true;

    this.nextButton = document.createElement("button");
    this.nextButton.innerText = ">";
    this.nextButton.id = "nextButton";
    

    this.container.prepend(this.previousButton);
    this.container.appendChild(this.nextButton);

    this.handleNextButton();
    this.handlePreviousButton();
  }

  handleNextButton() {
    document.getElementById("nextButton").addEventListener("click", () => {
      console.log("next")
      if (this.urls.length > 3) {
        this.previousButton.disabled = false;
      }
      if (this.imgDomList[this.imgDomList.length + 1]) this.nextButton.disabled = true; 
      if (this.urls.length <= 3) {
        this.nextButton.disabled = true;
      }

      this.startPoint++;
      this.generateImgDom(this.startPoint);
    })
  }

  handlePreviousButton() {
    document.getElementById("previousButton").addEventListener("click", () => {
      console.log("previous");
      
      this.startPoint--;
      this.generateImgDom(this.startPoint);
    })
  }

  removeButtons() {
    this.previousButton.remove();
    this.nextButton.remove();
  }
}
