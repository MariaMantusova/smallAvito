import {IPropsFormInput} from "../../../interfaces/interfacesForProps";

const FormInput = (props: IPropsFormInput) => (
    <>
        {props.isTextArea ? (
            <textarea
                className="form__input"
                placeholder={props.label}
                value={props.field.value}
                required
                onBlur={props.field.onBlur}
                onChange={props.field.onChange}
            />
        ) : (
            <input
                className="form__input"
                placeholder={props.label}
                value={props.field.value}
                type={props.type}
                required={props.required}
                onBlur={props.field.onBlur}
                onChange={props.field.onChange}
            />
        )}
        <p className={`form__error ${(props.required && props.field.isDirty && 
            (props.required && props.field.isEmpty || props.field.stringError ||
                props.field.minLengthError || props.field.maxLengthError ||
                props.field.urlError)) && "form__error_visible"}`}>
            {props.field.isEmpty && "Поле не может быть пустым"}
            {props.field.stringError && " Поле не может содержать данный символ"}
            {props.field.minLengthError && " Слишком короткое значение"}
            {props.field.maxLengthError && " Слишком длинное значение"}
            {props.field.urlError && " Данная ссылка не действительна"}
        </p>
    </>
);

export default FormInput;