import React from 'react';
import {Link} from "react-router-dom";
import "./ListItem.css";

function ListItem() {
    return (
        <li className="list-item">
            <img className="list-item__image"
                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="дом"/>
            <div className="list-item__content">
                <h2 className="list-item__title">Дом 5 комнат</h2>
                <h3 className="list-item__info">Город: Москва</h3>
                <h3 className="list-item__info">Категория: Недвижимость</h3>
            </div>

            <Link to="/item/7" className="list-item__link">Открыть</Link>
        </li>
    )
}

export default ListItem;