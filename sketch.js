var num
var cloud,cloud_image
var Edges;
var ground,ground_image;
var trex ,trex_running;
var invisibleground
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 
  ground_image=loadImage("ground2.png")
  cloud_image=loadImage("cloud.png")
}

function setup(){
    createCanvas(600,200)
    Edges=createEdgeSprites();
    //create a trex sprite
  trex=createSprite(40,180,20,40)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5

  ground=createSprite(200,185,400,10)
  ground.velocityX=-4
  ground.addImage(ground_image)
  ground.x=ground.width/2

  invisibleground=createSprite(200,195,400,10)
  invisibleground.visible=false
}

function draw(){
    background(255)
    if (keyDown("Space")&&trex.y>=100){
      trex.velocityY=-10
    }
    trex.velocityY = trex.velocityY+0.8
    if(ground.x<30){
      ground.x=ground.width/2
    }
    trex.collide(invisibleground);
    spawnClouds();
  drawSprites();
}

function spawnClouds(){
  if(frameCount%60===0){
    cloud=createSprite(600,35,20,10)
    cloud.velocityX=-6
    cloud.addImage(cloud_image)
    cloud.scale=0.5
    cloud.y=Math.round(random(20,50))
  }

}