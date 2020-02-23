console.log("start");

const DEFAULT_MOVE_INCREMENT = 2;

class Player {
  constructor() {
    this.domElement = document.getElementById("player");
    this.domElementHeight = this.domElement.offsetHeight;
    this.domElementWidth = this.domElement.offsetWidth
    this.container = document.getElementById ("game");
    this.containerHeight = this.container.offsetHeight;
    this.containerWidth = this.container.offsetWidth;
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
    // event is the default parameter that it is passed to any callback function of an "addEventListener"
    // event is a complex object that contains information regarding the event that was trigger by browser
    // in this case the event is of type "keydown" but we need to react only to some type "keydown" event
    switch (event.key) {
      case "ArrowDown":
        if ((this.top + DEFAULT_MOVE_INCREMENT) <= (this.containerHeight - this.domElementHeight)) {
        this.top = this.top + DEFAULT_MOVE_INCREMENT;   
        this.domElement.style.top = this.top + "px";
        }
        break;
      case "ArrowUp":
        if ((this.top - DEFAULT_MOVE_INCREMENT) >= 0) {
        this.top = this.top - DEFAULT_MOVE_INCREMENT;
        this.domElement.style.top = this.top + "px";
        }
        break;
      case "ArrowLeft":
        if ((this.left - DEFAULT_MOVE_INCREMENT) >= 0) {
        this.left = this.left - DEFAULT_MOVE_INCREMENT;
        this.domElement.style.left = this.left + "px";
        }
        break;
      case "ArrowRight":
        if ((this.left + DEFAULT_MOVE_INCREMENT) <= (this.containerWidth - this.domElementWidth)) {
        this.left = this.left + DEFAULT_MOVE_INCREMENT;
        this.domElement.style.left = this.left + "px";
        }  
        break;
      default:
        break;
    }
  };
}

new Player();
