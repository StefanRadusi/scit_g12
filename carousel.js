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
    // console.log(this.urls);
    this.generateImgDom();
    this.generateButtons();
    
  }

  generateImgDom() {
    this.containerImgs.innerHTML = ""; //task1
        for (let i = 0; i < 3; i++) {
          if (this.urls[i]){ //task2
      const url = this.urls[i];
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

    this.rightButton = document.createElement("button");
    this.rightButton.id = "rightButton";
    this.rightButton.innerHTML = ">";

    this.container.prepend(this.leftButton);
    this.container.appendChild(this.rightButton);

    this.switchImage();
  
  }
  cleanGeneratebutton() {
    if (document.getElementById("leftButton")){
    document.getElementById("leftButton").remove();
    document.getElementById("rightButton").remove();
  }
}

switchImage(){
  document.getElementById("rightButton").addEventListener("click", function(){
    console.log('event listener works');
    if(this.startPoint === 1){

    }
  })
  }



};
   // generateButtons: ce din stanga din primma sa fie disabeld- startpoint lenght of listurls-3 
    // la apasare pe drepta imagina 2 in loc la 1 si 3 in loc la 2 si la 3 apare una noua -alta metoda
    // scimbam src corect cu imageDOMElements
    // trebuie sa setam start pint cu zero si la apasare devine 1- 
    // cu un for iteram prin cele 3 si returnezdi din lista de urluri pornind de la list.strartpoint[3]
    // la stanga startpointul se decrementam(incepem de tot de la 3) 
