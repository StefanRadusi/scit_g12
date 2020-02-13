
class TheMover {
    constructor() {
        this.moverDom = this.getMoverDom();
        this.pressArrowleft();
        this.pressArrowRight();
        this.pressArrowDown()
        this.pressArrowUp();
        this.obstaclesDom = this.getObstacles();
        this.obstacleOne();
        this.obstacleTwo();
        this.positionY = 0;
        this.positionX = 0;
        
        
    
    }

    getMoverDom = () => {
        return document.getElementById("mover");
    }

    pressArrowUp() {

        document.addEventListener("keydown", this.arrowUp);
    }
    
    arrowUp = () => {
        if(event.keyCode === 38) {
            if(this.positionY <=0) {
                this.positionY +=5;
            }
            this.positionY -=5;
            this.moverDom.style.top = `${this.positionY}px`;
        }
    }
    
    pressArrowleft() {
        document.addEventListener("keydown", this.arrowLeft);
    }
    arrowLeft = (event) => {
        if(event.keyCode === 37) {
            if(this.positionX <= 0) {
                this.positionX +=5;
            }
            this.positionX -=5.;
            this.moverDom.style.left = `${this.positionX}px`;
        }
    }

    pressArrowRight() {
        
        document.addEventListener("keydown", this.arrowRight);
    }

    arrowRight = (event) => {
        if(event.keyCode === 39) {
            if(this.positionX >=680) {
                this.positionX -=5;
            }
            this.positionX +=5;
            this.moverDom.style.left = `${this.positionX}px`;
        }
    }

    pressArrowDown() {
        document.addEventListener("keydown", this.arrowDown);
    }

    arrowDown = (event) => {
        if(event.keyCode === 40) {
            this.positionY +=5;
            this.moverDom.style.top = `${this.positionY}px`;
            if(this.positionY >=330) {
                this.positionY-=5; 
         }
    }
}

getObstacles = () => {
   return document.getElementsByClassName("obstacle");
}

obstacleOne = () => {
    document.addEventListener("keydown", this.o1);
}
o1 = (event) => {
   
 }

 obstacleTwo = () => {
    document.addEventListener("keydown", this.o2);
}
o2 = (event) => {
   
    // if(event.keyCode === 39 ) {
    //     this.positionX-=5;
        
    //     }
 }




 
}

    


    let theMover = new TheMover();
    





