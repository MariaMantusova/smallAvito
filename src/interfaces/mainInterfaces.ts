export interface ISearchOption {
    value: string;
    label: string;
}

export interface IValidations {
    isEmpty: boolean
    minLength: number
    maxLength: number
    isString?: boolean
    isUrl?: boolean
}

export interface IApiOptions {
    url: string
    headers: {
        [key: string]: string
    };
}

interface IItem {
    name: string,
    description: string,
    location: string,
    type: string,
    photo?: string,
    id: number
}

export interface IItemRealEstate extends IItem {
    propertyType: string,
    area: number,
    rooms: number,
    price: number,
}

export interface IItemAuto extends IItem {
    brand: string,
    model: string,
    year: number,
    mileage?: number,
}

export interface IItemServices extends IItem  {
    serviceType: string,
    experience: number,
    cost: number,
    workSchedule?: string,
}