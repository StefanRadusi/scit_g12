class Game {
  constructor() {
    this.getTargetObstacle();
    this.getTargetWhiteSquare();
    this.leftArrowEvent();
    this.topArrowEvent();
    this.rightArrowEvent();
    this.bottomArrowEvent();
    this.horizontal = 0;
    this.vertical = 0;
    this.horizontalMAX = 580;
    this.verticalMAX = 380;
    this.crashObstacle();
  }

  getTargetObstacle() {
    const obstacle = document.getElementsByClassName("blueObs");
    this.obstacle = obstacle;
  }

  getTargetWhiteSquare() {
    const player = document.getElementById("whiteSquare");
    this.player = player;
    this.player.style.top = 0;
  }

  leftArrowEvent() {
    document.addEventListener("keydown", this.leftArrow);
  }

  leftArrow = () => {
    if (event.keyCode === 37) {
      if (this.horizontal > 0) {
        this.horizontal -= 10;
        this.player.style.left = `${this.horizontal}px`;
      }
      console.log(this.horizontal);
    }
  };

  topArrowEvent() {
    document.addEventListener("keydown", this.topArrow);
  }

  topArrow = () => {
    if (event.keyCode === 38) {
      if (this.vertical > 0) {
        this.vertical -= 10;
        this.player.style.top = `${this.vertical}px`;
      }
      console.log(this.vertical);
    }
  };

  rightArrowEvent() {
    document.addEventListener("keydown", this.rightArrow);
  }

  rightArrow = () => {
    if (event.keyCode === 39) {
      if (this.horizontal < this.horizontalMAX) {
        this.horizontal += 10;
        this.player.style.left = `${this.horizontal}px`;
      }
      console.log(this.horizontal);
    }
  };

  bottomArrowEvent() {
    document.addEventListener("keydown", this.bottomArrow);
  }

  bottomArrow = () => {
    if (event.keyCode === 40) {
      if (this.vertical < this.verticalMAX) {
        this.vertical += 10;
        this.player.style.top = `${this.vertical}px`;
      }
      console.log(this.vertical);
    }
  };

  crashObstacle() {
    let LEFT = obstacle.offsetLeft;
    let RIGHT = obstacle.offsetRight;
    let TOP = obstacle.offsetTop;
    let BOTTOM = obstacle.offsetBottom;
  }
}

const x = new Game();
