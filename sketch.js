var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  
  killshot=loadSound("killshot.mp3")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0   

   group=new Group()
   group2=new Group()
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 
  
    if(keyDown("space")){
      arrow= createSprite(100, 100, 60, 10);
      arrow.addImage(arrowImage);
      arrow.x = 360;
      arrow.y=bow.y;
      arrow.velocityX=-3
      arrow.lifetime = 100;
      arrow.scale = 0.3; 
      group.add(arrow)
      arrow.lifetime=150
      
      
    }


    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
 
   
  //creating continous enemies

  
 
  
 // creating balloons
 if(frameCount%100===0){
 
 var select_balloon = Math.round(random(1,4));
 balloon = createSprite(0,Math.round(random(30, 350))  , Math.round(random(20, 370)) , 10);
 switch(select_balloon){
  case 1 : balloon.addImage(red_balloonImage);
              balloon.scale=0.1
          break;
  case 2 : balloon.addImage(green_balloonImage);
            balloon.scale=0.1
          break;
  case 3 : balloon.addImage(blue_balloonImage);
           balloon.scale=0.1
          break;
  case 4 : balloon.addImage(pink_balloonImage);
             balloon.scale=1.3
          break;
  default:
          break;
 }
 
 balloon.velocityX=3;
 balloon.lifetime=180
 group2.add(balloon)
}

//destroying the balloons
for(var i=0; i<group.length; i++){
  var temp=group.get(i)
  
  for(var a=0; a<group2.length; a++){
    var tempa=group2.get(a)
    if(tempa.isTouching(temp)){
      tempa.destroy();
      temp.destroy();
      killshot.play()
      score++
    }
  }
}
    
  drawSprites();
  stroke("black")
  fill("black")
  textSize(20)
  text("Score: "+ score, 300,50);
}


// Creating  arrows for bow



