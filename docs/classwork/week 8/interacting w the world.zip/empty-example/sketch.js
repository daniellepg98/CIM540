var bgColor; 

var posX = 0;
var posY = 0;

var bgImage, bgImage2, currentBgImage;

var hitZoneX = 100;
var hitZoneY = 100;

function preload(){
    bgImage = loadImage("assets/carnival.png")
    bgImage2 = loadImage("assets/party.jpg")
}


function setup() {
    createCanvas(1000, 1000);
    posX = 500;
    posY = 300;
bgColor = color(255,0,0);

currentBgImage = bgImage
 
}

function draw() {
background(bgColor); 
    
image(currentBgImage, 0, 0);    
 
posX = mouseX;
posY = mouseY;   
    strokeWeight(0);
    stroke(0);
//Face
    fill("white");
    ellipse(posX, posY, 250, 250);

    strokeWeight(2);  
//mouth
    fill("red");
    rect(posX-40, posY+65, 80, 20);
 strokeWeight(3); 
   fill("red");

//hat
    triangle(posX-100,posY-100,posX,posY-270,posX+100,posY-100);
    
      strokeWeight(2);  
    //eyes
    fill(255);
    ellipse(posX - 50, posY - 30, 50, 50);
    ellipse(posX + 50, posY - 30, 50, 50); 
    //pupils
    fill(165,42,42);
    ellipse(posX - 50, posY - 30, 10, 20);
    ellipse(posX + 50, posY - 30, 10, 20);
    
    strokeWeight(3);
  //clownnose
    var noseWiggle = map(mouseX,0,width,-10,10);
    var noseWiggleY=map(mouseY,0,height,-10,10);
    fill("red")
    ellipse(posX + noseWiggle, posY+10, 50, 50);
   
 console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
 
  ellipse(hitZoneX, hitZoneY, 10, 10);
var hitZoneDist = dist(mouseX, mouseY, hitZoneX, hitZoneY);
    
    //console.log(hitZoneDist);
    
    if (hitZoneDist < 10) {
        
        image(hitImage, hitZoneX-100, hitZoneY-100);
        
    }
    
    ellipse(325, 325, 10, 10);
    
    if (mouseX > 300 && mouseX < 350 && mouseY > 300 && mouseY < 350) {
        changeColor = true;
    } else {
        
        changeColor= false;
    }
        
    }





function bgFunction(){
    currentBgImage = bgImage;
    
function bgFunction1(){
currentBgImage = bgImage2;    
}
}



function mousePressed(){
 console.log("mousePressed");
currentBgImage = bgImage2;    
    
}
