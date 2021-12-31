var bg;
var iss , spacecraft , hasDocked=false;
var issImg , spacecraftImg , spacecraftLeftImg , spacecraftRightImg , spacecraftBothImg;
var text=""
function preload(){ 
  bg = loadImage("./assets/spacebg.jpg");
  issImg = loadImage("./assets/iss.png");
  spacecraftImg = loadImage("./assets/spacecraft1.png");
  spacecraftLeftImg = loadImage("./assets/spacecraft3.png");
  spacecraftRightImg = loadImage("./assets/spacecraft4.png");
  spacecraftBothImg = loadImage("./assets/spacecraft2.png");
}


function setup() {
  createCanvas(1200,800);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.debug = true;
  iss.setCollider("rectangle",-60,0,50,50);

  spacecraft = createSprite(330, 700, 50, 50);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale = 0.15;
  spacecraft.debug = true;
  spacecraft.setCollider("rectangle",0,0,50,400);
}

function draw() {
  background(bg);
  
  spacecraft.addImage(spacecraftImg);

  if(keyDown(40) && keyDown(38)){
    spacecraft.addImage(spacecraftBothImg);
    spacecraft.y = spacecraft.y-5;
  }

  if(keyDown(40)){
    spacecraft.addImage(spacecraftBothImg);
  }

  if(keyDown(37)){
    spacecraft.addImage(spacecraftLeftImg);
  }

  if(keyDown(39)){
    spacecraft.addImage(spacecraftRightImg);
  }

  if(spacecraft.collide(iss)){
    spacecraft.y = spacecraft.y;
    hasDocked=true;
    text("THE SPACESHIP IS DOCKED",500,600);
  }
  
  drawSprites();


}