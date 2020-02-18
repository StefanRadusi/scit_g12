
class TheMover {
    constructor() {
        this.square = document.getElementById("nine");
        this.top = 0;
        this.left = 0;
        this.handleKey()
    }

handleKey() {
document.addEventListener("keydown", this.movePlayer.bind(this))
}


movePlayer(event) {
  
    if (event.key === "ArrowDown") {
        this.top++;
        this.containerWth = document.getElementById("main-container").offsetWidth;
        console.log (this.containerWth) 
        if (this.top >=0 && this.top <= this.containerWth) {
        this.square.style.top = this.top + "px";
    }
    };


    if (event.key === "ArrowUp") {
        this.top--;
        if (this.top >= 0) {
        this.square.style.top = this.top + "px";
        console.log (event);
    };
}

    if (event.key === "ArrowLeft") {
        this.left--
        if (this.left >= 0 && this.top <= this.containerWth) {
        this.square.style.left = this.left + "px"; 
    };
    }

    if (event.key === "ArrowRight") {
        this.left++
        if (this.left >= 0) {
        this.square.style.left = this.left + "px";
    }
}



}
}


const mover = new TheMover();
