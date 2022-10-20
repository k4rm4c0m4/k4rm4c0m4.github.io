import React from 'react';
import './App.css';

import { Route } from "react-router-dom";

import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Links from './pages/links/Links';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  );
}

export default App;