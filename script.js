console.log("start");

const DEFAULT_MOVE_INCREMENT = 15;

class Player {
  constructor() {
    this.domElement = document.getElementById("player");
    this.obstacles = document.querySelectorAll(".obstacle");
    this.gameContainer = document.getElementById("game");
    this.alienShip = document.getElementById("transport");

    this.stateChecker = 0;
    this.top = 0;
    this.left = 0;

    this.soundTrack();
    this.theMovingObstacle();
    this.createLivesContainer();
    this.setMovement();
  }

  soundTrack() {
    const soundTrack = document.createElement("audio");
    soundTrack.style.display = "none";
    soundTrack.src = "./scit_g12/The X Files theme.mp3";
    soundTrack.autoplay = true;
    soundTrack.loop = true;
    document.body.appendChild(soundTrack);
  }

  setMovement() {
    document.addEventListener("keydown", this.movePlayer);
  }

  movePlayer = (event, state) => {
    const lives = document.getElementById("lives");

    this.state = this.stateChecker;
    console.log(this.state);

    this.handleObstacles();
    this.handleWin(state);

    if (this.state !== 1 && lives.innerHTML > 0) {
      switch (event.key) {
        case "ArrowDown":
          if (this.top < 284) {
            this.top = this.top + DEFAULT_MOVE_INCREMENT;
            this.domElement.style.top = this.top + "px";
          }
          break;
        case "ArrowUp":
          if (this.top > 0) {
            this.top = this.top - DEFAULT_MOVE_INCREMENT;
            this.domElement.style.top = this.top + "px";
          }
          break;
        case "ArrowLeft":
          if (this.left > 0) {
            this.left = this.left - DEFAULT_MOVE_INCREMENT;
            this.domElement.style.left = this.left + "px";
          }
          break;
        case "ArrowRight":
          if (this.left < 484) {
            this.left = this.left + DEFAULT_MOVE_INCREMENT;
            this.domElement.style.left = this.left + "px";
          }
          break;

        default:
          break;
      }
    }
  };

  handleObstacles() {
    const player = this.domElement.getBoundingClientRect();

    this.obstacles.forEach((obstacle) => {
      const theObstacles = obstacle.getBoundingClientRect();
      if (
        theObstacles.left <= player.right &&
        theObstacles.right >= player.left &&
        theObstacles.top <= player.bottom &&
        theObstacles.bottom >= player.top
      ) {
        this.handleLostLives();
      }
    });
  }
  handleWin(state) {
    if (this.top < 36 && this.left > 460) {
      let lives = document.querySelectorAll(".title");
      lives.forEach((element) => {
        element.innerHTML = null;
      });
      this.stateChecker = 1;
      this.gameContainer.innerHTML = "You win HUMAN !";
      this.gameContainer.id = "win";
      this.resetButton();
      this.yodaImgLayer();
      this.stateCheck(this.stateChecker);
    }
  }

  yodaImgLayer() {
    const reset = document.getElementById("reset");
    const layer = document.createElement("img");
    layer.id = "babyYoda";
    layer.src = "./scit_g12/babyYoda.png";
    this.gameContainer.appendChild(layer);
  }

  stateCheck(state) {
    return state;
  }

  handleLostLives() {
    const heart3 = document.getElementById("heart3");
    const heart2 = document.getElementById("heart2");
    const heart1 = document.getElementById("heart1");

    const lives = document.getElementById("lives");
    this.top = 0;
    this.left = 0;
    this.domElement.style.top = this.top + "px";
    this.domElement.style.left = this.left + "px";
    if (lives.innerHTML) {
      lives.innerHTML = lives.innerHTML - 1;
    }
    if (lives.innerHTML === "2") {
      heart3.classList.add("heartKiller");
    } else if (lives.innerHTML === "1") {
      heart2.classList.add("heartKiller");
    } else if (lives.innerHTML === "0") {
      heart1.classList.add("heartKiller");
    }
    if (lives.innerHTML === "0" && this.stateChecker !== 1) {
      this.handleDefeat();
    }
  }

  handleDefeat() {
    this.gameContainer.innerHTML = "You lose !";
    this.gameContainer.id = "lose";
    this.resetButton();
  }

  resetButton() {
    const reset = document.createElement("button");
    this.gameContainer.appendChild(reset);
    reset.id = "reset";
    reset.innerHTML = "New Game";

    reset.addEventListener("click", this.handleReset);
  }

  handleReset() {
    location.reload(true);
  }

  createLivesContainer() {
    let heartContainer = document.createElement("div");
    heartContainer.id = "heartContainer";
    document.body.appendChild(heartContainer);

    let heart1 = document.createElement("img");
    heart1.id = "heart1";
    heart1.src = "/scit_g12/heart.png";
    heartContainer.appendChild(heart1);

    let heart2 = document.createElement("img");
    heart2.id = "heart2";
    heart2.src = "/scit_g12/heart.png";
    heartContainer.appendChild(heart2);

    let heart3 = document.createElement("img");
    heart3.id = "heart3";
    heart3.src = "/scit_g12/heart.png";
    heartContainer.appendChild(heart3);
  }

  theMovingObstacle() {
    let o7 = document.getElementById("o7");
    let mover = 0;
    let moverBot = 0;
    setInterval(function () {
      if (o7.offsetTop < 150) {
        o7.style.top = o7.offsetTop + 10;
      } else if (o7.offsetTop > 0) {
        {
          moverBot = o7.offsetTop - 150;
          o7.style.top = moverBot;
        }
      }
    }, 150);
  }
}

new Player();
