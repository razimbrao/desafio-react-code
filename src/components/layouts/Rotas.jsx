import React from "react";

import { Routes, Route } from 'react-router-dom'

import Home from "../../views/pages/Home";
import About from "../../views/pages/About";
import Contact from "../../views/pages/Contact";
import Login from "../../views/pages/Login";


const Rotas = () => {
    return (
        <div className="Rotas">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default Rotas