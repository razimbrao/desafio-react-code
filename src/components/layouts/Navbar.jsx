import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <ul className='default-nav'>

                    <div className='logo-nav'>
                        <Link to='/'>
                            <img src='/img/asta/asta-banner-nav.png' alt='logo da empresa' />
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
                        <li>
                            <Link to="/members">Membros</Link>
                        </li>
                    </div>
                    <div className='login-nav'>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </div>
                </ul>
                <ul className='dropdown-nav'>
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li>
                        <Link to="/members">Membros</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;