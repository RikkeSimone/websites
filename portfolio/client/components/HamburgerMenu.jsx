import React from 'react'
import { Link } from "react-scroll";

const hamburgerMenu = props => (
    <nav className="hamburger-menu">
        <ul>
        <li>
            <Link activeClass="active" to="hello" spy={true} smooth={true} offset={0} duration= {1000}
            onClick={props.click}>Home
            </Link>
            </li>
            <li>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration= {1000}
            onClick={props.click}>About me
            </Link>
            </li>
            <li>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={0} duration= {1000}
            onClick={props.click}>Portfolio
            </Link>
            </li>
            <li><Link activeClass="active" to="resume" spy={true} smooth={true} offset={0} duration= {1000}
            onClick={props.click}>Resume
            </Link>
            </li>
            <li>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration= {1000}
            onClick={props.click}>Contact
            </Link> 
            </li> 
        </ul>
    </nav>

)

export default hamburgerMenu