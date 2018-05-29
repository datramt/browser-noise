import React, {Component} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/styles/hljs';
import Iframe from 'react-iframe'
// import tutorials from './Tutorial_CODE/tutorials';

const Tut1 = () => {
  return <SyntaxHighlighter language='javascript' style={zenburn}>{`let mrNoisy = new p5.Noise();

function setup() {
  mrNoisy.setType('brown');
  mrNoisy.amp(0.1);
  mrNoisy.start();
}`}</SyntaxHighlighter>;
}

const Tut2 = () => {
  return <SyntaxHighlighter language='javascript' style={zenburn}>{`let mrNoisy;
let playButton, stopButton;

function setup() {
  mrNoisy = new p5.Noise('brown');
  mrNoisy.amp(0.1);

  playButton = createButton('play').position(10, 10).mousePressed(() => {mrNoisy.start()});
  stopButton = createButton('stop').position(10, 30).mousePressed(() => {mrNoisy.stop()});
}`}</SyntaxHighlighter>;
}

const Tut3 = () => {
  return <SyntaxHighlighter language='javascript' style={zenburn}>{`let mrNoisy;
let chooseNoise, setVolume, toggleOnOff;

function setup() {
  mrNoisy = new p5.Noise();
  mrNoisy.amp(0);

  toggleOnOff = createButton('play');
  toggleOnOff.position(10, 10).style('font-family', 'courier');
  toggleOnOff.mousePressed(function() {
  	if (mrNoisy.started) {
    	mrNoisy.stop();
      toggleOnOff.html('play');
    } else {
    	mrNoisy.start();
      toggleOnOff.html('stop');
    }
  });

  chooseNoise = createSelect();
  chooseNoise.position(60, 10).style('font-family', 'courier');
  chooseNoise.option('white');
  chooseNoise.option('pink');
  chooseNoise.option('brown');
  chooseNoise.changed(function() {
  	mrNoisy.setType(chooseNoise.value());
  });

  setVolume = createSlider(0, 1, 0, 0);
  setVolume.position(130, 10).style('font-family', 'courier');
  setVolume.input(function() {
  	mrNoisy.amp(setVolume.value(), 0.1);
  });
}`}</SyntaxHighlighter>;
}

const Tut5 = () => {
  return <SyntaxHighlighter language='javascript' style={zenburn}>{`let mrNoisy;
let chooseNoise, setVolume, toggleOnOff;
let fft;

function setup() {
  createCanvas(400, 200);
  //assign & init p5 sound object
  mrNoisy = new p5.Noise();
  mrNoisy.amp(0);

  fft = new p5.FFT();

  toggleOnOff = createButton('play');
  toggleOnOff.position(10, 10).style('font-family', 'courier');
  toggleOnOff.mousePressed(function() {
    if (mrNoisy.started) {
      mrNoisy.stop();
      toggleOnOff.html('play');
    } else {
      mrNoisy.start();
      toggleOnOff.html('stop');
    }
  });

  chooseNoise = createSelect();
  chooseNoise.position(60, 10).style('font-family', 'courier');
  chooseNoise.option('white');
  chooseNoise.option('pink');
  chooseNoise.option('brown');
  chooseNoise.changed(function() {
    mrNoisy.setType(chooseNoise.value());
  });

  setVolume = createSlider(0, 1, 0, 0); //60dB -60dB -> 0dB
  setVolume.position(130, 10);
  setVolume.input(function() {
	mrNoisy.amp(setVolume.value());
  });

  stroke('white');
  noFill();
}

function draw() {
  background(80);
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {

    point(map(i, 0, spectrum.length, 0, width), map(spectrum[i], 0, 255, height, 0))

  }
}`}</SyntaxHighlighter>;
}

const Tut6 = () => {
  return <SyntaxHighlighter language='javascript' style={zenburn}>{`let mrNoisy;
let chooseNoise, setVolume, toggleOnOff;
let fft;

function setup() {
  createCanvas(400, 200);
  //assign & init p5 sound object
  mrNoisy = new p5.Noise();
  mrNoisy.amp(0);

  fft = new p5.FFT();

  toggleOnOff = createButton('play');
  toggleOnOff.position(10, 10).style('font-family', 'courier');
  toggleOnOff.mousePressed(function() {
    if (mrNoisy.started) {
      mrNoisy.stop();
      toggleOnOff.html('play');
    } else {
      mrNoisy.start();
      toggleOnOff.html('stop');
    }
  });

  chooseNoise = createSelect();
  chooseNoise.position(60, 10).style('font-family', 'courier');
  chooseNoise.option('white');
  chooseNoise.option('pink');
  chooseNoise.option('brown');
  chooseNoise.changed(function() {
    mrNoisy.setType(chooseNoise.value());
  });

  setVolume = createSlider(-60, 0, -60, 1); //60dB -60dB -> 0dB
  setVolume.position(130, 10);
  setVolume.input(function() {
	if (setVolume.value() > -56) {
      mrNoisy.amp(pow(10, setVolume.value() / 20), 0.1);
    } else {
      mrNoisy.amp(map(setVolume.value(), -60, -56, 0, 0.0016), 0.1);
    }
  });

  stroke('white');
  noFill();
}

function draw() {
  background(80);
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {

    point(map(log(i), 0, log(spectrum.length), 0, width), map(spectrum[i], 0, 255, height, 0))

  }
}`}</SyntaxHighlighter>;
}

const Tut7 = () => {
  return <SyntaxHighlighter language='javascript' style={zenburn}>{`/*
—simple noise generator with spectrum
—designed by Dan Tramte
—The Audio Programmer Browser Noise tutorial series
*/

//========================//
//global declarations

let mrNoisy; //noise object
let chooseNoise, setVolume, toggleOnOff; //dom element
let fft;

//========================//
//initializations take place in setup function

function setup() {
  //create canvas; prepare shape to draw with no stroke and a white fill
  createCanvas(400, 200);
  noStroke();
  fill('white');

  //assign & init p5 audio objects
  mrNoisy = new p5.Noise();
  mrNoisy.amp(0);
  fft = new p5.FFT();

  //create button; define callback
  toggleOnOff = createButton('play').position(10, 10).style('font-family', 'courier'); //caveat: better to style in ccs rather than js
  toggleOnOff.mousePressed(function() {
    if (mrNoisy.started) {
      mrNoisy.stop();
      toggleOnOff.html('play');
    } else {
      mrNoisy.start();
      toggleOnOff.html('stop');
    }
  });

  //create dropdown menu & options; define callback
  chooseNoise = createSelect().position(60, 10).style('font-family', 'courier'); //caveat: better to style in ccs rather than js
  chooseNoise.option('white');
  chooseNoise.option('pink');
  chooseNoise.option('brown');
  chooseNoise.changed(function() {
    mrNoisy.setType(chooseNoise.value());
    fill(chooseNoise.value())
  });

  //create slider in dB units; define callback
  setVolume = createSlider(-60, 0, -60, 1).position(130, 10);
  setVolume.input(function() {
    if (setVolume.value() > -56) {
      mrNoisy.amp(pow(10, setVolume.value() / 20), 0.1);
    } else {
      mrNoisy.amp(map(setVolume.value(), -60, -56, 0, 0.0016), 0.1);
    }
  });
}


//========================//
//draw loop fires continuously at approx 60 frames per second

function draw() {
  background(80);

  //every frame, create an array containing spectrum data from fft
  let spectrum = fft.analyze();

  //DRAW spectrum shape logarithmically
  beginShape();
    vertex(0, height);
    for (let i = 0; i < spectrum.length; i++) {
      vertex(
        map(log(i), 0, log(spectrum.length), 0, width), //x axis
        map(spectrum[i], 0, 255, height, 0) //y axis
      );
    }
    vertex(width, height);
  endShape();
}

//========================//
//resume audio context upon user event
//new google autoplay policy: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}`}</SyntaxHighlighter>;
}

//https://datramt.github.io/browser-noise-Project-1/

//short-hand for single-line only... i guess(?)
// class HiLite extends Component {
//     render() {
//         const {code} = this.props;
//         return <SyntaxHighlighter language='javascript' style={zenburn}>{code}</SyntaxHighlighter>;
//     }
// }

class Project1 extends Component {



    render() {
        return (
            <div>
            <h3>{"Make noise in your browser using p5.js sound library"}</h3>
            <Iframe url="https://datramt.github.io/browser-noise-Project-1/"
                width="750px"
                height="220px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                scrolling="no"
                allowFullScreen/>
            <hr/>
            <h4>{"TUTORIAL 1"}</h4>

            <p>make an account at <a href="http://alpha.editor.p5js.org">p5.js web editor</a> and follow along:</p>
            <p>{"declare and assign a p5 noise object to a variable called 'mrNoisy', then within the setup function, set the noise type and amplitude by calling methods .setType() and .amp(). Then call the .start() method."}</p>
            <Tut1/>
            <p>{"congratulations, you have just made noise in the web browser ;) See tutorial below"}</p>
            <Iframe url="https://www.youtube.com/embed/Rpl2-BEsX5M"
        width="750px"
        height="422px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        scrolling="no"
        allowFullScreen/>
    <hr/>
        <h4>{"TUTORIAL 2"}</h4>
        <p>{"Using the p5.Dom library, add buttons to turn on and off the noise. Position the buttons, and define the event listeners"}</p>
        <Tut2/>
            <Iframe url="https://www.youtube.com/embed/OjBcx7OVdCI"
        width="750px"
        height="422px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        scrolling="no"
        allowFullScreen/>
    <hr/>
        <h4>{"TUTORIAL 3"}</h4>
        <p>{"Create two more dom elements: a dropdown menu select, and a slider. Define the options of the dropdown menu by calling the .option() method. Use a .changed() event listener for the menu, and a .input() event listener for the slider. Pass respective values into mrNoisy methods, .setType(), and .amp()"}</p>
        <Tut3/>
            <Iframe url="https://www.youtube.com/embed/wJr5h5wjkoc"
        width="750px"
        height="422px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        scrolling="no"
        allowFullScreen/>
    <hr/>
        <h4>{"TUTORIAL 4"}</h4>
        <p>{"See video regarding... what is even noise?"}</p>
        <p>{"video only (coming soon)"}</p>
        <hr/>
        <h4>{"TUTORIAL 5"}</h4>
        <p>{"Declare and assign a p5.FFT() object to a variable, fft, in order analyze the sound. fft.analyze() will output an array containing 1024 values, each representing a frequency bin of the audio spectrum. Use a for loop to loop through the array, and plot that data onto the canvas."}</p>
        <Tut5/>
        <hr/>
        <h4>{"TUTORIAL 6"}</h4>
        <p>{"Adjust the volume slider so as to make its input in units of decibels using the formula"} <code>amplitude = 10^(decibels/20)</code>{". Take the log of the spectrum index in order to plot the freqency logarithmically."}</p>
        <Tut6/>
        <hr/>
        <h4>{"TUTORIAL 7"}</h4>
        <p>{"Rather than drawing points, we can connect each point by changing 'point' to 'vertex' and wrapping a beginShape() endShape(). Let's now make it so that when the user changes the color of the noise, that color string is also passed into the fill() function. Finally, we'll add an event listener to resume the audio context for browser that suspend them automatically."}</p>
        <Tut7/>
        </div>
        )
    }
}

export default Project1;
