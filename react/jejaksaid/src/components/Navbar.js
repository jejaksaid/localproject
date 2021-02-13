import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
    
    
    
    return (
        <>
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'>
                <b>Jejak</b>Said
                <i className="fab-fa-typo3"></i>
                </Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar
