class Mover {
    constructor() {
        this.mover= document.getElementById("theBall");
        this.top =5;
        this.left = 5; 
        this.bottom = 5;
        this.moveDown();
        this.moveRight();
        this.moveUp();
        
    }

 moveDown(){
      document.addEventListener("keydown",this.movethebalDown.bind(this));
    }
    movethebalDown(event){
        if (event.key ==="ArrowDown"){
         this.top++;
         this.mover.style.top = this.top +"px";
        }
        
    } 
    moveRight() {
        document.addEventListener("keydown",this.movethebalRight.bind(this));
    }
    movethebalRight(event){
        if (event.key ==="ArrowRight"){
         this.left++;
         this.mover.style.left = this.left +"px";
        }
    } 
    moveUp() {
        document.addEventListener("keydown",this.movethebalUp.bind(this));
    }
    movethebalUp(event){
        if (event.key ==="ArrowUp"){
         this.top--;
         this.mover.style.top = this.top +"px";
        }
    } 
    moveLeft() {
        document.addEventListener("keydown",this.movethebalLeft.bind(this));
    }
    movethebalLeft(event){
        if (event.key ==="ArrowLeft"){
         this.left--;
         this.mover.style.left = this.left +"px";
        }
    } 
};

const player = new Mover();