class Carousel {
  constructor() {
    this.generateContainer();
    //this.buttonLeftFct();
    // this.buttonRightFct();
    this.imgDomList = [];
    this.StartPoint = 0;
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

  generateButtons() {
    this.buttonLeft = document.createElement("BUTTON");
    this.buttonRight = document.createElement("BUTTON");

    let textLeft = document.createTextNode("LEFT");
    let textRight = document.createTextNode("RIGHT");

    this.buttonLeft.appendChild(textLeft);
    this.buttonRight.appendChild(textRight);

    this.containerImgs.prepend(this.buttonLeft);
    this.containerImgs.appendChild(this.buttonRight);
  }

  /* NOT DONE
  buttonLeftFct() {
    this.buttonLeft.addEventListener("click", function() {
      if (this.StartPoint > this.urls.length - 3) {
        if (this.StartPoint === 0) {
          this.buttonLeft.disabled = true;
        }
        if (this.StartPoint > this.urls.length) {
          this.buttonLeft.disabled = false;
        }
        this.StartPoint--;
        this.urls.slice(this.StartPoint, 4);
      }
    });
  }

  buttonRightFct() {
    this.buttonRight.addEventListener("click", function() {
      if (this.StartPoint < this.urls.length - 3) {
        if (this.StartPoint > 0) {
          this.buttonLeft.disabled = true;
        }
        if (this.StartPoint === this.urls.length) {
          this.buttonLeft.disabled = false;
        }
        this.StartPoint++;
        this.urls.slice(this.StartPoint, 4);
      }
    });
  } */
}
