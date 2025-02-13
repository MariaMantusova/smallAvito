import React from "react";
import {IPropsItemCar} from "../../interfaces/interfacesForProps";
import ItemMainInfo from "./ItemMainInfo/ItemMainInfo";
import carImage from "../../images/car.webp";
import {autoNames} from "../../data/categoriesData";

function ItemCar(props: IPropsItemCar) {
    return ( <ItemMainInfo item={props.item} image={carImage}
                           values={[props.item.brand, props.item.model, props.item.year, props.item.mileage]}
                           subCategories={autoNames} />)
}

export default ItemCar;