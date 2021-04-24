
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObject;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(300, 150, 275,25);
	groundSprite.shapeColor=color("grey");

	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(width/2,height/4,width/7,20);



	//Create the Bodies Here.

	bobDiameter=40;

	startBobPositionX=width/4;
	startBobPositionY=height/3;
	bobObject1=new BOB(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject2=new BOB(startBobPositionX-bobDiameter/2,startBobPositionY,bobDiameter);
	bobObject3=new BOB(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new BOB(startBobPositionX+bobDiameter/2,startBobPositionY,bobDiameter);
	bobObject5=new BOB(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	//bobObject1 = new BOB(110,200,35);
	//bobObject2 = new BOB(130,200,35);
	//bobObject3 = new BOB(150,200,35);
	//bobObject4 = new BOB(170,200,35);
	//bobObject5 = new BOB(190,200,35);
	rope1=new rope(bobObject1.body,roofObject.body,-35*2,0)
//rope1=new rope(bobObject1.body,roofObject.body,110, 200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  drawSprites();
 
}



