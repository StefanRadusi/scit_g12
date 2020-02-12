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
    // console.log(this.urls);
    this.generateImgDom();
    this.generateButtons();
  }

  generateImgDom() {
    this.containerImgs.innerHTML= null;
    this.imgDomList = [];
    for (let i = 0; i < this.urls.length; i++) {
      const url = this.urls[i];
      if (url){
      console.log(url);
      const img = document.createElement("img");
      img.setAttribute("src", url);
      img.classList.add("img-carousel");
      this.containerImgs.appendChild(img);
      
      this.imgDomList.push(img);
      }
    }
  }

  // const startPoint = 0;

  generateButtons(){
    this.buttonRight = document.createElement("button");
    this.buttonRight.classList.add("carousel-buttons");

    this.buttonLeft = document.createElement("button");
    this.buttonLeft.classList.add("carousel-buttons");

    this.containerImgs.appendChild(this.buttonRight);
    this.containerImgs.appendChild(this.buttonLeft);
  }
  moveRight(){
    this.buttonRight.addEventListener("click", handleButtonRight.bind(this));
  }
  moveLeft(){
    this.buttonLeft.addEventListener("click", handleButtonLeft.bind(this));
  }
  handleButtonRight(){
    
    const startPoint = this.startPoint;
    startPoint = this.setImgUrls(urls)
  }
  // handleButtonLeft(){

  // }
}

