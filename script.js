console.log("start");

const DEFAULT_MOVE_INCREMENT = 2;

class Player {
  constructor() {
    this.domElement = document.getElementById("player");
    // here we store the initial position of the player
    this.top = 0;
    this.left = 0;

    // here we call the function that sets the behaviour of our player
    this.setMovement();
  }

  setMovement() {
    // because we are interested in reacting to keyboard press on the window in general not on a specific DOM element, we will set an event listener on document
    // we must use bind so that "this" will refer (in the "movePlayer" method) to "Player"  object otherwise "this" would refer to "document" object because there is the context on which we added the event listener
    document.addEventListener("keydown", this.movePlayer);
  }

  movePlayer = event => {
    switch (event.key) {
      case "ArrowDown":
        

        // we move the white div which is out player by changing it position
        // the player is initial positions at top = 0 and left = 0
        // if we change this style attributes on the dom elements then we change the position in the window thus making the affect of moving a element
        
        this.gameContainer = document.getElementById("game");
        if (this.top > this.gameContainer.offsetHeight - this.domElement.offsetHeight) {
          break;
        }
        this.top = this.top + DEFAULT_MOVE_INCREMENT;
        this.domElement.style.top = this.top + "px";
        break;
      case "ArrowUp":
        if (this.top === 0) {
          break;
        }
          this.top = this.top - DEFAULT_MOVE_INCREMENT;
          this.domElement.style.top = this.top + "px";
          break;
      case "ArrowLeft":
        if (this.left === 0) {
          break;
        }
        this.left = this.left - DEFAULT_MOVE_INCREMENT;
        this.domElement.style.left = this.left + "px";
        break;
      case "ArrowRight":
        if (this.left > this.gameContainer.offsetWidth - this.domElement.offsetWidth) {
          break;
        }
        this.left = this.left + DEFAULT_MOVE_INCREMENT;
        this.domElement.style.left = this.left + "px";
        break;
      default:
        break;
    }
  };

}

new Player();
