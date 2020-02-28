class Game {
  constructor() {
    this.getTargetWhiteSquare();
    this.leftArrowEvent();
    this.topArrowEvent();
    this.rightArrowEvent();
    this.bottomArrowEvent();
    this.horizontal = 0;
    this.vertical = 0;
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
      this.horizontal -= 5;
      this.player.style.left = `${this.horizontal}px`;
      console.log(this.horizontal);
      if (this.horizontal > 600) {
        this.position = 0;
        this.player.style.left = 0;
      }
    }
  };

  topArrowEvent() {
    document.addEventListener("keydown", this.topArrow);
  }

  topArrow = () => {
    if (event.keyCode === 38) {
      this.vertical -= 5;
      this.player.style.top = `${this.vertical}px`;
      console.log(this.vertical);
      if (this.horizontal > 400) {
        this.position = 0;
        this.player.style.top = 0;
      }
    }
  };

  rightArrowEvent() {
    document.addEventListener("keydown", this.rightArrow);
  }

  rightArrow = () => {
    if (event.keyCode === 39) {
      this.horizontal += 5;
      this.player.style.left = `${this.horizontal}px`;
      console.log(this.horizontal);
      if (this.horizontal < 700) {
        this.position = 0;
        this.player.style.left = 0;
      }
    }
  };

  bottomArrowEvent() {
    document.addEventListener("keydown", this.bottomArrow);
  }

  bottomArrow = () => {
    if (event.keyCode === 40) {
      this.vertical += 5;
      this.player.style.top = `${this.vertical}px`;
      console.log(this.vertical);
      if (this.horizontal < 700) {
        this.position = 0;
        this.player.style.left = 0;
      }
    }
  };
}

const x = new Game();
