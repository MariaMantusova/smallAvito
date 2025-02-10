import React from 'react';
import List from "../../components/List/List";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchSection from "../../components/Search/Search";

function ListPage() {
    return (
        <>
            <Header/>
            <SearchSection />
            <List/>
            <Footer/>
        </>
    )
}

export default ListPage;