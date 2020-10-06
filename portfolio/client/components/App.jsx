import React, { Component } from "react";

import Nav from "./Nav";
import Hello from "./Hello";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import About from "./About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hello />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default App;