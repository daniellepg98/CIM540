var bgColor = "lightpink";
var fSize = 250;

var posX = 0;
var posY = 0;


function setup() {
    createCanvas(1000, 1000);

posX = width / 2;
posY = 300;


}

function draw() {
background(bgColor);
    
    
    strokeWeight(0);
//Face
    fill("white");
    ellipse(posX, posY, fSize, fSize);

    strokeWeight(2);  
   
//mouth
    fill("red");
    rect(460, posY+65, 80, 20);
 strokeWeight(3); 
    fill("red")
    //hat
    triangle(400,200,500,30,600,200)
    
//eyebrows
strokeWeight(5);
line(425, 230, 480, 230);
line(posX+25,230,posX+80 ,230 )    

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
    fill("red")
    ellipse(posX, posY+10, 50, 50);
    
   
  
}