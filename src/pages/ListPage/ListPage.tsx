import React from 'react';
import ListComponent from "../../components/ListComponent/ListComponent";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchSection from "../../components/Search/Search";
import {IPropsListPage} from "../../interfaces/interfacesForProps";

function ListPage(props: IPropsListPage) {
    return (
        <>
            <Header/>
            <SearchSection />
            <ListComponent items={props.items} />
            <Footer/>
        </>
    )
}

export default ListPage;