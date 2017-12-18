This program is a timed game that lets the user know what to look for in a scene. There are various objects the user has to search for. 

The program will include:

List variables: imgs, counter, timeleft, soundfiles, levels, curLevel

-create array of all images and background image: with their x, y coordinates, size

-also call the items as part of a "levels" variable so the program can know which images the user is clicking on

Function preload sound files

Under function setup:

-text input with counter to show time left (var timeleft= how long the timer goes for)

-var timer: which is taken from a timer created in a paragraph in the html code

a sound file of a ticking timer will play as the timer goes off

-use an if statement: if counter==timeleft:
the timer and its sound will stop and the sound indicating the user lost will play
text input: you lose (from the html) 


-mouse pressed function to also check the items clicked using the levels[] using a curlevel++, and if all the levels are clicked to reset back to curlevel=0 and to indicate to the user that they won the game (with a text input and a sound effect)


First, I'll make an array of all the objects in the scene as well as the scene itself, then I'll start with making a timer, using a counter so it goes off every second. This time left will be displayed using a text input on the top of the screen. Using an if statement, if the time left=0, a message will say "you lose." 

I will also need messages on the screen telling the user what to look for, for example: "the red chair," "the dog," "eggs." After each time they click on the right object I will use the mousepressed function and an if statement saying that if the mouse's location is on that object they are correct and the following message for the next object will pop up. The last object for them to find will then motion to move onto next level, if its the last level, then text will pop up: “you win." 

I definitely had some trouble figuring out how to add the scenes given the levels array because each object is in the array and I am not entirely sure how to change the entire scene. As of now the game just includes one scene. I had trouble creating another scene without the program crashing. So as of now this is the closet I got to my goal. I tried to add a little more interaction with the sounds (including the dog barking). A lot of the commented out code is code that didn't work when I tried.