import React from 'react';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import FormAdd from "../../components/Form/FormAdd";
import FormChange from "../../components/Form/FormChange";
import {IPropsFormPage} from "../../interfaces/interfacesForProps";
import {IItemAuto, IItemRealEstate, IItemServices} from "../../interfaces/mainInterfaces";

function FormPage(props: IPropsFormPage) {
    return (
        <>
            <Header to="/list" linkTitle="К списку объявлений" />
            {props.currentItem ?
                props.currentItem.type === "Авто" ?
                    <FormChange onSubmit={props.changeItem}
                                    currentItem={props.currentItem as IItemAuto} /> :
                    props.currentItem.type === "Услуги" ?
                        <FormChange onSubmit={props.changeItem}
                                            currentItem={props.currentItem as IItemServices} /> :
                        <FormChange onSubmit={props.changeItem}
                                              currentItem={props.currentItem as IItemRealEstate} /> :
                        <FormAdd onSubmit={props.addNewItem} />}
            <Footer />
        </>
    )
}

export default FormPage;