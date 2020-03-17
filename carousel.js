class Carousel {

  constructor(buttonLeft, buttonRight) {
    this.generateContainer();
    this.imgDomList = [];
    this.startPoint = 0;
    this.buttonRight = buttonRight;
    this.buttonLeft = buttonLeft;

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

    this.buttonLeft = document.createElement("button");
    this.buttonLeft.innerText = "<";
    this.buttonLeft.id = "previousButton";
    this.buttonLeft.disabled = true;

    this.buttonRight = document.createElement("button");
    this.buttonRight.innerText = ">";
    this.buttonRight.id = "nextButton";
    if (this.urls.length <= 3) this.buttonRight.disabled = true;

    this.container.prepend(this.buttonLeft);
    this.container.appendChild(this.buttonRight);

    this.handleButtonRight();
    this.handleButtonLeft();
  }

  handleButtonRight() {
    this.buttonRight.addEventListener("click", () => {
      this.startPoint++;
      
      if (this.urls.length > 3) this.buttonLeft.disabled = false;
      if (this.startPoint === this.urls.length - 3) this.buttonRight.disabled = true; 
      
      this.generateImgDom(this.startPoint);
    })
  }

  handleButtonLeft() {
    this.buttonLeft.addEventListener("click", () => {
      this.startPoint--;
      
      if (this.startPoint <= 3) this.buttonLeft.disabled = true;
      
      this.generateImgDom(this.startPoint);
    })
  }

  removeButtons() {
    if (this.buttonLeft || this.buttonRight) {
      this.buttonLeft.remove();
      this.buttonRight.remove();
    }
  }
}