class TheMover {
    constructor() {
      this.generateContainer();
      this.moveTo();
      
    };

    generateContainer() {
        this.bigContainer2 = document.getElementById('big-container');
        let player = document.createElement("div");
        player.id = "player";
        this.bigContainer2.appendChild(player);
        this.player.style.left = '0px';
        this.player.style.top = '0px';
        
    };

    moveTo(){
        let leftCounter = 0;
        document.addEventListener("keydown", function(event) {
            if (event.keyCode === 37) {
            console.log("works");
            player.style.left = parseInt(player.style.left) - 5 + 'px';
                if (player.style.left < 0){
                leftCounter ++;
                }
            }
            if (event.keyCode === 39) {
        console.log("works");
        player.style.left = parseInt(player.style.left) + 5 + 'px';
        }
            if (event.keyCode === 40) {
        console.log("works2");
        player.style.top = parseInt(player.style.top) +5 +'px';
        }
            if (event.keyCode === 38) {
        console.log("works2");
        player.style.top = parseInt(player.style.top) -5 +'px';
        }



    }
        
        )}}
let Mover = new TheMover();