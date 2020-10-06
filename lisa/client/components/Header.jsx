import React from 'react'
import Nav from './Nav'


const Header = () => {
  return (
    <>
    <div className="headercontainer">
        <img className='logo' src={'/images/logo.png'} />
        <Nav />
        {/* <div className="topbannercontainer">
          <img className='topbanner' src={'/images/topbanner2.png'} /> <img className='topbanner' src={'/images/topbanner.png'} />
        </div> */}
    </div>
    </>
  )
}

export default Header
