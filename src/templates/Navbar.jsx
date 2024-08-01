import { Link } from "react-router-dom";
import "../assets/Navbar.css"
import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="logo" to={'/'}>velo.</Link>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                {/* <li>
                    <a href="/projects">2. projects</a>
                </li> */}
                <li>
                    <Link to="/contact">contact</Link>
                </li>
                <li>
                    {/* <a href="" className="button">
                        download cv
                    </a> */}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
