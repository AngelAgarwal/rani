var rani, raniImg;

function preload(){
    raniImg= loadImage("rani.png")
}
function setup(){
     createCanvas(displayWidth - 2, displayHeight-30)
    rani = createSprite(200,200,10,10)
}

function draw(){
    background("black")
    drawSprites();
}
