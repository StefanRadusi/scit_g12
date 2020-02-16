class Carousel {
  constructor() {
    this.generateContainer();
    this.getButtonsLocation();
    this.handleLeftButton();
    this.handleRightButton();
    this.clearButtons();
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
    this.clearButtons();
    this.leftButton = document.createElement("button");
    this.leftButton.id = "leftButton";
    this.leftButton.innerHTML = "<";
    this.leftButton.disabled = true;

    this.rightButton = document.createElement("button");
    this.rightButton.id = "rightButton";
    this.rightButton.innerHTML = ">";
    if (this.urls.length <= 3) {
      this.rightButton.disabled = true;
    }

    this.container.prepend(this.leftButton);
    this.container.appendChild(this.rightButton);
  }

  clearButtons() {
    if (document.getElementById("leftButton")) {
      document.getElementById("leftButton").remove();
      document.getElementById("rightButton").remove();
    }
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

  renderNewImgDom() {
    this.cleanImgsContainer();
    for (let el of this.urls.slice(this.startPoint, this.startPoint + 3)) {
      if (el) {
        const url = el;
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
      this.previousImage();
    }
  };

  handleRightButton() {
    document.addEventListener("click", this.nextImg);
  }

  nextImg = event => {
    if (event.target.id === "rightButton") {
      event.preventDefault();
      this.nextImage();
    }
  };

  nextImage() {
    if (this.startPoint < this.urls.length - 3) {
      this.startPoint++;
      this.renderNewImgDom();
    }
    if (this.startPoint > 0) {
      document.getElementById("leftButton").disabled = false;
    }
    if (this.startPoint === this.urls.length - 3) {
      document.getElementById("rightButton").disabled = true;
    }
  }

  previousImage() {
    this.startPoint--;
    this.renderNewImgDom();
    if (this.startPoint === 0) {
      document.getElementById("leftButton").disabled = true;
    }
    if (this.startPoint < this.urls.length - 3) {
      document.getElementById("rightButton").disabled = false;
    }
  }
}
