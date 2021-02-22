import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const[click, setClick] = useState(false);
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
            <nav className="navbar">
                <div className="navbar-container" onClick={closeMobileMenu}>
                    <Link to='/' className=''>
                        <b>Github</b>Pages
                        <i className="logoH"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i  className={click ? 'fas fa-times' : 'fas-fa-bars' } />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                                Portfolio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/testimonials' className='nav-links' onClick={closeMobileMenu}>
                                Testimonials
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/articles' className='nav-links' onClick={closeMobileMenu}>
                                Articles
                            </Link>
                        </li>

                        <li>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Get In Touch
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle=''>Get In Touch</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
