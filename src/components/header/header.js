import React, { useState } from 'react'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={process.env.PUBLIC_URL + '/img/y-logo-white.png'} />
            <div className="text">
                <h1>Hello I'm Vinita Dewi!</h1>
                <h2>Consult, Design and Develop Websites</h2>
                <p>Have something great in mind? Feel free to contact me. <br />
                I'll help you to make it happen.</p>
                <button className="action-btn">Let's Make Contact</button>
            </div>
        </div>
    )
}

export default Header;