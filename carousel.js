class Carousel {
  constructor() {
    this.imgDomList = [];
    this.startPoint = 0;
    this.generateContainer();
    this.generateButtons();
    this.moveRight();
    this.moveLeft()
    
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
    
    this.generateImgDom(urls);
    
    
    
  }

  generateImgDom(urls) {
    this.containerImgs.innerHTML= null;
    this.imgDomList = [];
    for (let i = 0; i < 3; i++) {
      const url = urls[i];
      if (url){
      console.log(url);
      const img = document.createElement("img");
      img.setAttribute("src", url);
      img.classList.add("img-carousel");
      this.containerImgs.appendChild(img);
      
      this.imgDomList.push(img);
      this.disableButtons();
      
      }
    }
  }

  // const startPoint = 0;

  generateButtons(){

    this.buttonLeft = document.createElement("button");
    this.buttonLeft.classList.add("carousel-buttons");
    
    this.buttonLeft.innerHTML = "<";

    this.buttonRight = document.createElement("button");
    this.buttonRight.classList.add("carousel-buttons");  
    this.buttonRight.innerHTML = ">";

    this.container.prepend(this.buttonLeft);
    this.container.appendChild(this.buttonRight);
  }
  moveRight(){
    this.buttonRight.addEventListener("click", this.handleButtonRight.bind(this));
  }
  moveLeft(){
    this.buttonLeft.addEventListener("click", this.handleButtonLeft.bind(this));
  }
  handleButtonRight(){
    this.startPoint++;
    const urls = this.urls.slice(this.startPoint);
    this.generateImgDom(urls);
    
  }
   handleButtonLeft(){
    this.startPoint--;
    const urls = this.urls.slice(this.startPoint);
    this.generateImgDom(urls);
    
   }
   disableButtons(){
     if (this.startPoint === 0) {
        this.buttonLeft.disabled = true;
        this.buttonLeft.classList.add("disable");
     } 
     else {
      this.buttonLeft.disabled = false;
      this.buttonLeft.classList.remove("disable");
     }
     
     if (this.startPoint === this.urls.length -3 ){
        this.buttonRight.disabled = true;
        this.buttonRight.classList.add("disable");
     }
     else {
      this.buttonRight.disabled = false;
      this.buttonRight.classList.remove("disable");
     }
     
   }
}

