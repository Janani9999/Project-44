var bg,bgImg
var spaceship,spaceshipImg


function preload(){
  bgImg=loadImage("space.png")
  spaceshipImg=loadImage("spaceship.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  

  bg=createSprite(width/2, height/2, width, height);
  bg.addImage(bgImg)
  bg.scale=1.5

  spaceship=createSprite(400,400,30,50);
  spaceship.addImage(spaceshipImg)
  spaceship.scale=0.3
}

function draw() {
  bg.velocityX = -2
  if (bg.x < 0) {
    bg.x = width/2
  }  

  if(keyDown(RIGHT_ARROW)){
    spaceship.x=spaceship.x+2
  }

  if(keyDown(UP_ARROW)){
    spaceship.y=spaceship.y-2
  }

  if(keyDown(DOWN_ARROW)){
    spaceship.y=spaceship.y+2
  }

  //spawnObstacles()

  drawSprites();
}

/*function spawnObstacles() {
  if (frameCount % 100 == 0) {
    var obstacle = createSprite(850,random(50,150),20,50)
    obstacle.velocityX=-2
    obstacle.addImage(obsTop2)
    obstacle.scale=0.1
    var rand=Math.round(random(1,2))
    switch(rand){
      case 1:obstacle.addImage(obsTop1)
      break
      case 2:obstacle.addImage(obsTop2)
      break
    }
  }
}
*/

