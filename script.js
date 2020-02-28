class Game {
  constructor() {
    this.getTargetWhiteSquare();
    this.leftArrowEvent();
    this.topArrowEvent();
    this.rightArrowEvent();
    this.bottomArrowEvent();
    this.horizontal = 0;
    this.vertical = 0;
    this.horizontalMAX = 580;
    this.verticalMAX = 380;
  }

  getTargetWhiteSquare() {
    const player = document.getElementById("whiteSquare");
    this.player = player;
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
}

const x = new Game();
