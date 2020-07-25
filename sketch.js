var fixedRect, movingRect;
var g1,g2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  g1 = createSprite(700, 100, 50, 80); 
  g2 = createSprite(900, 100, 50, 80);
  g1.velocityX=3;
  g2.velocityX=-3;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(g1,g2);
  drawSprites();
}
















