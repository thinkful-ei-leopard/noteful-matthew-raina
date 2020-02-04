import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

function Header() {
    return (
        <header>
            <h1><Link style={{textDecoration: 'none', color: 'black'}} to="/">Noteful</Link></h1>
        </header>
    );
}

export default Header;