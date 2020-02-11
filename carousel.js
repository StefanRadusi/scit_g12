class Carousel {
  constructor() {
    this.generateContainer();
    this.imgDomList = [];
    this.buttonRight;
    this.buttonLeft;
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
    this.generateImgDom();
    this.generateButtons();
    this.startPoint ++;
  }
  generateButtons() {
    this.buttonRight = document.getElementById("b2")
    .addEventListener("click", function() {
      if("click" === this.url.slice(img) ) {
        console.log("right")
      }
    })
    document.getElementById("b1").disabled = true;
    this.buttonLeft = document.getElementById("b1")
    .addEventListener("click", function() {
    })
  };

  generateImgDom() {
    this.cleanImgsContainer();
    for (let i = 0; i < 3; i++) {
      const url = this.urls[i];

      if(url) {
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
}


