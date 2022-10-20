import React from 'react';
import './App.css';

import { Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Links from './pages/links/Links';

function App() {
  return (
    <div className="App">
      {/*<Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/links" element={<Links />} />
      </Routes>*/}

      <h1>WWW.KARMACOMA.DEV</h1>
    </div>
  );
}

export default App;