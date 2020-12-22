var movRect, fixRect;

function setup() {
  createCanvas(800,400);
  fixRect = createSprite(400, 200, 50, 50);
  fixRect.shapeColor = "yellow";

  movRect = createSprite(200,200,80,20);
  movRect.shapeColor = "blue";
}

function draw() {
  background(0);
  
  movRect.x = mouseX;
  movRect.y = mouseY;

  if(movRect.x-fixRect.x < fixRect.width/2+movRect.width/2 && fixRect.x-movRect.x<fixRect.width/2+movRect.width/2 && movRect.y-fixRect.y < fixRect.height/2+movRect.height/2 && fixRect.y-movRect.y<fixRect.height/2+movRect.height/2){

    movRect.shapeColor = 'red';

  }
  
  else{

    movRect.shapeColor = "blue";

  }


  drawSprites();
}