


var imgs = [];  // Declare variable 'img'.


var counter = 0;

var timeleft;

var soundFile;

var levels = [["pan"], ["pan","dog"], ["pan", "dog", "redstool"], ["pan", "dog", "redstool",]];

var curLevel = 0;

//var curLevel = 1 = "dog";

//var curLevel = 2 = "redstool";

//var curLevel = 3 = "eggs";


function preload() {
    
soundFile1 = loadSound('assets/youlose.mp3');
    
soundFile2 = loadSound('assets/eggfrying.mp3');
    
soundFile3 = loadSound('assets/dog.mp3');
    
soundFile4 = loadSound('assets/timer.mp3');    
    
    
 
}

function setup() {
    
var timeleft = 5; //make it 30 
   

var interval= setInterval(timeIt, 1000);
    
var timer = select('#timer');
   
//soundFile4.play();    
timer.html(timeleft - counter && "time left");

function timeIt(){
 counter++;
timer.html(timeleft - counter);
  if (counter == timeleft) {
     soundFile1.play();
      soundFile4.stop();
      clearInterval(interval);
     var youlose = select('#youlose');
      youlose.html("you lose");
      fill("red");
    rect(500,20,400,50);
      
   
      //go to next scene
      //counter = 0;
      //check if you select them
  }
}

createCanvas(1000, 710);
 // var curImg7 = new Img(x7,y7)
  
  //imgs.push()
  var curImg = loadImage("assets/dog.png");
  imgs["dog"] = {"x":8,"y":500.5, "image":curImg};
    // Load the image
    
    
var curImg3 = loadImage("assets/pan.png");
  imgs["pan"] = {"x":513.00,"y":160.50, "image":curImg3};
    // Load the image
    
    var curImg2 = loadImage("assets/eggs.png");
 imgs["eggs"] = {"x":513.00,"y":161.50, "image":curImg2};
//    // Load the image
//    
  var curImg4 = loadImage("assets/plates.png");
 imgs["plates"] = {"x":600.50,"y":69.50, "image":curImg4};
//    // Load the image
//    
   var curImg5 = loadImage("assets/kitchen!.jpg", (2000,1420));
 imgs["kitchen"] = {"x5": 0,"y5": 0, "image":curImg5};
//    
    var curImg6 = loadImage("assets/flowers.png");
 imgs["flowers"] = {"x":350.50,"y":200.50, "image":curImg6};
//    
  var curImg7 = loadImage("assets/redstool.png");
 imgs["redstool"] = {"x":100.50,"y":450.5, "image":curImg7};
//    
//    
 var curImg8 = loadImage("assets/bluestools.png");
imgs["bluestools"] = {"x":200.50,"y":470.5, "image":curImg8};
//    // Load the image
    
    
}
      
//function mousePressed(){
//if (curImg7.clicked();
 //  )
//}

function draw() {

//add in mousepressed function       
    
// Displays the image at its actual size at point (0,0)
//    
  image(imgs["kitchen"].image, imgs["kitchen"].x5, imgs["kitchen"].y5, imgs["kitchen"].image.width, imgs["kitchen"].image.height);
// 
  image(imgs["dog"].image, imgs["dog"].x, imgs["dog"].y, imgs["dog"].image.width, imgs["dog"].image.height);
    
 
    
     image(imgs["pan"].image, imgs["pan"].x, imgs["pan"].y, imgs["pan"].image.width, imgs["pan"].image.height);
    
  image(imgs["eggs"].image, imgs["eggs"].x, imgs["eggs"].y, imgs["eggs"].image.width, imgs["eggs"].image.height);
//    
 image(imgs["plates"].image, imgs["plates"].x, imgs["plates"].y, imgs["plates"].image.width, imgs["plates"].image.height);
//    
   image(imgs["flowers"].image, imgs["flowers"].x, imgs["flowers"].y, imgs["flowers"].image.width, imgs["flowers"].image.height);
//    
    image(imgs["redstool"].image, imgs["redstool"].x, imgs["redstool"].y, imgs["redstool"].image.width, imgs["redstool"].image.height);
//    
 image(imgs["bluestools"].image, imgs["bluestools"].x, imgs["bluestools"].y, imgs["bluestools"].image.width, imgs["bluestools"].image.height);
    
    fill("white");
    rect(500,20,400,50);
    fill("black");
    var levelText = "Find the " + levels[curLevel];
    text(levelText,500,60);
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
           