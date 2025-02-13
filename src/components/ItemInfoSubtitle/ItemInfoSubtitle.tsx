import React from "react";
import "./ItemInfoSubtitle.css"
import {IPropsItemInfoSubtitle} from "../../interfaces/interfacesForProps";

function ItemInfoSubtitle(props: IPropsItemInfoSubtitle) {
    return (
        <h2 className="item__info__subtitle">
            <span style={{fontWeight: "bold"}}>{props.title}: </span>
            {props.value}</h2>

    )
}

export default ItemInfoSubtitle;