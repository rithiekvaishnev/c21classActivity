var fixedRect, movingRect;
var rect1,rect2,rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(200,200,50,50);
  rect1.shapeColor = "green"
  rect1.debug = true;

  rect2 = createSprite(400,200,50,50);
  rect2.shapeColor = "green"
  rect2.debug = true;

  rect3 = createSprite(600,200,50,50);
  rect3.shapeColor = "green"
  rect3.debug = true;

}


function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
  rect3.shapeColor = "green";

  if(isTouching(movingRect,fixedRect)=== true){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  if(isTouching(movingRect,rect1)=== true){
    movingRect.shapeColor = "yellow";
    rect1.shapeColor = "yellow";
  }

  if(isTouching(movingRect,rect2)=== true){
    movingRect.shapeColor = "lightblue";
    rect2.shapeColor = "lightblue";
  }

  if(isTouching(movingRect,rect3)=== true){
    movingRect.shapeColor = "purple";
    rect3.shapeColor = "purple";
  }

  drawSprites();
}
