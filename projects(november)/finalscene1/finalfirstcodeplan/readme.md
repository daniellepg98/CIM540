This program is a timed game that lets the user know what to look for in a scene. There are various scenes and various objects the user has to search for. The scenes are a kitchen, living room and a park. The program will include:


List variables: imgs, counter, timeleft, soundfiles

-create array of all images and background image: with their x, y coordinates, size

 Function preload sound files

-text input with counter to show time left

-use an if statement: if time left=0, text input: you lose and sound playing “you lose”

-else if time left is not 0 or all items are selected: move onto next scene

-mouse pressed function to also check the items clicked

-use scenemanager to go through scenes and make separate sketches for each scene to put into the main sketch



First, I'll make an array of all the objects in the scene as well as the scene itself, then I'll start with making a timer, using a counter so it goes off every second. This time left will be displayed using a text input on the top of the screen. Using an if statement, if the time left=0, a message will say "you lose," an else statement saying that if the time left is not 0 (after checking that you clicked on all the objects) a motion to move onto the next level

I will also need messages on the screen telling the user what to look for, for example: "the red chair," "the dog," "eggs." After each time they click on the right object I will use the mousepressed function and an if statement saying that if the mouse's location is on that object they are correct and the following message for the next object will pop up. The last object for them to find will then motion to move onto next level, if its the last level, then text will pop up: “you win”

