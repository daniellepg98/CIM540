var bgColor = "white";
var fSize = 250;

var posX = 0;
var posY = 0;


var bgImage, bgImage2, currentBgImage, hitImage;

var bgChange, bgChange1;


var mouseX;

var mouseY;


var redballoons;

var hitZoneX=200;

var hitZone2;

var hitZoneY=200;

var hitZoneX2=500;

var hitZoneY2=1000;

var dist;

var backShowHide = false;

var offset = 0;

var trigger = false;





function preload(){
    bgImage = loadImage("assets/tent.png")
    bgImage2 = loadImage("assets/redballoons.jpg");
    
    redballoons = loadImage("assets/1balloon.png");
    
    carnivaltext = loadImage("assets/carnivaltext.png");
    
}


function setup() {
    createCanvas(1000, 1000);
   
posX = 1000 / 2;
posY = 300;

currentBgImage = bgImage

 bgChange = createButton("tent");
    bgChange.position(100, 1000);
    bgChange.mousePressed(changeBgFunction);

    bgChange2 = createButton("redballoons");
    bgChange2.position(200, 1000);
    bgChange2.mousePressed(changeBgFunction2);
    
   

}

function draw() {
background(bgColor);
  
    if(backShowHide == false){
         image(currentBgImage, 0, 0, 1000, 1000);       
    }
    //console.log("mouseX: " + mouseX + " mouseY: " + mouseY);    

posX = mouseX;
posY = mouseY;
    
    
    
    strokeWeight(3);
//Face
    fill("white");
    ellipse(posX, posY, fSize, fSize);

    strokeWeight(2);  
   
//mouth
    fill("red");
    rect(posX-40, posY+65, 80, 20);
 strokeWeight(3); 
    fill("red")
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
    
    ellipse(hitZoneX, hitZoneY, 20, 20);
    
    strokeWeight(3);
  //clownnose
    fill("red")
    ellipse(posX, posY+10, 50, 50);
    
    //if (mouseX == hitZoneX && mouseY ==hitZoneY) {
        
       // console.log("Show redballoons");
        
        // image(redballoons, 200,200)

    

 var hitZoneDist = dist(mouseX, mouseY, hitZoneX, hitZoneY);
    console.log(hitZoneDist);

    if (hitZoneDist < 40) {
        image(redballoons, 200 + offset, 200);
        
        if(offset >= 20){
           trigger = true;
           }
        if(offset <= -20){
           trigger = false;
           }
        if(trigger == true){
           offset--;
           }else{
               offset++;
           }
        
        
        backShowHide = true;
    }else{
        backShowHide = false;
    }

 var hitZoneDist2 =  dist(mouseX, mouseY, hitZoneX2, hitZoneY2);
    console.log(hitZoneDist2); 
    if (hitZoneDist2 < 60) {
      image(carnivaltext, 200,200, 500,600);
        
        
        
    }
}

   
function bgFunction(){
    currentBgImage = bgImage;
   }
function bgFunction1(){
currentBgImage = bgImage2;    
}






function mousePressed(){
 console.log("mousePressed");
bgColor = color(0,0,0); 
}
  
 function changeBgFunction() {
    currentBgImage = bgImage;
}

function changeBgFunction2() {
    currentBgImage = bgImage2;
}   
    
    



  