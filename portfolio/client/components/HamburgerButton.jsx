import React from 'react'

const hamburgerButton = props => (
    <button className="hamburger-button" onClick={props.hamburgerClickHandler}>
        <div className="hamburger-line" />
        <div className="hamburger-line" />
        <div className="hamburger-line" />
    </button>
)

export default hamburgerButton