function Intro()

{
    
    
    this.draw = function()
    
    {
        
        
       image (this.SceneManager.bkImage, 0, 0);
       
        drawIntroScreen();
        
        
    }
    
    
    this.keyPressed = function()
    
    {
        
        if (key == '1' || key == '2' )
        
        this.sceneManager.showScene (Game, key)    
    }
    
    function drawIntroScreen()
    
    {
        
        
       textSize(24);
        textAlign(CENTER);
        fill("yellow");
        text("Find the objects", width / 2, 50);  
        
        
        text("Press key 1 or 2 to begin the game");
    }
}