import React from 'react';
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ItemMainInfo from "../../components/ItemMainInfo/ItemMainInfo";
import Footer from "../../components/Footer/Footer";

function ItemPage() {
    const { id } = useParams();

    return (
        <>
            <Header/>
            <ItemMainInfo/>
            <Footer/>
        </>
    )
}

export default ItemPage;