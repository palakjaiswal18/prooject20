var bgImg
var cat 
var mouse 
function preload() {
    //load the images here
    bgImg=loadImage("add image url here");
    catImg1=loadAnimation("images/cat1.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    catimg2=loadAnimation("add cat2 and cat3 image url here");
    mouseimg2=loadAnimation("add mouse2 and mouse3 image url here");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    var tom=createSprites(200,400,50,20);
    var jerry=createSprite(200,800,50,20);
}

function draw() {

    background("add image variable name here");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < cat.width< cat.width - mouse.width)/2){
        cat.addAnimation("catRunning",catimg2);
        cat.changeAnimation("catRunning");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(KeyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
    }
if(keyCode===RIGHT_ARROW){
   mouse.addAnimation("mouseTeasing",mouseimg2);
   mouse.changeAnimation("mouseTeasing");
   mouse.frameDelay=25;
   }
}
