import React from 'react';
import {Link} from "react-router-dom";
import "./ListItem.css";
import ItemInfoSubtitle from "../ItemInfoSubtitle/ItemInfoSubtitle";
import carImage from "../../images/car.webp";
import houseImage from "../../images/real-estate.webp";
import serviceImage from "../../images/service.webp";
import {IPropsListItem} from "../../interfaces/interfacesForProps";

function ListItem(props: IPropsListItem) {
    const item = props.item;
    const image = item.type === "Авто" ? carImage : item.type === "Услуги" ? serviceImage : houseImage;

    return (
        <li className="list-item">
            <img className="list-item__image"
                 src={item.photo || image}
                 alt={item.name} />
            <div className="list-item__content">
                <h2 className="list-item__title">{item.name}</h2>
                <ItemInfoSubtitle title="Локация" value={item.location} />
                <ItemInfoSubtitle title="Категория" value={item.type} />
       </div>

            <Link to={`/item/${item.id}`} className="list-item__link">Открыть</Link>
        </li>
    )
}

export default ListItem;