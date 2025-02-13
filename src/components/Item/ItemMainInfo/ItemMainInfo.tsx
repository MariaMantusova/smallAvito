import React from "react";
import {Link} from "react-router-dom";
import "./ItemMainInfo.css";
import ItemInfoSubtitle from "../../ItemInfoSubtitle/ItemInfoSubtitle";
import {IPropsItemMainInfo} from "../../../interfaces/interfacesForProps";

function ItemMainInfo(props: IPropsItemMainInfo) {
    const item = props.item;

    return (
        <section className="item">
            <h1 className="item__title">{item?.name}</h1>

            <div className="item__main-info">
                <img className="item__image"
                     src={item?.photo || props.image}
                     alt={item?.name}/>

                <div className="item__info">
                   <ItemInfoSubtitle title="Категория" value={item?.type || ""} />
                   <ItemInfoSubtitle title="Локация" value={item?.location || ""} />
                   <ItemInfoSubtitle title={props.subCategories[3]} value={props.values[0]} />
                   <ItemInfoSubtitle title={props.subCategories[0]} value={props.values[1]} />
                   <ItemInfoSubtitle title={props.subCategories[1]} value={props.values[2]} />
                   <ItemInfoSubtitle title={props.subCategories[2]} value={props.values[3] || "Нет информации"} />
                </div>
            </div>
            <div className="item__add-info">
                <p className="item__text">{item?.description}</p>

                <Link to="/form" className="item__info__link">Редактировать</Link>
            </div>
        </section>
    )
}

export default ItemMainInfo;