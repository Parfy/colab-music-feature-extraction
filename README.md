# Visualisation of Music Features

The project analyses a music track to extract features such as beats and pitch. The output from the analysis is then visualised live while the track plays. 

## [Visualisation Live Demo](https://parfy.github.io/Live%20Demos/Audio%20Wave%20Viz/index.html)

## Built With

* [Python in Colab](https://colab.research.google.com/)
* [Essentia](https://essentia.upf.edu/) - Python library for music feature analysis
* [p5js](https://p5js.org/) - Live visualisation in the html5 canvas

## Motivation

I've seen many examples of music visualisation that use only the frequency information and draw a version of an equaliser. I wanted to look into ways to extract more information from the track with a view to visualising something that more closely represents how we perceive the sounds. 
The second issue I wanted to solve for was that doing realtime analysis of the track as it plays seems to work well for some low-level features but doesn't offer much in the way of high-level feature extraction, so I looked into offiline analysis techniques. 

## Getting Started

Start with the colab file. I connected to a hosted runtime which makes setting up your environment easier, but adds a couple of steps to move local files up onto the hosted machine and get the output back off again - these steps are already included.

Choose a music track that you have the .mp3 or .wav file for. I used pop/dance tracks - you'll want to try a track that has a decent bpm and vocals because my analysis focussed on these aspects. 

Running the third cell should make a small 'Choose file' button appear which is easy to miss (see screenshot below) - click this, choose your track and wait for the upload to finish. Run the rest of the cells. You should have a zip file downloaded containing 2 text files a new mp3 file for debugging beats. IMPORTANT: Add your original music track file to this folder too!


![screenshot](/ColabScreenshot.png)


You can now swap out the assets folder in my example for your new project version. Edit the play.js file to reference your track file name and also the debugging file. Fire up a local web server (I use simplehttpserver), open the index.html file in a browser and hopefully you'll have the wavy visualisation like this screenshot. Click the screen to start the track. 


![The Viz](/AudioWaveScreenshot.png)

### Prerequisites

I used hosted [Google Colab](https://research.google.com/colaboratory/faq.html) for the music feature extraction. You can use Colab or Jupyter without much fuss.

### Try for yourself

My visualisation uses the beats data to change the background colour and the pitch data to change how the curve is drawn.

You could try:

* Changing the parameters of the wave
* Changing the colours 
* Changing how the music feature data is used in the viz
* Swapping in your own visualation
* Extending the analysis to get more features

## Acknowledgments

* Thanks to the Essentia team - most of the python code for the analysis is taken straight from their examples


