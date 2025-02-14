import React, {useEffect} from "react";
import {IValidations} from "../../interfaces/mainInterfaces";

const useValidation = (value: string, validations: IValidations) => {
    const [isEmpty, setIsEmpty] = React.useState(true);
    const [minLengthError, setMinLengthError] = React.useState(false);
    const [maxLengthError, setMaxLengthError] = React.useState(false);
    const [urlError, setUrlError] = React.useState(false);
    const [inputValid, setInputValid] = React.useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case 'isUrl':
                    const regularExpUrl = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
                    regularExpUrl.test(String(value.toLowerCase())) ? setUrlError(false) : setUrlError(true)
                    break;
            }
        }
    }, [validations, value])

    useEffect(() => {
        if (isEmpty || minLengthError || urlError || maxLengthError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, urlError, maxLengthError])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        inputValid,
        urlError
    }
}

const useInput = (initialValue: string, validations: IValidations) => {
    const [value, setValue] = React.useState(initialValue);
    const [isDirty, setIsDirty] = React.useState(false);
    const valid = useValidation(value, validations);

    const onChange = (evt: any) => {
        setValue(evt.target.value)
    }

    const onBlur = () => {
        setIsDirty(true)
    }

    return {
        value,
        setValue,
        onChange,
        onBlur,
        isDirty,
        setIsDirty,
        ...valid
    }
}

export {useInput}
