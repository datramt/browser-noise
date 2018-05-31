import React, {Component} from 'react';
import logo from './bnLOGO.png';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";

//import pages
import Home from './pages/home';
import Project1 from './pages/Tutorial_CODE/project1';
// import Testingp5 from './pages/Tutorial_CODE/testingp5'; 


const routes = [
  {
    path: "/",
    exact: true,
    content: () => <Home />,
    subtitle: () => <h4>Home</h4>
  },
  {
    path: "/project 1",
    content: () => <Project1 />,
    subtitle: () => <h4>Project 1</h4>
  },
  {
    path: "/project 2",
    content: () => <div>
    <h3>Make a drum machine?</h3> <p>(coming soon!)</p></div>,
    subtitle: () => <h4>Project 2</h4>
  }
];

class App extends Component {

    constructor(props) {
        super(props);
        console.log('constructor')
    }

    componentWillMount() {
        console.log('will mount')
    }

    componentDidMount() {
        console.log('mounted')
    }


  render() {
    return (
        <Router>

            <div className="App">
                <header className="App-header" style={{ display: "flex" }}>
                    <div className="HeadLeft">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="App-title">
                        <h1>Browser Noise Project Repository</h1>

                        {routes.map((route, index) => (

                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.subtitle}
                            />
                        ))}
                    </div>
                </header>

                <body className="App-body">
                    <div className="App-nav">
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/project 1">Project 1</Link>
                            </li>
                            <li>
                                <Link to="/project 2">Project 2</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="App-content">
                        {routes.map((route, index) => (
                            <Route
                              key={index}
                              path={route.path}
                              exact={route.exact}
                              component={route.content}
                            />
                        ))}
                    </div>
                </body>
            </div>
        </Router>
    );
  }
}

export default App;
