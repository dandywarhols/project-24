const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var dustbin1,dustbin2,dustbin3;
function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;
	dustbin1 = new Dustbin(1000,600,200,15);
  dustbin2 = new Dustbin(900,550,15,100);
  dustbin3 = new Dustbin(1100,550,15,100);
	paper1 = new paper(100,600,25);
	ground = new Ground(400,700,1500,20);
	
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:135,y:-135});
  }
}



