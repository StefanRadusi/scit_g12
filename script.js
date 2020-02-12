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
      console.log(this.positionX);
    }
  };

  pressUpArrow() {
    document.addEventListener("keydown", this.upArrow);
  }

  upArrow = event => {
    if (event.keyCode === 38) {
      this.positionY -= 1;
      this.wDot.style.top = `${this.positionY}px`;
    }
  };

  pressRightArrow() {
    document.addEventListener("keydown", this.rightArrow);
  }

  rightArrow = (event, pixel) => {
    if (event.keyCode === 39) {
      this.positionX += 1;
      this.wDot.style.left = `${this.positionX}px`;
    }
  };

  pressDownArrow() {
    document.addEventListener("keydown", this.downArrow);
  }

  downArrow = (event, pixel) => {
    if (event.keyCode === 40) {
      this.positionY += 1;
      this.wDot.style.top = `${this.positionY}px`;
    }
  };
}

const startGame = new TheMover();
