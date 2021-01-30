var box1, box2;
function setup() {
  createCanvas(800,400);
  box1 = createSprite(150, 200, 20, 30);
  box2 = createSprite(250,100,50,50);
box1.debug = true;
box2.debug = true;
box1.shapeColor=("Red")
box2.shapeColor=("Red")
}

function draw() {
  background(255,255,255);
  box2.x=mouseX
  box2.y=mouseY

isTouching();


  drawSprites();
}

function isTouching(){

  if(box1.x-box2.x<=box1.width/2+box2.width/2&&
    box2.x-box1.x<=box1.width/2+box2.width/2&&
    box1.y-box2.y<=box1.height/2+box2.height/2&&
    box2.y-box1.y<=box1.height/2+box2.height/2){
  
    box1.shapeColor=("Blue")
    box2.shapeColor=("Blue")
  }
  else{
  box1.shapeColor=("Red")
  box2.shapeColor=("Red")
  }

}