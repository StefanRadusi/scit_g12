console.log("start")

const DEFAULT_MOVE_INCREMENT = 2;

class Player {
  constructor(){
    this.domElement = document.getElementById("player");
    this.top = 0;
    this.left = 0;
    this.setMovement();
    
    
  }
  
    setMovement() {
      document.addEventListener("keydown", this.movePlayer);
    }

    theGame() {
      let game = document.getElementById("player");
    
    }

    movePlayer = event => {

      switch(event.key) {
        case "ArrowDown" :
        // this.theGame()

          if(this.top >= 288) {
            this.top = this.top - DEFAULT_MOVE_INCREMENT;
         
          }
            this.domElement.style.top = this.top + "px";
          this.top = this.top + DEFAULT_MOVE_INCREMENT;
        
            break;
          
        case "ArrowUp":
          if(this.top === 0){
            this.top = this.top + DEFAULT_MOVE_INCREMENT;
          }

          this.top = this.top - DEFAULT_MOVE_INCREMENT;
          this.domElement.style.top = this.top + "px";
          
            break;
        
        case "ArrowLeft":
          if(this.left === 0) {
            this.left = this.left + DEFAULT_MOVE_INCREMENT;
          }
            this.left = this.left - DEFAULT_MOVE_INCREMENT;
          this.domElement.style.left = this.left + "px";     
            break;
            
        case "ArrowRight":
         this.theGame()
            
            if(this.left >= 487) {
              this.left = this.left - DEFAULT_MOVE_INCREMENT;
              
            } 
            this.domElement.style.left = this.left + "px"; 
            this.left = this.left + DEFAULT_MOVE_INCREMENT;
        
            break;
         

         

            default: 
              break;

      }
      
      }
      
    }

   let player = new Player()










