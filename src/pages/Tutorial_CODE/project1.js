import React, {Component} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/styles/hljs';
import Iframe from 'react-iframe';
import Codepen from 'react-codepen-embed';
// import tutorials from './Tutorial_CODE/tutorials';

const CodepenEmbedded = () => {
  return (
    <Codepen
      hash="JyxeVP"
      user="shettypuneeth"
    />
  );
}



const Loading = (props) => {
  if (props.error) {
    return (
      <div>Error</div>
    );
  } else {
    return (
      <div>Loading...</div>
    );
  }
}



//
// const Tut7 = () => {
//   return <SyntaxHighlighter language='javascript' style={zenburn}>{`/*
// —simple noise generator with spectrum
// —designed by Dan Tramte
// —The Audio Programmer Browser Noise tutorial series
// */
//
// //========================//
// //global declarations
//
// let mrNoisy; //noise object
// let chooseNoise, setVolume, toggleOnOff; //dom element
// let fft;
//
// //========================//
// //initializations take place in setup function
//
// function setup() {
//   //create canvas; prepare shape to draw with no stroke and a white fill
//   createCanvas(400, 200);
//   noStroke();
//   fill('white');
//
//   //assign & init p5 audio objects
//   mrNoisy = new p5.Noise();
//   mrNoisy.amp(0);
//   fft = new p5.FFT();
//
//   //create button; define callback
//   toggleOnOff = createButton('play').position(10, 10).style('font-family', 'courier'); //caveat: better to style in ccs rather than js
//   toggleOnOff.mousePressed(function() {
//     if (mrNoisy.started) {
//       mrNoisy.stop();
//       toggleOnOff.html('play');
//     } else {
//       mrNoisy.start();
//       toggleOnOff.html('stop');
//     }
//   });
//
//   //create dropdown menu & options; define callback
//   chooseNoise = createSelect().position(60, 10).style('font-family', 'courier'); //caveat: better to style in ccs rather than js
//   chooseNoise.option('white');
//   chooseNoise.option('pink');
//   chooseNoise.option('brown');
//   chooseNoise.changed(function() {
//     mrNoisy.setType(chooseNoise.value());
//     fill(chooseNoise.value())
//   });
//
//   //create slider in dB units; define callback
//   setVolume = createSlider(-60, 0, -60, 1).position(130, 10);
//   setVolume.input(function() {
//     if (setVolume.value() > -56) {
//       mrNoisy.amp(pow(10, setVolume.value() / 20), 0.1);
//     } else {
//       mrNoisy.amp(map(setVolume.value(), -60, -56, 0, 0.0016), 0.1);
//     }
//   });
// }
//
//
// //========================//
// //draw loop fires continuously at approx 60 frames per second
//
// function draw() {
//   background(80);
//
//   //every frame, create an array containing spectrum data from fft
//   let spectrum = fft.analyze();
//
//   //DRAW spectrum shape logarithmically
//   beginShape();
//     vertex(0, height);
//     for (let i = 0; i < spectrum.length; i++) {
//       vertex(
//         map(log(i), 0, log(spectrum.length), 0, width), //x axis
//         map(spectrum[i], 0, 255, height, 0) //y axis
//       );
//     }
//     vertex(width, height);
//   endShape();
// }
//
// //========================//
// //resume audio context upon user event
// //new google autoplay policy: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
//
// function touchStarted() {
//   if (getAudioContext().state !== 'running') {
//     getAudioContext().resume();
//   }
// }`}</SyntaxHighlighter>;
// }

//https://datramt.github.io/browser-noise-Project-1/

//short-hand for single-line only... i guess(?)
// class HiLite extends Component {
//     render() {
//         const {code} = this.props;
//         return <SyntaxHighlighter language='javascript' style={zenburn}>{code}</SyntaxHighlighter>;
//     }
// }

// <Iframe url="https://datramt.github.io/browser-noise-Project-1/"
//     width="750px"
//     height="220px"
//     id="myId"
//     className="myClassname"
//     display="initial"
//     position="relative"
//     scrolling="no"
//     allowFullScreen/>

//Should be able to pass hash into codepen component
class Project1 extends Component {
    render() {
        return (
            <div>
            <h3>{"Make noise in your browser using p5.js sound library"}</h3>

            <hr/>
            <h4>{"TUTORIAL 1"}</h4>
            <p>{"make an account at "}<a href="http://alpha.editor.p5js.org">p5.js web editor</a>{" and follow along:"}</p>
            <p>{"declare and assign a p5 noise object to a variable called 'mrNoisy', then within the setup function, set the noise type and amplitude by calling methods .setType() and .amp(). Then call the .start() method."}</p>
            <p>{"see how this is done below, although, do note that I have commented out the mrNoisy.start() to spare your ears ;)"}</p>
            <Codepen
              hash="PawjEa"
              themeId="Panda"
              user="datramt"
              height="220px"
              defaultTab="js"
              preview="false"

              loader={() => <div>Loading...</div>}
            />
            <p>{"congratulations, you have just made noise in the web browser ;) See tutorial video below"}</p>
            <Iframe url="https://www.youtube.com/embed/Rpl2-BEsX5M"
                width="750px"
                height="422px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                scrolling="no"
                allowFullScreen/ >
            <hr/>
            <h4>{"TUTORIAL 2"}</h4>
            <p>{"Using the p5.Dom library, add buttons to turn on and off the noise. Position the buttons, and define the event listeners"}</p>
            <p>{"If you want to see a live demo of this code, simply hit the RESULT tab in the codepen below"}</p>
                <Codepen
                  hash="RJNgmJ"
                  user="datramt"
                  themeId="Panda"
                  height="400px"
                  defaultTab="js"
                  preview="false"
                  loader={() => <div>Loading...</div>}
                />
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
            <Codepen
              hash="wXBqGL"
              user="datramt"
              themeId="Panda"
              height="700px"
              defaultTab="js"
              preview="false"
              loader={() => <div>Loading...</div>}
            />
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
            <Iframe url="https://www.youtube.com/embed/u_atkqBViN4"
                width="750px"
                height="422px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                scrolling="no"
                allowFullScreen/>
            <hr/>
            <h4>{"TUTORIAL 5"}</h4>
            <p>{"Declare and assign a p5.FFT() object to a variable, fft, in order analyze the sound. fft.analyze() will output an array containing 1024 values, each representing a frequency bin of the audio spectrum. Use a for loop to loop through the array, and plot that data onto the canvas."}</p>
            <Codepen
              hash="NzPvpP"
              user="datramt"
              themeId="Panda"
              height="700px"
              defaultTab="js"
              preview="false"
              loader={() => <div>Loading...</div>}
            />
            <hr/>
            <h4>{"TUTORIAL 6"}</h4>
            <p>{"Adjust the volume slider so as to make its input in units of decibels using the formula"} <code>amplitude = 10^(decibels/20)</code>{". Take the log of the spectrum index in order to plot the freqency logarithmically."}</p>
            <Codepen
              hash="ERawje"
              themeId="Panda"
              user="datramt"
              height="700px"
              defaultTab="js"
              preview="false"
              loader={() => <div>Loading...</div>}
            />
            <hr/>
            <h4>{"TUTORIAL 7"}</h4>
            <p>{"Rather than drawing points, we can connect each point by changing 'point' to 'vertex' and wrapping a beginShape() endShape(). Let's now make it so that when the user changes the color of the noise, that color string is also passed into the fill() function. Finally, we'll add an event listener to resume the audio context for browser that suspend them automatically."}</p>
            <Codepen
              hash="bKNoxY"
              themeId="Panda"
              user="datramt"
              height="700px"
              defaultTab="js"
              preview="false"
              loader={() => <div>Loading...</div>}
            />
            </div>
        )
    }
}

export default Project1;
