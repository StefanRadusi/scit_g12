console.log("start");

const DEFAULT_MOVE_INCREMENT = 2;

class Player {
  constructor() {
    this.boardElem = document.getElementById("game");
    this.domElement = document.getElementById("player");
    this.livesElem = document.getElementById("lives");
    this.obstacleElems = document.querySelectorAll(".obstacle");
    // here we store the initial position of the player
    this.lives = 3;
    this.top = 0;
    this.left = 0;

    this.livesElem.innerText = this.lives;
    // here we call the function that sets the behaviour of our player
    this.setMovement();
  }

  setMovement() {
    // because we are interested in reacting to keyboard press on the window in general not on a specific DOM element, we will set an event listener on document
    // we must use bind so that "this" will refer (in the "movePlayer" method) to "Player"  object otherwise "this" would refer to "document" object because there is the context on which we added the event listener
    document.addEventListener("keydown", this.movePlayer);
  }

  playerHitObstacle(bottomOffset, topOffset, leftOffset, rightOffset) {
    let rect1 = this.domElement.getBoundingClientRect();
    for (let obstacle of this.obstacleElems) {
      let rect2 = obstacle.getBoundingClientRect();
      let hitsObstacle = !(
        rect1.bottom + bottomOffset < rect2.top ||
        rect1.top - topOffset > rect2.bottom ||
        rect1.left - leftOffset > rect2.right ||
        rect1.right + rightOffset < rect2.left
      );
      if (hitsObstacle)
        return true;
    }
    return false;
  }

  resetBoard() {
    this.top = 0;
    this.left = 0;
    this.domElement.style.top = "0";
    this.domElement.style.left = "0";

    if (this.lives === 1) {
      alert("You lose. Game reset to default!!");
      this.lives = 3;
    } else {
      this.lives -= 1;
    }
    this.livesElem.innerText = this.lives;
  }

  movePlayer = event => {
    // event is the default parameter that it is passed to any callback function of an "addEventListener"
    // event is a complex object that contains information regarding the event that was trigger by browser
    // in this case the event is of type "keydown" but we need to react only to some type "keydown" event
    switch (event.key) {
      case "ArrowDown":
        if (this.top > this.boardElem.offsetHeight - this.domElement.offsetHeight) {
          break;
        }
        if (this.playerHitObstacle(DEFAULT_MOVE_INCREMENT, 0, 0, 0)) {
          this.resetBoard();
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
          break;
        }
        if (this.playerHitObstacle(0, DEFAULT_MOVE_INCREMENT, 0, 0)) {
          this.resetBoard();
          break;
        }
        this.top = this.top - DEFAULT_MOVE_INCREMENT;
        this.domElement.style.top = this.top + "px";
        break;
      case "ArrowLeft":
        if (this.left === 0) {
          break;
        }
        if (this.playerHitObstacle(0, 0, DEFAULT_MOVE_INCREMENT, 0)) {
          this.resetBoard();
          break;
        }
        this.left = this.left - DEFAULT_MOVE_INCREMENT;
        this.domElement.style.left = this.left + "px";
        break;
      case "ArrowRight":
        if (this.left > this.boardElem.offsetWidth - this.domElement.offsetWidth) {
          break;
        }
        if (this.playerHitObstacle(0, 0, 0, DEFAULT_MOVE_INCREMENT)) {
          this.resetBoard();
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
