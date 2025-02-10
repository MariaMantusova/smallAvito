import React from 'react';
import {Route, Routes} from "react-router";
import ItemPage from "../../pages/ItemPage/ItemPage";
import ListPage from "../../pages/ListPage/ListPage";
import FormPage from "../../pages/FormPage/FormPage";
import MainPage from "../../pages/MainPage/MainPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/form" element={<FormPage />}></Route>
            <Route path="/list" element={<ListPage />}></Route>
            <Route path="/item/:id" element={<ItemPage />}></Route>
        </Routes>
    )
}

export default App;