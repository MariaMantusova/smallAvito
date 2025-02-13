import React from "react";
import ItemMainInfo from "./ItemMainInfo/ItemMainInfo";
import serviceImage from "../../images/service.webp";
import {servicesNames} from "../../data/categoriesData";
import {IPropsItemServices} from "../../interfaces/interfacesForProps";

function ItemServices(props: IPropsItemServices) {
    return (<ItemMainInfo item={props.item} image={serviceImage}
                           values={[props.item.serviceType, props.item.experience, props.item.cost, props.item.workSchedule]}
                           subCategories={servicesNames} />)
}

export default ItemServices;