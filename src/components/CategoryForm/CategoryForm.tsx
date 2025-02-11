import React from "react";
import "./CategoryForm.css";
import {Select} from "antd";
import {searchOptionsRealEstate} from "../../data/searchOptions";

function CategoryForm() {
    return (
        <div className="category-form">
            <Select placeholder="Выберите тип недвижимости" aria-required options={searchOptionsRealEstate} />
            <input className="category-form__input" required type="text" placeholder="Площадь (кв. м.)" />
            <input className="category-form__input" required type="number" placeholder="Количество комнат" />
            <input className="category-form__input" required type="number" placeholder="Цена" />
        </div>
    )
}

export default CategoryForm;