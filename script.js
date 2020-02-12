
class TheMover {
    constructor() {
        this.moverDom = this.getMoverDom();
        this.pressArrowleft();
        this.pressArrowRight();
        this.pressArrowDown()
        this.pressArrowUp();
        this.positionY = 0;
        this.positionX = 0;
    
    }

    getMoverDom() {
        return document.getElementById("mover");
    }
    
    pressArrowleft() {
        
        document.addEventListener("keydown", this.arrowLeft);
    }


    arrowLeft = (event) => {
        if(event.keyCode === 37) {

            this.positionX -=5;
            this.moverDom.style.left = `${this.positionX}px`;
            if(this.positionX === -5) {
                this.positionX = 0;
            }
          
        }
    }

    pressArrowRight() {
        
        document.addEventListener("keydown", this.arrowRight);
    }

    arrowRight = (event) => {
        if(event.keyCode === 39) {
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
    }
}

    pressArrowUp() {
    
        document.addEventListener("keydown", this.arrowUp);
    }
    
    arrowUp = () => {
        if(event.keyCode === 38) {
            this.positionY -=5;
            this.moverDom.style.top = `${this.positionY}px`;
            
            if(this.positionY === -5) {
                this.positionY = 0;
            }
        }

    }
}

    let theMover = new TheMover();





