var ship, ship_moving, ship_colided;
var sea, seaImage;
var newImage

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  groundImage = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200);

  ship = createSprite(50,175,20,50);
  ship.addAnimation("running", ship_moving);
  ship.scale = 0.5;
  
  sea = createSprite(200,180,400,20);
  sea.addImage("ground",seaImage);
  sea.x = ground.width /2;
  sea.velocityX = -4;
  
}

function draw() {
  background("blue");

  if (sea.x < 0){
    sea.x = sea.width/2;
  }
 
}