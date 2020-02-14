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
    this.container.appendChild(this.buttonLeft)

    this.buttonLeft = document.getElementById("buttonLeft")
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
  onRight() { 
    if(this.buttonRight.event === this.url.slice(this.startPoint, 4)) {
    for(const img of this.imgDomList) {
      console.log(img)
      if(this.urls === "src") {
        console.log(img)
      }
    }
    }
  }


  cleanImgsContainer() {
    this.imgDomList = [];
    this.containerImgs.innerHTML = null;
  }
}


