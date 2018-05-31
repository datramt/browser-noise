import React, {Component} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/styles/hljs';
import Iframe from 'react-iframe';
import Codepen from 'react-codepen-embed';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
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
class Testingp5 extends Component {
    constructor(props) {
		super(props);
		this.state = {
			rotation: 150,
			stateSketch: sketch,
		};
	}

	rotationChange(e){
		this.setState({rotation:e.target.value});
	}

	pressEvent(){
		this.state.stateSketch === sketch ? this.setState({stateSketch:sketch}) : this.setState({stateSketch:sketch});
	}

	render () {
		return (
			<div>
				<P5Wrapper sketch={this.state.stateSketch} rotation={this.state.rotation}/>
				<input type="range" value={this.state.rotation}  min="0"  max="360" step="1" onInput={this.rotationChange.bind(this)}/>
				<button onClick={this.pressEvent.bind(this)}>Change Sketch</button>
			</div>
		);
	}
}

export default Testingp5;




// export default function sketch (p) {
//   let rotation = 0;
//
//   p.setup = function () {
//     p.createCanvas(600, 400, p.WEBGL);
//   };
//
//   p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
//     if (props.rotation){
//       rotation = props.rotation * Math.PI / 180;
//     }
//   };
//
//   p.draw = function () {
//     p.background(100);
//     p.noStroke();
//     p.push();
//     p.rotateY(rotation);
//     p.box(100);
//     p.pop();
//   };
// };
