import React from 'react';

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