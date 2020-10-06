const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var myEngine,myWorld;
var ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;


function setup() {
  createCanvas(1200,400);

  myEngine=Engine.create();
  myWorld=myEngine.world;

  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  box5=new Box(810,160,70,70);
  ground=new Ground(600,height,width,20);
  pig1=new Pig(810,350);
  pig2=new Pig(810,220);
  log1=new Log(810,260,300,PI/2);
  log2=new Log(810,180,300,PI/2);
  log3=new Log(810,160,80,60,PI/4);
  log4=new Log(1000,160,80,60,PI/4);
  bird=new Bird(500,200);
  
}

function draw() {
  background("black");  
  Engine.update(myEngine);
 
  box1.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display();
  bird.display();

 
}