import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {   
    return (
      <nav>
      <div className="menu">
            <img className='logo' src={'/images/logo.png'} />
            <Link to="/" className="menulink"><strong>Home</strong></Link>
            <Link to="/info" className="menulink"><strong>Packs &amp; Prices</strong></Link>
            <Link to="/gallery" className="menulink"><strong>Gallery</strong></Link>
            <Link to="/contact" className="menulink"><strong>Contact</strong></Link>
      </div>
      </nav>
    )
  }

export default Nav