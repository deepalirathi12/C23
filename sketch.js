

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var engine, world;
var ground;
var box1, box2, box3;

function setup(){
   createCanvas(400,400);

 engine = Engine.create();
 world = engine.world;

  var ground_options ={
      isStatic: true
   }

   ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);

  box1 = new Box1();
  box2 = new Box1();
  box3 = new Box1();
 // box1 = new Box(100,50,10,10)

}

function draw(){
    background(0);
   Engine.update(engine);
    rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
 box1.display();
 box2.display();  
 box3.display();  


}



