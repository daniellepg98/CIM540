

var imgs = {};  // Declare variable 'img'.


    
  

function setup() {
   createCanvas(1000, 710);
       
  var curImg = loadImage("assets/dog.png");
  imgs["dog"] = {"x":8,"y":500.5, "image":curImg};
    // Load the image
    
    
var curImg3 = loadImage("assets/pan.png");
  imgs["pan"] = {"x3":513.00,"y3":160.50, "image":curImg3};
    // Load the image
    
     var curImg2 = loadImage("assets/eggs.png");
  imgs["eggs"] = {"x2":513.00,"y2":161.50, "image":curImg2};
    // Load the image
    
    var curImg4 = loadImage("assets/plates.png");
  imgs["plates"] = {"x4":600.50,"y4":69.50, "image":curImg4};
    // Load the image
    
     var curImg5 = loadImage("assets/kitchen!.jpg", (2000,1420));
  imgs["kitchen"] = {"x5": 0,"y5": 0, "image":curImg5};
    
        var curImg6 = loadImage("assets/flowers.png");
  imgs["flowers"] = {"x6":350.50,"y6":200.50, "image":curImg6};
    
    var curImg7 = loadImage("assets/redstool.png");
  imgs["redstool"] = {"x7":100.50,"y7":450.5, "image":curImg7};
    
    
     var curImg8 = loadImage("assets/bluestools.png");
  imgs["bluestools"] = {"x8":200.50,"y8":470.5, "image":curImg8};
    // Load the image
    
    
}

function draw() {
    
 
    
// Displays the image at its actual size at point (0,0)
    
    image(imgs["kitchen"].image, imgs["kitchen"].x5, imgs["kitchen"].y5, imgs["kitchen"].image.width, imgs["kitchen"].image.height);
    
  image(imgs["dog"].image, imgs["dog"].x, imgs["dog"].y, imgs["dog"].image.width, imgs["dog"].image.height);
    
 
    
     image(imgs["pan"].image, imgs["pan"].x3, imgs["pan"].y3, imgs["pan"].image.width, imgs["pan"].image.height);
    
    image(imgs["eggs"].image, imgs["eggs"].x2, imgs["eggs"].y2, imgs["eggs"].image.width, imgs["eggs"].image.height);
    
     image(imgs["plates"].image, imgs["plates"].x4, imgs["plates"].y4, imgs["plates"].image.width, imgs["plates"].image.height);
    
      image(imgs["flowers"].image, imgs["flowers"].x6, imgs["flowers"].y6, imgs["flowers"].image.width, imgs["flowers"].image.height);
    
     image(imgs["redstool"].image, imgs["redstool"].x7, imgs["redstool"].y7, imgs["redstool"].image.width, imgs["redstool"].image.height);
    
    image(imgs["bluestools"].image, imgs["bluestools"].x8, imgs["bluestools"].y8, imgs["bluestools"].image.width, imgs["bluestools"].image.height);
}
