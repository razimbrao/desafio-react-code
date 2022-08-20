import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <nav>
                <ul>
                    <div className='logo'>
                        <Link to='/'>
                            <img src='/img/logo.png' alt='logo da empresa'/>
                        </Link>
                    </div>
                    <div className='links'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contato</Link>
                        </li>
                    </div>
                    <div className='login'>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;