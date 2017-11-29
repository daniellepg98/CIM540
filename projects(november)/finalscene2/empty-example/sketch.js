var imgs = [];  // Declare variable 'img'.

var counter = 0;

var timeleft;

var soundFile;

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
  imgs["picframe"] = {"x2":513.00,"y2":161.50, "image":curImg2};
    // Load the image
    
    var curImg3 = loadImage("assets/flowersforlivingroom.png");
  imgs["flowers"] = {"x3":600.50,"y3":69.50, "image":curImg3};
    // Load the image
    
     var curImg4 = loadImage("assets/livingroom!!.jpg", (2000,1420));
  imgs["livingroom"] = {"x4": 0,"y4": 0, "image":curImg4};
  
    
    
}
//this.clicked = function(){
    
    
     
//function mousePressed(){
//if (curImg7.clicked();
 //  )
//}

function draw() {

//add in mousepressed function       
    
// Displays the image at its actual size at point (0,0)
    
    image(imgs["livingroom"].image, imgs["livingroom"].x4, imgs["livingroom"].y4, imgs["livingroom"].image.width, imgs["livingroom"].image.height);
    
  image(imgs["remote"].image, imgs["remote"].x, imgs["remote"].y, imgs["remote"].image.width, imgs["remote"].image.height);
    
 
    
     image(imgs["picframe"].image, imgs["picframe"].x2, imgs["picframe"].y2, imgs["picframe"].image.width, imgs["picframe"].image.height);
    
    image(imgs["flowers"].image, imgs["flowers"].x3, imgs["flowers"].y3, imgs["flowers"].image.width, imgs["flowers"].image.height);
    
    fill("white");
    rect(500,20,400,50);
    fill("black");
    text("Find the remote",500,60);
    textSize(50);
    
//imgs[curImg7].check();
//imgs[curImg7].display();
    
    
//function mousePressed(){
//if (imgs[curImg7].check() == true){
   // soundFile1.play;
}    
    

    

    
   
   // fill("white");
    //rect(500,20,400,50);
    //fill("black");
   // text("Find the eggs",500,60);
    //textSize(50);
    
    
    // fill("white");
    //rect(500,20,400,50);
    //fill("black");
   // text("Find the dog",500,60);
    //textSize(50);
    
    

    
    //curImg8.check());
    
    //this.mousePressed(){
       //if(curImg8.check() == true){
    // soundFile1.play; 
    //}
    
    
     ///if(curImg8.check() == true){
       // soundFile1.play;
         
         
         
     //}   
        
    
    
    

