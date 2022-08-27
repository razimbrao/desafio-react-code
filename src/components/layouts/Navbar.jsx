import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    let isOpen = false;

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
                    <div className='drop-main'>
                        <div className='logo-nav'>
                            <Link to='/'>
                                <img src='/img/asta/asta-banner-nav.png' alt='logo da empresa' />
                            </Link>
                        </div>
                        <span className="material-symbols-outlined"
                            onClick={
                                () => {
                                    isOpen = !isOpen;
                                    if (isOpen === true) {
                                        document.querySelector('.drop-links').style.display = 'flex';
                                        document.querySelector('.material-symbols-outlined').textContent = 'close';
                                    } 
                                    if(isOpen === false){
                                        document.querySelector('.drop-links').style.display = 'none';
                                        document.querySelector('.material-symbols-outlined').textContent = 'menu';
                                    }
                                }
                            }
                        >
                            menu
                        </span>
                    </div>
                    <div className='drop-links'>
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
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;