import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './Nav'
import Home from './Home'
import Info from './Info'
import Footer from './Footer'
import Header from './Header';

import Gallery from './Gallery';
import Contact from './Form';

const App = () => {    
    return (
      <div className="App">
       <Router>
       <Nav />
       <div className="topbannercontainer">
       <div className="maincontainer">
         
          {/* <img className='topbanner' src={'/images/topbanner.png'} /> */}
        </div>
         <div className="compcontainer">
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/info" component={Info}></Route>
              <Route path="/gallery" component={Gallery}></Route>
          </Switch>
          </div>
          <Route path="/" component={Contact}></Route>
          <Footer />
          <div className="copyright"><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Pawsome Pack Adventures 2020 || Created by <a target="_blank" href="https://www.linkedin.com/in/rsjorgensen/">Rikke Jorgensen</a></div>
          </div>
        </Router>
      </div>
    )
    }

export default App