import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <h2 className="header__name">Avito <span style={{"color": "#F98866"}}>Mini</span></h2>
            <Link className="header__link" to="/form">Разместить объявление</Link>
        </header>
    )
}

export default Header;