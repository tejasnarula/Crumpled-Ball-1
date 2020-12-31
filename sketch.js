var ground;
var box1, box2, box3, box2Body, box3Body;
var paperObject

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	box1 = createSprite(1000 - 90, 610, 20, 100)
	box2 = createSprite(1000 + 90, 610, 20, 100)
	box3 = createSprite(1000 , 650, 180, 20)

	box1.shapeColor = "white"
	box2.shapeColor = "white"
	box3.shapeColor = "white"

	engine = Engine.create();
	world = engine.world;

	box3Body = Bodies.rectangle(box3.x, box3.y, box3.width, box3.height , {isStatic:true} );
	 World.add(world, box3Body);
	 
	box2Body = Bodies.rectangle(box2.x, box2.y, box2.width, box2.height , {isStatic:true} );
 	World.add(world, box2Body);


	 
	ground = new Ground(600,height-35,1200,10);
	paperObject = new paper(100, 600, 20);

	Engine.run(engine);

	keyPressed()
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display()
	paperObject.display()

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:19, y:-20})
	}
}

