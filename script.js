class Mover {
    constructor (){
        this.mover = document.getElementById("player");
        this.container = document.getElementById("game-container");
        this.lives = 3;
        this.currentMessage = document.getElementById("lives");
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
        this.lives=3;
        this.currentMessage.innerText='You have 3 lives left';
    }

    moveDown(){
        document.addEventListener("keydown", this.handleMoveDown.bind(this));
    }

    handleMoveDown(event){
        if (this.top < this.container.offsetHeight - this.mover.offsetHeight && this.playerHitDownObstacles()){
            if (event.key === "ArrowDown"){
            this.top += 3;
            this.mover.style.top = this.top + 'px';
            }
        }
    }
    moveUp(){
        document.addEventListener("keydown", this.handleMoveUp.bind(this));
    }
    handleMoveUp(event){
        if (this.top>= 1 && this.playerHitUpObstacles()){
            if (event.key === "ArrowUp"){
                this.top -= 3 ;
                this.mover.style.top = this.top + 'px';
            }
        }
    }
    moveRight(){
        document.addEventListener("keydown", this.handleMoveRight.bind(this));
    }
    handleMoveRight(event){
        //first condition = the mover left position is smaller than container positions
        //second condition = if the mover hit the obstacle 
        if (this.left < this.container.offsetWidth - this.mover.offsetWidth && this.playerHitRightObstacles()){
            if (event.key === "ArrowRight"){
                this.left += 3;
                this.mover.style.left = this.left + 'px';
                
            }
        }
    }
    moveLeft(){
        document.addEventListener("keydown", this.handleMoveLeft.bind(this));
    }
    handleMoveLeft(event){
        if (this.left>= 1 && this.playerHitLeftObstacles()){
            if (event.key === "ArrowLeft"){
                this.left -=3;
                this.mover.style.left = this.left + 'px';
            }
        }
    }
    // if the mover hit the obstacle will return false otherwise will return true
    playerHitRightObstacles(){
        const obstacles = document.getElementsByClassName("obstacle");
        const currentRightObst=this.currentRightObstacle()
        for (const obstacle of obstacles){
            if (obstacle === currentRightObst){
                const obTop = obstacle.offsetTop;
                const obLeft = obstacle.offsetLeft;
                const obHeight = obstacle.offsetHeight;
                const obWidth = obstacle.offsetWidth;

                // condition to verify if the obstacle position is at the top or at the buttom
                if (obTop === 0){ //obstacles are at the top of the container
                    if (this.left >= obLeft - this.mover.offsetWidth && 
                        this.top <= obTop + obHeight) {
                            this.updateMessage();
                            return false;
                    }
                } else {//obstacles are at the buttom of the container
                    if (this.left >= obLeft - this.mover.offsetWidth && this.top + this.mover.offsetHeight>= obTop){
                        this.updateMessage();
                        return false;
                    }
                }
                
            }   
        }
        return true;
    }
    playerHitLeftObstacles(){
        const obstacles = document.getElementsByClassName("obstacle");
        const currentLeftObst=this.currentLeftObstacle()
        for (const obstacle of obstacles){
            if (obstacle === currentLeftObst){
                const obTop = obstacle.offsetTop;
                const obLeft = obstacle.offsetLeft;
                const obHeight = obstacle.offsetHeight;
                const obWidth = obstacle.offsetWidth;

                // condition to verify if the obstacle position is at the top or at the buttom
                if (obTop === 0){ //obstacles are at the top of the container
                    if (this.left <= obLeft + obWidth && 
                        this.top <= obTop + obHeight) {
                            this.updateMessage();
                            return false;
                    }
                } else {//obstacles are at the buttom of the container
                    if (this.left <= obLeft + obWidth && this.top + this.mover.offsetHeight > obTop){
                        this.updateMessage();
                        return false;
                    }
                }
                
            }   
        }
        return true;
    }
    playerHitUpObstacles(){
        const obstacles = document.getElementsByClassName("obstacle");
        const currentUpObst=this.currentUpObstacle()
        for (const obstacle of obstacles){
            if (obstacle === currentUpObst){
                const obTop = obstacle.offsetTop;
                const obHeight = obstacle.offsetHeight;

                if (this.top <= obTop + obHeight) {
                    this.updateMessage();
                    return false; 
                }
            }
                
        }   
        return true;
    }

    playerHitDownObstacles(){
        const obstacles = document.getElementsByClassName("obstacle");
        const currentDownObst=this.currentDownObstacle()
        for (const obstacle of obstacles){
            if (obstacle === currentDownObst){
                const obTop = obstacle.offsetTop;
                const obLeft = obstacle.offsetLeft;
                const obHeight = obstacle.offsetHeight;
                const obWidth = obstacle.offsetWidth;

                if (this.top + this.mover.offsetHeight >= obTop) {
                    this.updateMessage();
                    return false;
                }
            }
                
        }   
        return true;
    }

    //returns the nearest obstacle
    currentRightObstacle(){
        const obstacles = document.getElementsByClassName("obstacle");
        for ( const obstacle of obstacles){
            if (this.left < obstacle.offsetLeft){
                return obstacle;
            }
        }
        return false;
    }
    currentLeftObstacle(){
        const obstacles = document.getElementsByClassName("obstacle");
        for ( let i=obstacles.length-1; i>=0;i--){
            if (this.left > obstacles[i].offsetLeft){
                return obstacles[i];
            }
        }
        return false;
    }
    
    currentUpObstacle(){
        const obstacles = document.getElementsByClassName("obstacle");
        for ( const obstacle of obstacles){
            if (this.left >= obstacle.offsetLeft - this.mover.offsetWidth && //between 100 
                 this.left <= obstacle.offsetLeft + obstacle.offsetWidth &&//and 120 for first obj
                 this.top > obstacle.offsetTop) { // for obstacles at the top
                return obstacle;
            }
        }
        return false;
    }

    currentDownObstacle(){
        const obstacles = document.getElementsByClassName("obstacle");
        for ( const obstacle of obstacles){
            if (this.left >= obstacle.offsetLeft - this.mover.offsetWidth &&
                this.left <= obstacle.offsetLeft + obstacle.offsetWidth &&
                 this.top <obstacle.offsetTop) { // for obstacles at the bottom
                return obstacle;
            }
        }
        return false;
    }
    updateMessage(){
        
        const newMessage =this.currentMessage.innerText.replace(this.lives,--this.lives);
        this.currentMessage.innerText = newMessage;
        if (this.lives == 0){
            this.moverInitialPosition();
        }

    }
    
}

const hoverObj = new Mover();