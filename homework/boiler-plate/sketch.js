var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var i = 0;
var q = 0;
var w = 0;
var b = 0;
var c = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     i ++;
     divisions[i] = new Divisions(k, height-divisionHeight/2, 10, divisionHeight);
   }


    for (var j = 75; j <=width; j=j+50) 
    {
      w++;
       plinkos[w] = new Plinko(j,75);
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos[w] = new Plinko(j,175);
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos[b] = new Plinko(j,275);
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos[c] = new Plinko(j,375);
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     q++
     particles[q] = new Particle (random(width/2-30, width/2+30), 10,10);
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
     q++;
     particles[q].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     i++;
     divisions[i].display();
   }
}