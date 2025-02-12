import React from 'react';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import {IPropsFormPage} from "../../interfaces/interfacesForProps";
import FormChangeAvto from "../../components/Form/FormChangeAvto";
import FormAdd from "../../components/Form/FormAdd";
import {IItemAuto, IItemRealEstate, IItemServices} from "../../interfaces/mainInterfaces";

function FormPage(props: IPropsFormPage) {
    return (
        <>
            <Header/>
            {!props.currentItem ?
                // <FormChangeAvto onSubmit={props.changeItem as (id: string | undefined, data: IItemServices | IItemAuto | IItemRealEstate) => void | undefined}
                //                 currentItem={props.currentItem} /> :
                <FormAdd onSubmit={props.addNewItem as (data: IItemServices | IItemAuto | IItemRealEstate) => void | undefined} /> : <></>}
            <Footer />
        </>
    )
}

export default FormPage;