console.log("start");

const DEFAULT_MOVE_INCREMENT = 2;

class Player {
  constructor() {
    this.domElement = document.getElementById("player");
    this.obstacles = document.getElementsByClassName("obstacle");

    // here we store the initial position of the player
    this.top = 0;
    this.left = 0;

    // here we call the function that sets the behaviour of our player
    this.setMovement();
  }

  setMovement() {
    // because we are interested in reacting to keyboard press on the window in general not on a specific DOM element, we will set an event listener on document
    // we must use bind so that "this" will refer (in the "movePlayer" method) to "Player"  object otherwise "this" would refer to "document" object because there is the context on which we added the event listener
    document.addEventListener("keydown", this.movePlayer.bind(this));
  }

  movePlayer(event) {
    // event is the default parameter that it is passed to any callback function of an "addEventListener"
    // event is a complex object that contains information regarding the event that was trigger by browser
    // in this case the event is of type "keydown" but we need to react only to some type "keydown" event
    switch (event.key) {
      case "ArrowDown":
        this.top = this.top + DEFAULT_MOVE_INCREMENT;
        this.domElement.style.top = this.top + "px";
        break;
      case "ArrowUp":
        this.top = this.top - DEFAULT_MOVE_INCREMENT;
        this.domElement.style.top = this.top + "px";
        break;
      case "ArrowLeft":
        this.left = this.left - DEFAULT_MOVE_INCREMENT;
        this.domElement.style.left = this.left + "px";
        break;
      case "ArrowRight":
        this.left = this.left + DEFAULT_MOVE_INCREMENT;
        this.domElement.style.left = this.left + "px";
        break;

      default:
        break;
    }

    this.checkIfHitObstacle();
  }

  checkIfHitObstacle() {
    for (const obstacle of this.obstacles) {
      const { left: obstacleX } = obstacle.getBoundingClientRect();
      console.log(obstacleX);
    }
  }
}

new Player();
