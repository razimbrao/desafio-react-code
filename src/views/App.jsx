import "./App.css";
import React from "react";
import Rotas from '../components/layouts/Rotas';
import Footer from '../components/layouts/Footer';

import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Rotas />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
