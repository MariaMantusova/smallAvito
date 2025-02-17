import {FormEvent, useEffect, useMemo, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/ValidationHook/ValidationHook";
import Form from "./Form/Form";
import {IItemFormProps} from "../../interfaces/interfacesForProps";
import { IItem, IItemAuto, IItemRealEstate, IItemServices } from "../../interfaces/mainInterfaces";

function FormChangeItem<T extends IItem>({ currentItem, onSubmit }: IItemFormProps<T>) {
    const [category, setCategory] = useState(currentItem.type);
    const [subcategory, setSubcategory] = useState<string>("");
    const navigate = useNavigate();

    const name = useInput(currentItem.name, { isEmpty: false, minLength: 3, maxLength: 50 });
    const description = useInput(currentItem.description, { isEmpty: false, minLength: 10, maxLength: 500 });
    const location = useInput(currentItem.location, { isEmpty: false, minLength: 3, maxLength: 50 });
    const photo = useInput(currentItem.photo || "", { isEmpty: true, isUrl: true, minLength: 5, maxLength: 1000 });

    useEffect(() => {
        if (isRealEstate(currentItem)) {
            setSubcategory(currentItem.propertyType);
        } else if (isAuto(currentItem)) {
            setSubcategory(currentItem.brand);
        } else if (isService(currentItem)) {
            setSubcategory(currentItem.serviceType);
        } else {
            setSubcategory("");
        }
    }, [currentItem]);

    function isRealEstate(item: IItem): item is IItemRealEstate {
        return "propertyType" in item && "area" in item && "rooms" in item && "price" in item;
    }

    function isAuto(item: IItem): item is IItemAuto {
        return "brand" in item && "model" in item && "year" in item;
    }

    function isService(item: IItem): item is IItemServices {
        return "serviceType" in item && "experience" in item && "cost" in item;
    }

    const area = useInput(
        isRealEstate(currentItem) ? String(currentItem.area ?? "") : "",
        { isEmpty: false, minLength: 1, maxLength: 100 }
    );

    const rooms = useInput(
        isRealEstate(currentItem) ? String(currentItem.rooms ?? "") : "",
        { isEmpty: false, minLength: 1, maxLength: 100 }
    );

    const price = useInput(
        isRealEstate(currentItem) ? String(currentItem.price ?? "") : "",
        { isEmpty: false, minLength: 1, maxLength: 100 }
    );

    const model = useInput(
        isAuto(currentItem) ? currentItem.model ?? "" : "",
        { isEmpty: false, minLength: 1, maxLength: 100 }
    );

    const year = useInput(
        isAuto(currentItem) ? String(currentItem.year ?? "") : "",
        { isEmpty: false, minLength: 1, maxLength: 100 }
    );

    const mileage = useInput(
        isAuto(currentItem) ? currentItem.mileage?.toString() ?? "" : "",
        { isEmpty: true, minLength: 1, maxLength: 100 }
    );

    const experience = useInput(
        isService(currentItem) ? String(currentItem.experience ?? "") : "",
        { isEmpty: false, minLength: 1, maxLength: 100 }
    );

    const cost = useInput(
        isService(currentItem) ? String(currentItem.cost ?? "") : "",
        { isEmpty: false, minLength: 1, maxLength: 100 }
    );

    const workSchedule = useInput(
        isService(currentItem) ? currentItem.workSchedule ?? "" : "",
        { isEmpty: true, minLength: 1, maxLength: 100 }
    );

    const extraFields = isRealEstate(currentItem) ? { area, rooms, price } :
        isAuto(currentItem) ? { model, year, mileage } :
            isService(currentItem) ? { experience, cost, workSchedule } :
                {};

    const isDisabled = useMemo(() => (
        !name.inputValid || !description.inputValid || !location.inputValid ||
        Object.values(extraFields).some((field) => !field.inputValid && category === "Недвижимость")
    ), [name.inputValid, description.inputValid, location.inputValid, extraFields, category]);

    function handleChangeSelect(value: string) {
        setCategory(value);
    }

    function handleSubmit(evt: FormEvent) {
        evt.preventDefault();

        if (isDisabled) return;
        let data: T;

        if (isRealEstate(currentItem)) {
            data = {
                ...currentItem,
                name: name.value,
                description: description.value,
                location: location.value,
                photo: photo.value,
                propertyType: subcategory,
                area: Number(extraFields.area?.value),
                rooms: Number(extraFields.rooms?.value),
                price: Number(extraFields.price?.value),
            } as T;
        } else if (isAuto(currentItem)) {
            data = {
                ...currentItem,
                name: name.value,
                description: description.value,
                location: location.value,
                photo: photo.value,
                brand: subcategory,
                model: extraFields.model?.value,
                year: Number(extraFields.year?.value),
                mileage: extraFields.mileage?.value ? Number(extraFields.mileage.value) : "",
            } as T;
        } else {
            data = {
                ...currentItem,
                name: name.value,
                description: description.value,
                location: location.value,
                photo: photo.value,
                serviceType: subcategory,
                experience: Number(extraFields.experience?.value),
                cost: Number(extraFields.cost?.value),
                workSchedule: extraFields.workSchedule?.value || "",
            } as T;
        }

        onSubmit(currentItem.id, data);
        navigate(`/item/${currentItem.id}`);
    }

    return (
        <Form onSubmit={handleSubmit} photo={photo} location={location} isDisabled={isDisabled}
              onChangeSelect={handleChangeSelect} setSubcategory={setSubcategory}
              isDisabledSelect={true} titleForm="Редактировать объявление"
              subcategory={subcategory} category={category} title={name} description={description}
              validations={[Object.values(extraFields)[0], Object.values(extraFields)[1], Object.values(extraFields)[2]]}
        />
    );
}

export default FormChangeItem;