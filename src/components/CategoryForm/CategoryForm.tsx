import React, {useEffect} from "react";
import "./CategoryForm.css";
import {Select} from "antd";
import {IPropsCategoryForm} from "../../interfaces/interfacesForProps";

function CategoryForm(props: IPropsCategoryForm) {
    const [input1, input2, input3] = props.validations;

    function onSelectChange(value: string) {
        props.setSubcategory(value);
    }

    useEffect(() => {
        props.setSubcategory("");
    }, [props.names]);

    return (
        <div className="category-form">
            <Select placeholder={props.names[3]} onChange={onSelectChange}
                    options={props.options} value={props.subcategory ? props.subcategory : null} />
            <input className="category-form__input" required={props.requirements[0]} onBlur={input1.onBlur}
                   value={input1.value}
                   type={props.types[0]} placeholder={props.names[0]} onChange={input1.onChange}/>
            <p className={`input__error ${props.requirements[0] && input1.isEmpty && input1.isDirty && "input__error_visible"}`}>
                Поле не может быть пустым
            </p>
            <input className="category-form__input" required={props.requirements[1]} onBlur={input2.onBlur}
                   type={props.types[1]} placeholder={props.names[1]} value={input2.value}
                   onChange={input2.onChange}/>
            <p className={`input__error ${props.requirements[1] && input2.isEmpty && input2.isDirty && "input__error_visible"}`}>
                Поле не может быть пустым
            </p>
            <input className="category-form__input" required={props.requirements[2]} onBlur={input3.onBlur}
                   type={props.types[2]} placeholder={props.names[2]} value={input3.value}
                   onChange={input3.onChange} />
            <p className={`input__error ${props.requirements[2] && input3.isEmpty && input3.isDirty  && "input__error_visible"}`}>
                Поле не может быть пустым
            </p>
        </div>
    )
}

export default CategoryForm;