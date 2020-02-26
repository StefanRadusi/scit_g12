console.log("start");

const DEFAULT_MOVE_INCREMENT = 2;

class Player {
  constructor() {
    this.domElement = document.getElementById("player");
    this.game = document.getElementById("game");
    this.obstacles = document.getElementsByClassName("obstacle");
    this.lives = document.getElementById("lives");
    this.totalLives = 3;
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
    // event is the default parameter that it is passed to any callback function of an "addEventListener"
    // event is a complex object that contains information regarding the event that was trigger by browser
    // in this case the event is of type "keydown" but we need to react only to some type "keydown" event
    switch (event.key) {
      case "ArrowDown":
        if (this.top > this.game.offsetHeight - this.domElement.offsetHeight) {
          break;
        }
        this.top = this.top + DEFAULT_MOVE_INCREMENT;

        // we move the white div which is out player by changing it position
        // the payer is initial positions at top = 0 and left = 0
        // if we change this style attributes on the dom elements then we change the position in the window thus making the affect of moving a element
        this.domElement.style.top = this.top + "px";
        break;

      case "ArrowUp":
        if (this.top === 0) {
          this.totalLives--;
          this.lives.innerHTML = this.totalLives;
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
        if (this.left > this.game.offsetWidth - this.domElement.offsetWidth) {
          break;
        }
        this.left = this.left + DEFAULT_MOVE_INCREMENT;
        this.domElement.style.left = this.left + "px";
        break;

      default:
        break;
    }
  };

  playerHitObstacle() {
    for (const obstacle of this.obstacles) {
      if (
        this.domElement.style.offsetLeft === obstacle.style.offsetLeft &&
        this.domElement.style.offsetTop === obstacle.style.offsetTop
      ) {
        console.log("-1 life");
      }
    }
  }
}

new Player();
