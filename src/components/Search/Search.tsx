import React from "react";
import "./Search.css";
import { Input } from "antd";
import { Select } from "antd";
import { searchOptions } from "../../data/searchOptions";
import {IPropsSearchSection} from "../../interfaces/interfacesForProps";

const { Search } = Input;

function SearchSection(props: IPropsSearchSection) {
    const [curTerm, setCurTerm] = React.useState("");

    function onSearchInput(value: string) {
        props.setSearchTerm(value.toLowerCase());
        props.setCurrentCategory("");
    }

    function onChangeSelect(value: string) {
        props.setCurrentCategory(value);
        props.setSearchTerm("");
        setCurTerm("");
    }

    function onChange(evt: React.FormEvent<any>) {
        setCurTerm(evt.currentTarget.value);
    }

    return (
        <section className="search">
            <Select placeholder="Выберите категорию" options={searchOptions}
                    style={{ "width": "35%" }} value={props.currentCategory ? props.currentCategory : null}
                    onChange={onChangeSelect} />
            <Search placeholder="Введите название" onChange={onChange}
                    onSearch={onSearchInput} value={curTerm === "" ? "" : curTerm}
                    style={{ "width": "40%" }} />
        </section>
    )
}

export default SearchSection;