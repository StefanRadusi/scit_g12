console.log("start");

const DEFAULT_MOVE_INCREMENT = 2;

class Player {
  constructor() {
    this.domElement = document.getElementById("player");
    // here we store the initial position of the player
    this.top = 0;
    this.left = 0;
    this.lives = document.getElementById("lives").innerText;

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
        this.top = this.top + DEFAULT_MOVE_INCREMENT;

        // we move the white div which is out player by changing it position
        // the payer is initial positions at top = 0 and left = 0
        // if we change this style attributes on the dom elements then we change the position in the window thus making the affect of moving a element
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
    this.keepInside();
  };
  keepInside() {
    let player = this.domElement;
    let top = this.top;
    let left = this.left;

    if (left > 484 && top < 84) {
      alert("YOU WON!!!");
      this.positionReset();
    }

    if (left < 0) {
      player.style.left = 0 + "px";
      this.left = 0;
    }

    if (top < 0) {

      player.style.top = 0 + "px";
      this.top = 0;
    }
    if (top > 284) {

      player.style.top = 284 + "px";
      this.top = 284;
    }

    this.handleObstacles(top, left);
  }
  handleObstacles(top, left) {

    if (left > 84 && left < 116 && top < 100) { //obstacle 1
      this.livesCounter();
    }
    if (left > 134 && left < 166 && top > 84) { //obstacle 2
      this.livesCounter();
    }
    if (left > 184 && left < 216 && top < 220) { //obstacle 3
      this.livesCounter();
    }
    if (left > 264 && left < 296 && top > 204) { //obstacle 4
      this.livesCounter();
    }
    if (left > 334 && left < 366 && top < 260) { //obstacle 5
      this.livesCounter();
    }
    if (left > 394 && left < 426 && top > 184) { //obstacle 6
      this.livesCounter();
    }
    if (left > 414 && left < 446 && top < 150) { //obstacle 7
      this.livesCounter();
    }
    if (left > 468 && top > 84) { //obstacle 8
      this.livesCounter();
    }

  }
  livesCounter() {
    let lives = this.lives;
    lives = this.lives - 1;
    this.lives = lives;
    document.getElementById("lives").innerText = lives;
    alert("YOU CRASHED!!!")
    this.positionReset();
    this.handleLives(lives);
    return lives;
  }
  positionReset() {
    player.style.left = 0 + "px";
    player.style.top = 0 + "px";

    this.left = 0;
    this.top = 0;
  }
  handleLives(lives) {
    console.log(lives);
    if (lives < 0) {
      alert("GAME OVER");
      document.getElementById("lives").innerText = 3;
      this.lives = 3;
    }
  }
}

new Player();
