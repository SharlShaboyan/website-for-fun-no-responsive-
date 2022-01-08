import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './css/header.css';
import Users from './Users';
import About from './About';
import Contact from './Contact';
import Home from './Home';

function Header() {
    return (
        <Router>
        <div className="header">
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/hangman">Hangman</Link>
                    </li>
                </ul>
            </nav>
            <hr />

            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/hangman">
                    <Contact />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default Header;