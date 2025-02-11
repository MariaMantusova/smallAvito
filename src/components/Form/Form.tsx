import React, {useState} from "react";
import "./Form.css";
import {Select} from "antd";
import {searchOptions} from "../../data/searchOptions";
import CategoryForm from "../CategoryForm/CategoryForm";

function Form() {
    const [isCategoryChosen, setIsCategoryChosen] = useState(false);

    return(
        <section className="form-section">
            <h1 className="form-section__title">Форма размещения</h1>
            <form className="form">
                <input className="form__input" placeholder="Название авто/услуги/недвижимости"
                       type="text" required maxLength={30} minLength={5}/>
                <textarea className="form__input" placeholder="Описание авто/услуги/недвижимости"
                          required maxLength={100} minLength={5} />
                <input className="form__input" placeholder="Локация авто/услуги/недвижимости"
                       type="text" required maxLength={30} minLength={5} />
                <input className="form__input" placeholder="Фото авто/услуги/недвижимости"
                       type="url" required />
                <Select placeholder="Выберете категорию" style={{width: "100%"}} options={searchOptions} />

                {isCategoryChosen && <CategoryForm />}

                <button className="form__button">Отправить</button>
            </form>
        </section>
    )
}

export default Form;