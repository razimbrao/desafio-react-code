import "./App.css";
import React from "react";

import Navbar from '../components/layouts/Navbar';
import Rotas from '../components/layouts/Rotas';
import Footer from '../components/layouts/Footer';

import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Rotas />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
