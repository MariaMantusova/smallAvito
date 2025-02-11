import React from "react";
import "./CategoryForm.css";
import {Select} from "antd";
import {IPropsCategoryForm} from "../../interfaces/interfacesForProps";

function CategoryForm(props: IPropsCategoryForm) {
    return (
        <div className="category-form">
            <Select placeholder={props.names[3]} aria-required options={props.options} />
            <input className="category-form__input" required={props.requirements[0]}
                   type={props.types[0]} placeholder={props.names[0]} />
            <input className="category-form__input" required={props.requirements[1]}
                   type={props.types[1]} placeholder={props.names[1]} />
            <input className="category-form__input" required={props.requirements[2]}
                   type={props.types[2]} placeholder={props.names[2]} />
        </div>
    )
}

export default CategoryForm;