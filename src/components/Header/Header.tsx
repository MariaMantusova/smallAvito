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
            <Link className="header__name" to="/list">Avito <span style={{"color": "#F98866"}}>Mini</span></Link>
            <Link className="header__link" onClick={handleClick} to={props.to}>{props.linkTitle}</Link>
        </header>
    )
}

export default Header;