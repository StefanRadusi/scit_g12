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
    this.generateImgDom();
    this.generateButtons();
  }

  generateImgDom() {
    this.cleanImgsContainer();
    for (let i of this.urls.slice(this.startPoint, this.startPoint+3))
     {
      if (i) {
        const img = document.createElement("img");
        img.setAttribute("src", i);
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

  generateButtons()
{
  this.cleanButtons();
  this.buttonRight = document.createElement("button");
  this.buttonRight.innerHTML = ">";
  this.buttonRight.id="next";
  this.container.appendChild(this.buttonRight);
   this.buttonRight.disabled = false;
  if(this.urls.length <3){
    this.buttonRight.disabled = true;
  }

  this.buttonLeft = document.createElement("button");
  this.buttonLeft.innerHTML = "<";
  this.buttonLeft.id="prev";
  this.container.prepend(this.buttonLeft);
  this.buttonLeft.disabled = true;

  document.getElementById("next").addEventListener("click",this.moveRight.bind(this));
  document.getElementById("prev").addEventListener("click",this.moveLeft.bind(this));

}
cleanButtons(){
  if (document.getElementById("next")){
    document.getElementById("next").remove();	    
    document.getElementById("prev").remove();	    
}
}
moveRight(){
  
if (this.startPoint < this.urls.length-3)
  { 
  this.startPoint++;
  this.updateImgDom();
  } 
  if (this.startPoint > 0){
    document.getElementById("prev").disabled = false;
  }
  if (this.startPoint === this.urls.length - 3){
  document.getElementById("next").disabled = true;
  }
}

moveLeft(){
  this.startPoint--;
  this.updateImgDom();
  if (this.startPoint === 0){
    document.getElementById("prev").disabled = true;
  }
  if (this.startPoint < this.urls.length - 3){
  document.getElementById("next").disabled = false;
  }
}
updateImgDom(){
  let sliceArray = this.urls.slice(this.startPoint,this.startPoint+3);
for (let i=0; i<sliceArray.length; i++)
{
  let picture = sliceArray[i];
  let img=this.imgDomList[i];
  img.setAttribute("src", picture);
}
}
 }