const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var bnt2

var bnt1
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  bnt1 = createImg('right.png');
  bnt1.position(220,30);
  bnt1.size(50,50);
  bnt1.mouseClicked(vForce);

  bnt2 = createImg('up.png');
  bnt2.position(20,30);
  bnt2.size(50,50);
  bnt2.mouseClicked(vForce);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
   var ball_opt = {
     restitution: 0.95
   }

ball = Bodies.circle(200,100,20,ball_opt);
World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  ellipse(ball.position.x,ball.position.y,20);

  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}
function hForce()
{
  Matter.body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vForce()
{
  Matter.body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

