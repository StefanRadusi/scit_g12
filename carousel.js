class Carousel {
  constructor() {
    
    this.generateContainer();
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

  setImgUrls(urls) {
    this.urls = urls;
    this.generateImgDom(this.startPoint);
    this.generateButtons();
  }

  generateImgDom(start) {
    this.cleanImgsContainer();
    for (let i = start; i < start+3; i++) {
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

  generateButtons() {
    this.buttonLeft = document.createElement("p");
    this.buttonLeft.setAttribute("id", "button-left");
    this.container.appendChild(this.buttonLeft);
    this.buttonLeft.innerHTML = "<";
    this.buttonLeft.addEventListener("click", () => {
      this.pressLeftBtn();
    });

    this.buttonRight = document.createElement("p");
    this.buttonRight.setAttribute("id", "button-right");
    this.container.appendChild(this.buttonRight);
    this.buttonRight.innerHTML = ">";
    this.buttonRight.addEventListener("click", () => {
      this.pressRightBtn();
    });
  }

  pressRightBtn() {
    if(this.startPoint+3 < this.urls.length) {
      this.startPoint ++;
      this.cleanImgsContainer();
      this.generateImgDom(this.startPoint);
    }
  }

  pressLeftBtn() {
    if(this.startPoint > 0) {
      this.startPoint --;
      this.cleanImgsContainer();
      this.generateImgDom(this.startPoint);
    }
  }
}