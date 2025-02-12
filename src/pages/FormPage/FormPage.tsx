import React from 'react';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import {IPropsFormPage} from "../../interfaces/interfacesForProps";

function FormPage(props: IPropsFormPage) {
    return (
        <>
            <Header/>
            <Form onSubmit={props.onSubmit} />
            <Footer />
        </>
    )
}

export default FormPage;