import React, { Component } from "react"
import { Link } from "react-scroll";

import HamburgerButton from "./HamburgerButton";
import HamburgerMenu from "./HamburgerMenu"

class Nav extends Component {
    state={
      hamburgerMenuOpen: false
    }

    hamburgerClickHandler = () => {
      this.setState((prevState) => {
        return {hamburgerMenuOpen: !prevState.hamburgerMenuOpen}
      })
    }

    closeClickHandler = () => {
      this.setState({hamburgerMenuOpen: false})
    }
    
    render() {
      let hamburgerMenu
      let hamburgerButton = ["hamburger-button"]

      if (this.state.hamburgerMenuOpen) {
        hamburgerMenu = <HamburgerMenu click={this.closeClickHandler}/>
        hamburgerButton = ["hamburger-buttonOpen"]
      }
      return (
          <header className="menubar">
            <nav className="navbar" id="navbar">
              <div>
                <HamburgerButton hamburgerClickHandler={this.hamburgerClickHandler}/>
                {hamburgerMenu}
              </div>
                <div className="spacer" />
                <div className="navbar-items">
                    <ul>
                        <li>
                        <Link activeClass="active" to="hello" spy={true} smooth={true} offset={0} duration= {1000}
                        >Home
                        </Link>
                        </li>
                        <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration= {1000}
                        >About me
                        </Link>
                        </li>
                        <li>
                        <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={0} duration= {1000}
                        >Portfolio
                        </Link>
                        </li>
                        <li>
                        <Link activeClass="active" to="resume" spy={true} smooth={true} offset={0} duration= {1000}
                        >Resume
                        </Link>
                        </li>
                        <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration= {1000}
                        >Contact
                        </Link> 
                        </li> 
                    </ul>   
                </div>
            </nav>
        </header>
      );
    }
  }

export default Nav