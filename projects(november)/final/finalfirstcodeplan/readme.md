This program is a timed game that lets the user know what to look for in a scene. There are various scenes and various objects the user has to search for. The scenes are a kitchen, living room and a park. The program will include:


An array that includes all the items: with their x, y coordinates, n

Timer that will go off for every second:

-using the millis function

-counter++

level 1 (total time) - counter = timeleft

-text input to show timeleft

-use an if statement: if time left=0, text input: you lose

-else if time left is not 0, text: you win

motion to move onto next level

First, I'll make an array of all the objects in the scene as well as the scene itself, then I'll start with making a timer, using the millis function I'll make sure the timer goes off every second. I'll then make a timeleft function which equals level 1's total time- counter. This time left will be displayed using a text input on the top of the screen. Using an if statement, if the time left=0, a message will say "you lose," an else statement saying that if the time left is not 0 (after clicking on all the objects) a message saying that the person wins. I will also need messages on the screen telling the user what to look for, for example: "the red chair," "the dog," "eggs." After each time they click on the right object I will use the mousepressed function and an if statement saying that if the mouse's location is on that object they are correct and the following message for the next object will pop up. The last object for them to find will then pop up the message for "you win" but this is also only if the time left is not equal to zero. I will do the same for the following scenes

