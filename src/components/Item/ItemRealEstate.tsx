import React from "react";
import ItemMainInfo from "./ItemMainInfo/ItemMainInfo";
import realEstateImage from "../../images/real-estate.webp";
import {realEstateNames} from "../../data/categoriesData";
import {IPropsItemRealEstate} from "../../interfaces/interfacesForProps";

function ItemRealEstate(props: IPropsItemRealEstate) {
    return (
        <ItemMainInfo item={props.item} image={realEstateImage}
                      values={[props.item.propertyType, props.item.area, props.item.rooms, props.item.price]}
                      subCategories={realEstateNames} />
    )
}

export default ItemRealEstate;