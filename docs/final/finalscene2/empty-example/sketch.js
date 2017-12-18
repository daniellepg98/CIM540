var imgs = [];  // Declare variable 'img'.

var counter = 0;

var timeleft;

var soundFile;


var levels = [["pan"], ["pan","dog"], ["pan", "dog", "redstool"], ["pan", "dog", "redstool",]];

var curLevel = 0;

function preload() {
    
soundFile1 = loadSound('assets/youlose.mp3');
 
    
}

function setup() {
    
var timeleft = 10; //make it 30 
   

var interval= setInterval(timeIt, 1000);
    
var timer = select('#timer');
timer.html(timeleft - counter);

function timeIt(){
 counter++;
timer.html(timeleft - counter);
  if (counter == timeleft) {
     // soundFile1.play();
      clearInterval(interval);
     var youlose = select('#youlose');
   
      //go to next scene
      //counter = 0;
      //check if you select them
  }
}

createCanvas(1444, 1132);
       
  var curImg = loadImage("assets/remote.png");
  imgs["remote"] = {"x":8,"y":500.5, "image":curImg};
    // Load the image
    
 var curImg2 = loadImage("assets/picframe.png");
  imgs["picframe"] = {"x":513.00,"y":161.50, "image":curImg2};
    // Load the image
    
    var curImg3 = loadImage("assets/flowersforlivingroom.png");
  imgs["flowers"] = {"x":600.50,"y":69.50, "image":curImg3};
    // Load the image
    
     var curImg4 = loadImage("assets/livingroom!!.jpg", (2000,1420));
  imgs["livingroom"] = {"x": 0,"y": 0, "image":curImg4};
  
    
    
}


function draw() {

//add in mousepressed function       
    
// Displays the image at its actual size at point (0,0)
    
    image(imgs["livingroom"].image, imgs["livingroom"].x, imgs["livingroom"].y, imgs["livingroom"].image.width, imgs["livingroom"].image.height);
    
  image(imgs["remote"].image, imgs["remote"].x, imgs["remote"].y, imgs["remote"].image.width, imgs["remote"].image.height);
    
 
    
     image(imgs["picframe"].image, imgs["picframe"].x, imgs["picframe"].y, imgs["picframe"].image.width, imgs["picframe"].image.height);
    
    image(imgs["flowers"].image, imgs["flowers"].x, imgs["flowers"].y, imgs["flowers"].image.width, imgs["flowers"].image.height);
    
    fill("white");
    rect(500,20,400,50);
    fill("black");
    text("Find the remote",500,60);
    textSize(50);
    

}

function mousePressed(){
    for (item in imgs){
       // console.log(item);
       if(mouseX > imgs[item].x && mouseX < (imgs[item].x + imgs[item].image.width) && mouseY > imgs[item].y && mouseY < (imgs[item].y + imgs[item].image.height)){
           console.log(item);
           
       //levels["pan"]++;
        //curLevel[1]++;
        //curLevel [2]++;   
    // soundFile2.play();
    fill("white");
    rect(500,20,400,50);
    fill("black");
    var levelText = "Find the" + levels[(curLevel++)];
    levels[curLevel]++;       
    text(levelText,500,60);
    textSize(50);
    

       }
        
    }
    
}

    
   
  