import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router";
import ItemPage from "../../pages/ItemPage/ItemPage";
import ListPage from "../../pages/ListPage/ListPage";
import FormPage from "../../pages/FormPage/FormPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import {IItemAuto, IItemRealEstate, IItemServices} from "../../interfaces/mainInterfaces";
import {itemsApi} from "../../utils/ItemsApi";

function App() {
    const [items, setItems] = useState<(IItemAuto | IItemRealEstate | IItemServices)[]>([]);
    const [currentCategory, setCurrentCategory] = useState<string>("");
    const [currentItems, setCurrentItems] = useState<(IItemAuto | IItemRealEstate | IItemServices)[]>(items);
    const [currentItem, setCurrentItem] = useState<IItemAuto | IItemRealEstate | IItemServices>();

    useEffect(() => {
        if (currentCategory === "Недвижимость") setCurrentItems(items.filter((item) => item.type === "Недвижимость"));
        else if (currentCategory === "Услуги") setCurrentItems(items.filter((item) => item.type === "Услуги"));
        else if (currentCategory === "Авто") setCurrentItems(items.filter((item) => item.type === "Авто"));
        else setCurrentItems(items);
    }, [items, currentCategory]);

    useEffect(() => {
        getItems();
    }, [])

    function getItems() {
        itemsApi.getItems()
            .then((items) => setItems(items))
            .catch((err) => console.log(err))
    }

    function getItemByID(id: string | undefined) {
        if (!id) return undefined;

        itemsApi.getItemByID(id)
            .then((item) => setCurrentItem(item))
            .catch((err) => console.log(err))
    }

    function addNewItem(newItem: IItemAuto | IItemRealEstate | IItemServices) {
        if (!newItem) return undefined;

        itemsApi.addItem(newItem)
            .then((item) => setItems([...items, item]))
            .catch((err) => console.log(err))
    }

    function changeItem(id: number | undefined, item: IItemAuto | IItemRealEstate | IItemServices) {
        if (!item) return undefined;

        itemsApi.changeItem(id, item)
            .then((item) => setCurrentItem(item))
            .catch((err) => console.log(err))
    }

    return (
        <Routes>
            <Route path="/form" element={<FormPage currentItem={currentItem} addNewItem={addNewItem}
                                                   changeItem={changeItem} />}></Route>
            <Route path="/list" element={<ListPage setCurrentCategory={setCurrentCategory}
                                                   items={currentItems} />}></Route>
            <Route path="/item/:id" element={<ItemPage currentItem={currentItem} setCurrentItem={setCurrentItem}
                                                       getItem={getItemByID} />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    )
}

export default App;