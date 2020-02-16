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
     for(let element of this.urls.slice(this.startPoint, this.startPoint + 3))
      if(element) {
        let url = element;
        console.log(url)
        const img = document.createElement("img");
        img.setAttribute("src", url);
        img.classList.add("img-carousel");
        this.containerImgs.appendChild(img);
        this.imgDomList.push(img);
        
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
    this.buttonLeft.disabled = true;
    this.container.prepend(this.buttonLeft);
    this.buttonRight = document.getElementById("buttonRight")
  }
  
  handleRightButton() {
    document.addEventListener("click", this.onRight) 
}
  
  onRight = () => {
    if(event.target.id === "buttonRight") {
      this.nextImg();
    }

  }

  nextImg() {

     if(this.startPoint < this.urls.length - 3) {
       this.startPoint ++
       this.generateImgDom()
     }

     if(this.startPoint > 0) {
       document.getElementById("buttonLeft").disabled = false;
       
     }

     if(this.startPoint === this.urls.length - 3) {
      document.getElementById("buttonRight").disabled = true;
     }
     console.log(this.imgDomList)
  }

  handleLeftButton() {
    document.addEventListener("click", this.onLeft) 
    
}
onLeft =() => {
  if(event.target.id === "buttonLeft") {
    this.previousImg();
  }
}
previousImg() {
  
  this.startPoint --;
  this.generateImgDom();
 
    if(this.startPoint === 0) {
      document.getElementById("buttonLeft").disabled = true;
  
    }
    if(this.startPoint < this.urls.length -3 ) {
      document.getElementById("buttonRight").disabled = false;
    }
    
  }

  cleanImgsContainer() {
    this.imgDomList = [];
    this.containerImgs.innerHTML = null;
  }
}


