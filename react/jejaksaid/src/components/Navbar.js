import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);
    
    return (
        <>
        <nav className='navbar'>
            <div className="nav bd-container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <b>Jejak </b> Said
                <i className="fab-fa-typo3"></i>
                </Link>
                <div className="menu-icon">
                    <i className={click ? "fas fa-times" : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav__menu active' : "nav__menu active"}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/portfolio' 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about'
                        className='nav-links'
                        onClick={closeMobileMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/testimonials'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Testimonials
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/article'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                            Article
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
