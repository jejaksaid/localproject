import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
    
    
    
    return (
        <>
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'>
                <b>Jejak </b> Said
                <i className="fab-fa-typo3"></i>
                </Link>
                <div className="menu-icon">
                    <i className={click ? "fas fa-times" : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : "nav-menu active"}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/portfolio' className='nav-links'>

                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
