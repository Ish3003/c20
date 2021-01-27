var a , b ;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(200, 100, 30, 80);
  a.shapeColor = "red"
  b.shapeColor = "red"
}

function draw() {
  background("blue"); 
  a.x = World.mouseX;
  a.y = World.mouseY; 
  console.log(a.x - b.x)
  if(a.x -b.x <40 && b.x - a.x <40){
    a.shapeColor = "green"
    b.shapeColor = "green"
  }
  else{
    a.shapeColor = "red"
  b.shapeColor = "red"
  }
  drawSprites();
}