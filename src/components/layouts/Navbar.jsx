import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <nav>
                <ul>
                    <div className='logo-nav'>
                        <Link to='/'>
                            <img src='/img/asta/asta-banner-main.png' alt='logo da empresa'/>
                        </Link>
                    </div>
                    <div className='links-nav'>
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
                    <div className='login-nav'>
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