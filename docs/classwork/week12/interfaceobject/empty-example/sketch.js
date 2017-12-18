var interfaceItems = [];

function setup(){
    createCanvas(400,400);

    interfaceItems.push(new interface(100,100,50,color(255,0,0)));
    interfaceItems.push(new interface(200,100,50, color(0,255,0)));
    
    var brushSize =10; 
}


function draw(){
    
    //brush tool
    fill(0);
    ellipse(mouseX, mouseY, brushSize, brushSize);
    
    interfaceItems[0].display();
    
    interfaceItems[0].display();
     interfaceItems[1].display();
    interfaceItems[0].check();
    interfaceItems[1].check();
    
    //console.log (interfaceItems[0].check);
    
   // if(interfaceItems[0].check() == true){
    //interfaceItems[0].overlay == true;
   // }else{
      //  interfaceItems[0].overlay == false;
    }
        
    
    
    


function mousePressed(){

    if(interfaceItems[0].check() == true){
        brushSize++;
            
        
    }
    
    if(interfaceItems[1].check() == true){
        brushSize--;
    }
    
}

function interface(tempX, tempY, tempBoxSize, tempColor){

this.x = tempX;
this.y = tempY;
this.boxSize = tempBoxSize;
this.setFill = tempColor;
this.overlay = false;    

this.display = function(){
//true=black/gray, false=back to red
fill(this.setFill);
rect(this.x, this.y, this.boxSize, this.boxSize); 
   
    if(this.overlay == true){
fill(127);
rect(this.x, this.y, this.boxSize, this.boxSize)
        
 }  
}   
    


//check if mouse is within box area: first point x, second point: x + box size 
this.check = function(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize) )
return true;
}else {
    return false;   
}
}

