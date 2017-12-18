var interfaceItems = [];

var brushSize = 10;




function preload(){
    
    soundFile = loadSound('assets/soundeffect.mp3');
    soundFile2 = loadSound('assets/soundeffect2.mp3');
    soundFile3 = loadSound('assets/soundeffect3.mp3');
    soundFile4 = loadSound('assets/soundeffect4.mp3');
    
}

function setup(){
  createCanvas(600,600);

  interfaceItems.push(new interface(200,100,50,color(62,221,239)));
  
    interfaceItems.push(new interface(300,100,50,color(0,0,255),));

    interfaceItems.push(new interface(400,100,50, color(62,221,239),)); 

interfaceItems.push(new interface(500,100,50, color (0,0,255),));    

}

function draw(){

  fill(0,0,255);
  ellipse(mouseX, mouseY, brushSize,brushSize);

  interfaceItems[0].display();
  interfaceItems[1].display();
  interfaceItems[0].check();
  interfaceItems[1].check();
interfaceItems[2].display();
    interfaceItems[3].display();
    interfaceItems[2].check();
    interfaceItems[3].check();
    
  console.log(interfaceItems[0].overlay);

  // if(interfaceItems[0].check() == true){
  //   interfaceItems[0].overlay = true;
  // }else{
  //   interfaceItems[0].overlay = false;
  // }


}

function mousePressed(){
    
if(interfaceItems[0].check() == true){
    soundFile.setVolume(1);
    soundFile.play();
    } 
if(interfaceItems[0].check() == false){
    soundFile.stop();
}
if (interfaceItems[1].check() == true){
    soundFile2.setVolume(1);
    soundFile2.play();
    
}
if (interfaceItems[1].check() == false){
    soundFile2.stop();
}
    
    if (interfaceItems[2].check() == true){
    soundFile3.setVolume(1);
    soundFile3.play();
    }
if (interfaceItems[2].check() == false){
    soundFile3.stop();
}
    if (interfaceItems[3].check() == true){
    soundFile4.setVolume(1);
    soundFile4.play();
    }
if (interfaceItems[3].check() == false){
    soundFile4.stop();
}    
}    
    
   

  //if(interfaceItems[0].check() == true){
   // brushSize++;
  //}
    

  //if(interfaceItems[1].check() == true){
   // brushSize--;
  //}

 //if(interfaceItems[2].check() == true){
 //showtext
//if (interfaceItems[3].check() == true){
  //showtext  
    

     



function interface(tempX, tempY, tempBoxSize, tempColor){
  this.x = tempX;
  this.y = tempY;
  this.boxSize = tempBoxSize;
  this.setFill = tempColor;
  this.overlay = false;
    

  this.display = function(){
    //console.log(this.overlay);

    fill(this.setFill);
    ellipse(this.x, this.y, this.boxSize, this.boxSize);

    if(this.overlay == true){
      fill(88,0,0);
      ellipse(this.x, this.y, this.boxSize, this.boxSize);   
        
        
    }



  }

  this.check = function(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize) ){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;

      return false;
    }
  }
}


