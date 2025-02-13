import React from "react";
import "./Form.css";
import {Select} from "antd";
import {
    searchOptions, searchOptionsAuto,
    searchOptionsRealEstate, searchOptionsServices
} from "../../data/searchOptions";
import CategoryForm from "../CategoryForm/CategoryForm";
import {
    autoNames, autoRequirements,
    autoTypes, realEstateNames, realEstateRequirements,
    realEstateTypes, servicesNames, servicesRequirements, servicesTypes
} from "../../data/categoriesData";
import {IPropsForm} from "../../interfaces/interfacesForProps";
import FormInput from "./FormInput/FormInput";
import {ISearchOption} from "../../interfaces/mainInterfaces";

function Form(props: IPropsForm) {
    const categoryData: Record<string, {
        options: ISearchOption[];
        names: string[];
        types: string[];
        requirements: boolean[];
    }> = {
        "Недвижимость": {
            options: searchOptionsRealEstate,
            names: realEstateNames,
            types: realEstateTypes,
            requirements: realEstateRequirements
        },
        "Авто": {
            options: searchOptionsAuto,
            names: autoNames,
            types: autoTypes,
            requirements: autoRequirements
        },
        "Услуги": {
            options: searchOptionsServices,
            names: servicesNames,
            types: servicesTypes,
            requirements: servicesRequirements
        }
    };

    return (
        <section className="form-section">
            <h1 className="form-section__title">{props.titleForm}</h1>
            <form className="form" onSubmit={props.onSubmit}>
                <FormInput label="Название объявления" required={true}
                           field={props.title} type="text" isTextArea={false} />
                <FormInput label="Описание объявления" required={true}
                           field={props.description} type="text" isTextArea={true} />
                <FormInput label="Локация объявления" required={true}
                           field={props.location} type="text" isTextArea={false} />
                <FormInput label="Ссылка на фото объявления" required={false}
                           field={props.photo} type="url" isTextArea={false} />

                <Select
                    disabled={props.isDisabledSelect}
                    placeholder="Выберите категорию"
                    onChange={props.onChangeSelect}
                    style={{ width: "100%" }}
                    options={searchOptions}
                    value={props.category}
                />

                {props.category && (
                    <CategoryForm
                        {...categoryData[props.category]}
                        setSubcategory={props.setSubcategory}
                        validations={props.validations}
                        subcategory={props.subcategory}
                    />
                )}

                <button className={`form__button ${props.isDisabled && "form__button_disabled"}`} disabled={props.isDisabled}>
                    Отправить
                </button>
            </form>
        </section>
    )
}

export default Form;