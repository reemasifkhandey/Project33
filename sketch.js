const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var backgroundImg;
var snow=[]
function setup() {
    var canvas = createCanvas(800,400);
    createCanvas(800,400);
    
  
    engine = Engine.create();
    world = engine.world;

}

function preload() {
  backgroundImg = loadImage("snow3.jpg");
}

function draw() {

  background(backgroundImg);
  Engine.update(engine); 
  if(frameCount % 60===0){
    snow.push(new Snow(random(0,800),10,10));
  }
for(i=0;i<snow.length;i++){
  snow[i].display();
}

drawSprites();
 
}