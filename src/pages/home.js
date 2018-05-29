import React, {Component} from "react";

class Home extends Component {
    render() {
        return (
            <div>
            <h3>{"Browser Noise Project repository"}</h3>
            <p>{"This is a web audio learning resource with a focus on creative coding. Many of these projects will be built using "}<a href="https://tonejs.github.io/">Tone.js</a>{" and "}<a href="https://p5js.org/">p5.js</a>{". We will cover fundamental concepts of sound and code, and in the meantime, make fun audio apps that will run directly in the browser"}</p>
            <p>{"If you don't already have a preferred IDE, you can get up and running within seconds by making an account in this "}<a href="http://alpha.editor.p5js.org">p5.js web editor</a></p>
            <p>{"All of the videos and examples in this repository—as well as the repository itself—are designed by "}<a href="http://www.dantramte.com">Dan Tramte</a>{". The videos are hosted on Josh Hodge's YouTube channel, "}<a href="https://www.youtube.com/channel/UCpKb02FsH4WH4X_2xhIoJ1A">The Audio Programmer</a></p>
        </div>
        )
    }
}

export default Home;
