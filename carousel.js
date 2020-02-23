class Carousel {
  constructor() {
    
    this.generateContainer();
    this.imgDomList = [];
    this.currentIndexMeal = 0;
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
    this.generateButton();
  }

  generateImgDom() {

    this.cleanImgsContainer();
    
    for (let url of this.urls.slice(this.currentIndexMeal, this.currentIndexMeal + 3)){

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

  generateButton() {
    this.rightButton = document.createElement("button");
    this.rightButton.id = "right-button";
    this.rightButton.classList.add("buttons");
    this.rightButton.innerText = ">";
    this.container.appendChild(this.rightButton);

    this.leftButton = document.createElement("button");
    this.leftButton.id = "left-button";
    this.leftButton.classList.add ("buttons");
    this.leftButton.innerText = "<";
    this.leftButton.style.opacity = 0.5;
    this.container.prepend(this.leftButton);
    

    this.handleRightButton(); 
    this.handleLeftButton();
  }

  handleRightButton() {
    this.rightButton.addEventListener("click", this.nextImg.bind(this));
    
  }

  handleLeftButton() {
    this.leftButton.addEventListener("click",this.previousImg.bind(this));
  }

  nextImg() {
    this.currentIndexMeal++;
    if (this.urls.length > 3) {
    this.generateImgDom(this.currentIndexMeal)
    this.leftButton.disabled = false;
    this.leftButton.style.opacity = 1;
    }

    if (this.currentIndexMeal === this.urls.length - 3){
    this.rightButton.disabled = true;
    this.rightButton.style.opacity = 0.5;
    } 

  }

  previousImg() {    
    this.currentIndexMeal --;
    if (this.currentIndexMeal <= 3){
    this.leftButton.disabled = true;
    this.rightButton.style.opacity = 1;
  }
  this.generateImgDom(this.currentIndexMeal);

}

}

