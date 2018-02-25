var gameIsStart = false;

var score = 0;

var hit;

var mySquare = {
    dimension: 50,
    init: function() {
        return  {x: Math.floor(Math.random()* 701), y: Math.floor(Math.random()* 451)};
    },

    drawRandom: function() {
        this.coord = this.init();
        ctx.fillRect(this.coord.x,this.coord.y, this.dimension, this.dimension);
    },
    
};

var square = Object.create(mySquare);

var canvas = document.getElementById("canvas");

var ctx = canvas.getContext('2d');

canvas.addEventListener("click", function(event){
    if (gameIsStart == false) {
        gameIsStart = true;
        document.getElementById("header").innerHTML = "Game Started!!!";
        gameStart();
        setTimeout( gameOver, 10000);
    } 
    else return;
});

function gameStart() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    square.drawRandom();

    canvas.addEventListener("click", function(event){
        var mousePos = getMousePos(canvas, event);
        if (isHit(mousePos,square)) {
            score++;
            console.log(score);
            gameStart();
        }
    });

}

function isHit(mousePos,square) {
    if (mousePos.x - square.coord.x < 0 || mousePos.y - square.coord.y < 0 ) return false;
    return hit = ((mousePos.x - square.coord.x) < square.dimension) && ((mousePos.y - square.coord.y) < square.dimension);
    
}

function gameOver(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("header").innerHTML = "Game Over, your score:" + score;
    score = 0;
}

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.floor(event.clientX - rect.left),
        y: Math.floor(event.clientY - rect.top)
    };
}


