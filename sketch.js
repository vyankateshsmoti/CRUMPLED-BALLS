
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var groundObject;
var paperBall;
var invisble;	
var dustbinImg,dustbinSprite;
var world;

function preload(){
	dustbinImg = loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(1600, 500);
	rectMode(CENTER);

	dustbinSprite = createSprite(1200,350,200,213);
	dustbinSprite.addImage("dustbingreen.png",dustbinImg);
	dustbinSprite.scale = 0.7;

	engine = Engine.create();
	world = engine.world;
	
	paperBall = new PaperBall(200,200)
	groundObject=new ground(width/2,470,width,20);
	invisible=new dustbin(1200,450);
	
	
	//dustbinImg = new classbin(1200,350,200,213);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  drawSprites();

  if(keyDown(UP_ARROW)){
	
	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:130,y:-145});
  }
 
  
  groundObject.display();
  paperBall.display();
 
 //dustbinObj.display();
  //dustbinImg.display();



}

