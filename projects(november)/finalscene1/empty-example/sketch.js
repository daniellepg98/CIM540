var imgs = [];  // Declare variable 'img'.

//var imgs2 = [];

//var sounds = [["soundFile2"], ["soundFile3"]];

var counter = 0;

var timeleft;

var soundFile;

var levels = [["pan"], ["dog"], ["redstool"], ["flowers"], ["eggs"], ["plates"]];
              
//var levels2 = ["living room,"], ["remote"], ["picframe"]];

var curLevel = 0;

//var hitZoneX=513;
////
//var hitZoneY=160.5;
//
////var dist;
//
////var mouseX;
//
////var mouseY;


function preload() {
    
soundFile1 = loadSound('assets/youlose.mp3');
    
soundFile2 = loadSound('assets/eggfrying.mp3');
    
soundFile3 = loadSound('assets/dog.mp3');
    
soundFile4 = loadSound('assets/timer.mp3'); 
    
soundFile5 = loadSound('assets/yay.mp3');  

soundFile6 = loadSound('assets/tryagain.mp3');
    
food = loadImage("assets/food.jpg");    
    
    
 
}

function setup() {
    
var timeleft = 30; //make it 30 
   

var interval= setInterval(timeIt, 1000);
    
var timer = select('#timer');
   
soundFile4.play();    
timer.html(timeleft - counter);// && "time left";

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
  }
//      else if(counter < timeleft && curLevel >= levels.length){
//          soundFile4.stop();
//          clearInterval(interval);
    
              
              
              
              }
      
   
      //go to next scene
      //counter = 0;
      //check if you select them
  


createCanvas(1000, 710);
 
    
    var curImg3 = loadImage("assets/pan.png");
  imgs["pan"] = {"x":513.00,"y":160.50, "image":curImg3};
    // Load the image
    
  var curImg = loadImage("assets/dog.png")
  imgs["dog"] = {"x":8,"y":500.5, "image":curImg};
    
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
 imgs["redstool"] = {"x":500.50,"y":435.5, "image":curImg7};
//    
//    
 var curImg8 = loadImage("assets/pinkstools.png");
imgs["pinkstools"] = {"x":65.50,"y":450.5, "image":curImg8};
    
    // Load the image
    

    
    ///////
    
//    var curImg = loadImage("assets/remote.png");
//  imgs2["remote"] = {"x":8,"y":500.5, "image":curImg};
//    // Load the image
//    
// var curImg2 = loadImage("assets/picframe.png");
//  imgs2["picframe"] = {"x":513.00,"y":161.50, "image":curImg2};
//    // Load the image
//    // Load the image
//    
//     var curImg4 = loadImage("assets/livingroom!!.jpg", (2000,1420));
//  imgs2["livingroom"] = {"x": 0,"y": 0, "image":curImg4};

      
//function mousePressed(){
//if (curImg7.clicked();
 //  )
//}
}

function draw() {

//add in mousepressed function       
    
// Displays the image at its actual size at point (0,0)
//  
   //if(curLevel == 0 or 1 or 2 or 3 or 4){
          image(imgs["kitchen"].image, imgs["kitchen"].x5, imgs["kitchen"].y5, imgs["kitchen"].image.width, imgs["kitchen"].image.height);
   // }elseif(curLevel == 1){
        
   // }

// 
    
        image(imgs["pan"].image, imgs["pan"].x, imgs["pan"].y, imgs["pan"].image.width, imgs["pan"].image.height);
  image(imgs["dog"].image, imgs["dog"].x, imgs["dog"].y, imgs["dog"].image.width, imgs["dog"].image.height);
    
    
  image(imgs["eggs"].image, imgs["eggs"].x, imgs["eggs"].y, imgs["eggs"].image.width, imgs["eggs"].image.height);
//    
 image(imgs["plates"].image, imgs["plates"].x, imgs["plates"].y, imgs["plates"].image.width, imgs["plates"].image.height);
//    
   image(imgs["flowers"].image, imgs["flowers"].x, imgs["flowers"].y, imgs["flowers"].image.width, imgs["flowers"].image.height);
    
     image(imgs["pinkstools"].image, imgs["pinkstools"].x, imgs["pinkstools"].y, imgs["pinkstools"].image.width, imgs["pinkstools"].image.height);
//    
    image(imgs["redstool"].image, imgs["redstool"].x, imgs["redstool"].y, imgs["redstool"].image.width, imgs["redstool"].image.height);
//    

//    
//    image(imgs2["livingroom"].image, imgs2["livingroom"].x, imgs2["livingroom"].y, imgs2["livingroom"].image.width, imgs2["livingroom"].image.height);
//    
//  image(imgs2["remote"].image, imgs2["remote"].x, imgs2["remote"].y, imgs2["remote"].image.width, imgs2["remote"].image.height);
//    
// 
//    
//     image(imgs2["picframe"].image, imgs2["picframe"].x, imgs2["picframe"].y, imgs2["picframe"].image.width, imgs2["picframe"].image.height);
    
    

    
    var col = color(176,224,230);
textSize(50); 
var button = createButton("Click to find the objects");
button.style("background-color", col);
button.size(150,50);    
button.position(450, 30);
    
 var col = color(176,224,230);
textSize(50); 
var button = createButton("Find the " + levels[curLevel]);
button.style("background-color", col);
button.size(150,50);    
button.position(450, 70);
       
    
//    fill("white");
//    rect(300,20,350,50);
//    fill("black");
//    var levelText = "Find the " + levels[curLevel];
//    text(levelText,300,60);
//    textSize(50);
//    textFont("Helvetica");
//   
    
   }



function mousePressed(){
    for (item in imgs){
       // console.log(item);
       if(mouseX > imgs[item].x && mouseX < (imgs[item].x + imgs[item].image.width) && mouseY > imgs[item].y && mouseY < (imgs[item].y + imgs[item].image.height)){
           console.log(item); 
           
           if(item ==  levels[curLevel]){
              //imgs[item].sound.play();
            
               curLevel++;
               
                }
//           else{
//               
//               soundFile6.play();
//           }
//           
           
           
           
//           if(curLevel >= levels.length){
           
           if(item== levels[1]){
               soundFile3.play();
          //  if(item > levels[1]) {
                
        
            //}  
           
       }
           
         //  if (item== levels[4]){
          //     soundFile2.play();
           //    display.image()
               
           }
           }
                if(curLevel >= levels.length){
                 curLevel=0;    
              var youwin = select('#youwin');
                    
                    
         
                    youwin.html("you win!");
                 soundFile5.play();  
                
                  }
              
          var hitZoneDist = dist(mouseX, mouseY, hitZoneX, hitZoneY);
console.log(hitZoneDist);

//if (hitZoneDist < 40) {
    
    
   // image(food, 200,200)
    
//}
           
            }
    
//    for (item in imgs2){
//        
//        if(mouseX > imgs2[item].x && mouseX < (imgs2[item].x + imgs2[item].image.width) && mouseY > imgs2[item].y && mouseY < (imgs2[item].y + imgs2[item].image.height)){
//           console.log(item); 
//    }

        
            
        

  
    


    

