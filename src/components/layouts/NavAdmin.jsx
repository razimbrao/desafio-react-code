import React from "react"
import "../css/NavAdmin.css";
import { Link } from "react-router-dom";

const NavAdmin = () => {
    return (
        <nav className="nav-admin">
                <div className='logo-nav'>
                    <Link to='/'>
                        <img src='/img/asta/asta-banner-main.png' alt='logo da empresa' />
                    </Link>
                </div>
                <div className='admin-logout'>
                    <Link to='/login'>
                        Logout
                    </Link>
                </div>
        </nav>
    )
}

export default NavAdmin;