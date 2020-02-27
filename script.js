console.log("start");

const DEFAULT_MOVE_INCREMENT = 2;

class Player {
  constructor() {
    this.playerBOX = document.getElementById("player");
    this.obstacles = document.querySelectorAll(".obstacle");
    // here we store the initial position of the player
    this.top = 0;
    this.left = 0;

    this.lives = 3;

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
          if (this.top < 286) {
            this.top = this.top + DEFAULT_MOVE_INCREMENT;
            this.playerBOX.style.top = this.top + "px";
            // we move the white div which is out player by changing it position
            // the payer is initial positions at top = 0 and left = 0
            // if we change this style attributes on the dom elements then we change the position in the window thus making the affect of moving a element
            if (this.playerHitObstacle()) {
              this.top = this.top - DEFAULT_MOVE_INCREMENT;
              this.playerBOX.style.top = this.top + "px";
            }
          }
          break;
        case "ArrowUp":
          if (this.top > 0) {
            this.top = this.top - DEFAULT_MOVE_INCREMENT;
            this.playerBOX.style.top = this.top + "px";
            if (this.playerHitObstacle()) {
              this.top = this.top + DEFAULT_MOVE_INCREMENT;
              this.playerBOX.style.top = this.top + "px";
            }
          }
          break;
        case "ArrowLeft":
          if (this.left > 0) {
            this.left = this.left - DEFAULT_MOVE_INCREMENT;
            this.playerBOX.style.left = this.left + "px";
            if (this.playerHitObstacle()) {
              this.left = this.left + DEFAULT_MOVE_INCREMENT;
              this.playerBOX.style.left = this.left + "px";
            }
          }
          break;
        case "ArrowRight":
          if (this.left < 486) {
            this.left = this.left + DEFAULT_MOVE_INCREMENT;
            this.playerBOX.style.left = this.left + "px";
            if (this.playerHitObstacle()) {
              this.left = this.left - DEFAULT_MOVE_INCREMENT;
              this.playerBOX.style.left = this.left + "px";
            }
          }
          break;
  
        default:
          break;
      }
    };

  playerHitObstacle() {
    let result = false;
    let lives = document.getElementById("lives");
    const playerCoords = this.playerBOX.getBoundingClientRect();
    this.obstacles.forEach(obstacol => {
      const obstCoords = obstacol.getBoundingClientRect();
      if (
        obstCoords.left <= playerCoords.right &&
        obstCoords.right >= playerCoords.left &&
        obstCoords.top <= playerCoords.bottom &&
        obstCoords.bottom >= playerCoords.top        
        ) {
        result = true;
        if (this.lives > 0) {
          lives.innerHTML = --this.lives;
        }
        if (this.lives === 0) {
          setTimeout(() => {
            this.top = 0;
            this.left = 0;
            this.lives = 3;
            lives.innerHTML = 3;
            this.playerBOX.style.top = this.top + "px";
            this.playerBOX.style.left = this.left + "px";
          }, 500);
        }
      }
    });
    return result;
  }
}

new Player();
