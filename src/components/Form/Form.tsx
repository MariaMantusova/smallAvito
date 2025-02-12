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

function Form(props: IPropsForm) {
    return(
        <section className="form-section" onSubmit={props.onSubmit}>
            <h1 className="form-section__title">Форма размещения</h1>
            <form className="form">
                <input className="form__input" placeholder="Название авто/услуги/недвижимости"
                       type="text" required onBlur={props.title.onBlur} onChange={props.title.onChange}/>
                <p className={`form__error ${((props.title.isEmpty && props.title.isDirty) ||
                    (!props.title.isEmpty && props.title.isDirty && (props.title.stringError || props.title.minLengthError || props.title.maxLengthError))) && "form__error_visible"}`}>
                    {(props.title.isEmpty && props.title.isDirty) && "Поле не может быть пустым"}
                    {(!props.title.isEmpty && props.title.isDirty && props.title.stringError) && "Поле не может содержать данный символ"}
                    {(!props.title.isEmpty && props.title.isDirty && props.title.minLengthError) && "Слишком короткое название"}
                    {(!props.title.isEmpty && props.title.isDirty && props.title.maxLengthError) && "Слишком длинное название"}
                </p>

                <textarea className="form__input" placeholder="Описание авто/услуги/недвижимости"
                          required onBlur={props.description.onBlur} onChange={props.description.onChange}/>
                <p className={`form__error ${((props.description.isEmpty && props.description.isDirty) ||
                    (!props.description.isEmpty && props.description.isDirty && (props.description.stringError || props.description.minLengthError || props.description.maxLengthError))) && "form__error_visible"}`}>
                    {(props.description.isEmpty && props.description.isDirty) && "Поле не может быть пустым"}
                    {(!props.description.isEmpty && props.description.isDirty && props.description.stringError) && " Поле не может содержать данный символ"}
                    {(!props.description.isEmpty && props.description.isDirty && props.description.minLengthError) && " Слишком короткое описание"}
                    {(!props.description.isEmpty && props.description.isDirty && props.description.maxLengthError) && " Слишком длинное описание"}
                </p>
                <input className="form__input" placeholder="Локация авто/услуги/недвижимости"
                       type="text" required onBlur={props.location.onBlur}
                       onChange={props.location.onChange}/>
                <p className={`form__error ${((props.location.isEmpty && props.location.isDirty) || 
                    (!props.location.isEmpty && props.location.isDirty && (props.location.stringError ||
                        props.location.minLengthError || props.location.maxLengthError))) && "form__error_visible"}`}>
                    {(props.location.isEmpty && props.location.isDirty) && "Поле не может быть пустым"}
                    {(!props.location.isEmpty && props.location.isDirty && props.location.stringError) && " Поле не может содержать данный символ"}
                    {(!props.location.isEmpty && props.location.isDirty && props.location.minLengthError) && " Слишком короткое описание локации"}
                    {(!props.location.isEmpty && props.location.isDirty && props.location.maxLengthError) && " Слишком длинное описание локации"}
                </p>
                <input className="form__input" placeholder="Ссылка на фото авто/услуги/недвижимости"
                       type="url" onBlur={props.photo.onBlur} onChange={props.photo.onChange}/>
                <p className={`form__error ${(!props.photo.isEmpty && props.photo.isDirty && (props.photo.urlError ||
                    props.photo.minLengthError || props.photo.maxLengthError)) && "form__error_visible"}`}>
                    {(!props.photo.isEmpty && props.photo.isDirty && props.photo.urlError) && " Данная ссылка не действительна"}
                    {(!props.photo.isEmpty && props.photo.isDirty && props.photo.minLengthError) && " Слишком короткая ссылка"}
                    {(!props.photo.isEmpty && props.photo.isDirty && props.photo.maxLengthError) && " Слишком длинная ссылка"}
                </p>
                <Select placeholder="Выберете категорию" onChange={props.onChangeSelect} style={{width: "100%"}}
                        options={searchOptions}/>

                {props.category && <CategoryForm options={props.category === "Недвижимость" ? searchOptionsRealEstate :
                    props.category === "Авто" ? searchOptionsAuto : searchOptionsServices}
                                           names={props.category === "Недвижимость" ?
                    realEstateNames : props.category === "Авто" ? autoNames : servicesNames}
                                           types={props.category === "Недвижимость" ?
                    realEstateTypes : props.category === "Авто" ? autoTypes : servicesTypes}
                                           requirements={props.category === "Недвижимость" ?
                    realEstateRequirements : props.category === "Авто" ? autoRequirements : servicesRequirements}
                                           setSubcategory={props.setSubcategory}
                                           validations={props.validations}
                />}

                <button className={`form__button ${props.isDisabled && "form__button_disabled"}`}
                        disabled={props.isDisabled}>Отправить</button>
            </form>
        </section>
    )
}

export default Form;