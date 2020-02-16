class Carousel {
  constructor() {
    this.generateContainer();
    this.imgDomList = [];
    this.startPoint = 0;
  }

  generateContainer() {
    this.container = document.createElement("div");  //this.container este un atribut creat in metoda obiectului.
    this.container.classList.add("carousel-container");

    this.containerImgs = document.createElement("div");
    this.containerImgs.classList.add("carousel-img-container");

    document.body.appendChild(this.container);
    this.container.appendChild(this.containerImgs);
  }

  setImgUrls(urls) {
    this.urls = urls;
    console.log(this.urls);
    this.generateImgDom();
    this.generateButtons();
    
  }

  generateImgDom() {
    this.imgDomList = [];
    this.containerImgs.innerHTML = ""; // class task1
        for (let i of this.urls.slice(this.startPoint, this.startPoint + 3)) {
          if (i){ // class task2
            const url = i;
            console.log(url);
            const img = document.createElement("img");
            img.setAttribute("src", url);
            img.classList.add("img-carousel");
            this.containerImgs.appendChild(img);
            this.imgDomList.push(img);
            
    }}
  }

//homework

  generateButtons() {
    this.cleanGeneratebutton();
    this.leftButton = document.createElement("button");
    this.leftButton.id = "leftButton";
    this.leftButton.innerHTML = "<";
    this.leftButton.disabled = true;

    this.rightButton = document.createElement("button");
    this.rightButton.id = "rightButton";
    this.rightButton.innerHTML = ">";
    if (this.urls.length <= 3){
      this.rightButton.disabled = true;
    }

    this.container.prepend(this.leftButton);
    this.container.appendChild(this.rightButton);

  document.getElementById("rightButton").addEventListener("click", this.switchImageRight.bind(this));
  document.getElementById("leftButton").addEventListener("click", this.switchImageLeft.bind(this));
}

  cleanGeneratebutton() {
    if (document.getElementById("leftButton")){
    document.getElementById("leftButton").remove();
    document.getElementById("rightButton").remove();
  }
}

switchImageRight(){
  if (this.startPoint < this.urls.length - 3){
    this.startPoint ++;
    this.updateImgDom();
  }
  if (this.startPoint > 0){
    document.getElementById("leftButton").disabled = false;
  }
  if (this.startPoint === this.urls.length - 3){
  document.getElementById("rightButton").disabled = true;
  }
  console.log(this.imgDomList);
}


switchImageLeft(){
  this.startPoint --;
  this.updateImgDom();
  if (this.startPoint === 0){
    document.getElementById("leftButton").disabled = true;
  }
  if (this.startPoint < this.urls.length - 3){
  document.getElementById("rightButton").disabled = false;
  }
}

updateImgDom(){
    let urlList = this.urls.slice(this.startPoint, this.startPoint + 3);
        for (let i = 0; i < urlList.length; i++ ) {
          if (urlList[i]){ 
            const newUrl = urlList[i];
            const img = this.imgDomList[i];
            img.setAttribute("src", newUrl);     
    }}
  }
};
