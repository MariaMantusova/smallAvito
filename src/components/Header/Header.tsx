import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import {IPropsHeader} from "../../interfaces/interfacesForProps";

function Header(props: IPropsHeader) {
    function handleClick() {
        if (props.setCurrentItem) props.setCurrentItem(undefined);
    }

    return (
        <header className="header">
            <h2 className="header__name">Avito <span style={{"color": "#F98866"}}>Mini</span></h2>
            <Link className="header__link" onClick={handleClick} to="/form">Разместить объявление</Link>
        </header>
    )
}

export default Header;