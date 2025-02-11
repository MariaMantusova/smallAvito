import React, {useState} from "react";
import "./Form.css";
import {Select} from "antd";
import {
    searchOptions,
    searchOptionsAuto,
    searchOptionsRealEstate,
    searchOptionsServices
} from "../../data/searchOptions";
import {useInput} from "../../hooks/ValidationHook/ValidationHook";
import CategoryForm from "../CategoryForm/CategoryForm";
import validation from "ajv/dist/vocabularies/validation";
import {
    autoNames, autoRequirements,
    autoTypes,
    realEstateNames, realEstateRequirements,
    realEstateTypes,
    servicesNames, servicesRequirements,
    servicesTypes
} from "../../data/categoriesData";

function Form() {
    const [category, setCategory] = useState("");

    const description = useInput("", {isEmpty: true, isString: true, minLength: 30, maxLength: 500});
    const title = useInput("", {isEmpty: true, isString: true, minLength: 3, maxLength: 50});
    const location = useInput("", {isEmpty: true, isString: true, minLength: 3, maxLength: 50});
    const photo = useInput("", {isEmpty: true, isUrl: true, minLength: 5, maxLength: 1000});
    const categoryInput1 = useInput("", {isEmpty: true, minLength: 1, maxLength: 30});
    const categoryInput2 = useInput("", {isEmpty: true, minLength: 1, maxLength: 30});
    const categoryInput3 = useInput("", {isEmpty: true, minLength: 1, maxLength: 30});

    function onChangeSelect(value: string) {
        setCategory(value);
    }

    return(
        <section className="form-section">
            <h1 className="form-section__title">Форма размещения</h1>
            <form className="form">
                <input className="form__input" placeholder="Название авто/услуги/недвижимости"
                       type="text" required onBlur={title.onBlur} onChange={title.onChange}/>
                <p className={`form__error ${((title.isEmpty && title.isDirty) ||
                    (!title.isEmpty && title.isDirty && (title.stringError || title.minLengthError || title.maxLengthError))) && "form__error_visible"}`}>
                    {(title.isEmpty && title.isDirty) && "Поле не может быть пустым"}
                    {(!title.isEmpty && title.isDirty && title.stringError) && "Поле не может содержать данный символ"}
                    {(!title.isEmpty && title.isDirty && title.minLengthError) && "Слишком короткое название"}
                    {(!title.isEmpty && title.isDirty && title.maxLengthError) && "Слишком длинное название"}
                </p>
                <textarea className="form__input" placeholder="Описание авто/услуги/недвижимости"
                          required onBlur={description.onBlur} onChange={description.onChange}/>
                <p className={`form__error ${((description.isEmpty && description.isDirty) ||
                    (!description.isEmpty && description.isDirty && (description.stringError || description.minLengthError || description.maxLengthError))) && "form__error_visible"}`}>
                    {(description.isEmpty && description.isDirty) && "Поле не может быть пустым"}
                    {(!description.isEmpty && description.isDirty && description.stringError) && " Поле не может содержать данный символ"}
                    {(!description.isEmpty && description.isDirty && description.minLengthError) && " Слишком короткое описание"}
                    {(!description.isEmpty && description.isDirty && description.maxLengthError) && " Слишком длинное описание"}
                </p>
                <input className="form__input" placeholder="Локация авто/услуги/недвижимости"
                       type="text" required onBlur={location.onBlur}
                       onChange={location.onChange}/>
                <p className={`form__error ${((location.isEmpty && location.isDirty) || 
                    (!location.isEmpty && location.isDirty && (location.stringError || location.minLengthError || location.maxLengthError))) && "form__error_visible"}`}>
                    {(location.isEmpty && location.isDirty) && "Поле не может быть пустым"}
                    {(!location.isEmpty && location.isDirty && location.stringError) && " Поле не может содержать данный символ"}
                    {(!location.isEmpty && location.isDirty && location.minLengthError) && " Слишком короткое описание локации"}
                    {(!location.isEmpty && location.isDirty && location.maxLengthError) && " Слишком длинное описание локации"}
                </p>
                <input className="form__input" placeholder="Ссылка на фото авто/услуги/недвижимости"
                       type="url" required onBlur={photo.onBlur} onChange={photo.onChange}/>
                <p className={`form__error ${(!photo.isEmpty && photo.isDirty && (photo.urlError || photo.minLengthError || photo.maxLengthError)) && "form__error_visible"}`}>
                    {(!photo.isEmpty && photo.isDirty && photo.urlError) && " Данная ссылка не действительна"}
                    {(!photo.isEmpty && photo.isDirty && photo.minLengthError) && " Слишком короткая ссылка"}
                    {(!photo.isEmpty && photo.isDirty && photo.maxLengthError) && " Слишком длинная ссылка"}
                </p>
                <Select placeholder="Выберете категорию" onChange={onChangeSelect} style={{width: "100%"}} options={searchOptions}/>

                {category && <CategoryForm options={category === "Недвижимость" ? searchOptionsRealEstate :
                    category === "Авто" ? searchOptionsAuto : searchOptionsServices} names={category === "Недвижимость" ?
                    realEstateNames : category === "Авто" ? autoNames : servicesNames} types={category === "Недвижимость" ?
                    realEstateTypes : category === "Авто" ? autoTypes : servicesTypes} requirements={category === "Недвижимость" ?
                    realEstateRequirements : category === "Авто" ? autoRequirements : servicesRequirements}
                                           validations={[categoryInput1, categoryInput2, categoryInput3]}
                />}

                <button className="form__button">Отправить</button>
            </form>
        </section>
    )
}

export default Form;