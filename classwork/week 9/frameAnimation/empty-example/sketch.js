var frameArray = [];
var currentImage = 0;

var prevMillis = 0;

var interval= 500;


function preload(){
    
  //  frameArray[0] = loadImage("assets/Thatwasclose0.jpg");
   // frameArray[1] = loadImage("assets/Thatwasclose1.jpg");
   // frameArray[2] = loadImage("assets/Thatwasclose2.jpg");
   // frameArray[3] = loadImage("assets/Thatwasclose3.jpg");
    
    for(var i = 0; i < 4; i++){
        
    var loadImageString ="assets/Thatwasclose" + i +".jpg";    
        
    frameArray[i] = loadImage(loadImageString);    
    }
    
}

function setup(){
    
    createCanvas(500,500);
}

function draw(){
  
    console.log(i);
   // frameRate(1);
    
    //console.log(millis());
    
    
    image(frameArray[currentImage],0,0);
    
    //currentImage = currentImage +1;
    
    console.log(currentImage);
    
    if (millis() - prevMillis >=interval){
        prevMillis = millis();
        currentImage++;
    }
    
    currentImage++;
    
    if(currentImage == frameArray.length){
    currentImage = 0;
       
       }
    
   
}