var world, engine, roof
var bob1, bob2, bob3, bob4, bob5
var rope1, rope2, rope3, rope4, rope5

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	

	engine = Engine.create();
	world = engine.world;
	dia=40
	//Create the Bodies Here.
	roof=new Roof (width/2,200,600,30)
	bob3= new Bob(width/2,500,dia)
	bob1= new Bob(width/2-80,500,dia)
	bob2= new Bob(width/2-40,500,dia)
	bob4= new Bob(width/2+40,500,dia)
	bob5= new Bob(width/2+80,500,dia)

	rope3=new Chain(bob3.body,roof.body,0,0)
	rope1=new Chain(bob1.body,roof.body,-80,0)
	rope2=new Chain(bob2.body,roof.body,-40,0)
	rope4=new Chain(bob4.body,roof.body,+40,0)
	rope5=new Chain(bob5.body,roof.body,+80,0)


	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);
  roof.display()
  bob3.display()
  bob1.display()
  bob2.display()
  bob4.display()
  bob5.display()

  rope3.display()
  rope1.display()
  rope2.display()
  rope4.display()
  rope5.display()

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}

}
