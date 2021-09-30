var rani, raniImg;
var bgImg;
var bg;
function preload(){
    raniImg= loadImage("rani.png")
    bgImg = loadImage("bgimg.png")
}
function setup(){
     createCanvas(windowWidth, windowHeight)
    rani = createSprite(displayWidth-1150,displayHeight-300,50,50)
    rani.addAnimation("rani",raniImg)
    rani.scale = 0.3;
    
    bg = createSprite(displayWidth/2-20, displayHeight/2-40,20,20)
    bg.addAnimation("bgimg",bgImg)
    bg.scale = 2;

}

function draw(){
    background(0)
    if(keyDown ('LEFT_ARROW') ){
        rani.x = rani.x-10;
        bg.x=bg.x-10;
    }

    if(keyDown ('RIGHT_ARROW') ){
        rani.x = rani.x+10;
        bg.x=bg.x+10;
    }
    drawSprites();
}
