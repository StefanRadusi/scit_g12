class TheMover {
  constructor() {
    this.getDot();
    this.pressLeftArrow();
    this.pressUpArrow();
    this.pressRightArrow();
    this.pressDownArrow();
    this.positionX = 0;
    this.positionY = 0;
  }

  getDot() {
    const whiteDot = document.getElementById("whiteDot");
    this.wDot = whiteDot;
  }

  pressLeftArrow() {
    document.addEventListener("keydown", this.leftArrow);
  }

  leftArrow = event => {
    console.log(event);
    if (event.keyCode === 37) {
      this.positionX -= 1;
      this.wDot.style.left = `${this.positionX}px`;
      if (this.positionX === -1) {
        this.positionX = 0;
        this.wDot.style.left = 0;
      }
    }
  };

  pressUpArrow() {
    document.addEventListener("keydown", this.upArrow);
  }

  upArrow = event => {
    if (event.keyCode === 38) {
      this.positionY -= 1;
      this.wDot.style.top = `${this.positionY}px`;
      if (this.positionY === -1) {
        this.positionY = 0;
        this.wDot.style.top = 0;
      }
    }
  };

  pressRightArrow() {
    document.addEventListener("keydown", this.rightArrow);
  }

  rightArrow = event => {
    if (event.keyCode === 39) {
      this.positionX += 1;
      this.wDot.style.left = `${this.positionX}px`;
      if (this.positionX === 680) {
        this.positionX--;
        this.wDot.style.left = 680;
      }
    }
  };

  pressDownArrow() {
    document.addEventListener("keydown", this.downArrow);
  }

  downArrow = event => {
    if (event.keyCode === 40) {
      this.positionY += 1;
      this.wDot.style.top = `${this.positionY}px`;
      if (this.positionY === 380) {
        this.positionY--;
        this.wDot.style.top = 380;
      }
    }
  };
}

const startGame = new TheMover();
