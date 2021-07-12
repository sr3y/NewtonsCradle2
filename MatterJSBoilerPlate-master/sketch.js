
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var world, engine;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(320, 575, 40);
	ball2 = new Ball(360, 575, 40);
	ball3 = new Ball(400, 575, 40);
	ball4 = new Ball(440, 575, 40);
	ball5 = new Ball(480, 575, 40);

	roof = new Roof(400, 250, 230, 20);


	rope1 = new Rope(ball1.body, roof.body, -80, 0)
	rope2 = new Rope(ball2.body, roof.body, -40, 0);
	rope3 = new Rope(ball3.body, roof.body, 0, 0);
	rope4 = new Rope(ball4.body, roof.body, 40, 0);
	rope5 = new Rope(ball5.body, roof.body, 80, 0);
	


	Engine.run(engine);    
  
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x: -50, y: -45})
	}
}


function draw() {
  rectMode(CENTER);
  background(255);
  //Engine.update(engine);

  
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	rope1.display();
	
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
	roof.display();

	//line(pointA.x, pointA.y, pointB.x, pointB.y);

}



