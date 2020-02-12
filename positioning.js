console.log("start");
const bigContainer = document.getElementById('big-container');
let positions = [];
let counterTop = 0;
let counterBottom = 0;
let i =0;
while ( i < 7 ) {
    let flag = 0;
    let widthObstacol = Math.floor(Math.random() * (bigContainer.clientWidth - 10));
    for (let j = 0; j< positions.length; j++){
        if (positions[j] < widthObstacol + 50 && positions[j] > widthObstacol - 50){
            flag = 1;
        }
    }
    if (flag === 0){
        const newDiv = document.createElement("div");
        newDiv.className = "obstacol";

        if ( Math.floor(Math.random() * 2) === 0 ){
            if (counterTop < 4){
            newDiv.style.top = "0";  
            counterTop++;
            }else {
                newDiv.style.bottom = "0";
                counterBottom++;
            }
        }else{
            if ( counterBottom < 4 ){
            newDiv.style.bottom = "0";
            counterBottom++;
            }else{
                newDiv.style.top = "0";  
            counterTop++;
            }
        }

        newDiv.style.left = widthObstacol;
        positions.push(widthObstacol);
        i++;

        newDiv.style.height = Math.floor(Math.random() * (bigContainer.clientHeight/2 ))+ bigContainer.clientHeight/2 -50;
        bigContainer.appendChild(newDiv);
    }
}