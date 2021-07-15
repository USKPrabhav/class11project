var trex,trex_running,edges;

var groundImage,ground,invisibleGround;

function preload(){

      trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
      groundImage=loadImage("ground2.png")

    }
function setup(){

      createCanvas(600,200);

      //create a trex sprite
      trex=createSprite(50,160,20,20);
      trex.addAnimation("running",trex_running);
      trex.scale=0.5;

      //create a ground sprite
      ground=createSprite(200,180,400,20);
      ground.addImage(groundImage)
      ground.velocityX=-2

      //create an invisible Ground
      invisibleGround=createSprite(200,190,400,10);
      invisibleGround.visible=false
  
      edges=createEdgeSprites();
}

function draw(){

      background(180);
      
      //console.log(trex.y);
      if(ground.x<0){
        ground.x=ground.width/2;
      }

      if(keyDown("space") && trex.y>150){
        trex.velocityY=-10;
      }
      trex.velocityY=trex.velocityY+0.8;
    
      trex.collide(invisibleGround);

      drawSprites();
}