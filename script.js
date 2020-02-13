console.log("sfgs");

let car = document.getElementById("ferrari");
let area = document.getElementById("game-area");

console.log("start");
document.addEventListener("keydown", function (event) {
    let k = event.keyCode;
    let car = document.getElementById("ferrari");
    chr = {
        updown: function () {
            let y = parseInt(getComputedStyle(car).top);
            if (k == 38) {
                --y;
            } else if (k == 40) {
                ++y;
            }

            return y;
        },

        leftright: function () {
            var x = parseInt(getComputedStyle(car).left);
            if (k == 37) {
                --x;
            } else if (k == 39) {
                ++x;
            }
            if (x === 56) {
                alert("you crashed");
            }
            return x;
        }
    };

    car.style.top = (chr.updown()) + "px";
    car.style.left = (chr.leftright()) + "px";


});


