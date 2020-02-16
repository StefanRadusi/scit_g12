class Mover {
    constructor (){
        this.mover = document.getElementById("player");
        this.moverInitialPosition();
        this.moveDown();
        this.moveUp();
        this.moveRight();
        this.moveLeft();
        
        
    }
    moverInitialPosition(){
        
        this.mover.style.position = "absolute";
        this.mover.style.left = "5px";
        this.mover.style.top = "5px";
        this.top = 5;
        this.left = 5;
    }

    moveDown(){
        document.addEventListener("keydown", this.handleMoveDown.bind(this));
    }

    handleMoveDown(event){
        if (this.top < 480){
            if (event.key === "ArrowDown"){
            this.top++;
            this.mover.style.top = this.top + 'px';
            }
        }
    }
    moveUp(){
        document.addEventListener("keydown", this.handleMoveUp.bind(this));
    }
    handleMoveUp(event){
        if (event.key === "ArrowUp"){
            if (this.top-1 >= 0 ){
            this.top--;
            this.mover.style.top = this.top + 'px';
            }
        }
    }
    moveRight(){
        document.addEventListener("keydown", this.handleMoveRight.bind(this));
    }
    handleMoveRight(event){
        if (this.left < 880){
            if (event.key === "ArrowRight" && "ArrowDown"){
                this.left++;
                this.mover.style.left = this.left + 'px';
            
            }
        }
    }
    moveLeft(){
        document.addEventListener("keydown", this.handleMoveLeft.bind(this));
    }
    handleMoveLeft(event){
        if (this.left-1 >= 0){
            if (event.key === "ArrowLeft"){
                this.left--;
                this.mover.style.left = this.left + 'px';
            }
        }
    }
}

const Player = new Mover();