import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Header() {
  return (
    <div className="Hader">
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/links">Links</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    </div>
  );
}

export default Header;