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
    console.log(this.imgDomList);
    console.log(this.urls);
    //call to generate te buttons
    this.generateButtons();
    this.generateImgDom();

  }



  generateImgDom() {
    this.cleanImgsContainer();
    // this.cleanButtons();
    for (let i = 0; i < 3; i++) {
      const url = this.urls[i];
      if (url) {
        const img = document.createElement("img");
        img.setAttribute("src", url);
        img.classList.add("img-carousel");
        this.containerImgs.appendChild(img);
        this.imgDomList.push(img);

      }

    }
    //call to click function
    this.click();

  }

  cleanImgsContainer() {
    this.imgDomList = [];
    this.containerImgs.innerHTML = null;
  }

  //here I generated the buttons but every time the input is changed the buttons get created again.
  // I didn't know how to stop this, I tried something similar to cleanImgsContainer() but it didn't work.
  generateButtons() {

    this.containerBtnLeft = document.createElement("div");
    this.containerBtnLeft.classList.add("carousel-btn");
    this.buttonLeft = document.createElement("p");
    this.buttonLeft.id = "btnL";
    this.buttonLeft.innerText = "<";
    this.container.prepend(this.containerBtnLeft);
    this.containerBtnLeft.appendChild(this.buttonLeft);

    this.containerBtnRight = document.createElement("div");

    this.containerBtnRight.classList.add("carousel-btn");
    this.container.appendChild(this.containerBtnRight);
    this.buttonRight = document.createElement("p");
    this.buttonRight.innerText = ">";
    this.buttonRight.id = "btnR";
    this.containerBtnRight.appendChild(this.buttonRight);



  }

  // cleanButtons() {

  // }

  //below is the click event on buton right and left
  //I extracted the new 3 image url's in newArray, and new Array content is changing at every button click
  // but i didn't kniow how to display its content on page
  click() {
    let images = this.urls;
    let startPoint = this.startPoint;
    let newArray = [];
    console.log(this.imgDomList);
    document.getElementById("btnR").addEventListener("click", function () {

      startPoint++;
      if (startPoint >= 0) {
        newArray = images.slice(startPoint, startPoint + 3);
        console.log(newArray);
        return startPoint

      }

    })

    document.getElementById("btnL").addEventListener("click", function () {

      startPoint--;
      if (startPoint <= 0) {
        newArray = images.slice(startPoint, startPoint + 3);
        console.log(newArray);
        return startPoint
      }

    })



  }




}

