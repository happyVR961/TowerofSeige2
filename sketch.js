
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
    var options ={
      isStatic: true
    }
    polygon = new hexagon(150,200,40,40);
    ground1 = new Ground(400,height,800,20 );
    platform = new Ground(350,200,220,10);
    platform2 = new Ground(600,100,125,10);
   //1 level
    box1 = new Box(380,145,30,40);
    box2 = new Box(360,145,30,40);
    box3 = new Box(340,145,30,40);
    box4 = new Box(320,145,30,40);
    box5 = new Box(300,145,30,40);
    //box6 = new Box(270,145,30,40);
    //2 level
    box7 = new Box(400,115,30,40);
    box8 = new Box(360,115,30,40);
    box9 = new Box(340,115,30,40);
    box10 = new Box(309,115,30,40);
    //3 level
    box11 = new Box(360,105,30,40);
    box12 = new Box(340,105,30,40);
    //4 level 
   // box13 = new Box(350,100,30,40);
   //platform 2 boxes 
   
   //level 1
   box13 = new Box(580,95,30,40);
   box14 = new Box(610,95,30,40);
   box15 = new Box(640,95,30,40);
   //level 2
   box16 = new Box(600,65,30,40);
   box17 = new Box(620,65,30,40);
   chain = new constraint(polygon.body,{x:100,y:200})
  }

function draw() {
  rectMode(CENTER);
  background(255);  
  Engine.update(engine);
  
  polygon.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  //box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
  platform.display();
  platform2.display();
  chain.display();
  drawSprites();
}



function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}


function mouseReleased(){
  chain.Fly();
  //Matter.Body.applyForce(polygon.body, polygon.body.position,{x:200,y:200})
}

function keyPressed(){
  if (keyCode === 32){
    chain.attach(polygon.body);
  }
}