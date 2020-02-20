console.log("start")

const DEFAULT_MOVE_INCREMENT = 2 ;


class Player {
  constructor(){
    this.domElement = document.getElementById("player");
    this.game = document.getElementById("game")
    this.obstacle = document.getElementsByClassName("obstacle")
    this.top = 0;
    this.left = 0;
    this.lives = 3;
    this.setMovement();
    
    
    
  }
  
    setMovement() {
      document.addEventListener("keydown", this.movePlayer);
    }

    
    movePlayer = event => {

      switch(event.key) {
        case "ArrowDown" :
          
          if(!this.playerHitObstacle()) {

          
         
            if(this.top >= this.game.offsetHeight -13) {
           
            this.top = this.top - DEFAULT_MOVE_INCREMENT;
         
          }
            this.domElement.style.top = this.top + "px";
           
          this.top = this.top + DEFAULT_MOVE_INCREMENT;
          }
            break;
          
        case "ArrowUp":
          if(!this.playerHitObstacle()) {

          if(this.top === 0){
            this.top = this.top + DEFAULT_MOVE_INCREMENT;
          }

          this.top = this.top - DEFAULT_MOVE_INCREMENT;
          this.domElement.style.top = this.top + "px";
        }
            break;
        
        case "ArrowLeft":
         
          if(this.left === 0) {

            this.left = this.left + DEFAULT_MOVE_INCREMENT;
          }
        
             
            this.left = this.left - DEFAULT_MOVE_INCREMENT;
          this.domElement.style.left = this.left + "px";     
        
            break;
            
        case "ArrowRight":
          
          if(!this.playerHitObstacle()) {

            
                    
            if(this.left >= this.game.offsetWidth -13) {
             
              
              this.left = this.left - DEFAULT_MOVE_INCREMENT;
             
            } 
          
            this.domElement.style.left = this.left + "px"; 
            this.left = this.left + DEFAULT_MOVE_INCREMENT;
          }
          
            break;
        
            default: 
              break;

        }
      
      }
      
      playerHitObstacle =() => {
      
        for(const obstacle of document.getElementsByClassName('obstacle')) {
          console.log(this.left, obstacle.offsetLeft, obstacle.offsetWidth);
          if(
            this.left + this.domElement.offsetWidth >= obstacle.offsetLeft &&
             this.left <= obstacle.offsetLeft + obstacle.offsetWidth &&
             this.top >= obstacle.offsetTop && 
             this.top <= obstacle.offsetTop + obstacle.offsetHeight
             ) {
           
            return true;
          
          }

      }
      return false;
    }     


    liveDecrease() {
      
    }
       
  }
        
      
    

   let player = new Player()
   










