import React from 'react';
import {Route, Routes} from "react-router";
import ItemPage from "../../pages/ItemPage/ItemPage";
import ListPage from "../../pages/ListPage/ListPage";
import FormPage from "../../pages/FormPage/FormPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

function App() {
    return (
        <Routes>
            <Route path="/form" element={<FormPage />}></Route>
            <Route path="/list" element={<ListPage />}></Route>
            <Route path="/item/:id" element={<ItemPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    )
}

export default App;