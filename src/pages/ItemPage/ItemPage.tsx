import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ItemRealEstate from "../../components/Item/ItemRealEstate";
import ItemServices from "../../components/Item/ItemServices";
import ItemCar from "../../components/Item/ItemCar";
import {IItemAuto, IItemRealEstate, IItemServices} from "../../interfaces/mainInterfaces";
import {IPropsItemPage} from "../../interfaces/interfacesForProps";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function ItemPage(props: IPropsItemPage) {
    const { id } = useParams();
    let item = props.currentItem;

    useEffect(() => {
        if (id) props.getItem(id);
    }, [id]);

    if (!item) return <NotFoundPage />;

    return (
        <>
            <Header setCurrentItem={props.setCurrentItem}
                    to="/form" linkTitle="Разместить объявление"/>
            {item?.type === "Недвижимость" ? <ItemRealEstate item={item as IItemRealEstate} /> :
                item?.type === "Услуги" ? <ItemServices item={item as IItemServices} /> :
                    <ItemCar item={item as IItemAuto} />}
            <Footer/>
        </>
    )
}

export default ItemPage;