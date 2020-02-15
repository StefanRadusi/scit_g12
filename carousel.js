class Carousel {
  constructor() {
    this.generateContainer();
    this.imgDomList = [];
    this.handleRightButton()
    this.handleLeftButton()
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
    
  }
  
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
generateButtons() {

    this.buttonRight = document.createElement("button")
    this.buttonRight.id = "buttonRight"
    this.buttonRight.innerHTML = ">"
    this.container.appendChild(this.buttonRight)

    this.buttonRight = document.getElementById("buttonRight")
    .addEventListener("click", function(event) {
    })

    this.buttonLeft = document.createElement("button")
    this.buttonLeft.id = "buttonLeft"
    this.buttonLeft.innerHTML = "<"
    this.container.prepend(this.buttonLeft);
    this.buttonRight = document.getElementById("buttonRight")
  }
  
  handleRightButton() {
    document.addEventListener("click", this.onRight) 
}
  

  onRight = event => {
      if(event.target.id === "buttonRight") {
        console.log(event.target);
        this.startPoint +=1;
        this.images();
      }
  }

  handleLeftButton() {
    document.addEventListener("click", this.onLeft) 
    
}

onLeft = event => {
  if(event.target.id === "buttonLeft") {
    console.log(event.target);
    this.images()
    
  }
}
  // retrieveSrc () {
  //   document.getElementById(this.img)
  //   document.querySelectorAll(this.img).src = this.urls;
  // }

images = event => {
  this.generateImgDom();
  // this.retrieveSrc()
  
   for(const elements of this.urls) {
    
     console.log(elements)
   }
  }


  cleanImgsContainer() {
    this.imgDomList = [];
    this.containerImgs.innerHTML = null;
  }
}


