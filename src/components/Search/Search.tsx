import React from "react";
import "./Search.css";
import { Input } from "antd";
import { Select } from "antd";
import { searchOptions } from "../../data/searchOptions";

const { Search } = Input;

function SearchSection() {
    function onSearchInput() {}
    function onChangeSelect() {}

    return (
        <section className="search">
            <Select placeholder="Выберите категорию" options={searchOptions} style={{ width: "20%" }} onChange={onChangeSelect} />
            <Search placeholder="Введите название" onSearch={onSearchInput} style={{ "width": "40%" }} enterButton />
        </section>
    )
}

export default SearchSection;