import React from 'react';
import { Link } from 'gatsby';
import './Navbar.css';

const Navbar = () => {

    const NavMenuItem = ["Home", "About", "Skills", "Hobby", "Link"];

    const NavMenuLiTag = NavMenuItem.map((item) => {
        let page_link = "";
        if (item === "Home") {
            page_link = "/";
        }
        else page_link = "/" + item.toLowerCase() + "/";
        return (
            <li key={page_link}><Link to={page_link}><p>{item}</p></Link></li>
        )});

    return (
        <nav className="App-navbar">
            <ul className="App-navbar-item">
                {NavMenuLiTag}
            </ul>
        </nav>
    );
};

export default Navbar;