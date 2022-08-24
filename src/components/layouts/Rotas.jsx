import React from "react";
import "../css/Rotas.css";
import { Routes, Route } from 'react-router-dom'

import Home from "../../views/pages/Home";
import About from "../../views/pages/About";
import Contact from "../../views/pages/Contact";
import Login from "../../views/pages/Login";
import Members from "../../views/pages/Members";
import Admin from "../../views/pages/Admin";


const Rotas = () => {
    return (
        <div className="Rotas">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/members" element={<Members />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </div>
    )
}

export default Rotas