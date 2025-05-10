import React from 'react'
import logo from '../assets/logo.png';
import '../components/Header.css'
const Header = () => {
    return (
        <header>
            <nav>
                <div className='main-logo'>
                    <img src={logo} alt="logo" style={{ width: '100px' }} />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
