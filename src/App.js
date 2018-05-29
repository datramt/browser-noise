import React, {Component} from 'react';
import logo from './bnLOGO.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import pages
import Project1 from './pages/Tutorial_CODE/project1';
import Home from './pages/home';

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
                          // Render more <Route>s with the same paths as
                          // above, but different components this time.
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
                            // You can render a <Route> in as many places
                            // as you want in your app. It will render along
                            // with any other <Route>s that also match the URL.
                            // So, a content or breadcrumbs or anything else
                            // that requires you to render multiple things
                            // in multiple places at the same URL is nothing
                            // more than multiple <Route>s.
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

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <BNtitle bntitle="Browser Noise" toggle={this.state.toggle} />
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   {this.state.toggle && <p>This should show and hide</p>}
      //
      //   <button onClick={this.toggle}>Show / Hide</button>
      // </div>
    );
  }
}


// class BNtitle extends Component {
//     render() {
//         const {bntitle} = this.props
//         return (
//             <h1 className="App-title">{bntitle}</h1>
//         )
//     }
// }

export default App;
