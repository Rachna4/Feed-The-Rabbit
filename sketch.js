var garden,rabbit;
var gardenImg,rabbitImg;
var select_Sprites;
var apple, appleImg;
var leaf, orangeleaf, greenleaf;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage( "leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
  
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 var select_Sprites = Math.round(random(1,2));
  
    rabbit.x = World.mouseX;
  createApples();
  createLeaf();
  drawSprites();
}

function createApples() {
  
  if(frameCount % 80===0) {
    
     apple=createSprite(random(50,350), 40,10,10);
  apple.addImage(appleImg);
  apple.scale= 0.08;
  
  apple.lifetime= 390;
     
    apple.y = Math.round(random(10,60))
    apple.velocityY = 3;
     }
  drawSprites();
}

function createLeaf() {
    if(frameCount % 100===0) {
    leaf=createSprite(random(50,350), 40,10,10);
  leaf.addImage(leafImg);
  leaf.scale= 0.08;
  
  leaf.lifetime= 390;
     
    leaf.y = Math.round(random(10,60))
    leaf.velocityY = 3;
    } 
   
}