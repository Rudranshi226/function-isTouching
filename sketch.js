var fixedRect, movingRect;
var gameObj1, gameObj2, gameObj3, gameObj4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObj1 = createSprite(200,100,50,50);
  gameObj2 = createSprite(400,100,50,50);
  gameObj3 = createSprite(600,100,50,50);
  gameObj4 = createSprite(800,100,50,50);
  gameObj1.shapeColor = "green";
  gameObj2.shapeColor = "green";
  gameObj3.shapeColor = "green";
  gameObj4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect, gameObj3)){
    movingRect.shapeColor = "blue";
    gameObj3.shapeColor = "blue";

 }
 else{
  movingRect.shapeColor = "green";
  gameObj3.shapeColor = "green";

 }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    &&object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
     //boolean values: true false
     return true;

  }
  else {
   return false;
  }


}