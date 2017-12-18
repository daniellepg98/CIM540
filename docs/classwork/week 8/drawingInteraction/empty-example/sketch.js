
var fSize = 250;

var posX = 0;
var posY = 0;
var bgColor;

var redText = createP("Red");
var greenText = createP("Green")
var hRedColor, hGreenColor, hBlueColor;

function setup() {
    createCanvas(1000, 1000);
    posX = width / 2;
    posY = 300;
bgColor = color(255,0,0);

//range and then starting point of slider
hRedColor = createSlider(0,255,0);
var redText = createP('Red');
hRedColor = createSlider(0,255,0);
hGreenColor = createSlider(0,128,0);
var greenText = createP('Green')    
hBlueColor = createSlider(0,0,255); 
var blueText = createP('Blue');    
}

function draw() {
background(bgColor);    
 
posX = mouseX;
posY = mouseY;   
    strokeWeight(0);
    stroke(0);
//Face
    fill("white");
    ellipse(posX, posY, fSize, fSize);

    strokeWeight(2);  
//mouth
    fill("red");
    rect(posX-40, posY+65, 80, 20);
 strokeWeight(3); 
   fill("red");
stroke(hRedColor.value(),hGreenColor.value(),hBlueColor.value());

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
 
}

function mousePressed(){
 console.log("mousePressed");
bgColor = color("green");    
    
}
