const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic:false,
		'restitution':0.3,
		'friction':0.5,
		'density':1.2
	}

	roof = createSprite(400, 250, 160, 20);

	bob1 = Bodies.circle(320, 450, 20, options);
	bob1.shapeColor = "red";

	bob2 = Bodies.circle(360, 450, 20, options);
	bob2.shapeColor = "red";

	bob3 = Bodies.circle(400, 450, 20, options);
	bob3.shapeColor = "red";

	bob4 = Bodies.circle(440, 450, 20, options);
	bob4.shapeColor = "red";

	bob5 = Bodies.circle(480, 450, 20, options);
	bob5.shapeColor = "red";

	rope1 = new rope(bob1.body, roof.body, bobDiameter*2, 0);

	rope2 = new rope(bob2.body, roof.body, bobDiameter*2, 0);

	rope3 = new rope(bob3.body, roof.body, bobDiameter*2, 0);

	rope4 = new rope(bob4.body, roof.body, bobDiameter*2, 0);

	rope5 = new rope(bob5.body, roof.body, bobDiameter*2, 0);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);

	ellipseMode(RADIUS);
	ellipse(bob1.position.x, bob1.position.y, 20, 20);
	
	ellipseMode(RADIUS);
	ellipse(bob2.position.x, bob2.position.y, 20, 20);
	
	ellipseMode(RADIUS);
	ellipse(bob3.position.x, bob3.position.y, 20, 20);
	
	ellipseMode(RADIUS);
	ellipse(bob4.position.x, bob4.position.y, 20, 20);
	
	ellipseMode(RADIUS);
	ellipse(bob5.position.x, bob5.position.y, 20, 20);
	
	drawSprites();
}