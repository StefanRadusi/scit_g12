const DEFAULT_MOVE_INCREMENT = 2;

class Player {
  constructor() {
    this.game = document.getElementById("game");
    this.domElement = document.getElementById("player");
    this.livesElement = document.getElementById("lives");
    this.obstacle = document.querySelectorAll(".obstacle");
    
    this.lives = 3;
    this.top = 0;
    this.left = 0;

    this.livesElement.innerText = this.lives;
  
    this.setMovement();
  }

  setMovement() {
   
    document.addEventListener("keydown", this.movePlayer);
  }

  playerHitObstacle(rightOffset, leftOffset, bottomOffset, topOffset) {

    let container1 = this.domElement.getBoundingClientRect();

    for (let obstacle of this.obstacle) {
      let container2 = obstacle.getBoundingClientRect();

      let hitObstacle = !(
        container1.bottom + bottomOffset < container2.top ||
        container1.top - topOffset > container2.bottom ||
        container1.left - leftOffset > container2.right ||
        container1.right + rightOffset < container2.left
      );

      if (hitObstacle)
        return true;
    }
    return false;
  }

  resetGame() {
    this.top = 0;
    this.left = 0;
    this.domElement.style.top = "0";
    this.domElement.style.left = "0";

    if (this.lives === 1) {
      alert("You lost. Back to start!!");

      this.lives = 3;

    } else {

      this.lives -= 1;
    }
    this.livesElement.innerText = this.lives;
  }

  movePlayer = event => {
    
    switch (event.key) {

      case "ArrowDown":
        if (this.top > this.game.offsetHeight - this.domElement.offsetHeight) {
          break;

        }

        if (this.playerHitObstacle(DEFAULT_MOVE_INCREMENT, 0, 0, 0)) {
          this.resetGame();
          break;
        }
        this.top = this.top + DEFAULT_MOVE_INCREMENT;
        this.domElement.style.top = this.top + "px";
        break;

      case "ArrowUp":
        if (this.top === 0) {
          break;

        }

        if (this.playerHitObstacle(0, DEFAULT_MOVE_INCREMENT, 0, 0)) {
          this.resetGame();
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
          this.resetGame();
          break;
        }

        this.left = this.left - DEFAULT_MOVE_INCREMENT;
        this.domElement.style.left = this.left + "px";
        break;

      case "ArrowRight":
        if (this.left > this.game.offsetWidth - this.domElement.offsetWidth) {
          break;

        }
        if (this.playerHitObstacle(0, 0, 0, DEFAULT_MOVE_INCREMENT)) {
          this.resetGame();
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