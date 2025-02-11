import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router";
import ItemPage from "../../pages/ItemPage/ItemPage";
import ListPage from "../../pages/ListPage/ListPage";
import FormPage from "../../pages/FormPage/FormPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import {IItemAuto, IItemRealEstate, IItemServices} from "../../interfaces/mainInterfaces";
import {itemsApi} from "../../utils/ItemsApi";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, [])

    function getItems() {
        itemsApi.getItems()
            .then((items) => setItems(items))
            .catch((err) => console.log(err))
    }

    return (
        <Routes>
            <Route path="/form" element={<FormPage />}></Route>
            <Route path="/list" element={<ListPage items={items} />}></Route>
            <Route path="/item/:id" element={<ItemPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    )
}

export default App;