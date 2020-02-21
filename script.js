console.log("start");

const DEFAULT_MOVE_INCREMENT = 2;

class Player {
  constructor() {
    this.domElement = document.getElementById("player");
    // here we store the initial position of the player
    this.top = 0;
    this.left = 0;
    this.container = document.getElementById("game")

    // here we call the function that sets the behaviour of our player
    this.setMovement();
  }

  setMovement() {
    // because we are interested in reacting to keyboard press on the window in general not on a specific DOM element, we will set an event listener on document
    // we must use bind so that "this" will refer (in the "movePlayer" method) to "Player"  object otherwise "this" would refer to "document" object because there is the context on which we added the event listener
    document.addEventListener("keydown", this.movePlayer);
  }

  movePlayer = event => {
    // event is the default parameter that it is passed to any callback function of an "addEventListener"
    // event is a complex object that contains information regarding the event that was trigger by browser
    // in this case the event is of type "keydown" but we need to react only to some type "keydown" event
    switch (event.key) {
      case "ArrowDown":
       if (this.top >= this.container.offsetHeight-15) {
        this.top.disabled = true;
       }
        this.top = this.top + DEFAULT_MOVE_INCREMENT;

        // we move the white div which is out player by changing it position
        // the payer is initial positions at top = 0 and left = 0
        // if we change this style attributes on the dom elements then we change the position in the window thus making the affect of moving a element
        this.domElement.style.top = this.top + "px";
        break;
      case "ArrowUp":
        if (this.top === 0) {
          this.top.disabled = true;
        }
        this.top = this.top - DEFAULT_MOVE_INCREMENT;
        this.domElement.style.top = this.top + "px";
        break;
      case "ArrowLeft":
        if (this.left === 0) {
          this.left.disabled = true;
        }
        this.left = this.left - DEFAULT_MOVE_INCREMENT;
        this.domElement.style.left = this.left + "px";
        break;
      case "ArrowRight":
        if (this.left >= this.container.offsetWidth-15) {
          this.left.disabled = true;
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
