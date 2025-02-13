import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useInput} from "../../hooks/ValidationHook/ValidationHook";
import Form from "./Form/Form";
import {IPropsFormAdd} from "../../interfaces/interfacesForProps";

function FormAdd(props: IPropsFormAdd) {
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const navigate = useNavigate();

    const description = useInput("", {isEmpty: true, isString: true, minLength: 30, maxLength: 500});
    const title = useInput("", {isEmpty: true, isString: true, minLength: 3, maxLength: 50});
    const location = useInput("", {isEmpty: true, isString: true, minLength: 3, maxLength: 50});
    const photo = useInput("", { isEmpty: true, isUrl: true, minLength: 5, maxLength: 1000 });
    const categoryInput1 = useInput("", {isEmpty: true, minLength: 1, maxLength: 30});
    const categoryInput2 = useInput("", {isEmpty: true, minLength: 1, maxLength: 30});
    const categoryInput3 = useInput("", {isEmpty: true, minLength: 1, maxLength: 30});

    const isDisabled: boolean = !category || !subcategory || !description.inputValid
    || !title.inputValid || !location.inputValid || (!photo.isEmpty && !photo.inputValid)
    || !categoryInput1.inputValid || !categoryInput2.inputValid || (category === "Недвижимость" ?
        !categoryInput3.inputValid : categoryInput3.inputValid)

    function onChangeSelect(value: string) {
        setCategory(value);
        categoryInput1.setValue("");
        categoryInput2.setValue("");
        categoryInput3.setValue("");
    }

    function onSubmit(evt: React.FormEvent<any>) {
        evt.preventDefault();

        if (category === "Недвижимость") {
            props.onSubmit({
                name: title.value,
                description: description.value,
                location: location.value,
                type: category,
                propertyType: subcategory,
                price: +categoryInput3.value,
                area: +categoryInput1.value,
                rooms: +categoryInput2.value,
            });
        }

        if (category === "Услуги") {
            props.onSubmit({
                name: title.value,
                description: description.value,
                location: location.value,
                type: category,
                serviceType: subcategory,
                experience: +categoryInput1.value,
                cost: +categoryInput2.value,
                workSchedule: categoryInput3.value,
            })
        }

        if (category === "Авто") {
            props.onSubmit({
                name: title.value,
                description: description.value,
                location: location.value,
                type: category,
                brand: subcategory,
                model: categoryInput1.value,
                year: +categoryInput2.value,
                mileage: +categoryInput3.value,
            })
        }

        navigate("/list");
    }

    return(<Form onSubmit={onSubmit} description={description} photo={photo} location={location}
                 isDisabled={isDisabled} onChangeSelect={onChangeSelect} setSubcategory={setSubcategory}
                 validations={[categoryInput1, categoryInput2, categoryInput3]} category={category}
                 titleForm="Добавить новое объявление"
                 title={title} subcategory={subcategory} isDisabledSelect={false}
    />)
}

export default FormAdd;