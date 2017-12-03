Sound library: 

The sound library lets you load and play sound files, adjust the volume, use a microphone to get a sound, analyze frequency, generate sound waves, and several more options. 


1. To load a sound, you call it in the function preload() {

}

For example: 

soundfile = loadsound(assets/yoursoundhere.mp3);

you can set volume by saying soundfile.setvolume(volume goes here)

and you can start or stop the sound from playing: soundfile.play() and soundfile.stop()

2. You can call it outside the preload but there will be a callback

 Here are the functions to use:
 
 successCallback, errorCallback, whileLoading
 
 successCallback = name of a function to call when the file loads
 
 errorCallback = name of a function to call if there is an error loading the file
 
 whileLoading = name of a function to call while file is loading; this function will receive the percentage loaded so far, from 0.0 to 1.0
 
3. A path to a sound file involves the path to a soundfile in multiple formats like mp3 or ogg for example, you call it 'yoursoundhere.mp3'

4. The syntax for the sound in your code:

loadSound(path,[successCallback],[errorCallback],[whileLoading])

