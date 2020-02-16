class Carousel {
  constructor() {
    this.generateContainer();
    this.getButtonsLocation();
    this.handleLeftButton();
    this.handleRightButton();
    this.imgDomList = [];
    this.startPoint = 0;
  }

  generateContainer() {
    this.container = document.createElement("div");
    this.container.classList.add("carousel-container");

    this.containerImgs = document.createElement("div");
    this.containerImgs.classList.add("carousel-img-container");

    document.body.appendChild(this.container);
    this.container.appendChild(this.containerImgs);
  }

  generateButtons() {
    this.leftButton = document.createElement("button");
    this.leftButton.id = "leftButton";
    this.leftButton.innerHTML = "<";

    this.rightButton = document.createElement("button");
    this.rightButton.id = "rightButton";
    this.rightButton.innerHTML = ">";

    this.container.prepend(this.leftButton);
    this.container.appendChild(this.rightButton);
  }

  setImgUrls(urls) {
    this.urls = urls;
    this.generateImgDom();
    this.generateButtons();
  }

  generateImgDom() {
    this.cleanImgsContainer();
    for (let i = 0; i < 3; i++) {
      const url = this.urls[i];

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

  getButtonsLocation() {
    const previousImaLoc = document.getElementById("leftButton");
    this.previous = previousImaLoc;
    const nextImgLoc = document.getElementById("rightButton");
    this.next = nextImgLoc;
  }

  handleLeftButton() {
    document.addEventListener("click", this.previousImg);
  }

  previousImg = event => {
    if (event.target.id === "leftButton") {
      event.preventDefault();
      console.log(event.target);
      this.previousImage();
    }
  };

  handleRightButton() {
    document.addEventListener("click", this.nextImg);
  }

  nextImg = event => {
    if (event.target.id === "rightButton") {
      event.preventDefault();
      console.log(event.target);
      this.nextImage();
    }
  };

  nextImage() {
    for (this.startPoint of this.urls) {
      this.imgDomList.push(this.startPoint);
      this.imgDomList.slice(this.startPoint, 4);
      console.log(this.startPoint);
      if (this.startPoint < this.urls.length) {
        this.startPoint++;
      }
      this.generateImgDom();
    }
  }

  previousImage() {
    for (this.startPoint of this.urls) {
      this.imgDomList.push(this.startPoint);
      this.imgDomList.slice(this.startPoint, 4);
      console.log(this.startPoint);
      if (this.startPoint < this.urls.length) {
        this.startPoint--;
      }
      this.generateImgDom();
    }
  }
}
