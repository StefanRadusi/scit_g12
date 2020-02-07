class Carousel {
  constructor() {
    this.generateContainer();
    this.imgDomList = [];
  }

  generateContainer() {
    this.container = document.createElement("div"); // //this.container este un atribut creat in metoda obiectului.
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
  }

  generateImgDom() {
    this.containerImgs.innerHTML = null; //task 1
    this.imgDomList = [];

    for (let i = 0; i < 3; i++) { // task 2
     
      const url = this.urls[i];
      console.log(url)
      if(url) {
        const img = document.createElement("img");
        img.setAttribute("src", url);
        img.classList.add("img-carousel");
        this.containerImgs.appendChild(img);
  
        this.imgDomList.push(img);
      }

      // console.log(url);

     
    }
  }
}

